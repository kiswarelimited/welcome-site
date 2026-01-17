'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects'},
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="bg-linear-to-r from-slate-950 via-slate-900 to-sky-950 shadow-xl fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative">
              <Image
                src="/icon/steadyflowlogo.png"
                alt="Steadyflow Logo"
                width={70}
                height={70}
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-all duration-200 hover:scale-105 border-b-2 pb-1 ${active
                    ? 'text-white border-teal-500 scale-105'
                    : 'text-gray-300 border-transparent hover:text-white hover:border-teal-500'
                    }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/message/5WGMY6PC2CO2B1"
              className="bg-linear-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-700 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
            >
              Chat with Our Team
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-inset transition-colors duration-200"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-linear-to-b from-slate-950 to-sky-950 border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 rounded-md font-medium transition-all duration-200 border-l-2 ${active
                      ? 'text-white bg-teal-600/20 border-teal-500'
                      : 'text-gray-300 border-transparent hover:text-white hover:bg-white/10 hover:border-teal-500'
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="px-3 py-2">
                <a
                  href="https://wa.me/message/5WGMY6PC2CO2B1"
                  className="block w-full text-center bg-linear-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-700 transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Chat with Our Team
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
