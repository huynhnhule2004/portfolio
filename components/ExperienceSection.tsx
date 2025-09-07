import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Mail } from 'lucide-react';
import { experiences } from '@/lib/data';
import { Experience } from '@/types';

const ExperienceSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Kinh Nghiệm Làm Việc</h2>
          <p className="text-xl text-gray-600">Hành trình phát triển nghề nghiệp</p>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-300"></div>

          <div className="space-y-12">
            {experiences.map((exp: Experience, index: number) => (
              <div key={index} className="relative">
                <div className="absolute left-2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                <div className="ml-12">
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                        <p className="text-blue-600 font-semibold">{exp.company}</p>
                      </div>
                      <Badge variant="outline">{exp.period}</Badge>
                    </div>

                    <p className="text-gray-700 mb-4">{exp.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Thành tích:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <Star className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Công nghệ sử dụng:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50">
            <h3 className="text-2xl font-semibold mb-4">Sẵn Sàng Cho Thử Thách Mới</h3>
            <p className="text-gray-700 mb-6">
              Tôi đang tìm kiếm cơ hội làm việc tại một môi trường năng động,
              nơi tôi có thể phát huy khả năng và đóng góp vào sự phát triển của công ty.
            </p>
            <Button size="lg">
              <Mail className="mr-2 h-5 w-5" />
              Liên Hệ Ngay
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;