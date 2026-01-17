import React from 'react';
import Link from 'next/link';

interface GlassButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'default' | 'blue' | 'outline';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function GlassButton({
  children,
  href,
  onClick,
  variant = 'default',
  className = '',
  type = 'button',
  disabled = false,
}: GlassButtonProps) {
  const baseClasses = 'px-6 py-3 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2';
  
  const variantClasses = {
    default: 'glass-button text-white',
    blue: 'blue-gradient-enhanced text-white shadow-lg hover:shadow-xl hover:scale-105',
    outline: 'border-2 border-white/30 text-white hover:bg-white/10',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={classes}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
