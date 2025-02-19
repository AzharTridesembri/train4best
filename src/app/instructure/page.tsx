'use client'

import React, { useState } from 'react'
import Navbar from '@/components/common/Navbar'
import Sidebar from '@/components/common/Sidebar'
import Pagination from '@/components/common/Pagination'

const InstructurePage = () => {
  const instructures = [
    { no: 1, fullName: 'Sandero Taeil Ishara', phoneNumber: '0895-1525-4981', proficiency: 'Programming' },
    { no: 2, fullName: 'Mikael Ferdinand', phoneNumber: '0895-1525-4981', proficiency: 'Programming' },
    { no: 3, fullName: 'Swara Ajeng Mahesa', phoneNumber: '0895-1525-4981', proficiency: 'Programming' },
    { no: 4, fullName: 'Dywantara Suroso', phoneNumber: '0895-1525-4981', proficiency: 'Programming' },
    { no: 5, fullName: 'Budi Santoso', phoneNumber: '0812-3456-7890', proficiency: 'Web Development' },
    { no: 6, fullName: 'Siti Rahayu', phoneNumber: '0813-2345-6789', proficiency: 'Data Science' },
    { no: 7, fullName: 'Ahmad Wijaya', phoneNumber: '0814-3456-7890', proficiency: 'Mobile Development' },
    { no: 8, fullName: 'Dewi Kusuma', phoneNumber: '0815-4567-8901', proficiency: 'UI/UX Design' },
    { no: 9, fullName: 'Eko Prasetyo', phoneNumber: '0816-5678-9012', proficiency: 'Programming' },
    { no: 10, fullName: 'Rina Wati', phoneNumber: '0817-6789-0123', proficiency: 'Web Development' },
    { no: 11, fullName: 'Joko Susilo', phoneNumber: '0818-7890-1234', proficiency: 'Data Science' },
    { no: 12, fullName: 'Maya Sari', phoneNumber: '0819-8901-2345', proficiency: 'Mobile Development' },
    { no: 13, fullName: 'Agus Setiawan', phoneNumber: '0820-9012-3456', proficiency: 'UI/UX Design' },
    { no: 14, fullName: 'Nina Indah', phoneNumber: '0821-0123-4567', proficiency: 'Programming' },
    { no: 15, fullName: 'Rudi Hartono', phoneNumber: '0822-1234-5678', proficiency: 'Web Development' },
    { no: 16, fullName: 'Sri Wahyuni', phoneNumber: '0823-2345-6789', proficiency: 'Data Science' },
    { no: 17, fullName: 'Bambang Tri', phoneNumber: '0824-3456-7890', proficiency: 'Mobile Development' },
    { no: 18, fullName: 'Lina Putri', phoneNumber: '0825-4567-8901', proficiency: 'UI/UX Design' },
    { no: 19, fullName: 'Dedi Kurniawan', phoneNumber: '0826-5678-9012', proficiency: 'Programming' },
    { no: 20, fullName: 'Yuni Astuti', phoneNumber: '0827-6789-0123', proficiency: 'Web Development' },
    { no: 21, fullName: 'Hendra Gunawan', phoneNumber: '0828-7890-1234', proficiency: 'Data Science' },
    { no: 22, fullName: 'Lia Permata', phoneNumber: '0829-8901-2345', proficiency: 'Mobile Development' },
    { no: 23, fullName: 'Doni Pratama', phoneNumber: '0830-9012-3456', proficiency: 'UI/UX Design' },
    { no: 24, fullName: 'Ratna Sari', phoneNumber: '0831-0123-4567', proficiency: 'Programming' },
    { no: 25, fullName: 'Irfan Hakim', phoneNumber: '0832-1234-5678', proficiency: 'Web Development' },
    { no: 26, fullName: 'Putri Wulandari', phoneNumber: '0833-2345-6789', proficiency: 'Data Science' },
    { no: 27, fullName: 'Rizki Ramadhan', phoneNumber: '0834-3456-7890', proficiency: 'Mobile Development' },
    { no: 28, fullName: 'Dina Maulida', phoneNumber: '0835-4567-8901', proficiency: 'UI/UX Design' },
    { no: 29, fullName: 'Fajar Nugroho', phoneNumber: '0836-5678-9012', proficiency: 'Programming' },
    { no: 30, fullName: 'Anita Lestari', phoneNumber: '0837-6789-0123', proficiency: 'Web Development' },
    { no: 31, fullName: 'Adi Purnomo', phoneNumber: '0838-7890-1234', proficiency: 'Data Science' },
    { no: 32, fullName: 'Sari Indah', phoneNumber: '0839-8901-2345', proficiency: 'Mobile Development' },
    { no: 33, fullName: 'Tono Wijaya', phoneNumber: '0840-9012-3456', proficiency: 'UI/UX Design' },
    { no: 34, fullName: 'Rina Fitriani', phoneNumber: '0841-0123-4567', proficiency: 'Programming' },
    { no: 35, fullName: 'Bima Sakti', phoneNumber: '0842-1234-5678', proficiency: 'Web Development' },
    { no: 36, fullName: 'Eva Mariana', phoneNumber: '0843-2345-6789', proficiency: 'Data Science' },
    { no: 37, fullName: 'Reza Pahlepi', phoneNumber: '0844-3456-7890', proficiency: 'Mobile Development' },
    { no: 38, fullName: 'Desi Ratnasari', phoneNumber: '0845-4567-8901', proficiency: 'UI/UX Design' },
    { no: 39, fullName: 'Surya Darma', phoneNumber: '0846-5678-9012', proficiency: 'Programming' },
    { no: 40, fullName: 'Nita Handayani', phoneNumber: '0847-6789-0123', proficiency: 'Web Development' },
    { no: 41, fullName: 'Ari Wibowo', phoneNumber: '0848-7890-1234', proficiency: 'Data Science' },
    { no: 42, fullName: 'Mega Puspita', phoneNumber: '0849-8901-2345', proficiency: 'Mobile Development' },
    { no: 43, fullName: 'Candra Wijaya', phoneNumber: '0850-9012-3456', proficiency: 'UI/UX Design' },
    { no: 44, fullName: 'Laras Ayu', phoneNumber: '0851-0123-4567', proficiency: 'Programming' },
    { no: 45, fullName: 'Galih Pratama', phoneNumber: '0852-1234-5678', proficiency: 'Web Development' },
    { no: 46, fullName: 'Indah Permata', phoneNumber: '0853-2345-6789', proficiency: 'Data Science' },
    { no: 47, fullName: 'Rama Putra', phoneNumber: '0854-3456-7890', proficiency: 'Mobile Development' },
    { no: 48, fullName: 'Nadia Safitri', phoneNumber: '0855-4567-8901', proficiency: 'UI/UX Design' },
    { no: 49, fullName: 'Bayu Segara', phoneNumber: '0856-5678-9012', proficiency: 'Programming' },
    { no: 50, fullName: 'Kartika Sari', phoneNumber: '0857-6789-0123', proficiency: 'Web Development' }
  ]

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newInstructure, setNewInstructure] = useState({
    fullName: '',
    phoneNumber: '',
    proficiency: ''
  })
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const totalPages = Math.ceil(instructures.length / itemsPerPage)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setNewInstructure(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsModalOpen(false)
    setNewInstructure({
      fullName: '',
      phoneNumber: '',
      proficiency: ''
    })
  }

  const getCurrentItems = () => {
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    return instructures.slice(indexOfFirstItem, indexOfLastItem)
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
          <h1 className="text-2xl text-gray-700 mb-4">Instructure</h1>
          
          <div className="flex justify-between mb-4">
            <div className="flex gap-2">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-700 text-white px-4 py-2 rounded"
              >
                Add New Instructure
              </button>
              <button className="bg-blue-700 text-white px-4 py-2 rounded">+</button>
            </div>
            <input 
              type="text" 
              placeholder="Search..." 
              className="px-4 py-2 border rounded-lg"
            />
          </div>

          <table className="w-full bg-white rounded-lg shadow-md">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3 text-gray-700">NO</th>
                <th className="text-left p-3 text-gray-700">Full Name</th>
                <th className="text-left p-3 text-gray-700">Phone Number</th>
                <th className="text-left p-3 text-gray-700">Proficiency</th>
                <th className="text-left p-3 text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {getCurrentItems().map((instructure) => (
                <tr key={instructure.no} className="border-b hover:bg-gray-50">
                  <td className="p-3 text-gray-700">{instructure.no}</td>
                  <td className="p-3 text-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                      {instructure.fullName}
                    </div>
                  </td>
                  <td className="p-3 text-gray-700">{instructure.phoneNumber}</td>
                  <td className="p-3 text-gray-700">{instructure.proficiency}</td>
                  <td className="p-3">
                    <div className="flex gap-2">
                      <button className="p-2 border rounded hover:bg-gray-100" title="View History">
                        <svg className="w-4 h-4" fill="none" stroke="#374151" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </button>
                      <button className="p-2 border rounded hover:bg-gray-100" title="Edit">
                        <svg className="w-4 h-4" fill="none" stroke="#374151" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </button>
                      <button className="p-2 border rounded hover:bg-gray-100" title="Delete">
                        <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />

          {/* Add Instructure Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg w-96">
                <h2 className="text-xl font-semibold mb-4 text-gray-700">Add New Instructure</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={newInstructure.fullName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={newInstructure.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Proficiency</label>
                    <input
                      type="text"
                      name="proficiency"
                      value={newInstructure.proficiency}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded"
                      required
                    />
                  </div>
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 text-gray-600 hover:text-gray-800"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
                    >
                      Add Instructure
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default InstructurePage 