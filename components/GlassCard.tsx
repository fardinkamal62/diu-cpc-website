import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  enhanced?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export default function GlassCard({ 
  children, 
  className = '', 
  enhanced = false,
  onClick,
  style
}: GlassCardProps) {
  return (
    <div
      className={`${enhanced ? 'glass-card-enhanced' : 'glass-card'} rounded-2xl p-6 ${className} ${onClick ? 'cursor-pointer hover:scale-[1.02] transition-transform duration-300' : ''}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  );
}
