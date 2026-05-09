import { ReactNode } from 'react';
import { Globe, Palette, Cpu, Zap } from 'lucide-react';

export interface ServiceItem {
  title: string;
  icon: ReactNode;
  description: string;
  features: string[];
  color: string;
}

export interface TrainingItem {
  title: string;
  icon: ReactNode;
  ageGroup?: string;
  duration?: string;
  period?: string;
  fee?: string;
  includes?: string[];
  topics?: string[];
  color: string;
}

export interface PortfolioItem {
  title: string;
  category: 'Website' | 'Graphic Design' | 'Robotics';
  image: string;
  description: string;
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  image?: string;
}

export const services: ServiceItem[] = [
  {
    title: "Website Development",
    icon: <Globe className="w-8 h-8" />,
    description: "We create modern, responsive, and user-friendly websites for businesses, schools, organizations, and individuals.",
    features: ["Business Websites", "School Websites", "Portfolio Websites", "E-commerce Websites", "Website Redesign", "Website Maintenance"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Graphic Design",
    icon: <Palette className="w-8 h-8" />,
    description: "We design creative and professional visual content to help brands stand out.",
    features: ["Poster Design", "Flyer Design", "Logo Design", "Business Cards", "Social Media Designs", "Banners & Advertisements"],
    color: "from-pink-500 to-rose-500"
  },
  {
    title: "IT Training",
    icon: <Cpu className="w-8 h-8" />,
    description: "Practical computer and digital skills training for beginners and learners who want real-world technology experience.",
    features: ["Computer Basics", "Microsoft Office", "Internet & Email", "Troubleshooting", "Networking Basics", "Data Backup & Recovery"],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Robotics Training",
    icon: <Zap className="w-8 h-8" />,
    description: "Interactive robotics and coding training for kids and beginners using hands-on projects and robotics kits.",
    features: ["Basic Robotics", "Arduino Programming", "Electronics & Sensors", "Block-Based Coding", "Teamwork & Creativity", "Building Robotic Projects"],
    color: "from-purple-500 to-indigo-500"
  }
];

export const trainings: TrainingItem[] = [
  {
    title: "Robotics Training Camp for Kids",
    icon: <Zap className="w-12 h-12" />,
    ageGroup: "8–15 Years",
    duration: "1 Month",
    period: "School Holidays",
    fee: "60,000 RWF",
    includes: ["Robotics Kits", "Practical Projects", "Coding Activities", "Certificate After Completion"],
    color: "from-purple-600 to-indigo-600"
  },
  {
    title: "Computer Skills Training",
    icon: <Cpu className="w-12 h-12" />,
    topics: ["Computer Basics", "Microsoft Office", "Internet Skills", "Email Usage", "File Management"],
    color: "from-green-600 to-emerald-600"
  },
  {
    title: "Web Development Basics",
    icon: <Globe className="w-12 h-12" />,
    topics: ["HTML & CSS", "Website Structure", "Responsive Design", "Basic Hosting Concepts"],
    color: "from-blue-600 to-cyan-600"
  }
];

export const portfolioItems: PortfolioItem[] = [
  { 
    title: "E-Commerce Platform", 
    category: "Website", 
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
    description: "Modern e-commerce website with payment integration"
  },
  { 
    title: "School Website", 
    category: "Website", 
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop",
    description: "Responsive school website with management system"
  },
  { 
    title: "Brand Identity Package", 
    category: "Graphic Design", 
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    description: "Complete brand identity and logo design"
  },
  { 
    title: "Robotics Car Project", 
    category: "Robotics", 
    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=400&fit=crop",
    description: "Arduino-based robotic car with sensors"
  },
  { 
    title: "Business Portfolio", 
    category: "Website", 
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    description: "Professional portfolio for creative agency"
  },
  { 
    title: "Event Posters", 
    category: "Graphic Design", 
    image: "https://images.unsplash.com/photo-1536240474400-3f5f1e286cdb?w=600&h=400&fit=crop",
    description: "Eye-catching event promotional materials"
  }
];

export const blogPosts: BlogPost[] = [
  { id: 1, title: "Robotics Camp Registration Open", date: "March 15, 2026", excerpt: "Join our exciting robotics camp for kids aged 8-15. Limited spots available!", category: "Events" },
  { id: 2, title: "Student Robotics Projects Showcase", date: "March 10, 2026", excerpt: "See amazing projects built by our students using Arduino and sensors.", category: "Showcase" },
  { id: 3, title: "Tips for Learning Coding", date: "March 5, 2026", excerpt: "Essential tips for beginners starting their coding journey.", category: "Tips" },
  { id: 4, title: "Benefits of Digital Skills", date: "February 28, 2026", excerpt: "How digital skills can transform your career and business opportunities.", category: "Insights" },
  { id: 5, title: "New Website Design Trends", date: "February 20, 2026", excerpt: "Explore the latest trends in web design for 2026.", category: "Design" }
];

export const whyChooseUs = [
  "Practical Hands-on Learning",
  "Beginner-Friendly Training",
  "Modern & Professional Designs",
  "Affordable Services",
  "Real-World Projects",
  "Dedicated Support Team"
];

export const values = [
  "Innovation", "Creativity", "Professionalism", "Learning", "Quality Service", "Teamwork"
];