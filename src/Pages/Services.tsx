import React from 'react';
import { CheckCircle} from 'lucide-react';
import SectionHeader from '../componentts/common/SectionHeader';
// import Button from '../componentts/common/Button';
import { services } from '../data';

const Services: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Our Services" 
          subtitle="Comprehensive solutions for all your digital needs"
        />
        
        <div className="space-y-12">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="md:flex">
                <div className={`md:w-1/3 bg-gradient-to-br ${service.color} p-8 text-white flex flex-col items-center justify-center text-center`}>
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <div className="md:w-2/3 p-8">
                  <p className="text-gray-700 text-lg mb-6">{service.description}</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  {/* <Button variant="outline" className="mt-4">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Button> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Process */}
        <div className="mt-20">
          <SectionHeader title="Our Process" subtitle="How we work to deliver excellence" />
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "We understand your needs and goals" },
              { step: "02", title: "Planning", desc: "We create a strategic roadmap" },
              { step: "03", title: "Execution", desc: "We bring ideas to life" },
              { step: "04", title: "Delivery", desc: "We ensure your satisfaction" }
            ].map((item, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;