"use client";

import React, { useState } from "react";
import type { ReactElement } from "react";
import Button from "@/components/common/button";
import Modal from "@/components/common/Modal";
import Layout from "@/components/common/Layout";
import Table from "@/components/common/table";

interface Rule {
  no: number;
  roleName: string;
  description: string;
  status: "Active" | "Inactive";
}

interface Column {
  header: string;
  accessor: keyof Rule | ((data: Rule) => React.ReactNode);
}

export default function UserRulePage(): ReactElement {
  const userRules: Rule[] = [
    {
      no: 1,
      roleName: "Super Admin",
      description: "Full access to all features",
      status: "Active",
    },
    {
      no: 2,
      roleName: "Admin",
      description: "Manage users and content",
      status: "Active",
    },
    {
      no: 3,
      roleName: "Manager",
      description: "View reports and manage team",
      status: "Active",
    },
    {
      no: 4,
      roleName: "Staff",
      description: "Basic access to system",
      status: "Active",
    },
    {
      no: 5,
      roleName: "Guest",
      description: "Limited view access",
      status: "Inactive",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [newRule, setNewRule] = useState({
    roleName: "",
    description: "",
    status: "Active" as "Active" | "Inactive",
  });

  const handleEditClick = (rule: Rule) => {
    setNewRule({
      roleName: rule.roleName,
      description: rule.description,
      status: rule.status,
    });
    setIsEditModalOpen(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewRule((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(false);
    setNewRule({
      roleName: "",
      description: "",
      status: "Active",
    });
  };

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditModalOpen(false);
    setNewRule({
      roleName: "",
      description: "",
      status: "Active",
    });
  };

  const columns: Column[] = [
    {
      header: "No",
      accessor: "no",
    },
    {
      header: "Role Name",
      accessor: "roleName",
    },
    {
      header: "Description", 
      accessor: "description",
    },
    {
      header: "Status",
      accessor: (rule) => (
        <span
          className={`px-2 py-1 rounded text-sm ${
            rule.status === "Active"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {rule.status}
        </span>
      ),
    },
    {
      header: "Action",
      accessor: (rule) => (
        <div className="flex gap-2">
          <button
            onClick={() => handleEditClick(rule)}
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
        <h1 className="text-2xl text-gray-700 mb-4">User Rules</h1>

        <div className="flex justify-between mb-4">
          <Button
            variant="primary"
            size="medium"
            onClick={() => setIsModalOpen(true)}
          >
            Add New Rule
          </Button>
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border rounded-lg"
          />
        </div>

        <Table columns={columns} data={userRules} />

        {/* Add Rule Modal */}
        {isModalOpen && (
          <Modal onClose={() => setIsModalOpen(false)}>
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Add New Rule
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Role Name</label>
                <input
                  type="text"
                  name="roleName"
                  value={newRule.roleName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded text-gray-700"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Description</label>
                <input
                  type="text"
                  name="description"
                  value={newRule.description}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded text-gray-700"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Status</label>
                <select
                  name="status"
                  value={newRule.status}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded text-gray-700"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
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
                  Add Rule
                </button>
              </div>
            </form>
          </Modal>
        )}

        {/* Edit Rule Modal */}
        {isEditModalOpen && (
          <Modal onClose={() => setIsEditModalOpen(false)}>
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Edit Rule
            </h2>
            <form onSubmit={handleEditSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Role Name</label>
                <input
                  type="text"
                  name="roleName"
                  value={newRule.roleName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded text-gray-700"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Description</label>
                <input
                  type="text"
                  name="description"
                  value={newRule.description}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded text-gray-700"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Status</label>
                <select
                  name="status"
                  value={newRule.status}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded text-gray-700"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
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
            <h2 className="text-lg font-semibold text-gray-700">Delete Rule</h2>
            <p className="text-sm text-gray-600 mt-2">
              Apakah Anda yakin ingin menghapus rule ini?
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
}
