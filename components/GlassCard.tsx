import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  enhanced?: boolean;
  onClick?: () => void;
}

export default function GlassCard({ 
  children, 
  className = '', 
  enhanced = false,
  onClick 
}: GlassCardProps) {
  return (
    <div
      className={`${enhanced ? 'glass-card-enhanced' : 'glass-card'} rounded-2xl p-6 ${className} ${onClick ? 'cursor-pointer hover:scale-[1.02] transition-transform duration-300' : ''}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
