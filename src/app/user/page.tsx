'use client'

import React, { useState } from 'react'
import Navbar from '@/components/common/Navbar'
import Sidebar from '@/components/common/Sidebar'
import Pagination from '@/components/common/Pagination'

interface User {
  no: number
  username: string
  idUser: string
  jobTitle: string
}

const UserPage = () => {
  const [users, setUsers] = useState<User[]>([
    { no: 1, username: 'Sandero Taeil Ishara', idUser: 'S0848T', jobTitle: 'Programming' },
    { no: 2, username: 'Mikael Ferdinand', idUser: 'S0848T', jobTitle: 'Marketing Specialist' },
    { no: 3, username: 'Swara Ajeng Mahesa', idUser: 'S0848T', jobTitle: 'Sales Manager' },
    { no: 4, username: 'Dywantara Suroso', idUser: 'S0848T', jobTitle: 'Financial Analist' },
    { no: 5, username: 'Citra Anugerah', idUser: 'S0848T', jobTitle: 'Programming' },
    { no: 6, username: 'Dywantara Suroso', idUser: 'S0848T', jobTitle: 'Financial Analist' },
    { no: 7, username: 'Citra Anugerah', idUser: 'S0848T', jobTitle: 'Programming' },
    { no: 8, username: 'Dywantara Suroso', idUser: 'S0848T', jobTitle: 'Financial Analist' },
    { no: 9, username: 'Citra Anugerah', idUser: 'S0848T', jobTitle: 'Programming' },
    { no: 10, username: 'Dywantara Suroso', idUser: 'S0848T', jobTitle: 'Financial Analist' },
    { no: 11, username: 'Citra Anugerah', idUser: 'S0848T', jobTitle: 'Programming' },
    { no: 12, username: 'Dywantara Suroso', idUser: 'S0848T', jobTitle: 'Financial Analist' },
    { no: 13, username: 'Citra Anugerah', idUser: 'S0848T', jobTitle: 'Programming' },
    { no: 14, username: 'Dywantara Suroso', idUser: 'S0848T', jobTitle: 'Financial Analist' },
    { no: 15, username: 'Citra Anugerah', idUser: 'S0848T', jobTitle: 'Programming' },
  ])

  const [currentPage, setCurrentPage] = useState(1)
  const [selectedJobTitle, setSelectedJobTitle] = useState('all')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [newUser, setNewUser] = useState({
    username: '',
    idUser: '',
    jobTitle: ''
  })
  const itemsPerPage = 10

  const jobTitles = ['all', ...new Set(users.map(user => user.jobTitle))]

  const filteredUsers = selectedJobTitle === 'all' 
    ? users 
    : users.filter(user => user.jobTitle === selectedJobTitle)

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentUsers = filteredUsers.slice(indexOfFirstItem, indexOfLastItem)

  const handleJobTitleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedJobTitle(e.target.value)
    setCurrentPage(1)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setNewUser(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleEditClick = (user: User) => {
    setSelectedUser(user)
    setNewUser({
      username: user.username,
      idUser: user.idUser,
      jobTitle: user.jobTitle
    })
    setIsEditModalOpen(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    setIsModalOpen(false)
    setNewUser({
      username: '',
      idUser: '',
      jobTitle: ''
    })
  }

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedUser) {
      setUsers(prevUsers => prevUsers.map(user => 
        user.no === selectedUser.no ? { ...selectedUser, ...newUser } : user
      ))
    }
    setIsEditModalOpen(false)
    setSelectedUser(null)
    setNewUser({
      username: '',
      idUser: '',
      jobTitle: ''
    })
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
          <h1 className="text-2xl text-gray-700 mb-4">Users</h1>
          
          <div className="flex justify-between mb-4">
            <div className="flex gap-2">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-700 text-white px-4 py-2 rounded"
              >
                Add New User
              </button>
              <button className="bg-blue-700 text-white px-4 py-2 rounded">+</button>
            </div>
            <div className="flex gap-4 text-gray-700">
              <select 
                value={selectedJobTitle}
                onChange={handleJobTitleChange}
                className="px-4 py-2 rounded-lg"
              >
                {jobTitles.map(title => (
                  <option key={title} value={title}>
                    {title === 'all' ? 'All Job Titles' : title}
                  </option>
                ))}
              </select>
              <input 
                type="text" 
                placeholder="Search..." 
                className="px-4 py-2 rounded-lg"
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 text-gray-700">No</th>
                  <th className="text-left p-3 text-gray-700">Username</th>
                  <th className="text-left p-3 text-gray-700">ID User</th>
                  <th className="text-left p-3 text-gray-700">Job Title</th>
                  <th className="text-left p-3 text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentUsers.map((user) => (
                  <tr key={user.no} className="hover:bg-gray-50 border-b">
                    <td className="p-3 text-gray-700">{user.no}</td>
                    <td className="p-3 text-gray-700">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                        {user.username}
                      </div>
                    </td>
                    <td className="p-3 text-gray-700">{user.idUser}</td>
                    <td className="p-3 text-gray-700">{user.jobTitle}</td>
                    <td className="p-3">
                      <div className="flex gap-2">
                        <button 
                          onClick={() => handleEditClick(user)}
                          className="text-blue-600 hover:text-blue-800 px-2 py-1 rounded"
                        >
                          Edit
                        </button>
                        <button className="text-red-500 hover:text-red-700 px-2 py-1 rounded">Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />

          {/* Add User Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg w-96">
                <h2 className="text-xl font-semibold mb-4">Add New User</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Username</label>
                    <input
                      type="text"
                      name="username"
                      value={newUser.username}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 rounded"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">ID User</label>
                    <input
                      type="text"
                      name="idUser"
                      value={newUser.idUser}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 rounded"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Job Title</label>
                    <select
                      name="jobTitle"
                      value={newUser.jobTitle}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 rounded"
                      required
                    >
                      <option value="">Select Job Title</option>
                      {jobTitles.filter(title => title !== 'all').map(title => (
                        <option key={title} value={title}>{title}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 text-gray-600 hover:text-gray-800 rounded"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
                    >
                      Add User
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Edit User Modal */}
          {isEditModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg w-96">
                <h2 className="text-xl font-semibold mb-4">Edit User</h2>
                <form onSubmit={handleEditSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Username</label>
                    <input
                      type="text"
                      name="username"
                      value={newUser.username}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 rounded"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">ID User</label>
                    <input
                      type="text"
                      name="idUser"
                      value={newUser.idUser}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 rounded"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Job Title</label>
                    <select
                      name="jobTitle"
                      value={newUser.jobTitle}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 rounded"
                      required
                    >
                      <option value="">Select Job Title</option>
                      {jobTitles.filter(title => title !== 'all').map(title => (
                        <option key={title} value={title}>{title}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setIsEditModalOpen(false)}
                      className="px-4 py-2 text-gray-600 hover:text-gray-800 rounded"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
                    >
                      Save Changes
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

export default UserPage