'use client';

import React, { FC, useState } from 'react';
import Link from 'next/link';
import { ChevronDown, LayoutDashboard, Users, BookOpen, FileText, ClipboardList } from 'lucide-react';

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
    title: 'dashboard',
    icon: <LayoutDashboard size={20} />,
    path: '/dashboard'
  },
  {
    title: 'user management', 
    icon: <Users size={20} />,
    submenu: [ 
      { title: 'user', path: '/user', icon: <Users size={16} /> },
      { title: 'usertype', path: '/usertype', icon: <Users size={16} /> },
      { title: 'user rule', path: '/user-rule', icon: <ClipboardList size={16} /> },
      { title: 'instructure', path: '/instructure', icon: <Users size={16} /> },
      { title: 'participant', path: '/participant', icon: <Users size={16} /> },
    ]
  },
  {
    title: 'training management',
    icon: <BookOpen size={20} />,
    submenu: [
      { title: 'course schedule', path: '/course-schedule', icon: <ClipboardList size={16} /> },
      { title: 'course type', path: '/course-type', icon: <BookOpen size={16} /> },
      { title: 'courses', path: '/courses', icon: <BookOpen size={16} />  },
      { title: 'list certificate', path: '/list-certificate', icon: <FileText size={16} /> },
    ]
  },
  {
    title: 'report',
    icon: <FileText size={20} />,
    submenu: [
      { title: 'certificate expired', path: '/certificate-expired', icon: <FileText size={16} /> },
      { title: 'payment report', path: '/payment-report', icon: <FileText size={16} /> },
    ]
  }
];

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const handleMouseEnter = (title: string) => {
    if (!openMenus.includes(title)) {
      setOpenMenus(prev => [...prev, title]);
    }
  };

  const handleMouseLeave = (title: string) => {
    if (openMenus.includes(title)) {
      setOpenMenus(prev => prev.filter(item => item !== title));
    }
  };

  return (
    <div className={`w-64 bg-[#E7E7E7] min-h-screen h-full shadow-lg ${className || ''}`}>
      <div className="p-4 space-y-4">
        {menuItems.map((item) => (
          <div key={item.title}>
            {item.submenu ? (
              <div
                onMouseEnter={() => handleMouseEnter(item.title)}
                onMouseLeave={() => handleMouseLeave(item.title)}
              >
                <button
                  className="flex items-center justify-between w-full p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span className="text-sm font-medium">{item.title}</span>
                  </div>
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform ${
                      openMenus.includes(item.title) ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openMenus.includes(item.title) && (
                  <div className="ml-9 mt-2 space-y-2">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.path}
                        href={subItem.path}
                        className={`flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 py-1 px-2 rounded ${subItem.className || ''}`}
                      >
                        {subItem.icon}
                        <span>{subItem.title}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                href={item.path || '#'}
                className="flex items-center gap-3 p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {item.icon}
                <span className="text-sm font-medium">{item.title}</span>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;