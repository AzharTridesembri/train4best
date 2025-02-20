import { FC, ReactNode } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
// import Footer from './Footer'; tidak terpakai

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 bg-gray-50">
          {children}
        </main>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
