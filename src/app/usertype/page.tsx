// 'use client'

// import React, { useState } from 'react'
// import Navbar from '@/components/common/Navbar'
// import Sidebar from '@/components/common/Sidebar'
// import Pagination from '@/components/common/Pagination'

// const UserPage = () => {
//   const usertype = [
//     { no: 1, idUsertype: 'UT001', usertype: 'Admin' },
//     { no: 2, idUsertype: 'UT002', usertype: 'Instructor' },
//     { no: 3, idUsertype: 'UT003', usertype: 'Student' },
//     { no: 4, idUsertype: 'UT004', usertype: 'Staff' },
//     { no: 5, idUsertype: 'UT005', usertype: 'Manager' },
//     { no: 6, idUsertype: 'UT006', usertype: 'Supervisor' },
//     { no: 7, idUsertype: 'UT007', usertype: 'Coordinator' },
//     { no: 8, idUsertype: 'UT008', usertype: 'Assistant' },
//     { no: 9, idUsertype: 'UT009', usertype: 'Guest' },
//     { no: 10, idUsertype: 'UT010', usertype: 'Viewer' }
//   ]

//   const [currentPage, setCurrentPage] = useState(1)
//   const [selectedUsertype, setSelectedUsertype] = useState('all')
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false)
//   const [selectedUser, setSelectedUser] = useState(null)
//   const [newUser, setNewUser] = useState({
//     idUsertype: '',
//     usertype: ''
//   })
//   const itemsPerPage = 10

//   const usertypes = ['all', ...new Set(usertype.map(user => user.usertype))]

//   const filteredUsers = selectedUsertype === 'all'
//     ? usertype
//     : usertype.filter(user => user.usertype === selectedUsertype)

//   const totalPages = Math.ceil(filteredUsers.length / itemsPerPage)
//   const indexOfLastItem = currentPage * itemsPerPage
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage
//   const currentUsers = filteredUsers.slice(indexOfFirstItem, indexOfLastItem)

//   const handleUsertypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedUsertype(e.target.value)
//     setCurrentPage(1)
//   }

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target
//     setNewUser(prev => ({
//       ...prev,
//       [name]: value
//     }))
//   }

//   const handleEditClick = (user: any) => {
//     setSelectedUser(user)
//     setNewUser({
//       idUsertype: user.idUsertype,
//       usertype: user.usertype
//     })
//     setIsEditModalOpen(true)
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     // Handle form submission logic here
//     setIsModalOpen(false)
//     setNewUser({
//       idUsertype: '',
//       usertype: ''
//     })
//   }

//   const handleEditSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     // Handle edit form submission logic here
//     setIsEditModalOpen(false)
//     setNewUser({
//       idUsertype: '',
//       usertype: ''
//     })
//   }

//   return (
//     <div className="min-h-screen flex flex-col">
//       <div className="fixed top-0 left-0 right-0 z-50">
//         <Navbar />
//       </div>
//       <div className="flex flex-1 pt-24">
//         <div className="fixed left-0 h-screen">
//           <Sidebar />
//         </div>
//         <div className="flex-1 ml-64 p-6">
//           <h1 className="text-2xl text-gray-700 mb-4">UserType</h1>
          
//           <div className="flex justify-between mb-4">
//             <div className="flex gap-2">
//               <button 
//                 onClick={() => setIsModalOpen(true)}
//                 className="bg-blue-700 text-white px-4 py-2 rounded"
//               >
//                 Add New Usertype
//               </button>
//               <button className="bg-blue-700 text-white px-4 py-2 rounded">+</button>
//             </div>
//             <div className="flex gap-4 text-gray-700">
//               <select 
//                 value={selectedUsertype}
//                 onChange={handleUsertypeChange}
//                 className="px-4 py-2 border rounded-lg"
//               >
//                 {usertypes.map(type => (
//                   <option key={type} value={type}>
//                     {type === 'all' ? 'All Usertypes' : type}
//                   </option>
//                 ))}
//               </select>
//               <input 
//                 type="text" 
//                 placeholder="Search..." 
//                 className="px-4 py-2 border rounded-lg"
//               />
//             </div>
//           </div>

//           <table className="w-full bg-white rounded-lg shadow-md">
//             <thead>
//               <tr className="border-b">
//                 <th className="text-left p-3 text-gray-700">No</th>
//                 <th className="text-left p-3 text-gray-700">ID Usertype</th>
//                 <th className="text-left p-3 text-gray-700">Usertype</th>
//                 <th className="text-left p-3 text-gray-700">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentUsers.map((user) => (
//                 <tr key={user.no} className="border-b hover:bg-gray-50">
//                   <td className="p-3 text-gray-700">{user.no}</td>
//                   <td className="p-3 text-gray-700">{user.idUsertype}</td>
//                   <td className="p-3 text-gray-700">{user.usertype}</td>
//                   <td className="p-3">
//                     <div className="flex gap-2">
//                       <button 
//                         onClick={() => handleEditClick(user)}
//                         className="text-blue-600 hover:text-blue-800"
//                       >
//                         Edit
//                       </button>
//                       <button className="text-red-500 hover:text-red-700">Delete</button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           <div className="mt-6">
//             <Pagination
//               currentPage={currentPage}
//               totalPages={totalPages}
//               onPageChange={setCurrentPage}
//             />
//           </div>

