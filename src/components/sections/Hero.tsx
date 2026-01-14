import { motion } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';
import { Button } from '../ui/Button';
import { portfolioConfig } from '../../data/portfolio.config';

export const Hero = () => {
  const { personal } = portfolioConfig;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      // className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-primary-50 to-primary-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-primary-50 to-primary-100 dark:from-primary-700 dark:via-primary-800 dark:to-primary-900 pt-20"
    >
      <div className="container mx-auto px-4 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left side - Text */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white"
              variants={itemVariants}
            >
              Hi, I am{' '}
              <span className="bg-primary-800 dark:bg-primary-400 bg-clip-text text-transparent">
              {/* <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent"> */}
              {/* <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent"> */}
                {personal.name}
              </span>
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300"
              variants={itemVariants}
            >
              {personal.role}
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 dark:text-primary-400 max-w-xl"
              variants={itemVariants}
            >
              {personal.tagLine}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
              </Button>
              {personal.resume && (
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open(personal.resume, '_blank')}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              )}
            </motion.div>
          </motion.div>

          {/* Right side - Photo */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full blur-3xl opacity-20 animate-pulse" />
              <img
                src={personal.photo}
                alt={personal.name}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-2xl"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(personal.name)}&size=512&background=3b82f6&color=fff&bold=true`;
                }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection('about')}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            aria-label="Scroll down"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
