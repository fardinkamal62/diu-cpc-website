import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 glass-card-enhanced">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">DIU CPC</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Dhaka International University Computer Programming Club - 
              Empowering students through coding, innovation, and technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-white/70 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-white/70 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/events" className="text-white/70 hover:text-white transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="/committee" className="text-white/70 hover:text-white transition-colors">
                  Committee
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>📧 tech@cpc.diu.edu.bd</li>
              <li>📍 DIU Main Building</li>
              <li>🌐 Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/60 text-sm">
            © {currentYear} DIU Computer Programming Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
