'use client'

import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/common/Navbar'
import Sidebar from '@/components/common/Sidebar'

const ParticipantPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div className="flex flex-1 pt-24">
        <div className="fixed left-0 h-screen">
          <Sidebar />
        </div>
        <div className="flex-1 ml-64 p-6">
          <h1 className="text-2xl text-gray-700 mb-4">Participant</h1>
          
          <div className="flex justify-between mb-4">
            <div className="flex gap-2">
              <button className="bg-blue-700 text-white px-4 py-2 rounded">
                Add New Participant
              </button>
              <button className="bg-blue-700 text-white px-4 py-2 rounded">+</button>
            </div>
            <input 
              type="text" 
              placeholder="Search..." 
              className="px-4 py-2 border rounded-lg"
            />
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16">
                  <Image
                    src="/img/profile.png"
                    alt="Profile"
                    layout="fill"
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-700">Sandero Taeil Ishara</h2>
                  <p className="text-gray-500">Programming</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-600 mb-2">Email:</p>
                  <p className="text-gray-800">sandero@example.com</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-2">Phone:</p>
                  <p className="text-gray-800">+62 812-3456-7890</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-2">Address:</p>
                  <p className="text-gray-800">Jl. Raya Bogor No. 123</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-2">Company:</p>
                  <p className="text-gray-800">PT Example Indonesia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ParticipantPage 