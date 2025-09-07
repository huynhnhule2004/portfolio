import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FolderOpen, Mail, Download } from 'lucide-react';
import { motion } from 'framer-motion';

interface HomeSectionProps {
  typedText: string;
  setCurrentPage: (page: string) => void;
}

const HomeSection: React.FC<HomeSectionProps> = ({ typedText, setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-pink-50 to-purple-50 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        <div className="relative mb-10">
          <motion.div
            className="w-36 h-36 mx-auto rounded-full bg-gradient-to-r from-teal-400 to-pink-500 flex items-center justify-center text-white text-5xl font-bold shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            LN
          </motion.div>
          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-pink-400 rounded-full border-4 border-white animate-pulse"></div>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">
          Lê Thị Huỳnh Như
        </h1>

        <div className="h-10 mb-6">
          <motion.p
            className="text-xl md:text-2xl text-teal-600 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {typedText}
            <span className="animate-pulse">|</span>
          </motion.p>
        </div>

        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          Nhà phát triển Full Stack đam mê sáng tạo giải pháp công nghệ, tốt nghiệp FPT Polytechnic Cần Thơ. Luôn tìm kiếm cơ hội để kiến tạo giá trị cho cộng đồng.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <Button
            onClick={() => setCurrentPage('projects')}
            size="lg"
            className="bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-full px-6"
          >
            <FolderOpen className="mr-2 h-5 w-5" />
            Xem Dự Án
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => setCurrentPage('contact')}
            className="border-teal-500 text-teal-500 hover:bg-teal-50 rounded-full px-6"
          >
            <Mail className="mr-2 h-5 w-5" />
            Liên Hệ
          </Button>
          <a href="/cv/CV_LETHIHUYNHNHU.pdf" className="flex items-center" download>
            <Button
              variant="outline"
              size="lg"
              className="border-pink-500 text-pink-500 hover:bg-pink-50 rounded-full px-6"
            >
              <Download className="mr-2 h-5 w-5" />
              Tải CV
            </Button>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <Card className="p-5 bg-white/80 backdrop-blur-sm border-none shadow-md hover:shadow-xl transition-shadow">
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="text-3xl font-bold text-teal-600">15+</div>
              <div className="text-sm text-gray-600">Dự Án</div>
            </motion.div>
          </Card>
          <Card className="p-5 bg-white/80 backdrop-blur-sm border-none shadow-md hover:shadow-xl transition-shadow">
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="text-3xl font-bold text-pink-600">98%</div>
              <div className="text-sm text-gray-600">Hài Lòng</div>
            </motion.div>
          </Card>
          <Card className="p-5 bg-white/80 backdrop-blur-sm border-none shadow-md hover:shadow-xl transition-shadow">
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="text-3xl font-bold text-purple-600">4</div>
              <div className="text-sm text-gray-600">Chứng Chỉ</div>
            </motion.div>
          </Card>
          <Card className="p-5 bg-white/80 backdrop-blur-sm border-none shadow-md hover:shadow-xl transition-shadow">
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="text-3xl font-bold text-orange-600">2+</div>
              <div className="text-sm text-gray-600">Năm Kinh Nghiệm</div>
            </motion.div>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeSection;