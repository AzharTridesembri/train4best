// 'use client';

// import React from 'react';
// import Card from "@/components/ui/Card";
// import Navbar from '@/components/common/Navbar';
// import Sidebar from '@/components/common/Sidebar';
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
// } from 'recharts';

// const salesData = [
//   { name: 'Jan', value: 200 },
//   { name: 'Feb', value: 300 },
//   { name: 'Mar', value: 200 },
//   { name: 'Apr', value: 500 },
//   { name: 'May', value: 700 },
//   { name: 'Jun', value: 400 },
//   { name: 'Jul', value: 1000 },
//   { name: 'Aug', value: 800 },
//   { name: 'Sep', value: 900 },
//   { name: 'Oct', value: 1100 },
//   { name: 'Nov', value: 800 },
//   { name: 'Dec', value: 1200 },
// ];

// const ageData = [
//   { name: '17 - 30 Years Old', value: 62 },
//   { name: '31 - 50 Years Old', value: 33 },
//   { name: '>= 50 Years Old', value: 10 },
// ];

// const COLORS = ['#4338ca', '#fb923c', '#fbbf24'];

// export default function Dashboard() {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <div className="fixed top-0 left-0 right-0 z-50">
//         <Navbar />
//       </div>
//       <div className="flex flex-1 pt-24">
//         <div className="fixed left-0 h-screen">
//           <Sidebar className="h-[calc(100vh-4rem)]" />
//         </div>
//         <main className="flex-1 bg-gray-50 ml-64">
//           <div className="p-6">
//             <div className="flex justify-between items-center mb-6">
//               <h1 className="text-2xl font-bold text-gray-700">General Report</h1>
//               <button className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
//                 </svg>
//                 Reload Data
//               </button>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
//               <Card className="p-6">
//                 <div className="flex flex-col">
//                   <span className="text-3xl font-bold text-gray-700">22</span>
//                   <span className="text-gray-600">total instructure</span>
//                 </div>
//               </Card>
//               <Card className="p-6">
//                 <div className="flex flex-col">
//                   <span className="text-3xl font-bold text-gray-700">209</span>
//                   <span className="text-gray-600">total value report</span>
//                 </div>
//               </Card>
//               <Card className="p-6">
//                 <div className="flex flex-col">
//                   <span className="text-3xl font-bold text-gray-700">54</span>
//                   <span className="text-gray-600">total users</span>
//                 </div>
//               </Card>
//               <Card className="p-6">
//                 <div className="flex flex-col">
//                   <span className="text-3xl font-bold text-gray-700">299</span>
//                   <span className="text-gray-600">Total participants</span>
//                 </div>
//               </Card>
//               <Card className="p-6">
//                 <div className="flex flex-col">
//                   <span className="text-3xl font-bold text-gray-700">21</span>
//                   <span className="text-gray-600">total class</span>
//                 </div>
//               </Card>
//             </div>

//             <div className="grid grid-cols- lg:grid-cols-2 gap-6">
//               <Card className="p-6">
//                 <div className="flex justify-between items-center mb-6">
//                   <div>
//                     <h2 className="text-xl font-bold mb-2 text-gray-700">Sales Report</h2>
//                     <div className="flex gap-4">
//                       <div>
//                         <span className="text-xl font-bold text-blue-600">$15.000</span>
//                         <p className="text-sm text-gray-600">This Month</p>
//                       </div>
//                       <div>
//                         <span className="text-xl font-bold text-gray-400">$10.000</span>
//                         <p className="text-sm text-gray-600">Last Month</p>
//                       </div>
//                     </div>
//                   </div>
//                   <select className="border rounded-lg px-4 py-2 text-gray-600">
//                     <option>Filter by Category</option>
//                   </select>
//                 </div>
//                 <div className="h-[300px]">
//                   <ResponsiveContainer width="100%" height="100%">
//                     <BarChart data={salesData}>
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis dataKey="name" />
//                       <YAxis />
//                       <Tooltip />
//                       <Bar dataKey="value" fill="#4338ca" />
//                     </BarChart>
//                   </ResponsiveContainer>
//                 </div>
//               </Card>

//               <div className="grid grid-rows-2 gap-6">
//                 <Card className="p-6">
//                   <div className="flex justify-between items-center mb-4">
//                     <h2 className="text-xl font-bold text-gray-700">Weekly Top Seller</h2>
//                     <button className="text-blue-600">Show More</button>
//                   </div>
//                   <div className="h-[250px]">
//                     <ResponsiveContainer width="100%" height="100%">
//                       <PieChart>
//                         <Pie
//                           data={ageData}
//                           cx="50%"
//                           cy="50%"
//                           innerRadius={0}
//                           outerRadius={80}
//                           fill="#8884d8"
//                           dataKey="value"
//                           label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
//                         >
//                           {ageData.map((entry, index) => (
//                             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                           ))}
//                         </Pie>
//                       </PieChart>
//                     </ResponsiveContainer>
//                   </div>
//                 </Card>

//                 <Card className="p-6">
//                   <div className="flex justify-between items-center mb-4">
//                     <h2 className="text-xl font-bold text-gray-700">Sales Report</h2>
//                     <button className="text-blue-600">Show More</button>
//                   </div>
//                   <div className="h-[250px]">
//                     <ResponsiveContainer width="100%" height="100%">
//                       <PieChart>
//                         <Pie
//                           data={ageData}
//                           cx="50%"
//                           cy="50%"
//                           innerRadius={60}
//                           outerRadius={80}
//                           fill="#8884d8"
//                           dataKey="value"
//                           label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
//                         >
//                           {ageData.map((entry, index) => (
//                             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                           ))}
//                         </Pie>
//                       </PieChart>
//                     </ResponsiveContainer>
//                   </div>
//                 </Card>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }


'use client';

import React from 'react';
import Card from '@/components/ui/Card';
import Navbar from '@/components/common/Navbar';
import Sidebar from '@/components/common/Sidebar';
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
} from 'recharts';

const salesData = [
  { name: 'Jan', value: 200 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 200 },
  { name: 'Apr', value: 500 },
  { name: 'May', value: 700 },
  { name: 'Jun', value: 400 },
  { name: 'Jul', value: 1000 },
  { name: 'Aug', value: 800 },
  { name: 'Sep', value: 900 },
  { name: 'Oct', value: 1100 },
  { name: 'Nov', value: 800 },
  { name: 'Dec', value: 1200 },
];

const ageData = [
  { name: '17 - 30 Years Old', value: 62 },
  { name: '31 - 50 Years Old', value: 33 },
  { name: '>= 50 Years Old', value: 10 },
];

const COLORS = ['#4338ca', '#fb923c', '#fbbf24'];

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div className="flex flex-1 pt-24">
        <div className="fixed left-0 h-screen">
          <Sidebar className="h-[calc(100vh-4rem)]" />
        </div>
        <main className="flex-1 bg-gray-50 ml-64">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-700">General Report</h1>
              <button className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                Reload Data
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
              {[22, 209, 54, 299, 21].map((value, index) => (
                <Card key={index} className="p-6">
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-gray-700">{value}</span>
                    <span className="text-gray-600">{['total instructure', 'total value report', 'total users', 'Total participants', 'total class'][index]}</span>
                  </div>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols- lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-2 text-gray-700">Sales Report</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#4338ca" />
                  </BarChart>
                </ResponsiveContainer>
              </Card>
              <Card className="p-6">
                <h2 className="text-xl font-bold text-gray-700">Weekly Top Seller</h2>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie data={ageData} cx="50%" cy="50%" innerRadius={0} outerRadius={80} fill="#8884d8" dataKey="value">
                      {ageData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
