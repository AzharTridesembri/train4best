"use client";

import React, { FC, useState } from "react";
import Link from "next/link";

import {
  LayoutDashboard,
  Users,
  BookOpen,
  FileText,
  ClipboardList,
  ChevronDown,
} from "lucide-react";

interface MenuItem {
  title: string;
  icon: React.ReactNode;
  path?: string;
  submenu?: {
    title: string;
    path: string;
    icon: React.ReactNode;
    className?: string;
  }[];
}

const menuItems: MenuItem[] = [
  {
    title: "Dashboard",
    icon: <LayoutDashboard size={20} />,
    path: "/dashboard",
  },
  {
    title: "User management",
    icon: <Users size={20} />,
    submenu: [
      { title: "user", path: "/user", icon: <Users size={16} /> },
      { title: "usertype", path: "/usertype", icon: <Users size={16} /> },
      {
        title: "user rule",
        path: "/user-rule",
        icon: <ClipboardList size={16} />,
      },
      { title: "instructure", path: "/instructure", icon: <Users size={16} /> },
      { title: "participant", path: "/participant", icon: <Users size={16} /> },
    ],
  },
  {
    title: "Training management",
    icon: <BookOpen size={20} />,
    submenu: [
      {
        title: "course schedule",
        path: "/course-schedule",
        icon: <ClipboardList size={16} />,
      },
      {
        title: "course type",
        path: "/course-type",
        icon: <BookOpen size={16} />,
      },
      { title: "courses", path: "/courses", icon: <BookOpen size={16} /> },
      {
        title: "list certificate",
        path: "/list-certificate",
        icon: <FileText size={16} />,
      },
    ],
  },
  {
    title: "Report",
    icon: <FileText size={20} />,
    submenu: [
      {
        title: "certificate expired",
        path: "/certificate-expired",
        icon: <FileText size={16} />,
      },
      {
        title: "payment report",
        path: "/payment-report",
        icon: <FileText size={16} />,
      },
    ],
  },
];

export interface SidebarProps {
  isMobileOpen: boolean;
  onMobileClose: () => void;
}

const Sidebar: FC<SidebarProps> = ({ isMobileOpen, onMobileClose }) => {
  const [openMenus, setOpenMenus] = useState<string[]>([
    "User management",
    "Training management",
    "Report",
  ]);

  const toggleMenu = (title: string) => {
    setOpenMenus((prev) => {
      if (prev.includes(title)) {
        return prev.filter((item) => item !== title);
      } else {
        return [...prev, title];
      }
    });
  };

  return (
    <>
      {/* Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:sticky top-0 left-0 z-50
          w-64 h-screen bg-[#E7E7E7]
          transition-transform duration-300 ease-in-out
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="p-4 flex justify-end md:hidden">
            <button
              onClick={() => {
                onMobileClose();
                document.body.style.overflow = 'auto';
              }}
              className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Menu Items dengan custom scrollbar */}
          <div className="flex-1 overflow-y-auto px-4 py-2 scrollbar-hide">
            <div className="space-y-2 pb-24">
              {menuItems.map((item) => (
                <div key={item.title} className="space-y-2">
                  {item.submenu ? (
                    <div className="space-y-3">
                      <button
                        onClick={() => toggleMenu(item.title)}
                        className="flex items-center justify-between w-full p-2.5 text-gray-700 hover:bg-gray-200 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          {item.icon}
                          <span className="text-sm font-medium">
                            {item.title}
                          </span>
                        </div>
                        <ChevronDown
                          size={16}
                          className={`transform transition-transform ${
                            openMenus.includes(item.title) ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`ml-9 space-y-3 ${
                          openMenus.includes(item.title) ? "block" : "hidden"
                        }`}
                      >
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.path}
                            href={subItem.path}
                            className={`flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 py-2 px-3 rounded transition-colors ${
                              subItem.className || ""
                            }`}
                          >
                            {subItem.icon}
                            <span>{subItem.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.path || "#"}
                      className="flex items-center gap-3 p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                    >
                      {item.icon}
                      <span className="text-sm font-medium">{item.title}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
