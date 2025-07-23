import React from 'react';
import { FOOTER_LINKS, SITE_CONFIG } from '@/lib/constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-8">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-gray-500 text-sm">{SITE_CONFIG.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;