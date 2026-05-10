import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Zap, Phone, CheckCircle, ArrowRight, Code, Palette, Cpu } from 'lucide-react';
import Button from '../componentts/common/Button';
import SectionHeader from '../componentts/common/SectionHeader';
import ServiceCard from '../componentts/common/ServiceCard';
import { services, whyChooseUs } from '../data';


const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-10 md:py-32">
          <div className="text-center animate-fadeInUp">
            <div className="inline-flex items-center gap-2 bg-indigo-100 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold text-indigo-600">Welcome to Z2H DEV LTD</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                LEARN • BUILD • LAUNCH
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Empowering businesses, students, and future innovators through technology, creativity, and practical digital skills.
            </p>
            
           <div className="flex flex-wrap justify-center gap-4">
  <Link to="/about">
    <Button icon={<Rocket className="w-5 h-5" />}>
      Get Started
    </Button>
  </Link>

  <Link to="/training">
    <Button variant="outline" icon={<Zap className="w-5 h-5" />}>
      Join Robotics Camp
    </Button>
  </Link>

  <Link to="/contact">
    <Button variant="secondary" icon={<Phone className="w-5 h-5" />}>
      Contact Us
    </Button>
  </Link>
</div>
          </div>
        </div>
        
        {/* Wave Decoration */}
        {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div> */}
      </section>

      {/* Introduction */}
      <section className=" bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Welcome to <span className="font-bold text-indigo-600">Z2H DEV LTD</span>, a technology and digital solutions company focused on innovation, creativity, and practical learning. 
              We provide website development, graphic design, IT support, and technology training programs designed to help individuals, students, and businesses grow in the digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Our Services" 
            subtitle="Comprehensive digital solutions tailored to your needs"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <ServiceCard key={idx} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Why Choose Us?" 
            subtitle="We are committed to excellence and your success"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {whyChooseUs.map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-all duration-300 group cursor-pointer"
              >
                <CheckCircle className="w-6 h-6 text-green-300 group-hover:scale-110 transition-transform" />
                <span className="font-medium group-hover:translate-x-1 transition-transform">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "100+", label: "Projects Completed", icon: Code },
              { number: "500+", label: "Students Trained", icon: Cpu },
              { number: "50+", label: "Happy Clients", icon: Palette },
              { number: "24/7", label: "Support Available", icon: Zap }
            ].map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to build your skills or grow your business?</h2>
          <p className="text-xl text-gray-300 mb-8">📞 Contact Z2H DEV LTD today and start your digital journey with us.</p>
          <Link to="/contact">
            <Button variant="primary" className="text-lg px-8 py-4">
              Get in Touch <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;