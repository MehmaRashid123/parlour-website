import React from 'react';
import Link from 'next/link';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'Facebook',
      href: '#',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      )
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (
        <svg fill="currentColor" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" stroke="none" />
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-gray-900 text-gray-400 body-font">
      <div className="container px-5 py-8 mx-auto flex flex-col items-center sm:flex-row">
        <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <h2 className="text-2xl font-extrabold">Glow Beauty</h2>
        </Link>
        
        <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
          © {currentYear} GlowBeauty —
          <a
            href="https://twitter.com/glowbeauty"
            className="text-gray-500 ml-1 hover:text-white transition-colors"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Our Twitter"
          >
            @glowbeauty
          </a>
        </p>
        
        <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start space-x-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="text-gray-500 hover:text-white transition-colors"
              aria-label={social.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;