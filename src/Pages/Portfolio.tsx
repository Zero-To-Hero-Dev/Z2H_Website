import React, { useState } from 'react';
import { ExternalLink, ZoomIn } from 'lucide-react';
import SectionHeader from '../componentts/common/SectionHeader';
import Button from '../componentts/common/Button';
import { portfolioItems } from '../data';

type Category = 'All' | 'Website' | 'Graphic Design' | 'Robotics';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  
  const categories: Category[] = ['All', 'Website', 'Graphic Design', 'Robotics'];
  
  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Our Projects" 
          subtitle="Showcasing our best work across different domains"
        />
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <span className="text-sm text-indigo-300 font-semibold mb-2">{item.category}</span>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                <div className="flex gap-3">
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <ExternalLink className="w-4 h-4 text-gray-800" />
                  </button>
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <ZoomIn className="w-4 h-4 text-gray-800" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View More */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Want to see more of our work?</p>
          <Button>Request Full Portfolio</Button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;