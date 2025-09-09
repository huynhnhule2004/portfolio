import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Award, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface Certificate {
  id: number;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  image: string;
  verifyLink?: string;
  isAward?: boolean;
}

const certificates: Certificate[] = [
  {
    id: 25,
    name: 'Sinh Viên Xuất Sắc Học Kỳ Spring 2025',
    issuer: 'FPT Polytechnic',
    date: '06/2025',
    credentialId: 'GK2526435',
    image: '/images/sp-25.png',
    verifyLink: 'https://github.com/huynhnhule2004/Certificate/blob/master/Award/sp-25.png',
    isAward: true,
  },
  {
    id: 24,
    name: 'Xây dựng website đấu giá Xbid',
    issuer: 'FPT Polytechnic',
    date: '04/2025',
    image: '/images/certificate/26-4.png',
    verifyLink: 'https://github.com/huynhnhule2004/Certificate/blob/master/Project%20Certificate%20at%20FPoly/PC09147_67d7d630d708a111d6deb2a0.pdf',
  },
  {
    id: 23,
    name: 'Xây dựng theme website bán sách tích hợp bootstrap',
    issuer: 'FPT Polytechnic',
    date: '03/2025',
    image: '/images/certificate/25-3.png',
    verifyLink: 'https://github.com/huynhnhule2004/Certificate/blob/master/Project%20Certificate%20at%20FPoly/PC09147_67e10a68d708a111d601fe63.pdf',
  },
  {
    id: 22,
    name: 'Sinh Viên Xuất Sắc Học Kỳ Fall 2024',
    issuer: 'FPT Polytechnic',
    date: '02/2025',
    credentialId: 'GK2501664',
    image: '/images/fa24-2.jpg',
    verifyLink: 'https://github.com/huynhnhule2004/Certificate/blob/master/Award/fa24-2.jpg',
    isAward: true,
  },
  {
    id: 21,
    name: 'Xây dựng Website thương mại điện tử shop đồ thể thao tích hợp biến thể sản phẩm',
    issuer: 'FPT Polytechnic',
    date: '01/2025',
    image: '/images/certificate/6-1.png',
    verifyLink: 'https://github.com/huynhnhule2004/Certificate/blob/master/Project%20Certificate%20at%20FPoly/PC09147_67778bf3f317cf49cd2b5b2a.pdf',
  },
  {
    id: 20,
    name: 'Xây dựng Website quản lý template CV xin việc',
    issuer: 'FPT Polytechnic',
    date: '1/2025',
    image: '/images/certificate/5-1.png',
    verifyLink: 'https://github.com/huynhnhule2004/Certificate/blob/master/Project%20Certificate%20at%20FPoly/PC09147_6777b545ed31fe9c97970e2e.pdf',
  },
  {
    id: 19,
    name: 'Xây dựng Website thương mại điện tử tích hợp thanh toán Online',
    issuer: 'FPT Polytechnic',
    date: '1/2025',
    image: '/images/certificate/4-1.png',
    verifyLink: 'https://github.com/huynhnhule2004/Certificate/blob/master/Project%20Certificate%20at%20FPoly/PC09147_67657760f317cf49cd168315.pdf',
  },
  {
    id: 18,
    name: 'Thiết kế giao diện UI/UX cho Website bán hàng thương mại điện tử',
    issuer: 'FPT Polytechnic',
    date: '12/2024',
    image: '/images/certificate/11-12.png',
    verifyLink: 'https://github.com/huynhnhule2004/Certificate/blob/master/Project%20Certificate%20at%20FPoly/PC09147_672891da8b061fcc21cc3f91.pdf',
  },
  {
    id: 17,
    name: 'Chứng chỉ tốt nghiệp khóa học lập trình web Front-end',
    issuer: 'CodeGym',
    date: '12/2024',
    image: '/images/certificate/2-12(3).png',
    verifyLink: 'https://github.com/huynhnhule2004/Certificate/blob/master/Certificates%20at%20CodeGym/CODEGYM.pdf',
  },
  {
    id: 16,
    name: 'KBX - Hoàn thành mọi việc với Kanban 2.0',
    issuer: 'CodeGym',
    date: '12/2024',
    image: '/images/certificate/2-12.png',
    verifyLink: 'https://github.com/huynhnhule2004/Certificate/blob/master/Certificates%20at%20CodeGym/_Chng_ch_hon_thnh_kha_hc.pdf',
  },
  {
    id: 15,
    name: 'LHX - Học cách học 2.0',
    issuer: 'CodeGym',
    date: '12/2024',
    image: '/images/certificate/2-12(1).png',
    verifyLink: 'https://github.com/huynhnhule2004/Certificate/blob/master/Certificates%20at%20CodeGym/Chng_ch_kho_hc.pdf',
  },
  {
    id: 14,
    name: 'SCX - Scrum Essence',
    issuer: 'CodeGym',
    date: '11/2024',
    image: '/images/certificate/27-11.png',
    verifyLink: 'https://github.com/huynhnhule2004/Certificate/blob/master/Certificates%20at%20CodeGym/Certificate_Scrum_Essence.pdf',
  },
  {
    id: 13,
    name: 'Thiết kế và nâng cấp Website NHATHIEUCT.COM',
    issuer: 'FPT Polytechnic',
    date: '9/2024',
    image: '/images/certificate/11-9.png',
    verifyLink: 'https://github.com/huynhnhule2004/Certificate/blob/master/Project%20Certificate%20at%20FPoly/PC09147_66e17fa58b061fcc211b3853.pdf',
  },
  {
    id: 12,
    name: 'Sinh Viên Xuất Sắc Học Kỳ Summer 2024',
    issuer: 'FPT Polytechnic',
    date: '09/2024',
    credentialId: 'GK2448408',
    image: '/images/sm-24-2.jpg',
    verifyLink: 'https://github.com/huynhnhule2004/Certificate/blob/master/Award/sm-24-2.jpg',
    isAward: true,
  },
  {
    id: 11,
    name: 'Chứng nhận hoàn thành khóa học JavaScript nâng cao',
    issuer: 'F8',
    date: '9/2024',
    image: '/images/certificate/14-9.png',
    verifyLink: 'https://github.com/huynhnhule2004/Certificate/blob/master/Online%20Programming%20Certificate/Le%20Thi%20Huynh%20Nhu%20JavaScript%20Advanced%20Certificate.pdf',
  },
  {
    id: 10,
    name: 'Chứng nhận hoàn thành khóa học JavaScript cơ bản',
    issuer: 'F8',
    date: '05/2024',
    image: '/images/certificate/14-5.png',
    verifyLink: 'https://github.com/huynhnhule2004/Certificate/blob/master/Online%20Programming%20Certificate/Le%20Thi%20Huynh%20Nhu%20JavaScript%20Basic%20Certificate.png',
  },
  {
    id: 9,
    name: 'Sinh Viên Xuất Sắc Học Kỳ Spring 2024',
    issuer: 'FPT Polytechnic',
    date: '05/2024',
    credentialId: 'GK2427429',
    image: '/images/sp-24-1.jpg',
    verifyLink: 'https://github.com/huynhnhule2004/Certificate/blob/master/Award/sp-24-1.jpg',
    isAward: true,
  },
  {
    id: 8,
    name: 'Website giới thiệu trường THPT',
    issuer: 'FPT Polytechnic',
    date: '4/2024',
    image: '/images/certificate/22-4.png',
    verifyLink: 'https://github.com/huynhnhule2004/Certificate/blob/master/Project%20Certificate%20at%20FPoly/PC09147_65f657b8672404a0f3e2a3b7.pdf',
  },
  {
    id: 7,
    name: 'BEE MASTERS SEASON 2',
    issuer: 'FPT Polytechnic',
    date: '03/2024',
    image: '/images/certificate/3-2024.jpg',
    verifyLink: 'https://github.com/huynhnhule2004/Certificate/blob/master/English%20certificate/master%20bee.jpg',
  },
  {
    id: 6,
    name: 'Sinh Viên Xuất Sắc Học Kỳ Fall 2023',
    issuer: 'FPT Polytechnic',
    date: '03/2024',
    credentialId: 'GK2401718',
    image: '/images/fa-23-4.jpg',
    verifyLink: 'https://github.com/huynhnhule2004/Certificate/blob/master/Award/fa-23-4.jpg',
    isAward: true,
  },
  {
    id: 5,
    name: 'Langmaster Communicative English Course LevelA2+CEFR',
    issuer: 'LANGMASTER',
    date: '3/2024',
    image: '/images/certificate/20-3.jpg',
    verifyLink: 'https://github.com/huynhnhule2004/Certificate/blob/master/English%20certificate/z5295440396246_8c3eba70cd7edc4da4f35d851790c86f.jpg',
  },
  {
    id: 4,
    name: 'Chứng nhận hoàn thành khóa học HTML/CSS',
    issuer: 'F8',
    date: '12/2023',
    image: '/images/certificate/26-12.png',
    verifyLink: 'https://github.com/huynhnhule2004/Certificate/blob/master/Online%20Programming%20Certificate/Le%20Thi%20Huynh%20Nhu%20HTML%20%26%20CSS%20Certificate.pdf',
  },
  {
    id: 3,
    name: 'Chứng nhận kết quả học tập xuất sắc – Nhập môn Lập trình & Nhập môn Công nghệ thông tin',
    issuer: 'FPT Polytechnic',
    date: '12/2023',
    image: '/images/certificate/24-12.jpg',
    verifyLink: 'https://github.com/huynhnhule2004/Certificate/blob/master/Project%20Certificate%20at%20FPoly/z5005331588825_4a7050b0aed5ce48be06cbea3e7e8e5a.jpg',
  },
  {
    id: 2,
    name: 'Certificate of Completion – Communicative English Course (Level 4/5)',
    issuer: 'FME',
    date: '12/2023',
    image: '/images/certificate/16-12.png',
    verifyLink: 'https://github.com/huynhnhule2004/Certificate/blob/master/English%20certificate/Le%20Thi%20Huynh%20Nhu.pdf',
  },
  {
    id: 1,
    name: 'Certificate of Completion – C for Beginners',
    issuer: 'CodeLearn',
    date: '10/2023',
    image: '/images/certificate/1-10.png',
    verifyLink: 'https://github.com/huynhnhule2004/Certificate/blob/master/Online%20Programming%20Certificate/C%20for%20Beginners.png',
  },
];

const CertificatesSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-pink-50 to-purple-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Chứng Chỉ & Giải Thưởng
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Những cột mốc đáng tự hào, thể hiện hành trình học tập và chinh phục công nghệ của tôi
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="gap-4 overflow-hidden bg-white/80 backdrop-blur-sm border-none shadow-md hover:shadow-xl transition-shadow">
                <div className="h-36 relative">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-contain"
                  />
                  {cert.isAward && (
                    <div className="absolute top-2 right-2 bg-yellow-400 text-white text-xs font-semibold px-2 py-1 rounded">
                      Giải Thưởng
                    </div>
                  )}
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-semibold text-teal-600">{cert.name}</CardTitle>
                  <CardDescription className="text-sm text-gray-600">{cert.issuer}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 text-teal-500 mr-2" />
                      <span className="text-sm text-gray-700">{cert.date}</span>
                    </div>
                    {cert.credentialId && (
                      <div className="flex items-center">
                        <Award className="w-4 h-4 text-teal-500 mr-2" />
                        <span className="text-sm text-gray-700">{cert.credentialId}</span>
                      </div>
                    )}
                  </div>
                  {cert.verifyLink && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="mt-3 border-teal-500 text-teal-500 hover:bg-teal-50"
                    >
                      <a href={cert.verifyLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Xác Thực
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificatesSection;