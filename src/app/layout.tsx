'use client';

import './globals.css'
import Chatbot from '@/components/common/Chatbot'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme'; // Buat theme sesuai kebutuhan

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  )
} 