//           {/* Add Usertype Modal */}
//           {isModalOpen && (
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//               <div className="bg-white p-6 rounded-lg w-96">
//                 <h2 className="text-xl font-semibold mb-4">Add New Usertype</h2>
//                 <form onSubmit={handleSubmit}>
//                   <div className="mb-4">
//                     <label className="block text-gray-700 mb-2">ID Usertype</label>
//                     <input
//                       type="text"
//                       name="idUsertype"
//                       value={newUser.idUsertype}
//                       onChange={handleInputChange}
//                       className="w-full px-3 py-2 border rounded"
//                       required
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label className="block text-gray-700 mb-2">Usertype</label>
//                     <input
//                       type="text"
//                       name="usertype"
//                       value={newUser.usertype}
//                       onChange={handleInputChange}
//                       className="w-full px-3 py-2 border rounded"
//                       required
//                     />
//                   </div>
//                   <div className="flex justify-end gap-2">
//                     <button
//                       type="button"
//                       onClick={() => setIsModalOpen(false)}
//                       className="px-4 py-2 text-gray-600 hover:text-gray-800"
//                     >
//                       Cancel
//                     </button>
//                     <button
//                       type="submit"
//                       className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
//                     >
//                       Add Usertype
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           )}

//           {/* Edit Usertype Modal */}
//           {isEditModalOpen && (
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//               <div className="bg-white p-6 rounded-lg w-96">
//                 <h2 className="text-xl font-semibold mb-4">Edit Usertype</h2>
//                 <form onSubmit={handleEditSubmit}>
//                   <div className="mb-4">
//                     <label className="block text-gray-700 mb-2">ID Usertype</label>
//                     <input
//                       type="text"
//                       name="idUsertype"
//                       value={newUser.idUsertype}
//                       onChange={handleInputChange}
//                       className="w-full px-3 py-2 border rounded"
//                       required
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label className="block text-gray-700 mb-2">Usertype</label>
//                     <input
//                       type="text"
//                       name="usertype"
//                       value={newUser.usertype}
//                       onChange={handleInputChange}
//                       className="w-full px-3 py-2 border rounded"
//                       required
//                     />
//                   </div>
//                   <div className="flex justify-end gap-2">
//                     <button
//                       type="button"
//                       onClick={() => setIsEditModalOpen(false)}
//                       className="px-4 py-2 text-gray-600 hover:text-gray-800"
//                     >
//                       Cancel
//                     </button>
//                     <button
//                       type="submit"
//                       className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
//                     >
//                       Save Changes
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default UserPage

'use client';

import React, { useState } from 'react';
import Navbar from '@/components/common/Navbar';
import Sidebar from '@/components/common/Sidebar';

interface UserRule {
  no: number;
  roleName: string;
  description: string;
  status: 'Active' | 'Inactive';
}

const userRulesData: UserRule[] = [
  { no: 1, roleName: 'Super Admin', description: 'Full access to all features', status: 'Active' },
  { no: 2, roleName: 'Admin', description: 'Manage users and content', status: 'Active' },
  { no: 3, roleName: 'Manager', description: 'View reports and manage team', status: 'Active' },
  { no: 4, roleName: 'Staff', description: 'Basic access to system', status: 'Active' },
  { no: 5, roleName: 'Guest', description: 'Limited view access', status: 'Inactive' },
];

const UserRulePage = () => {
  const [userRules] = useState<UserRule[]>(userRulesData);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedRule, setSelectedRule] = useState<UserRule | null>(null);

  const handleEditClick = (rule: UserRule) => {
    setSelectedRule(rule);
    setIsEditModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 pt-24">
        <Sidebar />
        <div className="flex-1 ml-64 p-6">
          <h1 className="text-2xl text-gray-700 mb-4">User Rules</h1>

          <table className="w-full bg-white rounded-lg shadow-md">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3 text-gray-700">No</th>
                <th className="text-left p-3 text-gray-700">Role Name</th>
                <th className="text-left p-3 text-gray-700">Description</th>
                <th className="text-left p-3 text-gray-700">Status</th>
                <th className="text-left p-3 text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {userRules.map(rule => (
                <tr key={rule.no} className="border-b hover:bg-gray-50">
                  <td className="p-3 text-gray-700">{rule.no}</td>
                  <td className="p-3 text-gray-700">{rule.roleName}</td>
                  <td className="p-3 text-gray-700">{rule.description}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded text-sm ${
                        rule.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {rule.status}
                    </span>
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => handleEditClick(rule)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {isEditModalOpen && selectedRule && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg w-96">
                <h2 className="text-xl font-semibold mb-4 text-gray-700">Edit Rule</h2>
                <div>
                  <p><strong>Role Name:</strong> {selectedRule.roleName}</p>
                  <p><strong>Description:</strong> {selectedRule.description}</p>
                  <p><strong>Status:</strong> {selectedRule.status}</p>
                </div>
                <div className="flex justify-end gap-2 mt-4">
                  <button
                    type="button"
                    onClick={() => setIsEditModalOpen(false)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default UserRulePage;

