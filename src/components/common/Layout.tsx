import { FC, ReactNode, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
// import Footer from './Footer'; tidak terpakai

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  // Tambahkan state untuk mobile sidebar
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleMobileOpen = () => {
    console.log("Toggle mobile menu"); // update pesan debug
    setIsMobileOpen(!isMobileOpen); // toggle state
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        onMobileMenuClick={handleMobileOpen} 
        toggleSidebar={handleMobileOpen}
      />
      <div className="flex flex-1 relative">
        <Sidebar
          isMobileOpen={isMobileOpen}
          onMobileClose={handleMobileOpen}
        />
        <main className="flex-1 p-4 bg-gray-50">{children}</main>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
