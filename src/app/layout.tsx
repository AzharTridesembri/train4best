import './globals.css'
import Chatbot from '@/components/common/Chatbot'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        {children}
        <Chatbot />
      </body>
    </html>
  )
} 