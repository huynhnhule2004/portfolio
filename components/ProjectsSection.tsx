import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, ChevronUp, Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  technologies: string[];
  images: string[];
  githubLink?: string;
  demoLink?: string;
}

interface ProjectsSectionProps {
  expandedProject: number | null;
  setExpandedProject: (id: number | null) => void;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Hệ thống Quản lý và Kinh doanh F&B - CozyGroup',
    description: 'Hệ thống quản lý và kinh doanh trực tuyến cho nhà hàng/quán ăn trong ngành F&B.',
    longDescription:
      'Dự án tâm huyết phát triển hệ thống quản lý và kinh doanh trực tuyến cho ngành F&B, giúp các nhà hàng/quán ăn tối ưu hóa quy trình vận hành và bán hàng. Ứng dụng cung cấp trải nghiệm người dùng mượt mà, tích hợp upload hình ảnh lên Cloudinary và sử dụng Tailwind CSS để tạo giao diện hiện đại, responsive.',
    features: [
      'Quản lý thực đơn và đơn hàng trực tuyến',
      'Tích hợp upload hình ảnh lên Cloudinary',
      'Giao diện responsive với Tailwind CSS',
      'API backend mạnh mẽ với Laravel và PostgreSQL',
    ],
    technologies: ['Next.js', 'Laravel', 'PostgreSQL', 'Tailwind CSS', 'Cloudinary'],
    images: [ '/images/cozy-1.1.png','/images/cozy-1.jpg', '/images/cozy-2.jpg', '/images/cozy-3.jpg'],
    // githubLink: 'https://github.com/yourusername/cozygroup',
    demoLink: 'https://cozygroup.vercel.app',
  },
  {
    id: 2,
    title: 'Website Bán Sách - Bookly',
    description: 'Website thương mại điện tử bán sách với chatbot AI tích hợp.',
    longDescription:
      'Dự án website bán sách tích hợp chatbot AI sử dụng Gemini để tóm tắt nội dung sách theo tên. Ứng dụng được xây dựng với Laravel và Filament cho quản trị, kết hợp Bootstrap để tạo giao diện đẹp mắt, thân thiện với người dùng.',
    features: [
      'Tìm kiếm và tóm tắt sách bằng chatbot AI',
      'Quản trị dễ dàng với Filament',
      'Giao diện responsive với Bootstrap',
      'Hỗ trợ giỏ hàng và thanh toán trực tuyến',
    ],
    technologies: ['Laravel', 'Filament', 'Bootstrap', 'Gemini AI'],
    images: ['/images/bookly-1.png', '/images/bookly-2.png', '/images/bookly-3.png'],
    // githubLink: 'https://github.com/yourusername/bookly',
    demoLink: 'http://nhulth.id.vn',
  },
  {
    id: 3,
    title: 'Website Template CV Xin Việc',
    description: 'Nền tảng tạo CV cá nhân hóa với các mẫu template chuyên nghiệp.',
    longDescription:
      'Dự án cho phép người dùng tạo CV cá nhân hóa bằng cách điền thông tin vào các mẫu template có sẵn và tải xuống. Được xây dựng với Vue.js và Firebase, giao diện sử dụng Bootstrap để đảm bảo tính thẩm mỹ và responsive.',
    features: [
      'Tạo và tải CV với các mẫu template đa dạng',
      'Tích hợp Firebase để lưu trữ dữ liệu người dùng',
      'Giao diện thân thiện với Bootstrap',
      'Hỗ trợ responsive trên nhiều thiết bị',
    ],
    technologies: ['Vue.js', 'Firebase', 'Bootstrap'],
    images: ['/images/cv-1.png', '/images/cv-2.png'],
    githubLink: 'https://github.com/huynhnhule2004/CVManager',
    demoLink: 'https://cv-manager-98zq.vercel.app',
  },
  {
    id: 4,
    title: 'Hệ thống Quản lý Quán Cà Phê Thông Minh - Smart Coffee',
    description: 'Hệ thống quản lý quán cà phê với giao diện hiện đại và tính năng thông minh.',
    longDescription:
      'Dự án xây dựng hệ thống quản lý quán cà phê, hỗ trợ quản lý thực đơn, và khách hàng. Được phát triển với React.js, Tailwind CSS, Firebase, và JSON Server để đảm bảo hiệu suất và tính linh hoạt.',
    features: [
      'Quản lý thực đơn và đơn hàng thời gian thực',
      'Tích hợp Firebase cho lưu trữ dữ liệu',
      'Giao diện responsive với Tailwind CSS',
      'API giả lập với JSON Server',
    ],
    technologies: ['React.js', 'Tailwind CSS', 'Firebase', 'JSON Server'],
    images: ['/images/coffee-1.png', '/images/coffee-2.jpg', '/images/coffee-3.jpg'],
    // githubLink: 'https://github.com/yourusername/smart-coffee',
    demoLink: 'https://coffee-smart-system.vercel.app',
  },
  {
    id: 5,
    title: 'Game Toán Học Hỗ Trợ Giảng Dạy - Số Chẵn & Số Lẻ',
    description: 'Trò chơi toán học thú vị hỗ trợ giáo viên dạy học sinh lớp 4.',
    longDescription:
      'Dự án game toán học được thiết kế để hỗ trợ giáo viên giảng dạy khái niệm số chẵn và lẻ cho học sinh lớp 4. Sử dụng Next.js và Tailwind CSS, game có giao diện sinh động, responsive trên nhiều thiết bị, tạo trải nghiệm học tập vui vẻ.',
    features: [
      'Mini-game tương tác về số chẵn và lẻ',
      'Giao diện sinh động, responsive với Tailwind CSS',
      'Hỗ trợ đa thiết bị (PC, tablet, mobile)',
      'Thiết kế thân thiện với học sinh tiểu học',
    ],
    technologies: ['Next.js', 'Tailwind CSS'],
    images: ['/images/math-1.png', '/images/math-2.png', '/images/math-3.png'],
    githubLink: 'https://github.com/huynhnhule2004/game-math',
    demoLink: 'https://game-math-snowy.vercel.app',
  },
  {
    id: 6,
    title: 'Trò Chơi Luyện Cảm Âm Piano',
    description: 'Ứng dụng luyện cảm âm piano dành cho trẻ em học nhạc.',
    longDescription:
      'Dự án xây dựng trò chơi luyện cảm âm piano, giúp trẻ em nhận biết nốt nhạc qua các bài tập tương tác. Sử dụng Next.js và Tailwind CSS, ứng dụng mang đến trải nghiệm học nhạc thú vị và trực quan.',
    features: [
      'Tương tác luyện cảm âm với các nốt nhạc',
      'Giao diện thân thiện, responsive với Tailwind CSS',
      'Hỗ trợ trẻ em học nhạc một cách thú vị',
      'Hiệu ứng âm thanh sống động',
    ],
    technologies: ['Next.js', 'Tailwind CSS'],
    images: ['/images/music-1.png', '/images/music-2.png'],
    githubLink: 'https://github.com/huynhnhule2004/music-app',
    demoLink: 'https://music-app-ruby-five.vercel.app',
  },
  {
    id: 7,
    title: 'Website Dự Báo Thời Tiết',
    description: 'Website cung cấp thông tin thời tiết theo thời gian thực.',
    longDescription:
      'Dự án website dự báo thời tiết sử dụng API từ OpenWeatherMap để cung cấp thông tin thời tiết theo thời gian thực. Được xây dựng với React.js, giao diện sử dụng Tailwind CSS để đảm bảo tính thẩm mỹ và responsive.',
    features: [
      'Hiển thị thời tiết theo thời gian thực từ OpenWeatherMap API',
      'Giao diện responsive với Tailwind CSS',
      'Tìm kiếm thời tiết theo vị trí',
      'Hỗ trợ dự báo ngắn hạn và dài hạn',
    ],
    technologies: ['React.js', 'Tailwind CSS', 'OpenWeatherMap API'],
    images: ['/images/weather-1.png', '/images/weather-2.png'],
    githubLink: 'https://github.com/huynhnhule2004/weather-app',
    demoLink: 'https://weather-app-six-sigma-62.vercel.app',
  },
];

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ expandedProject, setExpandedProject }) => {
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
            Dự Án Nổi Bật
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Khám phá những dự án tôi đã xây dựng, thể hiện đam mê công nghệ và sáng tạo
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden bg-white/80 backdrop-blur-sm border-none shadow-md hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <ProjectCarousel images={project.images} title={project.title} />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-teal-600">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {expandedProject === project.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="mb-4 space-y-3"
                    >
                      <p className="text-gray-700">{project.longDescription}</p>
                      <div>
                        <h4 className="font-semibold mb-2 text-pink-600">Tính năng chính:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                          {project.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-teal-100 text-teal-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 flex-wrap">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                      className="border-teal-500 text-teal-500 hover:bg-teal-50"
                    >
                      {expandedProject === project.id ? (
                        <ChevronUp className="w-4 h-4 mr-1" />
                      ) : (
                        <ChevronDown className="w-4 h-4 mr-1" />
                      )}
                      {expandedProject === project.id ? 'Ẩn' : 'Chi tiết'}
                    </Button>
                    {project.githubLink && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-pink-500 text-pink-500 hover:bg-pink-50"
                      >
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demoLink && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-purple-500 text-purple-500 hover:bg-purple-50"
                      >
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-teal-500 text-teal-500 hover:bg-teal-50"
            >
              <a href="https://github.com/huynhnhule2004" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                Xem Thêm Trên GitHub
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

interface ProjectCarouselProps {
  images: string[];
  title: string;
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-full">
      <div className="relative w-full h-full">
        <Image
          src={images[currentIndex]}
          alt={`${title} ${currentIndex + 1}`}
          fill
          className="object-cover"
          priority={currentIndex === 0}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectsSection;