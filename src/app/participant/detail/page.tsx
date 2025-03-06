"use client";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/common/Layout";

const ParticipantDetail = () => {
  return (
    <Layout>
      <div className="p-6 space-y-6">
        {/* Profile Header */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h1 className="text-xl text-gray-600 mb-4">Profile Participants</h1>

          <div className="flex items-start gap-6">
            {/* Profile Image and Name */}
            <div className="flex items-center gap-4">
              <Image
                src="/img/profile-placeholder.jpg" // Sesuaikan dengan path gambar yang benar
                alt="Profile"
                width={80}
                height={80}
                className="rounded-full"
              />
              <div>
                <h2 className="text-lg font-medium">Alvin.Z</h2>
                <p className="text-gray-500">Programmer</p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="ml-8">
              <h3 className="text-gray-600 mb-2">Contact Detail</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">📧</span>
                  <span>Alvin123@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">@</span>
                  <span>AlvinZ</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">📱</span>
                  <span>0896 9999 3333</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-6 border-b">
          <Link
            href="/participant/detail/dashboard"
            className="pb-2 text-gray-600 border-b-2 border-gray-600"
          >
            Dashboard
          </Link>
          <Link
            href="/participant/detail/account"
            className="pb-2 text-gray-500"
          >
            Account & Profile
          </Link>
          <Link
            href="/participant/detail/activities"
            className="pb-2 text-gray-500"
          >
            Activities
          </Link>
          <Link href="/participant/detail/tasks" className="pb-2 text-gray-500">
            Tasks
          </Link>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-2 gap-6">
          {/* Top Categories */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-gray-600 mb-4">Top Categories</h2>
            {/* Add your categories content here */}
          </div>

          {/* Training in Progress */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-gray-600 mb-4">Training In Progress</h2>
            <div className="space-y-4">
              {/* Progress bars */}
              <div className="space-y-2">
                <div className="h-2 bg-blue-200 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-blue-600 rounded-full"></div>
                </div>
                <div className="h-2 bg-red-200 rounded-full overflow-hidden">
                  <div className="h-full w-1/2 bg-red-600 rounded-full"></div>
                </div>
                <div className="h-2 bg-yellow-200 rounded-full overflow-hidden">
                  <div className="h-full w-4/5 bg-yellow-500 rounded-full"></div>
                </div>
                <div className="h-2 bg-orange-200 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-orange-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ParticipantDetail;
