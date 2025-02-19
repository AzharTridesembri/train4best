'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, Paperclip, Mic, Loader2 } from 'lucide-react'

const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY

interface Message {
  text: string
  isUser: boolean
  timestamp: Date
  type: 'text' | 'image' | 'file'
  file?: {
    url: string
    name: string
    type: string
    base64?: string
  }
}

const systemPrompt = `Anda adalah asisten AI untuk platform pelatihan Train4Best. 
Anda membantu menjawab pertanyaan tentang:
1. Informasi kursus (Programming, AIoT, Data Science)
2. Jadwal training
3. Pendaftaran
4. Pembayaran
5. Sertifikasi

Jawablah dengan sopan dan informatif dalam Bahasa Indonesia.`

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { 
      text: 'Halo! Saya AI Assistant yang akan membantu Anda. Anda bisa bertanya tentang:',
      isUser: false,
      timestamp: new Date(),
      type: 'text'
    },
    {
      text: '1. Informasi kursus\n2. Jadwal training\n3. Pendaftaran\n4. Pembayaran\n5. Sertifikasi',
      isUser: false,
      timestamp: new Date(),
      type: 'text'
    }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Auto scroll ke pesan terbaru
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      text: input,
      isUser: true,
      timestamp: new Date(),
      type: 'text'
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    try {
      const prompt = input

      console.log('Request prompt:', prompt)

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            role: "user",
            parts: [{
              text: systemPrompt
            }, {
              text: input
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1000,
          },
          safetySettings: [{
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_NONE"
          }, {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_NONE"
          }, {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_NONE"
          }, {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_NONE"
          }]
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(`API Error: ${errorData.error?.message || response.statusText}`)
      }

      const data = await response.json()
      console.log('API Response:', JSON.stringify(data, null, 2))
      
      if (!data || !data.candidates || !data.candidates[0]?.content?.parts?.[0]?.text) {
        throw new Error('Invalid response format from API')
      }

      const botResponse = data.candidates[0].content.parts[0].text

      const botMessage: Message = {
        text: botResponse,
        isUser: false,
        timestamp: new Date(),
        type: 'text'
      }

      setMessages(prev => [...prev, botMessage])
    } catch (error) {
      console.error('Gemini Error:', error)
      
      // Tampilkan pesan error yang lebih spesifik
      const errorMessage = error instanceof Error 
        ? `Maaf, terjadi kesalahan: ${error.message}`
        : 'Maaf, terjadi kesalahan yang tidak diketahui. Silakan coba lagi.'

      setMessages(prev => [...prev, {
        text: errorMessage,
        isUser: false,
        timestamp: new Date(),
        type: 'text'
      }])
    } finally {
      setIsTyping(false)
    }
  }

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    // Hanya terima file gambar
    if (!file.type.startsWith('image/')) {
      alert('Mohon upload file gambar (jpg, png, gif, dll)')
      return
    }

    const reader = new FileReader()
    reader.onload = async () => {
      const base64 = (reader.result as string).split(',')[1]
      
      const message: Message = {
        text: 'Gambar diunggah:',
        isUser: true,
        timestamp: new Date(),
        type: 'image',
        file: {
          url: URL.createObjectURL(file),
          name: file.name,
          type: file.type,
          base64: base64
        }
      }
      setMessages(prev => [...prev, message])

      // Otomatis analisis gambar
      await handleImageAnalysis(base64, file.type)
    }
    reader.readAsDataURL(file)
  }

  const handleImageAnalysis = async (base64: string, mimeType: string) => {
    setIsTyping(true)

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro-vision:generateContent?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            role: "user",
            parts: [{
              text: systemPrompt + "\n\nTolong analisis gambar ini dan berikan penjelasan dalam Bahasa Indonesia."
            }, {
              inline_data: {
                mime_type: mimeType,
                data: base64
              }
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1000,
          }
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(`API Error: ${errorData.error?.message || response.statusText}`)
      }

      const data = await response.json()
      console.log('API Response:', JSON.stringify(data, null, 2))
      
      if (!data || !data.candidates || !data.candidates[0]?.content?.parts?.[0]?.text) {
        throw new Error('Invalid response format from API')
      }

      const botResponse = data.candidates[0].content.parts[0].text

      const botMessage: Message = {
        text: botResponse,
        isUser: false,
        timestamp: new Date(),
        type: 'text'
      }

      setMessages(prev => [...prev, botMessage])
    } catch (error) {
      console.error('Gemini Vision Error:', error)
      
      const errorMessage = error instanceof Error 
        ? `Maaf, terjadi kesalahan saat menganalisis gambar: ${error.message}`
        : 'Maaf, terjadi kesalahan yang tidak diketahui saat menganalisis gambar.'

      setMessages(prev => [...prev, {
        text: errorMessage,
        isUser: false,
        timestamp: new Date(),
        type: 'text'
      }])
    } finally {
      setIsTyping(false)
    }
  }

  const handleVoice = () => {
    setIsRecording(!isRecording)
    // Implementasi voice recognition bisa ditambahkan di sini
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('id-ID', { 
      hour: '2-digit', 
      minute: '2-digit' 
    })
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-700 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition-colors"
        >
          <MessageCircle size={24} />
        </button>
      ) : (
        <div className="bg-white rounded-lg shadow-xl w-96 max-h-[600px] flex flex-col">
          {/* Header */}
          <div className="bg-blue-700 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot size={20} />
              <div>
                <span className="font-medium">AI Assistant</span>
                <p className="text-xs text-gray-200">Online</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="hover:bg-blue-800 p-1 rounded transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto max-h-[400px] space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div className="flex flex-col max-w-[80%] gap-1">
                  <div
                    className={`p-3 rounded-lg ${
                      msg.isUser
                        ? 'bg-blue-700 text-white rounded-br-none'
                        : 'bg-gray-100 text-gray-800 rounded-bl-none'
                    }`}
                  >
                    {msg.type === 'text' && (
                      <p className="whitespace-pre-line">{msg.text}</p>
                    )}
                    {msg.type === 'file' && msg.file && (
                      <div className="flex items-center gap-2">
                        <Paperclip size={16} />
                        <a 
                          href={msg.file.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="underline"
                        >
                          {msg.file.name}
                        </a>
                      </div>
                    )}
                  </div>
                  <span className={`text-xs ${msg.isUser ? 'text-right' : ''} text-gray-500`}>
                    {formatTime(msg.timestamp)}
                  </span>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-lg rounded-bl-none">
                  <Loader2 className="w-5 h-5 animate-spin text-blue-700" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t p-4">
            <div className="flex items-center gap-2">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                className="hidden"
                accept="image/*,.pdf,.doc,.docx"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                title="Upload file"
              >
                <Paperclip size={20} />
              </button>
              <button
                onClick={handleVoice}
                className={`p-2 transition-colors ${
                  isRecording ? 'text-red-500' : 'text-gray-500 hover:text-gray-700'
                }`}
                title="Voice input"
              >
                <Mic size={20} />
              </button>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ketik pesan..."
                className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="bg-blue-700 text-white p-2 rounded-lg hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Chatbot 