import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Award, Briefcase, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const activities = [
  {
    id: 'hackathon-2025',
    title: 'Cuộc thi Hackathon 2025',
    role: 'Thành viên đội thi',
    description:
      'Tham gia Hackathon 2025 tại Đại học FPT Hồ Chí Minh, phát triển giải pháp công nghệ sử dụng AI và IoT cho logistics.',
    achievement: 'Rèn luyện kỹ năng lập trình và làm việc nhóm dưới áp lực thời gian.',
    skills: ['Lập trình', 'AI', 'Làm việc nhóm', 'Giải quyết vấn đề'],
    date: '2025',
    images: [
      '/images/hk-25-1.jpg',
      '/images/hk-25-2.jpg',
      '/images/hk-25-3.jpg',
      '/images/hk-25-4.jpg',
    ],
  },
  {
    id: 'top-50-fall-2024',
    title: 'Top 50 Sinh viên Xuất sắc Fall 2024',
    role: 'Sinh viên được vinh danh',
    description:
      'Nhận giấy khen Top 50 sinh viên có thành tích học tập xuất sắc học kỳ Fall 2024 tại lễ tôn vinh của Cao đẳng FPT Polytechnic Cần Thơ.',
    achievement: 'Đạt thành tích học tập vượt trội, đứng trong top 50 sinh viên.',
    skills: ['Học thuật', 'Kỷ luật', 'Quản lý thời gian'],
    date: 'Fall 2024',
    images: [
      '/images/fa24-1.jpg',
      '/images/fa24-2.jpg',
      '/images/fa24-3.jpg',
    ],
  },
  {
    id: 'bee-master',
    title: 'Cuộc thi hùng biện Bee Master mùa 2',
    role: 'Thí sinh',
    description:
      'Tham gia cuộc thi hùng biện tiếng Anh tại Cao đẳng FPT Polytechnic Cần Thơ, thể hiện kỹ năng thuyết trình và tư duy phản biện.',
    achievement: 'Phát triển kỹ năng hùng biện và tự tin sử dụng tiếng Anh.',
    skills: ['Hùng biện', 'Tiếng Anh', 'Tư duy phản biện'],
    date: '2024',
    images: [
      '/images/bee-master-1.jpg',
      '/images/bee-master-2.jpg',
      '/images/bee-master-3.jpg',
    ],
  },
  {
    id: 'top-70-summer-2024',
    title: 'Top 70 Sinh viên Xuất sắc Summer 2024',
    role: 'Sinh viên được vinh danh',
    description:
      'Nhận giấy khen Top 70 sinh viên có thành tích học tập xuất sắc học kỳ Summer 2024 tại Cao đẳng FPT Polytechnic Cần Thơ.',
    achievement: 'Duy trì thành tích học tập xuất sắc, đứng trong top 70 sinh viên.',
    skills: ['Học thuật', 'Kỷ luật', 'Quản lý thời gian'],
    date: 'Summer 2024',
    images: [
      '/images/sm-24-1.jpg',
      '/images/sm-24-2.jpg',
    ],
  },
  {
    id: 'hope-fund-project',
    title: 'Dự án Kinh doanh Bán Bánh Tráng',
    role: 'Thành viên nhóm',
    description:
      'Tham gia dự án kinh doanh trong môn Kỹ năng làm việc, thực hiện bán bánh tráng và quyên góp toàn bộ doanh thu cho quỹ Hope.',
    achievement: 'Góp phần gây quỹ từ thiện và phát triển kỹ năng kinh doanh thực tế.',
    skills: ['Kinh doanh', 'Làm việc nhóm', 'Tổ chức', 'Gây quỹ'],
    date: '2024',
    images: [
      '/images/knlv-4.jpg',
      '/images/knlv-3.jpg',
      '/images/knlv-5.jpg',
      '/images/knlv-6.jpg',
      '/images/knlv-7.jpg',
      '/images/knlv-8.jpg',
      '/images/knlv-1.jpg',
      '/images/knlv-2.jpg',
      '/images/knlv-9.jpg',

    ],
  },
  {
    id: 'ai-seminar',
    title: 'Hội thảo Bức tranh AI toàn cầu',
    role: 'Tham gia',
    description:
      'Tham gia hội thảo tại Đại học FPT Cần Thơ, tìm hiểu về xu hướng AI toàn cầu, ứng dụng thực tiễn trong công nghệ và kinh doanh.',
    achievement: 'Nắm bắt kiến thức về AI và kết nối với các chuyên gia công nghệ.',
    skills: ['AI', 'Giao tiếp', 'Kết nối mạng lưới'],
    date: '2024',
    images: [
      '/images/AI-1.jpg',
    ],
  },
  {
    id: 'top-70-fall-2023',
    title: 'Top 70 Sinh viên Xuất sắc Fall 2023',
    role: 'Sinh viên được vinh danh',
    description:
      'Nhận giấy khen Top 70 sinh viên có thành tích học tập xuất sắc học kỳ Fall 2023 tại Cao đẳng FPT Polytechnic Cần Thơ.',
    achievement: 'Đạt thành tích học tập vượt trội, đứng trong top 70 sinh viên xuất sắc.',
    skills: ['Học thuật', 'Kỷ luật', 'Quản lý thời gian'],
    date: 'Fall 2023',
    images: [
      '/images/fa-23-1.jpg',
      '/images/fa-23-2.jpg',
      '/images/fa-23-3.jpg',
      '/images/fa-23-4.jpg',
    ],
  },
];

