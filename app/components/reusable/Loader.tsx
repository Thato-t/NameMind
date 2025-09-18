'use client'
import React from 'react';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({ 
  size = 'medium', 
  className = '' 
}) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-6 h-6',
    large: 'w-8 h-8'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <div 
        className="animate-spin rounded-full border-2 border-gray-300 border-t-transparent"
      />
    </div>
  );
};

export default Loader;
