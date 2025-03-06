"use client";

import React, { useState } from "react";
import Layout from "@/components/common/Layout";
import Button from "@/components/common/button";
import Modal from "@/components/common/Modal";
import Table from "@/components/common/table";

interface User {
  no: number;
  username: string;
  idUser: string;
  jobTitle: string;
}

interface Column {
  header: string;
  accessor: keyof User | ((data: User) => React.ReactNode);
}

const UserPage = () => {
  const [users, setUsers] = useState<User[]>([
    {
      no: 1,
      username: "Sandero Taeil Ishara",
      idUser: "S0848T", 
      jobTitle: "Programming",
    },
    {
      no: 2,
      username: "Mikael Ferdinand",
      idUser: "S0848T",
      jobTitle: "Marketing Specialist",
    },
    {
      no: 3,
      username: "Swara Ajeng Mahesa", 
      idUser: "S0848T",
      jobTitle: "Sales Manager",
    },
    {
      no: 4,
      username: "Dywantara Suroso",
      idUser: "S0848T",
      jobTitle: "Financial Analist",
    },
    {
      no: 5,
      username: "Citra Anugerah",
      idUser: "S0848T",
      jobTitle: "Programming",
    },
    {
      no: 6,
      username: "Dywantara Suroso",
      idUser: "S0848T",
      jobTitle: "Financial Analist",
    },
    {
      no: 7,
      username: "Citra Anugerah",
      idUser: "S0848T",
      jobTitle: "Programming",
    },
    {
      no: 8,
      username: "Dywantara Suroso",
      idUser: "S0848T",
      jobTitle: "Financial Analist",
    },
    {
      no: 9,
      username: "Citra Anugerah",
      idUser: "S0848T",
      jobTitle: "Programming",
    },
    {
      no: 10,
      username: "Dywantara Suroso",
      idUser: "S0848T",
      jobTitle: "Financial Analist",
    },
    {
      no: 11,
      username: "Citra Anugerah",
      idUser: "S0848T",
      jobTitle: "Programming",
    },
    {
      no: 12,
      username: "Dywantara Suroso",
      idUser: "S0848T",
      jobTitle: "Financial Analist",
    },
    {
      no: 13,
      username: "Citra Anugerah",
      idUser: "S0848T",
      jobTitle: "Programming",
    },
    {
      no: 14,
      username: "Dywantara Suroso",
      idUser: "S0848T",
      jobTitle: "Financial Analist",
    },
    {
      no: 15,
      username: "Citra Anugerah",
      idUser: "S0848T",
      jobTitle: "Programming",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedJobTitle, setSelectedJobTitle] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [newUser, setNewUser] = useState({
    username: "",
    idUser: "",
    jobTitle: "",
  });
  const itemsPerPage = 10;

  const jobTitles = ["all", ...new Set(users.map((user) => user.jobTitle))];

  const filteredUsers =
    selectedJobTitle === "all"
      ? users
      : users.filter((user) => user.jobTitle === selectedJobTitle);

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

  const handleJobTitleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedJobTitle(e.target.value);
    setCurrentPage(1);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditClick = (user: User) => {
    setSelectedUser(user);
    setNewUser({
      username: user.username,
      idUser: user.idUser,
      jobTitle: user.jobTitle,
    });
    setIsEditModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    setIsModalOpen(false);
    setNewUser({
      username: "",
      idUser: "",
      jobTitle: "",
    });
  };

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedUser) {
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.no === selectedUser.no ? { ...selectedUser, ...newUser } : user
        )
      );
    }
    setIsEditModalOpen(false);
    setSelectedUser(null);
    setNewUser({
      username: "",
      idUser: "",
      jobTitle: "",
    });
  };

  const columns: Column[] = [
    {
      header: "No",
      accessor: "no",
    },
    {
      header: "Username", 
      accessor: "username",
    },
    {
      header: "ID User",
      accessor: "idUser",
    },
    {
      header: "Job Title",
      accessor: "jobTitle", 
    },
    {
      header: "Action",
      accessor: (user: User) => (
        <div className="flex gap-2">
          <button
            onClick={() => handleEditClick(user)}
            className="text-blue-600 hover:text-blue-800"
          >
            Edit
          </button>
          <button
            onClick={() => setIsDeleteModalOpen(true)}
            className="text-red-500 hover:text-red-700"
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
        <h1 className="text-2xl text-gray-700 mb-4">Users</h1>

        <div className="mb-4 flex justify-between">
          <Button
            variant="primary"
            size="medium"
            onClick={() => setIsModalOpen(true)}
          >
            Add New User
          </Button>

          <div className="flex gap-4 text-gray-700">
            <select
              value={selectedJobTitle}
              onChange={handleJobTitleChange}
              className="px-4 py-2 rounded-lg"
            >
              {jobTitles.map((title) => (
                <option key={title} value={title}>
                  {title === "all" ? "All Job Titles" : title}
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

        <Table
          columns={columns}
          data={currentUsers}
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={itemsPerPage}
          totalItems={filteredUsers.length}
          onPageChange={setCurrentPage}
        />

        {/* Add User Modal */}
        {isModalOpen && (
          <Modal onClose={() => setIsModalOpen(false)}>
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Add New User
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2 text-gray-700">Username</label>
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
                <label className="block mb-2 text-gray-700">ID User</label>
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
                  className="w-full px-3 py-2 rounded text-gray-700"
                  required
                >
                  <option value="">Select Job Title</option>
                  {jobTitles
                    .filter((title) => title !== "all")
                    .map((title) => (
                      <option key={title} value={title}>
                        {title}
                      </option>
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
          </Modal>
        )}

        {/* Edit User Modal */}
        {isEditModalOpen && (
          <Modal onClose={() => setIsEditModalOpen(false)}>
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Edit User
            </h2>
            <form onSubmit={handleEditSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Username</label>
                <input
                  type="text"
                  name="username"
                  value={newUser.username}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 rounded text-gray-700"
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
                  className="w-full px-3 py-2 rounded text-gray-700"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Job Title</label>
                <select
                  name="jobTitle"
                  value={newUser.jobTitle}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 rounded text-gray-700"
                  required
                >
                  <option value="">Select Job Title</option>
                  {jobTitles
                    .filter((title) => title !== "all")
                    .map((title) => (
                      <option key={title} value={title}>
                        {title}
                      </option>
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
          </Modal>
        )}

        {isDeleteModalOpen && (
          <Modal onClose={() => setIsDeleteModalOpen(false)}>
            <h2 className="text-lg font-semibold text-gray-700">Delete User</h2>
            <p className="text-sm text-gray-600 mt-2">
              Apakah Anda yakin ingin menghapus user ini?
            </p>
            <div className="flex justify-end mt-4">
              <Button
                variant="red"
                size="medium"
                onClick={() => setIsDeleteModalOpen(false)}
              >
                Hapus
              </Button>
            </div>
          </Modal>
        )}
      </div>
    </Layout>
  );
};

export default UserPage;
