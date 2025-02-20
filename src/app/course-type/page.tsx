'use client'

import Image from 'next/image'
import { Eye, PenSquare, Plus, Trash2 } from 'lucide-react'
import Navbar from '@/components/common/Navbar'
import Sidebar from '@/components/common/Sidebar'
import { useState } from 'react'
import Pagination from '@/components/common/Pagination'

export default function CourseType() {
  const courseTypes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8
  const totalPages = Math.ceil(courseTypes.length / itemsPerPage)

  const getCurrentItems = () => {
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    return courseTypes.slice(indexOfFirstItem, indexOfLastItem)
  }

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
          <h1 className="text-2xl text-gray-600 mb-6">Course Type</h1>
          
          <div className="flex gap-2 mb-6">
            <button className="bg-blue-700 text-white px-4 py-2 rounded flex items-center gap-2">
              Add Course Type
            </button>
            <button className="bg-blue-700 text-white px-4 py-2 rounded">
              <Plus size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {getCurrentItems().map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={item % 2 === 0 ? "/code.jpg" : "/aiot.jpg"}
                    alt="Course Type"
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="p-4">
                  <p className="text-gray-700 mb-4">Course Type : Online</p>
                  
                  <div className="flex justify-between">
                    <button className="text-gray-600">
                      <Eye size={20} />
                    </button>
                    <button className="text-gray-600">
                      <PenSquare size={20} />
                    </button>
                    <button className="text-red-500">
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  )
}