'use client';

import { FC, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bell, LogOut, User, UserPlus, Key, HelpCircle } from 'lucide-react';

const Navbar: FC = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <nav className="bg-[#1303c6] text-white py-3 mt-4 mx-4 rounded-2xl shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo dan Brand */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="img/logoT4B.png" alt="Train4best Logo" width={120} height={20} />
            </Link>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/application" className="hover:text-gray-200">
                Application
              </Link>
              <Link href="/dashboard" className="hover:text-gray-200">
                Dashboard
              </Link>
            </div>
          </div>

          {/* Right Side - Notifications & Profile */}
          <div className="flex items-center space-x-6">
            {/* Notifications */}
            <button className="relative hover:text-gray-200">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </button>

            {/* Profile with Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-3"
              >
                <Image
                  src="/img/profile.png"
                  alt="Profile"
                  width={42}
                  height={42}
                  className="rounded-full"
                />
              </button>

              {/* Dropdown Menu */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-[#4338CA] rounded-lg shadow-lg py-1">
                  <div className="px-4 py-2 border-b border-indigo-600">
                    <p className="font-medium">John Deo</p>
                    <p className="text-sm text-gray-300">Frontend Engineer</p>
                  </div>
                  
                  <Link href="/profile" className="flex items-center space-x-2 px-4 py-2 hover:bg-indigo-600">
                    <User size={16} />
                    <span>Profile</span>
                  </Link>
                  
                  <Link href="/add-account" className="flex items-center space-x-2 px-4 py-2 hover:bg-indigo-600">
                    <UserPlus size={16} />
                    <span>Add Account</span>
                  </Link>
                  
                  <Link href="/reset-password" className="flex items-center space-x-2 px-4 py-2 hover:bg-indigo-600">
                    <Key size={16} />
                    <span>Reset Password</span>
                  </Link>
                  
                  <Link href="/help" className="flex items-center space-x-2 px-4 py-2 hover:bg-indigo-600">
                    <HelpCircle size={16} />
                    <span>Help</span>
                  </Link>
                  
                  <div className="border-t border-indigo-600">
                    <button className="flex items-center space-x-2 px-4 py-2 w-full hover:bg-indigo-600 text-left">
                      <LogOut size={16} />
                      <span>Log Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
