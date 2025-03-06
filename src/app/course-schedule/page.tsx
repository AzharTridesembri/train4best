'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Layout from "@/components/common/Layout";
import Button from '@/components/common/button'
import Modal from '@/components/common/Modal'
import Table from "@/components/common/table";

interface Column<T> {
  header: string;
  accessor: keyof T | ((data: T) => React.ReactNode);
}

interface Schedule {
  no: number;
  className: string;
  date: string;
  location: string;
}

const CourseSchedulePage = () => {
  const router = useRouter()

  const schedules = [
    { no: 1, className: 'AIoT', date: '7 Feb 2024 - 10 Feb 2024', location: 'Train4best' },
    { no: 2, className: 'Programming', date: '10 Feb 2024 - 13 Feb 2024', location: 'Train4best' },
  ]

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
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

  const columns: Column<Schedule>[] = [
    { header: "No", accessor: "no" },
    { header: "Class Name", accessor: "className" },
    { header: "Date", accessor: "date" },
    { header: "Location", accessor: "location" },
    {
      header: "Action",
      accessor: (schedule: Schedule) => (
        <div className="flex gap-2">
          <button
            onClick={() => handleDetailClick(schedule.no)}
            className="text-blue-600 hover:text-blue-800"
          >
            Detail
          </button>
          <button 
            className="text-red-500 hover:text-red-700" 
            onClick={() => setIsDeleteModalOpen(true)}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-2xl text-gray-700 mb-4">Course Schedule</h1>
        
        <div className="flex justify-between mb-4">
          <div className="flex gap-2">
          <Button variant="primary" size="medium" onClick={() => setIsModalOpen(true)}>
              Add New course Schedule
          </Button>
          </div>
          <input 
            type="text" 
            placeholder="Search..." 
            className="px-4 py-2 border rounded-lg"
          />
        </div>

        <Table
          columns={columns}
          data={schedules}
          currentPage={1}
          totalPages={1}
          itemsPerPage={5}
          totalItems={schedules.length}
          onPageChange={() => {}}
        />

        {/* Add Schedule Modal */}
        {isModalOpen && (
          <Modal onClose={() => setIsModalOpen(false)}>
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
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                      required
                    />
                  </div>
                  <div className="mb-4">
                      <label className="block text-gray-700 mb-2">Date</label>
                    <input
                      type="date" 
                      name="date"
                      value={newSchedule.date}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                      required
                    />
                  </div>
                  <div className="mb-4">
                      <label className="block text-gray-700 mb-2">Registration Date</label>
                    <input
                      type="date"
                      name="registrationDate"
                      value={newSchedule.registrationDate}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
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
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
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
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
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
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                      min="0"
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
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                      min="1"
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
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                      min="0"
                      required
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-2 mt-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 rounded border border-gray-300 hover:bg-gray-100"
                  >
                      Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Add Schedule
                  </button>
                </div>
              </form>
       
          </Modal>
        )}

        {isDeleteModalOpen && (
          <Modal onClose={() => setIsDeleteModalOpen(false)}>
            <h2 className="text-lg font-semibold text-gray-700">Delete Schedule</h2>
            <p className="text-sm text-gray-600 mt-2">Are you sure you want to delete this schedule?</p>
            <div className="flex justify-end mt-4">
                      <Button variant="red" size="medium" onClick={() => setIsDeleteModalOpen(false)}>
                Delete
                </Button>
            </div>
          </Modal>
        )}
      </div>
    </Layout>
  )
}

export default CourseSchedulePage 