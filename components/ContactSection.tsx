import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin, Github, Facebook, Download, Calendar, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import { Toaster, toast } from 'sonner';

interface ContactFormInputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormInputs>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    console.log('Dữ liệu form:', data);
    setIsSubmitting(true);
    const currentTime = new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });
    try {
      await emailjs.send(
        'service_pt290fh', // Thay bằng Service ID từ EmailJS Dashboard -> Email Services
        'template_vp5fe64', // Thay bằng Template ID từ EmailJS Dashboard -> Email Templates
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
          time: currentTime,
        },
        '0OBaI1jQ8oOfC5Gtl' // Thay bằng User ID từ EmailJS Dashboard -> Account -> User ID
      );
      toast.success('Tin nhắn của bạn đã được gửi. Tôi sẽ liên hệ lại sớm!', {
        style: {
          background: '#ccfbf1',
          color: '#0f766e',
          border: '1px solid #0f766e',
          padding: '12px 24px',
        },
        closeButton: true,
      });
      reset();
    } catch (error) {
      toast.error('Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại.', {
        style: {
          background: '#fee2e2',
          color: '#b91c1c',
          border: '1px solid #b91c1c',
          padding: '12px 24px',
        },
        closeButton: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-pink-50 to-purple-50 py-12 px-4 flex items-center justify-center">
      <Toaster richColors position="top-right" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Liên Hệ
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hãy kết nối để thảo luận về cơ hội hợp tác hoặc các dự án thú vị
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-none shadow-md hover:shadow-xl transition-shadow p-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-teal-600">
                  Thông Tin Liên Hệ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <motion.div
                    className="flex items-center"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="bg-teal-100 p-3 rounded-full mr-4">
                      <Mail className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Email</p>
                      <p className="text-gray-600">huynhnhule2004@gmail.com</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="bg-pink-100 p-3 rounded-full mr-4">
                      <Phone className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Điện thoại</p>
                      <p className="text-gray-600">+84 364 402 449</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="bg-purple-100 p-3 rounded-full mr-4">
                      <MapPin className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Địa chỉ</p>
                      <p className="text-gray-600">Cần Thơ, Việt Nam</p>
                    </div>
                  </motion.div>
                </div>

                <Separator className="my-6" />

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800">Mạng Xã Hội</h4>
                  <div className="flex space-x-4 justify-center">
                    <Button
                      variant="outline"
                      size="lg"
                      asChild
                      className="border-teal-500 text-teal-500 hover:bg-teal-50 rounded-full px-6"
                    >
                      <a href="https://github.com/huynhnhule2004" target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5 mr-2" />
                        GitHub
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      asChild
                      className="border-teal-500 text-teal-500 hover:bg-teal-50 rounded-full px-6"
                    >
                      <a href="https://www.facebook.com/huynh.nhu.le.245606/" target="_blank" rel="noopener noreferrer">
                        <Facebook className="w-5 h-5 mr-2" />
                        Facebook
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-none shadow-md hover:shadow-xl transition-shadow p-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-teal-600">
                  Gửi Tin Nhắn
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-800">
                      Họ tên <span className="text-red-500">*</span>
                    </label>
                    <Input
                      {...register('name', { required: 'Vui lòng nhập họ tên' })}
                      placeholder="Nhập họ tên của bạn"
                      className={`transition-all duration-300 rounded-full ${errors.name ? 'border-red-500' : 'hover:border-teal-500'}`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-800">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      {...register('email', {
                        required: 'Vui lòng nhập email',
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: 'Email không hợp lệ',
                        },
                      })}
                      placeholder="Nhập email của bạn"
                      className={`transition-all duration-300 rounded-full ${errors.email ? 'border-red-500' : 'hover:border-teal-500'}`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-800">
                      Chủ đề
                    </label>
                    <Input
                      {...register('subject')}
                      placeholder="Chủ đề tin nhắn"
                      className="transition-all duration-300 rounded-full hover:border-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-800">
                      Tin nhắn <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      {...register('message', { required: 'Vui lòng nhập tin nhắn' })}
                      rows={4}
                      placeholder="Nội dung tin nhắn..."
                      className={`transition-all duration-300 rounded-lg ${errors.message ? 'border-red-500' : 'hover:border-teal-500'}`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-full"
                  >
                    {isSubmitting ? (
                      'Đang gửi...'
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Gửi Tin Nhắn
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-8 text-center bg-gradient-to-r from-teal-500 to-purple-500 text-white">
            <CardHeader>
              <CardTitle className="text-2xl font-extrabold">
                Tôi Luôn Sẵn Sàng
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-6 leading-relaxed">
                Đang tìm kiếm cơ hội làm việc trong lĩnh vực phát triển web. Có thể bắt đầu ngay!
              </p>
              <div className="flex justify-center space-x-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-teal-600 hover:bg-teal-50 rounded-full px-6"
                >
                  <a href="/cv/CV_LETHIHUYNHNHU.pdf" download>
                    <Download className="w-5 h-5 mr-2" />
                    Tải CV
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactSection;