'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Committee', path: '/committee' },
    { name: 'Become a Member', path: '/membership' },
  ];

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-primary-dark/60 backdrop-blur-xl shadow-2xl border-b border-primary-blue/20' 
        : 'bg-primary-dark/40 backdrop-blur-lg border-b border-white/10'
    }`}>
      {/* Blue glow effect at the top */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-blue/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 py-4 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-blue via-blue-500 to-light-blue flex items-center justify-center shadow-lg shadow-primary-blue/30 group-hover:shadow-primary-blue/50 group-hover:scale-110 transition-all duration-300 relative overflow-hidden">
              {/* Animated shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="text-2xl font-bold relative z-10">CPC</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-white drop-shadow-lg">DIU CPC</h1>
              <p className="text-xs text-white/60">Computer Programming Club</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2 bg-white/5 backdrop-blur-md rounded-2xl p-2 border border-white/10 shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 relative overflow-hidden ${
                  isActive(item.path)
                    ? 'bg-gradient-to-r from-primary-blue to-blue-500 text-white shadow-lg shadow-primary-blue/30'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {isActive(item.path) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden bg-white/10 backdrop-blur-md hover:bg-white/20 p-2.5 rounded-xl transition-all duration-300 border border-white/20 hover:border-primary-blue/50 shadow-lg"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 space-y-2 animate-slide-down bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 shadow-2xl">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-5 py-3 rounded-xl font-medium transition-all duration-300 relative overflow-hidden ${
                  isActive(item.path)
                    ? 'bg-gradient-to-r from-primary-blue to-blue-500 text-white shadow-lg shadow-primary-blue/30'
                    : 'text-white/80 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/20'
                }`}
              >
                {isActive(item.path) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
