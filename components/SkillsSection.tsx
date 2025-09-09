import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML/CSS', level: 80, category: 'Frontend' },
  { name: 'Javascript', level: 75, category: 'Frontend' },
  { name: 'Typescript', level: 65, category: 'Frontend' },
  { name: 'React', level: 75, category: 'Frontend' },
  { name: 'Next.js', level: 75, category: 'Frontend' },
  { name: 'React Native', level: 50, category: 'Frontend' },
  { name: 'Vue.js', level: 65, category: 'Frontend' },
  { name: 'Angular', level: 60, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 75, category: 'Frontend' },
  { name: 'Bootstrap', level: 75, category: 'Frontend' },
  { name: 'PHP', level: 75, category: 'Backend' },
  { name: 'Laravel', level: 75, category: 'Backend' },
  { name: 'Node.js', level: 65, category: 'Backend' },
  { name: 'WordPress', level: 75, category: 'Backend' },
  { name: 'Git', level: 80, category: 'Tools' },
  { name: 'aaPanel', level: 65, category: 'Tools' },
  { name: 'Trello', level: 70, category: 'Tools' },
  { name: 'Figma', level: 70, category: 'Design & Management' },
];

const SkillsSection: React.FC = () => {
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
            Kỹ Năng Chuyên Môn
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bộ kỹ năng đa dạng của một sinh viên mới ra trường, đam mê sáng tạo và sẵn sàng chinh phục công nghệ
          </p>
        </motion.div>

        {['Frontend', 'Backend', 'Tools', 'Design & Management'].map((category) => (
          <Card
            key={category}
            className="mb-8 p-8 bg-white/80 backdrop-blur-sm border-none shadow-md hover:shadow-xl transition-shadow"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center text-teal-600">
              {category}
            </h3>
            <div className={category === 'Frontend' ? 'grid md:grid-cols-3 gap-6' : 'grid md:grid-cols-2 gap-6'}>
              {skills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-800">{skill.name}</span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <Progress
                      value={skill.level}
                      className="h-2 bg-gray-200 [&>div]:bg-gradient-to-r [&>div]:from-teal-400 [&>div]:to-pink-400"
                    />
                  </motion.div>
                ))}
            </div>
          </Card>
        ))}

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-white/80 backdrop-blur-sm border-none shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-6 text-pink-600">Kỹ Năng Mềm</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { name: 'Giao tiếp hiệu quả', desc: 'Truyền đạt ý tưởng rõ ràng, thuyết phục' },
                { name: 'Làm việc nhóm', desc: 'Hợp tác và hỗ trợ đồng đội hiệu quả' },
                { name: 'Tư duy sáng tạo', desc: 'Tìm giải pháp độc đáo cho mọi thách thức' },
                { name: 'Học hỏi nhanh', desc: 'Tiếp thu công nghệ mới với tốc độ cao' },
                { name: 'Quản lý thời gian', desc: 'Tối ưu hóa hiệu suất và deadline' },
              ].map((skill) => (
                <motion.div
                  key={skill.name}
                  className="flex items-start"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Star className="w-4 h-4 text-pink-500 mr-2 mt-1" />
                  <div>
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <p className="text-sm text-gray-600">{skill.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>

          <Card className="p-8 bg-white/80 backdrop-blur-sm border-none shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-6 text-purple-600">Ngôn Ngữ</h3>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">Tiếng Việt</span>
                  <span className="text-gray-600">Native</span>
                </div>
                <Progress
                  value={100}
                  className="h-2 bg-gray-200 [&>div]:bg-gradient-to-r [&>div]:from-teal-400 [&>div]:to-pink-400"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">Tiếng Anh</span>
                  <span className="text-gray-600">Pre-Intermediate</span>
                </div>
                <Progress
                  value={50}
                  className="h-2 bg-gray-200 [&>div]:bg-gradient-to-r [&>div]:from-teal-400 [&>div]:to-pink-400"
                />
              </motion.div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;