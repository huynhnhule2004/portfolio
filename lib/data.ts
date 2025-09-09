import { Skill, Project, Certificate, Activity, Experience, NavItem } from "@/types";
import { 
  Home, User, Code, FolderOpen, Award, Users, Briefcase, MessageSquare 
} from 'lucide-react';

export const navItems: NavItem[] = [
  { id: 'home', label: 'Trang Chủ', icon: Home },
  { id: 'about', label: 'Về Tôi', icon: User },
  { id: 'skills', label: 'Kỹ Năng', icon: Code },
  { id: 'projects', label: 'Dự Án', icon: FolderOpen },
  { id: 'certificates', label: 'Chứng Chỉ', icon: Award },
  // { id: 'activities', label: 'Hoạt Động', icon: Users },
  // { id: 'experience', label: 'Kinh Nghiệm', icon: Briefcase },
  { id: 'contact', label: 'Liên Hệ', icon: MessageSquare },
];

export const skills: Skill[] = [
  { name: 'JavaScript/TypeScript', level: 90, category: 'Frontend' },
  { name: 'React.js/Next.js', level: 88, category: 'Frontend' },
  { name: 'Vue.js', level: 85, category: 'Frontend' },
  { name: 'HTML5/CSS3', level: 92, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'Frontend' },
  { name: 'Node.js', level: 85, category: 'Backend' },
  { name: 'PHP/Laravel', level: 80, category: 'Backend' },
  { name: 'MySQL/PostgreSQL', level: 82, category: 'Database' },
  { name: 'MongoDB', level: 78, category: 'Database' },
  { name: 'Git/GitHub', level: 88, category: 'Tools' },
  { name: 'Docker', level: 75, category: 'Tools' },
  { name: 'AWS/Cloud Services', level: 70, category: 'Tools' },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Nền tảng thương mại điện tử đầy đủ với React.js, Node.js và MongoDB',
    longDescription: 'Một nền tảng thương mại điện tử hoàn chỉnh với các tính năng như quản lý sản phẩm, giỏ hàng, thanh toán trực tuyến, và hệ thống quản lý đơn hàng.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Express', 'Stripe API', 'JWT'],
    features: ['Đăng nhập/Đăng ký người dùng', 'Quản lý sản phẩm', 'Giỏ hàng và thanh toán', 'Admin dashboard', 'Responsive design'],
    github: 'https://github.com/username/ecommerce',
    demo: 'https://demo-ecommerce.com',
    image: 'https://via.placeholder.com/400x250/3b82f6/ffffff?text=E-Commerce+Platform'
  },
  // ... (Thêm các dự án khác tương tự như code gốc)
];

export const certificates: Certificate[] = [
  {
    name: 'AWS Certified Developer - Associate',
    issuer: 'Amazon Web Services',
    date: '2024',
    credentialId: 'AWS-DEV-2024-001',
    image: 'https://via.placeholder.com/200x150/ff9500/ffffff?text=AWS'
  },
  // ... (Thêm các chứng chỉ khác tương tự như code gốc)
];

export const activities: Activity[] = [
  {
    title: 'Hackathon FPT Can Tho 2024',
    role: 'Team Leader',
    description: 'Dẫn dắt nhóm 4 người phát triển ứng dụng AI cho giáo dục',
    achievement: 'Giải Nhất - Best Innovation Award',
    date: 'Tháng 3, 2024',
    skills: ['Leadership', 'AI/ML', 'React.js', 'Python']
  },
  // ... (Thêm các hoạt động khác tương tự như code gốc)
];

export const experiences: Experience[] = [
  {
    title: 'Frontend Developer Intern',
    company: 'TechStart Vietnam',
    period: '06/2023 - 12/2023',
    description: 'Phát triển giao diện người dùng cho các ứng dụng web sử dụng React.js và TypeScript',
    achievements: [
      'Xây dựng 5+ components tái sử dụng',
      'Cải thiện hiệu suất ứng dụng 30%',
      'Tham gia code review và mentoring junior developers'
    ],
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Git']
  },
  // ... (Thêm các kinh nghiệm khác tương tự như code gốc)
];