const ActivitiesSection: React.FC = () => {
  const [currentSlides, setCurrentSlides] = useState<{ [key: string]: number }>({});

  const handlePrev = (activityId: string, imagesLength: number) => {
    setCurrentSlides((prev) => ({
      ...prev,
      [activityId]: ((prev[activityId] || 0) - 1 + imagesLength) % imagesLength,
    }));
  };

  const handleNext = (activityId: string, imagesLength: number) => {
    setCurrentSlides((prev) => ({
      ...prev,
      [activityId]: ((prev[activityId] || 0) + 1) % imagesLength,
    }));
  };

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
            Hoạt Động & Đóng Góp
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hành trình năng động của tôi qua các hoạt động ngoại khóa và đóng góp cộng đồng
          </p>
        </motion.div>

        <div className="space-y-8">
          {activities.map((activity, index) => (
            <Card
              key={activity.id}
              className={`p-8 bg-white/80 backdrop-blur-sm border-l-4 ${
                index % 3 === 0 ? 'border-teal-500' : index % 3 === 1 ? 'border-pink-500' : 'border-purple-500'
              } shadow-md hover:shadow-xl transition-shadow`}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-start mb-4">
                      <div
                        className={`p-3 rounded-full mr-4 ${
                          index % 3 === 0 ? 'bg-teal-100' : index % 3 === 1 ? 'bg-pink-100' : 'bg-purple-100'
                        }`}
                      >
                        {activity.title.includes('Xuất sắc') ? (
                          <Award
                            className={`w-6 h-6 ${
                              index % 3 === 0 ? 'text-teal-600' : index % 3 === 1 ? 'text-pink-600' : 'text-purple-600'
                            }`}
                          />
                        ) : activity.title.includes('Kinh doanh') ? (
                          <Briefcase
                            className={`w-6 h-6 ${
                              index % 3 === 0 ? 'text-teal-600' : index % 3 === 1 ? 'text-pink-600' : 'text-purple-600'
                            }`}
                          />
                        ) : (
                          <Users
                            className={`w-6 h-6 ${
                              index % 3 === 0 ? 'text-teal-600' : index % 3 === 1 ? 'text-pink-600' : 'text-purple-600'
                            }`}
                          />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-1">{activity.title}</h3>
                        <p
                          className={`font-medium mb-2 ${
                            index % 3 === 0 ? 'text-teal-600' : index % 3 === 1 ? 'text-pink-600' : 'text-purple-600'
                          }`}
                        >
                          {activity.role}
                        </p>
                        <p className="text-gray-700 mb-3">{activity.description}</p>
                        <div className="bg-green-50 border-l-4 border-green-500 p-3 mb-4">
                          <p className="text-green-700 font-medium">🏆 {activity.achievement}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {activity.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="border-gray-300 text-gray-700">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentSlides[activity.id] || 0}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={activity.images[currentSlides[activity.id] || 0]}
                          alt={`${activity.title} ${currentSlides[activity.id] || 0 + 1}`}
                          className="w-full h-100 object-contain rounded-md"
                        />
                      </motion.div>
                    </AnimatePresence>
                    <Button
                      variant="outline"
                      size="icon"
                      className={`absolute top-1/2 left-2 transform -translate-y-1/2 bg-teal-500 text-white hover:bg-teal-600 border-none`}
                      onClick={() => handlePrev(activity.id, activity.images.length)}
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className={`absolute top-1/2 right-2 transform -translate-y-1/2 bg-teal-500 text-white hover:bg-teal-600 border-none`}
                      onClick={() => handleNext(activity.id, activity.images.length)}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <div className="bg-gray-100 p-4 rounded-lg inline-block">
                    <Calendar className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-800">{activity.date}</p>
                  </div>
                </div>
              </motion.div>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center bg-white/80 backdrop-blur-sm border-none shadow-md hover:shadow-xl transition-shadow">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="text-4xl mb-4 text-teal-500">🎤</div>
              <h4 className="text-xl font-semibold mb-2">Hùng biện & Hội thảo</h4>
              <p className="text-gray-600 text-sm">Tham gia 3+ sự kiện hùng biện và hội thảo công nghệ</p>
            </motion.div>
          </Card>
          <Card className="p-6 text-center bg-white/80 backdrop-blur-sm border-none shadow-md hover:shadow-xl transition-shadow">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="text-4xl mb-4 text-pink-500">🏆</div>
              <h4 className="text-xl font-semibold mb-2">Thành tích Học tập</h4>
              <p className="text-gray-600 text-sm">Top 50-70 sinh viên xuất sắc 3 kỳ liên tiếp</p>
            </motion.div>
          </Card>
          <Card className="p-6 text-center bg-white/80 backdrop-blur-sm border-none shadow-md hover:shadow-xl transition-shadow">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="text-4xl mb-4 text-purple-500">🌍</div>
              <h4 className="text-xl font-semibold mb-2">Đóng góp Cộng đồng</h4>
              <p className="text-gray-600 text-sm">Tham gia dự án từ thiện, quyên góp cho quỹ Hope</p>
            </motion.div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesSection;