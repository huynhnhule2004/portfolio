import { Mail, Github, Facebook, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-teal-50/50 to-pink-50/50 py-12 border-t border-teal-200">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center items-center mb-6"
        >
          <motion.div
            className="w-12 h-12 bg-gradient-to-r from-teal-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            LN
          </motion.div>
          <span className="ml-3 text-xl font-semibold text-gray-900 tracking-tight">
            Lê Thị Huỳnh Như
          </span>
        </motion.div>
        <p className="text-gray-600 mb-6 text-base max-w-xl mx-auto leading-relaxed">
          Nhà phát triển Full Stack sáng tạo, tốt nghiệp FPT Polytechnic Cần Thơ, luôn đam mê kiến tạo những sản phẩm công nghệ ý nghĩa.
        </p>
        <div className="flex justify-center space-x-8 mb-8">
          <motion.a
            href="mailto:huynhnhule20024@gmail.com"
            className="text-teal-500 hover:text-teal-700"
            whileHover={{ scale: 1.3, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            title="Email"
          >
            <Mail className="w-7 h-7" />
          </motion.a>
          <motion.a
            href="https://github.com/huynhnhule2004"
            className="text-teal-500 hover:text-teal-700"
            whileHover={{ scale: 1.3, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            title="GitHub"
          >
            <Github className="w-7 h-7" />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/huynh.nhu.le.245606/"
            className="text-teal-500 hover:text-teal-700"
            whileHover={{ scale: 1.3, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            title="Facebook"
          >
            <Facebook className="w-7 h-7" />
          </motion.a>
          <motion.a
            href="tel:+84364402449"
            className="text-teal-500 hover:text-teal-700"
            whileHover={{ scale: 1.3, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            title="Phone"
          >
            <Phone className="w-7 h-7" />
          </motion.a>
        </div>
        <p className="text-sm text-gray-500">
          © 2025 Lê Thị Huỳnh Như. Được tạo với <span className="text-pink-400">❤️</span> bằng NextJs & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;