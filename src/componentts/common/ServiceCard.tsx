import React from 'react';
// import { ChevronRight } from 'lucide-react';
import { ServiceItem } from '../../data';

interface ServiceCardProps {
  service: ServiceItem;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2">
      <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
        <div className="text-4xl mb-3">{service.icon}</div>
        <h3 className="text-2xl font-bold">{service.title}</h3>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4">{service.description}</p>
        {/* <button className="text-indigo-600 font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
          Learn More <ChevronRight className="w-4 h-4" />
        </button> */}
      </div>
    </div>
  );
};

export default ServiceCard;