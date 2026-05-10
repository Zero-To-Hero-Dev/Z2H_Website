import { ReactNode } from 'react';
import { Globe, Palette, Cpu, Zap } from 'lucide-react';

export interface ServiceItem {
  title: string;
  icon: ReactNode;
  description: string;
  features: string[];
  color: string;
}

export interface TrainingPhase {
  phase: string;
  duration: string;
  focus: string[];
  certificate: string;
}

export interface TrainingPricing {
  weekdayProgram: string;
  weekendProgram: string;
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

  trainingFormat?: string[];
  collaboration?: string[];

  phases?: TrainingPhase[];
  pricing?: TrainingPricing;

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
    description:
      "We create modern, responsive, and user-friendly websites for businesses, schools, organizations, and individuals.",
    features: [
      "Business Websites",
      "School Websites",
      "Portfolio Websites",
      "E-commerce Websites",
      "Website Redesign",
      "Website Maintenance"
    ],
    color: "from-blue-500 to-cyan-500"
  },

  {
    title: "Graphic Design",
    icon: <Palette className="w-8 h-8" />,
    description:
      "We design creative and professional visual content to help brands stand out.",
    features: [
      "Poster Design",
      "Flyer Design",
      "Logo Design",
      "Business Cards",
      "Social Media Designs",
      "Banners & Advertisements"
    ],
    color: "from-pink-500 to-rose-500"
  },

  {
    title: "IT Training",
    icon: <Cpu className="w-8 h-8" />,
    description:
      "Practical computer and digital skills training for beginners and learners who want real-world technology experience.",
    features: [
      "Computer Basics",
      "Microsoft Office",
      "Internet & Email",
      "Troubleshooting",
      "Networking Basics",
      "Data Backup & Recovery"
    ],
    color: "from-green-500 to-emerald-500"
  },

  {
    title: "Robotics Training",
    icon: <Zap className="w-8 h-8" />,
    description:
      "Interactive robotics and coding training for kids and beginners using hands-on projects and robotics kits.",
    features: [
      "Basic Robotics",
      "Arduino Programming",
      "Electronics & Sensors",
      "Block-Based Coding",
      "Teamwork & Creativity",
      "Building Robotic Projects"
    ],
    color: "from-purple-500 to-indigo-500"
  }
];

export const trainings: TrainingItem[] = [
  {
    title: "Robotics Training Camp for Kids",
    icon: <Zap className="w-12 h-12" />,
    ageGroup: "(8–12 Years), (13–15 Years)",
    duration: "1 Month",
    period: "School Holidays",
    fee: "70,000 RWF",

    trainingFormat: [
      "Students are grouped by age and learning level",
      "Hands-on practical sessions with robotics kits",
      "Interactive coding and electronics activities",
      "Team projects and creative problem-solving exercises",
      "Beginner-friendly environment with guided support"
    ],

    includes: [
      "Robotics Kits",
      "Practical Projects",
      "BlockCoding Activities",
      "Arduino Basics",
      "Electronics & Sensors",
      "Certificate After Completion"
    ],

    collaboration: [
      "Schools interested in collaboration can contact Z2H DEV LTD and Training programs can be organized directly at the school upon to Partnership agreements."
    ],

    color: "from-purple-600 to-indigo-600"
  },

  {
    title: "IoT Development & IoT Web Application Training",

    icon: <Cpu className="w-12 h-12" />,

    ageGroup: "(16 Years and Above)",

    duration: "2 Months",

    phases: [
      {
        phase: "Phase 1",
        duration: "1 Month",
        focus: [
          "IoT Fundamentals, Arduino & ESP8266/ESP32, Sensors & Electronics, Device Communication, Basic Projects"
        ],
        certificate: "Certificate Provided After Completion"
      },

      {
        phase: "Phase 2",
        duration: "1 Month",
        focus: [
          "IoT Web Application Development, Database Integration, API Communication, Dashboard Development, Real-Time Monitoring Projects"
        ],
        certificate: "Certificate Provided After Completion"
      }
    ],

    pricing: {
      weekdayProgram: "40,000 RWF per study phase",
      weekendProgram: "30,000 RWF per study phase"
    },

    trainingFormat: [
      "Project-based practical learning",
      "Real-world IoT application development",
      "Hands-on electronics and coding sessions",
      "Team collaboration and innovation activities"
    ],

    // includes: [
    //   "Practical IoT Projects",
    //   "Arduino & ESP Modules",
    //   "Sensors & Components",
    //   "Web Dashboard Development",
    //   "Coding Activities",
    //   "Certificates for Each Completed Phase"
    // ],

    color: "from-cyan-600 to-blue-600"
  },

  {
  title: "IT & Computer Skills Training",

  icon: <Cpu className="w-12 h-12" />,

  ageGroup: "Teens & Adults",

  duration: "Flexible Program",

  period: "Weekdays & Weekends Available",

  fee: "Affordable Pricing Available",

  trainingFormat: [
    "Hands-on practical learning",
    "Beginner-friendly training environment",
    "Real-world computer practice sessions",
    "Step-by-step guided support",
    "Individual and group learning activities"
  ],

  topics: [
    "Computer Basics",
    "Microsoft Word",
    "Microsoft Excel",
    "Microsoft PowerPoint",
    "Internet & Email Usage",
    "File Management",
    "Computer Troubleshooting",
    "Data Backup & Recovery",
    "Software Installation",
    "Typing & Productivity Skills",
    "Basic Networking",
    "Printing & Scanning",
    "Online Research Skills",
    "Digital Communication Skills"
  ],

  includes: [
    "Practical Exercises",
    "Training Materials",
    "Hands-on Computer Access",
    "Real Practice Projects",
    "Support From Trainers",
    "Certificate After Completion"
  ],

  color: "from-green-600 to-emerald-600"
}
];

export const portfolioItems: PortfolioItem[] = [
  {
    title: "E-Commerce Platform",
    category: "Website",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
    description:
      "Modern e-commerce website with payment integration"
  },

  {
    title: "School Website",
    category: "Website",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop",
    description:
      "Responsive school website with management system"
  },

  {
    title: "Brand Identity Package",
    category: "Graphic Design",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    description:
      "Complete brand identity and logo design"
  },

  {
    title: "Robotics Car Project",
    category: "Robotics",
    image:
      "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=400&fit=crop",
    description:
      "Arduino-based robotic car with sensors"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Robotics Camp Registration Open",
    date: "March 15, 2026",
    excerpt:
      "Join our exciting robotics camp for kids aged 8-15.",
    category: "Events"
  },

  {
    id: 2,
    title: "Student Robotics Projects Showcase",
    date: "March 10, 2026",
    excerpt:
      "See amazing projects built by our students.",
    category: "Showcase"
  }
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
  "Innovation",
  "Creativity",
  "Professionalism",
  "Learning",
  "Quality Service",
  "Teamwork"
];