"use client";

import React from "react";
import Card from "@/components/common/card";
import Layout from "@/components/common/Layout";
import Calendar from "react-calendar";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import "react-calendar/dist/Calendar.css";
import {
  UserGroupIcon,
  UsersIcon,
  AcademicCapIcon,
  DocumentCheckIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const trainingData = [
  { name: "Jan", value: 15 },
  { name: "Feb", value: 20 },
  { name: "Mar", value: 25 },
  { name: "Apr", value: 18 },
  { name: "May", value: 30 },
  { name: "Jun", value: 22 },
  { name: "Jul", value: 35 },
  { name: "Aug", value: 28 },
  { name: "Sep", value: 32 },
  { name: "Oct", value: 40 },
  { name: "Nov", value: 38 },
  { name: "Dec", value: 45 },
];

const certificationTypeData = [
  { name: "Basic Training", value: 45 },
  { name: "Advanced Training", value: 30 },
  { name: "Professional Training", value: 25 },
];

const COLORS = ["#4338ca", "#fb923c", "#fbbf24"];

export default function Dashboard() {
  const upcomingTrainings = [
    {
      title: "Basic Web Development",
      date: "2024-03-25",
      trainer: "John Doe",
    },
    {
      title: "Advanced React",
      date: "2024-03-28",
      trainer: "Jane Smith",
    },
    {
      title: "Cloud Computing",
      date: "2024-04-01",
      trainer: "Mike Johnsonn",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Layout>
      <motion.div
        className="p-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          variants={itemVariants}
          className="flex justify-between items-center mb-6"
        >
          <h1 className="text-2xl font-bold text-gray-700">
            Training Dashboard
          </h1>
          <button className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
            Refresh Data
          </button>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Card className="p-6 bg-blue-50">
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-2">
                  <UserGroupIcon className="w-8 h-8 text-blue-600" />
                  <span className="text-3xl font-bold text-blue-700">22</span>
                </div>
                <span className="text-blue-600">Active Trainers</span>
              </div>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="p-6 bg-green-50">
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-2">
                  <UsersIcon className="w-8 h-8 text-green-600" />
                  <span className="text-3xl font-bold text-green-700">156</span>
                </div>
                <span className="text-green-600">Active Participants</span>
              </div>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="p-6 bg-purple-50">
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-2">
                  <AcademicCapIcon className="w-8 h-8 text-purple-600" />
                  <span className="text-3xl font-bold text-purple-700">15</span>
                </div>
                <span className="text-purple-600">Ongoing Training</span>
              </div>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="p-6 bg-orange-50">
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-2">
                  <DocumentCheckIcon className="w-8 h-8 text-orange-600" />
                  <span className="text-3xl font-bold text-orange-700">
                    289
                  </span>
                </div>
                <span className="text-orange-600">Certificates Issued</span>
              </div>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="p-6 bg-red-50">
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-2">
                  <BookOpenIcon className="w-8 h-8 text-red-600" />
                  <span className="text-3xl font-bold text-red-700">8</span>
                </div>
                <span className="text-red-600">Training Programs</span>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-2 text-gray-700">
                Monthly Training Statistics
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={trainingData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#4338ca" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="p-6">
              <h2 className="text-xl font-bold text-gray-700 mb-4">
                Training Calendar
              </h2>
              <div className="calendar-container">
                <Calendar className="w-full border-none shadow-none text-black" />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-700 mb-2">
                  Upcoming Trainings:
                </h3>
                <div className="space-y-2">
                  {upcomingTrainings.map((training, index) => (
                    <div key={index} className="bg-gray-50 p-2 rounded">
                      <div className="font-medium text-gray-700">
                        {training.title}
                      </div>
                      <div className="text-sm text-gray-500">
                        {training.date} - {training.trainer}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="p-6">
              <h2 className="text-xl font-bold text-gray-700">
                Training Type Distribution
              </h2>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={certificationTypeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={0}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) =>
                      `${name} (${(percent * 100).toFixed(0)}%)`
                    }
                  >
                    {certificationTypeData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>
    </Layout>
  );
}
