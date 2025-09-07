import { Card } from '@/components/ui/card';
import { User, Calendar, MapPin, BookOpen, Trophy, Target, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-pink-50 to-purple-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Về Tôi
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Khám phá hành trình lập trình và đam mê truyền cảm hứng của tôi
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 bg-white/80 backdrop-blur-sm border-none shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-teal-600">Thông Tin Cá Nhân</h3>
            <div className="space-y-4">
              <motion.div
                className="flex items-center"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <User className="w-5 h-5 text-teal-500 mr-3" />
                <span><strong>Họ tên:</strong> Lê Thị Huỳnh Như</span>
              </motion.div>
              <motion.div
                className="flex items-center"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Calendar className="w-5 h-5 text-teal-500 mr-3" />
                <span><strong>Ngày sinh:</strong> 22/03/2004</span>
              </motion.div>
              <motion.div
                className="flex items-center"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <MapPin className="w-5 h-5 text-teal-500 mr-3" />
                <span><strong>Địa chỉ:</strong> Cần Thơ, Việt Nam</span>
              </motion.div>
              <motion.div
                className="flex items-center"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <BookOpen className="w-5 h-5 text-teal-500 mr-3" />
                <span><strong>Học vấn:</strong> Cao đẳng FPT Polytechnic Cần Thơ</span>
              </motion.div>
              <motion.div
                className="flex items-center bg-teal-50 p-2 rounded-md"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Trophy className="w-5 h-5 text-teal-500 mr-3" />
                <span><strong>GPA:</strong> 3.96/4.0</span>
              </motion.div>
            </div>
          </Card>

          <Card className="p-8 bg-white/80 backdrop-blur-sm border-none shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-pink-600">Mục Tiêu & Tầm Nhìn</h3>
            <div className="space-y-4">
              <motion.div
                className="flex items-start"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Target className="w-5 h-5 text-pink-500 mr-3 mt-1" />
                <div>
                  <strong>Mục tiêu ngắn hạn:</strong>
                  <p className="text-gray-600 mt-1">
                    Trở thành Full Stack Developer giỏi, tạo ra các sản phẩm công nghệ có giá trị cho cộng đồng.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-start"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Lightbulb className="w-5 h-5 text-pink-500 mr-3 mt-1" />
                <div>
                  <strong>Tầm nhìn dài hạn:</strong>
                  <p className="text-gray-600 mt-1">
                    Trở thành giảng viên truyền cảm hứng, chia sẻ kiến thức công nghệ và thúc đẩy thế hệ trẻ sáng tạo.
                  </p>
                </div>
              </motion.div>
            </div>
          </Card>
        </div>

        <Card className="p-8 mb-12 bg-white/80 backdrop-blur-sm border-none shadow-md hover:shadow-xl transition-shadow">
          <h3 className="text-2xl font-semibold text-purple-600">Câu Chuyện Của Tôi</h3>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              Hành trình lập trình của tôi bắt đầu vào năm 2023 tại FPT Polytechnic Cần Thơ, nơi tôi đạt GPA 3.96/4.0, một cột mốc thể hiện sự nỗ lực và đam mê. Từ những dòng HTML và CSS đầu tiên, tôi đã bị cuốn hút bởi khả năng biến ý tưởng thành hiện thực qua mã code.
            </p>
            <p className="mb-4">
              Qua các dự án thực tế và hackathon, tôi đã rèn luyện kỹ năng với React, Next.js, Laravel, và Node.js. Mỗi thử thách là cơ hội để tôi trưởng thành, không chỉ về kỹ thuật mà còn về tư duy sáng tạo và làm việc nhóm.
            </p>
            <p className="mb-4">
              Tầm nhìn của tôi là trở thành một giảng viên, truyền đam mê lập trình và kiến thức công nghệ đến thế hệ trẻ, giúp họ tự tin tạo nên những thay đổi tích cực cho cộng đồng.
            </p>
          </div>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center bg-white/80 backdrop-blur-sm border-none shadow-md hover:shadow-xl transition-shadow">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="text-4xl mb-4 text-teal-500">🎯</div>
              <h4 className="text-xl font-semibold mb-2">Tư Duy Sáng Tạo</h4>
              <p className="text-gray-600">Tìm kiếm giải pháp độc đáo và hiệu quả cho mọi thách thức</p>
            </motion.div>
          </Card>
          <Card className="p-6 text-center bg-white/80 backdrop-blur-sm border-none shadow-md hover:shadow-xl transition-shadow">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="text-4xl mb-4 text-pink-500">🚀</div>
              <h4 className="text-xl font-semibold mb-2">Học Hỏi Không Ngừng</h4>
              <p className="text-gray-600">Luôn sẵn sàng tiếp thu công nghệ mới và cập nhật xu hướng</p>
            </motion.div>
          </Card>
          <Card className="p-6 text-center bg-white/80 backdrop-blur-sm border-none shadow-md hover:shadow-xl transition-shadow">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="text-4xl mb-4 text-purple-500">🤝</div>
              <h4 className="text-xl font-semibold mb-2">Tinh Thần Hợp Tác</h4>
              <p className="text-gray-600">Làm việc nhóm hiệu quả, hỗ trợ và truyền cảm hứng cho đồng đội</p>
            </motion.div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;