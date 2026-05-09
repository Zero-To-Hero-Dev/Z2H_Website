import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  centered = true 
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {/* Title */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
        {title}
      </h2>
      
      {/* Subtitle */}
      {subtitle && (
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          {subtitle}
        </p>
      )}
      
      {/* Decorative Line */}
      <div className={`w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mt-4 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionHeader;