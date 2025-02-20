'use client'

import React, { useState } from 'react'
import Navbar from '@/components/common/Navbar'
import Sidebar from '@/components/common/Sidebar'
import { FileText, Edit, Trash2, History, UserCheck } from 'lucide-react'

const CourseScheduleDetail = () => {
  const courseDetails = {
    className: 'AIoT Class',
    date: '7 Feb 2024 - 10 Feb 2024',
    registrationDate: '1 Feb 2024',
    location: 'Train4best',
    room: 'Room 301',
    price: 'Rp 2.500.000',
    totalParticipant: '25',
    totalPayment: 'Rp 62.500.000'
  }

  const participants = [
    { no: 1, name: 'Sandero Taeil Ishara', presentDay: '3 days', paymentStatus: 'Unpaid' },
    { no: 2, name: 'Mikael Ferdinand', presentDay: '5 days', paymentStatus: 'Unpaid' },
  ]

  const [activeTab, setActiveTab] = useState('participant')
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [editedCourse, setEditedCourse] = useState(courseDetails)

  const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEditedCourse(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Implementasi logika update course schedule di sini
    setIsEditModalOpen(false)
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
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl text-gray-700">Course Schedule Detail</h1>
            <button 
              onClick={() => setIsEditModalOpen(true)}
              className="px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600"
            >
              Edit Schedule
            </button>
          </div>

          {/* Course Details Card */}
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h2 className="text-xl text-gray-700 mb-4">{courseDetails.className}</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600 mb-2">Date :</p>
                <p className="text-gray-600 mb-2">Registration Date :</p>
                <p className="text-gray-600 mb-2">Location :</p>
                <p className="text-gray-600 mb-2">Room :</p>
                <p className="text-gray-600 mb-2">Price :</p>
                <p className="text-gray-600 mb-2">Total Participant :</p>
                <p className="text-gray-600">Total Payment :</p>
              </div>
              <div>
                <p className="text-gray-800 mb-2">{courseDetails.date}</p>
                <p className="text-gray-800 mb-2">{courseDetails.registrationDate}</p>
                <p className="text-gray-800 mb-2">{courseDetails.location}</p>
                <p className="text-gray-800 mb-2">{courseDetails.room}</p>
                <p className="text-gray-800 mb-2">{courseDetails.price}</p>
                <p className="text-gray-800 mb-2">{courseDetails.totalParticipant}</p>
                <p className="text-gray-800">{courseDetails.totalPayment}</p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex mb-6">
            <button
              className={`px-6 py-3 text-center flex-1 ${
                activeTab === 'participant'
                  ? 'bg-blue-700 text-white'
                  : 'bg-gray-100 text-gray-600'
              } rounded-l-lg`}
              onClick={() => setActiveTab('participant')}
            >
              Participant
            </button>
            <button
              className={`px-6 py-3 flex-1 ${
                activeTab === 'instructure'
                  ? 'bg-blue-700 text-white'
                  : 'bg-gray-100 text-gray-600'
              } rounded-r-lg`}
              onClick={() => setActiveTab('instructure')}
            >
              Instructure
            </button>
          </div>

          {/* Participant List */}
          {activeTab === 'participant' && (
            <div>
              <div className="flex justify-between mb-4">
                <div className="flex gap-2">
                  <button className="bg-blue-700 text-white px-4 py-2 rounded">
                    Add Participant
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
                    <th className="text-left p-3 text-gray-700">Participant</th>
                    <th className="text-left p-3 text-gray-700">Present Day</th>
                    <th className="text-left p-3 text-gray-700">Payment Status</th>
                    <th className="text-left p-3 text-gray-700">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {participants.map((participant) => (
                    <tr key={participant.no} className="border-b hover:bg-gray-50">
                      <td className="p-3 text-gray-700">{participant.no}</td>
                      <td className="p-3 text-gray-700">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                          {participant.name}
                        </div>
                      </td>
                      <td className="p-3 text-gray-700">{participant.presentDay}</td>
                      <td className="p-3 text-gray-700">{participant.paymentStatus}</td>
                      <td className="p-3">
                        <div className="flex gap-2">
                          <button className="p-2 border rounded hover:bg-gray-100" title="History">
                            <History size={16} className="text-gray-600" />
                          </button>
                          <button className="p-2 border rounded hover:bg-gray-100" title="Attendance">
                            <UserCheck size={16} className="text-gray-600" />
                          </button>
                          <button className="p-2 border rounded hover:bg-gray-100" title="Certificate">
                            <FileText size={16} className="text-gray-600" />
                          </button>
                          <button className="p-2 border rounded hover:bg-gray-100" title="Edit">
                            <Edit size={16} className="text-gray-600" />
                          </button>
                          <button className="p-2 border rounded hover:bg-gray-100" title="Delete">
                            <Trash2 size={16} className="text-red-500" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Instructure Tab Content */}
          {activeTab === 'instructure' && (
            <div>
              <div className="flex justify-between mb-4">
                <div className="flex gap-2">
                  <button className="bg-blue-700 text-white px-4 py-2 rounded">
                    Add Instructure
                  </button>
                  <button className="bg-blue-700 text-white px-4 py-2 rounded">+</button>
                </div>
              </div>

              <table className="w-full bg-white rounded-lg shadow-md">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 text-gray-700">NO</th>
                    <th className="text-left p-3 text-gray-700">Full Name</th>
                    <th className="text-left p-3 text-gray-700">Phone Number</th>
                    <th className="text-left p-3 text-gray-700">Profiency</th>
                    <th className="text-left p-3 text-gray-700">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 text-gray-700">1</td>
                    <td className="p-3 text-gray-700">Sandero Taeil Ishara</td>
                    <td className="p-3 text-gray-700">0895-1525-4981</td>
                    <td className="p-3 text-gray-700">Programming</td>
                    <td className="p-3">
                      <div className="flex gap-2">
                        <button className="flex items-center gap-1 text-gray-600">
                          <FileText size={16} /> Detail
                        </button>
                        <button className="flex items-center gap-1 text-red-500">
                          <Trash2 size={16} /> Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 text-gray-700">2</td>
                    <td className="p-3 text-gray-700">Silvana Introvert</td>
                    <td className="p-3 text-gray-700">0823-1765-3904</td>
                    <td className="p-3 text-gray-700">Programming</td>
                    <td className="p-3">
                      <div className="flex gap-2">
                        <button className="flex items-center gap-1 text-gray-600">
                          <FileText size={16} /> Detail
                        </button>
                        <button className="flex items-center gap-1 text-red-500">
                          <Trash2 size={16} /> Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {/* Edit Schedule Modal */}
          {isEditModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg w-[600px]">
                <h2 className="text-xl font-semibold mb-4 text-gray-700">Edit Course Schedule</h2>
                <form onSubmit={handleEditSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">Class Name</label>
                      <input
                        type="text"
                        name="className"
                        value={editedCourse.className}
                        onChange={handleEditInputChange}
                        className="w-full px-3 py-2 border rounded text-gray-700"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">Date</label>
                      <input
                        type="text"
                        name="date"
                        value={editedCourse.date}
                        onChange={handleEditInputChange}
                        className="w-full px-3 py-2 border rounded text-gray-700"
                        placeholder="DD MMM YYYY - DD MMM YYYY"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">Registration Date</label>
                      <input
                        type="text"
                        name="registrationDate"
                        value={editedCourse.registrationDate}
                        onChange={handleEditInputChange}
                        className="w-full px-3 py-2 border rounded text-gray-700"
                        placeholder="DD MMM YYYY"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">Location</label>
                      <input
                        type="text"
                        name="location"
                        value={editedCourse.location}
                        onChange={handleEditInputChange}
                        className="w-full px-3 py-2 border rounded text-gray-700"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">Room</label>
                      <input
                        type="text"
                        name="room"
                        value={editedCourse.room}
                        onChange={handleEditInputChange}
                        className="w-full px-3 py-2 border rounded text-gray-700"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">Price</label>
                      <input
                        type="text"
                        name="price"
                        value={editedCourse.price}
                        onChange={handleEditInputChange}
                        className="w-full px-3 py-2 border rounded text-gray-700"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex justify-end gap-2 mt-4">
                    <button
                      type="button"
                      onClick={() => setIsEditModalOpen(false)}
                      className="px-4 py-2 text-gray-600 hover:text-gray-800 rounded"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600"
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

export default CourseScheduleDetail 