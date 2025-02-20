'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/common/Navbar'
import Sidebar from '@/components/common/Sidebar'

const CourseSchedulePage = () => {
  const router = useRouter()

  const schedules = [
    { no: 1, className: 'AIoT', date: '7 Feb 2024 - 10 Feb 2024', location: 'Train4best' },
    { no: 2, className: 'Programming', date: '10 Feb 2024 - 13 Feb 2024', location: 'Train4best' },
  ]

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newSchedule, setNewSchedule] = useState({
    className: '',
    date: '',
    location: '',
    registrationDate: '',
    room: '',
    price: '',
    totalParticipant: '',
    totalPayment: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewSchedule(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsModalOpen(false)
    setNewSchedule({
      className: '',
      date: '',
      location: '',
      registrationDate: '',
      room: '',
      price: '',
      totalParticipant: '',
      totalPayment: ''
    })
  }

  const handleDetailClick = (id: number) => {
    router.push(`/course-schedule/${id}`)
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
          <h1 className="text-2xl text-gray-700 mb-4">Course Schedule</h1>
          
          <div className="flex justify-between mb-4">
            <div className="flex gap-2">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-700 text-white px-4 py-2 rounded"
              >
                Add New Schedule
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
                <th className="text-left p-3 text-gray-700">No</th>
                <th className="text-left p-3 text-gray-700">Class Name</th>
                <th className="text-left p-3 text-gray-700">Date</th>
                <th className="text-left p-3 text-gray-700">Location</th>
                <th className="text-left p-3 text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {schedules.map((schedule) => (
                <tr key={schedule.no} className="border-b hover:bg-gray-50">
                  <td className="p-3 text-gray-700">{schedule.no}</td>
                  <td className="p-3 text-gray-700">{schedule.className}</td>
                  <td className="p-3 text-gray-700">{schedule.date}</td>
                  <td className="p-3 text-gray-700">{schedule.location}</td>
                  <td className="p-3">
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleDetailClick(schedule.no)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        Detail
                      </button>
                      <button className="text-red-500 hover:text-red-700">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Add Schedule Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg w-[800px]">
                <h2 className="text-xl font-semibold mb-4 text-gray-700">Add New Schedule</h2>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">Class Name</label>
                      <input
                        type="text"
                        name="className"
                        value={newSchedule.className}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">Date</label>
                      <input
                        type="text"
                        name="date"
                        value={newSchedule.date}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="DD MMM YYYY - DD MMM YYYY"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">Registration Date</label>
                      <input
                        type="text"
                        name="registrationDate"
                        value={newSchedule.registrationDate}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="DD MMM YYYY"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">Location</label>
                      <input
                        type="text"
                        name="location"
                        value={newSchedule.location}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">Room</label>
                      <input
                        type="text"
                        name="room"
                        value={newSchedule.room}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">Price</label>
                      <input
                        type="number"
                        name="price"
                        value={newSchedule.price}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">Total Participant</label>
                      <input
                        type="number"
                        name="totalParticipant"
                        value={newSchedule.totalParticipant}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">Total Payment</label>
                      <input
                        type="number"
                        name="totalPayment"
                        value={newSchedule.totalPayment}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex justify-end gap-2 mt-4">
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
                      Add Schedule
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

export default CourseSchedulePage 