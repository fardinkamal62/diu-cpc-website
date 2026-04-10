'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { LuHouse, LuInfo, LuUserPlus, LuMenu, LuX } from 'react-icons/lu';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home', icon: <LuHouse className="w-4 h-4" /> },
    { href: '/about', label: 'About', icon: <LuInfo className="w-4 h-4" /> },
    // { href: '/committee', label: 'Committee', icon: <LuUserPlus className="w-4 h-4" /> },
    // { href: '/events', label: 'Events', icon: <LuUserPlus className="w-4 h-4" /> },
    { href: '/membership', label: 'Membership', icon: <LuUserPlus className="w-4 h-4" /> },
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
        ? 'bg-primary-bg/60 backdrop-blur-xl shadow-lg border-primary-blue/20' 
        : 'bg-primary-bg/40 backdrop-blur-lg border-foreground/10'
    }`}>
      {/* Blue glow effect at the top */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-blue/10 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 py-4 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative">
            <div className="w-12 h-12 rounded-xl bg-foreground/10 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-primary-blue/30 group-hover:shadow-primary-blue/50 group-hover:scale-110 transition-all duration-300 relative overflow-hidden">
              {/* Animated shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <Image
                src="/cpc-logo.png"
                alt="DIU CPC Logo"
                width={48}
                height={48}
                className="relative z-10 object-contain"
                priority
              />
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-foreground drop-shadow-lg">DIU CPC</h1>
              <p className="text-xs text-foreground/60">Computer Programming Club</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2 bg-foreground/5 backdrop-blur-md rounded-2xl p-2 border border-foreground/10 shadow-lg">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all duration-300 relative overflow-hidden ${
                  isActive(link.href)
                    ? 'bg-linear-to-r from-primary-blue to-primary-blue text-foreground shadow-lg shadow-primary-blue/30 blue-gradient-enhanced'
                    : 'text-foreground/80 hover:text-foreground hover:bg-foreground/10'
                }`}
              >
                {isActive(link.href) && (
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/45 to-transparent animate-shimmer" />
                )}
                {link.icon}
                <span className="relative z-10">{link.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground/80 hover:text-primary-light transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <LuX className="w-6 h-6" /> : <LuMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 space-y-2 animate-slide-down bg-foreground/5 backdrop-blur-xl rounded-2xl p-4 border border-foreground/10 shadow-2xl">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-5 py-3 rounded-xl font-medium transition-all duration-300 relative overflow-hidden ${
                  isActive(link.href)
                    ? 'bg-gradient-to-r from-primary-blue to-blue-500 text-foreground shadow-lg shadow-primary-blue/30'
                    : 'text-foreground/80 hover:text-foreground hover:bg-foreground/10 border border-transparent hover:border-foreground/20'
                }`}
              >
                {isActive(link.href) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                )}
                {link.icon}
                <span className="relative z-10">{link.label}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
