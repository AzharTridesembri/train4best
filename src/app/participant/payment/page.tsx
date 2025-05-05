"use client";

import { useState } from "react";
import Table from "@/components/common/table";
import Layout from "@/components/common/Layout";

interface Payment {
  id: number;
  nama: string;
  tanggal: string;
  paymentMethod: string;
  nomorReferensi: string;
  jumlah: string;
  status: "Paid" | "Unpaid";
}

interface Column<T> {
  header: string;
  accessor: keyof T | ((data: T) => React.ReactNode);
  className?: string;
}

export default function PaymentReport() {
  const [currentPage, setCurrentPage] = useState(1);
  const [payments] = useState<Payment[]>([
    {
      id: 1,
      nama: "Ilham Ramadhan",
      tanggal: "01-02-2024", 
      paymentMethod: "Transfer Bank",
      nomorReferensi: "TRF-20240108-001",
      jumlah: "Rp. 1.000.000,-",
      status: "Paid"
    },
    {
      id: 2,
      nama: "Risky Febriana",
      tanggal: "01-10-2024",
      paymentMethod: "E-Wallet",
      nomorReferensi: "EWL-20240110-001",
      jumlah: "Rp. 1.000.000,-",
      status: "Unpaid"
    },
    // Tambahkan data lainnya untuk testing pagination
    {
      id: 3,
      nama: "Affine Makarizo",
      tanggal: "01-05-2024",
      paymentMethod: "Kartu Kredit",
      nomorReferensi: "CC-20240105-002",
      jumlah: "Rp. 1.000.000,-",
      status: "Unpaid"
    },
    {
      id: 4,
      nama: "Cyntia Febiola",
      tanggal: "02-12-2024",
      paymentMethod: "Transfer Bank",
      nomorReferensi: "TRF-20240212-002",
      jumlah: "Rp. 2.000.000,-",
      status: "Unpaid"
    },
    {
      id: 5,
      nama: "Saska Khairani",
      tanggal: "02-02-2024",
      paymentMethod: "E-Wallet",
      nomorReferensi: "EWL-20240112-002",
      jumlah: "Rp. 2.000.000,-",
      status: "Paid"
    }
  ]);

  const columns: Column<Payment>[] = [
    { 
      header: "No", 
      accessor: "id",
      className: "w-12 text-center"
    },
    { 
      header: "Nama", 
      accessor: "nama",
      className: "min-w-[120px]"
    },
    { 
      header: "Tanggal", 
      accessor: "tanggal",
      className: "min-w-[100px]"
    },
    { 
      header: "Payment Method", 
      accessor: "paymentMethod",
      className: "min-w-[120px]"
    },
    { 
      header: "Nomor Referensi", 
      accessor: "nomorReferensi",
      className: "min-w-[140px]"
    },
    { 
      header: "Jumlah (idr)", 
      accessor: "jumlah",
      className: "min-w-[100px]"
    },
    {
      header: "Status",
      accessor: (payment: Payment) => (
        <span
          className={`px-1 py-0.5 text-xs font-medium rounded-full ${
            payment.status === "Paid"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {payment.status}
        </span>
      ),
      className: "min-w-[80px]"
    },
    {
      header: "Action",
      accessor: () => (
        <button className="text-blue-600 hover:text-blue-900 p-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
            <path fill="currentColor" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
          </svg>
        </button>
      ),
      className: "w-12 text-center"
    },
  ];

  const ITEMS_PER_PAGE = 5;
  const totalPages = Math.ceil(payments.length / ITEMS_PER_PAGE);

  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return payments.slice(startIndex, endIndex);
  };

  return (
    <Layout variant="participant">
      <div className="p-2">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-2">
          <h1 className="text-lg md:text-xl text-gray-700">Payment Report</h1>
          
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <select className="w-full sm:w-auto px-2 py-1 text-xs border rounded">
              <option value="">Payment</option>
              <option value="transfer">Transfer Bank</option>
              <option value="ewallet">E-Wallet</option>
              <option value="credit">Kartu Kredit</option>
            </select>

            <button className="w-full sm:w-auto border px-2 py-1 rounded flex items-center justify-center gap-1 text-xs text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3h-7z"/>
              </svg>
              Print File
            </button>

            <div className="relative w-full sm:w-auto">
              <input 
                type="text"
                placeholder="Search..."
                className="w-full px-2 py-1 pl-7 text-xs border rounded"
              />
              <svg 
                className="absolute left-2 top-1/2 -translate-y-1/2" 
                xmlns="http://www.w3.org/2000/svg" 
                width="14" 
                height="14" 
                viewBox="0 0 24 24"
              >
                <path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto -mx-2 px-2">
          <Table
            columns={columns}
            data={getCurrentPageItems()}
            currentPage={currentPage}
            totalPages={totalPages}
            itemsPerPage={ITEMS_PER_PAGE}
            totalItems={payments.length}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </Layout>
  );
}
