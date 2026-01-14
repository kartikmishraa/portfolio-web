import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { portfolioConfig } from '../../data/portfolio.config';

export const Footer = () => {
  const { personal } = portfolioConfig;
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, url: personal.social.github, label: 'GitHub' },
    { icon: Linkedin, url: personal.social.linkedin, label: 'LinkedIn' },
    { icon: Mail, url: `mailto:${personal.email}`, label: 'Email' },
  ];

  return (
    // <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12">
    <footer className="bg-gray-50 dark:bg-primary-900 border-t border-gray-200 dark:border-primary-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              link.url && (
                <a
                  key={link.label}
                  href={link.url}
                  target={link.url.startsWith('mailto:') ? undefined : '_blank'}
                  rel={link.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  // className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                  className="p-3 rounded-full bg-white dark:bg-primary-800 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              )
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by {personal.name}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              © {currentYear} {personal.name}. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
