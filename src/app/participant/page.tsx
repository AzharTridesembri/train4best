"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "@/components/common/button";
import Modal from "@/components/common/Modal";
import { useRouter } from "next/navigation";
import Layout from "@/components/common/Layout";

interface Participant {
  id: string;
  name: string;
  role: string;
  image: string;
  address: string;
  phone_number: string;
  birth_date: string;
  job_title: string;
  company: string;
  gender: string;
}

const ParticipantPage = () => {
  const router = useRouter();
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const participants: Participant[] = [
    {
      id: "1",
      name: "Dede Wijaya",
      role: "Instructor",
      image: "/default-avatar.png",
      address: "Jl. Sudirman No. 123, Jakarta Pusat",
      phone_number: "+62 812-3456-7890",
      birth_date: "15 Januari 1990",
      job_title: "Instructor",
      company: "PT Maju Bersama",
      gender: "Laki-laki",
    },
    {
      id: "2",
      name: "Alvin.Z",
      role: "Programer",
      image: "/sunset-avatar.png",
      address: "Jl. Sudirman No. 123, Jakarta Pusat",
      phone_number: "+62 812-3456-7890",
      birth_date: "15 Januari 1990",
      job_title: "Programer",
      company: "PT Maju Bersama",
      gender: "Laki-laki",
    },
    {
      id: "3",
      name: "ilham",
      role: "Participant",
      image: "/default-avatar.png",
      address: "Jl. Sudirman No. 123, Jakarta Pusat",
      phone_number: "+62 812-3456-7890",
      birth_date: "15 Januari 1990",
      job_title: "Participant",
      company: "PT Maju Bersama",
      gender: "Laki-laki",
    },
    {
      id: "4",
      name: "ashar",
      role: "Instructor",
      image: "/default-avatar.png",
      address: "Jl. Sudirman No. 123, Jakarta Pusat",
      phone_number: "+62 812-3456-7890",
      birth_date: "15 Januari 1990",
      job_title: "Instructor",
      company: "PT Maju Bersama",
      gender: "Laki-laki",
    },
    // Tambahkan data participant lainnya di sini
  ];

  const handleDetailClick = () => {
    router.push(`/participant/detail`);
  };

  return (
    <Layout>
      <div className="p-2">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-2">
          <h1 className="text-lg md:text-xl text-gray-600">Participants</h1>
          <div className="relative w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-2 py-1 text-xs rounded-lg border text-gray-700 border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-300"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {participants.map((participant) => (
            <div
              key={participant.id}
              className="bg-white rounded-lg p-2 flex flex-col sm:flex-row items-center justify-between shadow-sm gap-2"
            >
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <Image
                    src={participant.image}
                    alt={participant.name}
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-700">
                    {participant.name}
                  </h3>
                  <p className="text-xs text-gray-600">{participant.role}</p>
                </div>
              </div>

              <div className="flex gap-1 w-full sm:w-auto justify-end">
                <Button
                  variant="yellow"
                  size="small"
                  onClick={() => setIsHistoryModalOpen(true)}
                  className="text-xs px-2 py-1"
                >
                  History
                </Button>
                <Button
                  variant="primary"
                  size="small"
                  onClick={handleDetailClick}
                  className="text-xs px-2 py-1"
                >
                  Detail
                </Button>
                <Button
                  variant="red"
                  size="small"
                  onClick={() => setIsDeleteModalOpen(true)}
                  className="text-xs px-2 py-1"
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isHistoryModalOpen && (
        <Modal onClose={() => setIsHistoryModalOpen(false)}>
          <h2 className="text-base font-semibold text-gray-700 mb-2">History</h2>
          <div className="mt-2 space-y-2">
            <div className="border-b pb-2">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-gray-700">Perubahan Status</p>
                  <p className="text-xs text-gray-600">Aktif ke Tidak Aktif</p>
                </div>
                <span className="text-xs text-gray-500">20 Jan 2024</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">Diubah oleh: Admin</p>
            </div>

            <div className="border-b pb-2">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-gray-700">Perubahan Data</p>
                  <p className="text-xs text-gray-600">Pembaruan Peran</p>
                </div>
                <span className="text-xs text-gray-500">15 Jan 2024</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">Diubah oleh: Supervisor</p>
            </div>

            <div className="border-b pb-2">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-gray-700">Pendaftaran</p>
                  <p className="text-xs text-gray-600">Peserta baru ditambahkan</p>
                </div>
                <span className="text-xs text-gray-500">10 Jan 2024</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">Dibuat oleh: Admin</p>
            </div>
          </div>
        </Modal>
      )}

      {isDetailModalOpen && (
        <Modal onClose={() => setIsDetailModalOpen(false)}>
          <h2 className="text-base font-semibold text-gray-700 mb-2">Detail Participant</h2>
          <div className="space-y-2">
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src="/default-avatar.png"
                  alt="Participant photo"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              <div>
                <p className="text-xs text-gray-500">Nama Lengkap</p>
                <p className="text-sm text-gray-700">{participants[0].name}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Jenis Kelamin</p>
                <p className="text-sm text-gray-700">{participants[0].gender}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Tanggal Lahir</p>
                <p className="text-sm text-gray-700">{participants[0].birth_date}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Nomor Telepon</p>
                <p className="text-sm text-gray-700">{participants[0].phone_number}</p>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <p className="text-xs text-gray-500">Alamat</p>
                <p className="text-sm text-gray-700">{participants[0].address}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Jabatan</p>
                <p className="text-sm text-gray-700">{participants[0].job_title}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Perusahaan</p>
                <p className="text-sm text-gray-700">{participants[0].company}</p>
              </div>
            </div>
          </div>
        </Modal>
      )}

      {isDeleteModalOpen && (
        <Modal onClose={() => setIsDeleteModalOpen(false)}>
          <h2 className="text-base font-semibold text-gray-700">Delete Participant</h2>
          <p className="text-xs text-gray-600 mt-2">
            Apakah Anda yakin ingin menghapus peserta ini?
          </p>
          <div className="flex justify-end mt-2">
            <Button
              variant="red"
              size="small"
              onClick={() => setIsDeleteModalOpen(false)}
              className="text-xs px-2 py-1"
            >
              Hapus
            </Button>
          </div>
        </Modal>
      )}
    </Layout>
  );
};

export default ParticipantPage;
