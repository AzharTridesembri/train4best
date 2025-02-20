"use client";
import { useState } from "react";
import Image from 'next/image'

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-4xl w-full flex bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Side - Login Form */}
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-semibold mb-6">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-200 text-black placeholder-gray-600 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 bg-gray-200 text-black placeholder-gray-600 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  onClick={() => {
                    const input = document.querySelector('input[type="password"]') as HTMLInputElement;
                    if (input) {
                      input.type = input.type === 'password' ? 'text' : 'password';
                    }
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="appearance-none w-4 h-4 border border-gray-400 rounded-sm bg-transparent checked:bg-blue-500 checked:border-blue-500 focus:outline-none"
                />
                <span className="ml-2 text-gray-700">Remember me</span>
              </label>
              <a href="#" className="text-blue-600">Forgot Password?</a>
            </div>
            <button type="submit" className="w-full bg-blue-900 text-white py-2 rounded-lg mb-3">
              Login
            </button>
            <button
              type="button"
              className="w-full py-2 rounded-md bg-gray-300 text-gray-600 hover:bg-gray-400 transition mt-4"
            >
              Register
            </button>
          </form>
        </div>
        
        {/* Right Side - Images */}
        <div className="w-1/2 relative">
          <Image
            src="/img/bg.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
          <div className="relative z-10 flex items-center justify-center h-full">
            <Image
              src="/img/LogoT4B.png"
              alt="Logo"
              width={200}
              height={60}
              className="max-w-[200px]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
