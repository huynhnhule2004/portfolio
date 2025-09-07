import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users } from 'lucide-react';
import { activities } from '@/lib/data';
import { Activity } from '@/types';

const ActivitiesSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Hoạt Động & Đóng Góp</h2>
          <p className="text-xl text-gray-600">Các hoạt động ngoại khóa và đóng góp cộng đồng</p>
        </div>

        <div className="space-y-8">
          {activities.map((activity: Activity, index: number) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="md:col-span-3">
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{activity.title}</h3>
                      <p className="text-blue-600 font-medium mb-2">{activity.role}</p>
                      <p className="text-gray-700 mb-3">{activity.description}</p>
                      <div className="bg-green-50 border-l-4 border-green-500 p-3 mb-4">
                        <p className="text-green-700 font-medium">🏆 {activity.achievement}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {activity.skills.map((skill) => (
                          <Badge key={skill} variant="outline">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center md:text-right">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <Calendar className="w-8 h-8 text-gray-600 mx-auto md:ml-auto mb-2" />
                    <p className="text-sm font-medium text-gray-800">{activity.date}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center">
            <div className="text-4xl mb-4">🎤</div>
            <h4 className="text-xl font-semibold mb-2">Tech Talks</h4>
            <p className="text-gray-600 text-sm">3 buổi thuyết trình về công nghệ web hiện đại</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-4xl mb-4">👥</div>
            <h4 className="text-xl font-semibold mb-2">Mentoring</h4>
            <p className="text-gray-600 text-sm">Hướng dẫn 20+ junior developers</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-4xl mb-4">🌟</div>
            <h4 className="text-xl font-semibold mb-2">Open Source</h4>
            <p className="text-gray-600 text-sm">Đóng góp cho 10+ dự án mã nguồn mở</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesSection;