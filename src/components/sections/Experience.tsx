import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { ScrollReveal } from '../animations/ScrollReveal';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { portfolioConfig } from '../../data/portfolio.config';

export const Experience = () => {
  const { experience } = portfolioConfig;

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionTitle
            title="Work Experience"
            subtitle="My professional journey and contributions"
          />
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800 transform md:-translate-x-1/2" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                  <div className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Timeline Dot */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full transform -translate-x-1/2 ring-4 ring-white dark:ring-gray-900 z-10" />

                    {/* Content */}
                    <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                      <Card>
                        <div className="flex items-start gap-3 mb-4">
                          <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
                            <Briefcase className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                              {exp.role}
                            </h3>
                            <p className="text-primary-600 dark:text-primary-400 font-medium">
                              {exp.company}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                          <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">
                            {exp.type}
                          </span>
                        </div>

                        <ul className="space-y-2 mb-4">
                          {exp.description.map((item, idx) => (
                            <li key={idx} className="flex gap-2 text-gray-700 dark:text-gray-300">
                              <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </Card>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
