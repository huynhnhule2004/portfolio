import { navItems } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from "next/link";

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage, isMenuOpen, setIsMenuOpen }) => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50"
    >
      <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center py-4">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <button onClick={() => setCurrentPage("home")} className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                LN
              </div>
              <span className="ml-3 text-lg font-semibold text-gray-900 tracking-tight">
                Lê Thị Huỳnh Như
              </span>
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-wrap space-x-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-colors flex items-center ${currentPage === item.id
                      ? 'bg-teal-100 text-teal-700'
                      : 'text-gray-700 hover:text-teal-600 hover:bg-teal-50'
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.label}
                </motion.button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-full text-gray-700 hover:text-teal-600 hover:bg-teal-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden pb-4"
          >
            <div className="grid grid-cols-2 gap-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`px-4 py-3 rounded-full text-xs font-medium transition-colors flex items-center ${currentPage === item.id
                        ? 'bg-teal-100 text-teal-700'
                        : 'text-gray-700 hover:text-teal-600 hover:bg-teal-50'
                      }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;