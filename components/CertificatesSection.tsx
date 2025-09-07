import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Award, Trophy, Star, ExternalLink } from 'lucide-react';
import { certificates } from '@/lib/data';
import { Certificate } from '@/types';

const CertificatesSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Chứng Chỉ & Giải Thưởng</h2>
          <p className="text-xl text-gray-600">Các chứng chỉ và thành tích đã đạt được</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {certificates.map((cert: Certificate, index: number) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-40 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{cert.name}</CardTitle>
                <CardDescription className="text-blue-600">{cert.issuer}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-sm">{cert.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-sm">{cert.credentialId}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="mt-4">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Xác Thực
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-green-600">Giải Thưởng & Thành Tích</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Trophy className="w-6 h-6 text-yellow-500 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold">Giải Nhất Hackathon FPT 2024</h4>
                  <p className="text-gray-600 text-sm">Best Innovation Award - AI for Education</p>
                </div>
              </div>
              <div className="flex items-start">
                <Trophy className="w-6 h-6 text-gray-400 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold">Học Sinh Xuất Sắc</h4>
                  <p className="text-gray-600 text-sm">GPA 3.96 - Top 5% lớp học</p>
                </div>
              </div>
              <div className="flex items-start">
                <Trophy className="w-6 h-6 text-orange-500 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold">Best Team Player Award</h4>
                  <p className="text-gray-600 text-sm">Dự án nhóm Web Development</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-purple-600">Kỹ Năng Đã Được Chứng Nhận</h3>
            <div className="grid grid-cols-2 gap-4">
              {['React.js', 'Node.js', 'AWS Cloud', 'JavaScript', 'Python', 'Docker', 'Git/GitHub', 'Agile/Scrum'].map((skill) => (
                <div key={skill} className="flex items-center p-2 bg-gray-100 rounded">
                  <Star className="w-4 h-4 text-yellow-500 mr-2" />
                  <span className="text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CertificatesSection;