"use client";

import React, { useState } from "react";
import Layout from "@/components/common/Layout";
import { Printer, FileText } from "lucide-react";
import Table from "@/components/common/table";

interface Certificate {
  no: number;
  name: string;
  certificateNumber: string;
  issueDate: string;
  validDate: string;
}

interface Column<T> {
  header: string;
  accessor: keyof T | ((data: T) => React.ReactNode);
}

const CertificatePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const certificates: Certificate[] = [
    {
      no: 1,
      name: "Ilham Ramadhan",
      certificateNumber: "1342456789",
      issueDate: "20 Maret 2024",
      validDate: "20 Maret 2025",
    },
    {
      no: 2,
      name: "Risky Febriana",
      certificateNumber: "1342456789",
      issueDate: "26 Januari 2025",
      validDate: "20 januari 2026",
    },
    {
      no: 3,
      name: "Alfine Makarizo",
      certificateNumber: "1342456789",
      issueDate: "21 Maret 2025",
      validDate: "20 Maret 2026",
    },
    {
      no: 4,
      name: "Cyntia Febiola",
      certificateNumber: "1342456789",
      issueDate: "8 Mei 2025",
      validDate: "20 Maret 2026",
    },
    {
      no: 5,
      name: "Saska Khairani",
      certificateNumber: "1342456789",
      issueDate: "20 Desember 2025",
      validDate: "20 Maret 2026",
    },
  ];

  const columns: Column<Certificate>[] = [
    { header: "No", accessor: "no" },
    { header: "Name", accessor: "name" },
    { header: "Certificate Number", accessor: "certificateNumber" },
    { header: "Issue Date", accessor: "issueDate" },
    { header: "Valid Date", accessor: "validDate" },
    {
      header: "Action",
      accessor: () => (
        <div className="flex gap-2">
          <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
            <Printer size={20} /> Print
          </button>
          <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
            <FileText size={20} /> Detail
          </button>
        </div>
      ),
    },
  ];

  const ITEMS_PER_PAGE = 5;
  const totalPages = Math.ceil(certificates.length / ITEMS_PER_PAGE);

  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return certificates.slice(startIndex, endIndex);
  };

  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-2xl text-gray-700 mb-6">List Certificate</h1>

        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-4">
            <input
              type="date"
              className="px-4 py-2 border rounded-lg"
              placeholder="Start Date"
            />
            <input
              type="date"
              className="px-4 py-2 border rounded-lg"
              placeholder="End Date"
            />
          </div>

          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
              <Printer size={20} />
              Print File
            </button>
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border rounded-lg"
            />
          </div>
        </div>

        <Table
          columns={columns}
          data={getCurrentPageItems()}
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={ITEMS_PER_PAGE}
          totalItems={certificates.length}
          onPageChange={setCurrentPage}
        />
      </div>
    </Layout>
  );
};

export default CertificatePage;
