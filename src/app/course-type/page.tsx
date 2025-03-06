"use client";

import Image from "next/image";
import { Eye, PenSquare, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import Pagination from "@/components/common/Pagination";
import Button from "@/components/common/button";
import Modal from "@/components/common/Modal";
import Card from "@/components/common/card";
import Layout from "@/components/common/Layout";

export default function CourseType() {
  const courseTypes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(courseTypes.length / itemsPerPage);

  const getCurrentItems = () => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return courseTypes.slice(indexOfFirstItem, indexOfLastItem);
  };

  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-2xl text-gray-600 mb-6">Course Type</h1>

        <div className="flex gap-2 mb-6">
          <Button
            variant="primary"
            size="medium"
            onClick={() => setIsModalOpen(true)}
          >
            <Plus size={16} className="mr-2" /> Add Course Type
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {getCurrentItems().map((item) => (
            <div
              key={item}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <Card>
                <div className="relative h-48 w-full">
                  <Image
                    src={item % 2 === 0 ? "/code.jpg" : "/aiot.jpg"}
                    alt="Course Type"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-gray-700 mb-4">Course Type : Online</p>
                  <div className="flex justify-between">
                    <button className="text-gray-600">
                      <Eye size={20} />
                    </button>
                    <div className="flex gap-2">
                      <button className="text-gray-600">
                        <PenSquare size={20} />
                      </button>
                      <button className="text-red-500">
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <h2 className="text-lg font-semibold">Add New Course Type</h2>
          <form>
            <input
              type="text"
              placeholder="Course Type Name"
              className="border p-2 rounded"
            />
            <button
              type="submit"
              className="mt-2 bg-blue-600 text-white p-2 rounded"
            >
              Submit
            </button>
          </form>
        </Modal>
      )}
    </Layout>
  );
}
