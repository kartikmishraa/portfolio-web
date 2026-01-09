import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { ScrollReveal } from '../animations/ScrollReveal';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { portfolioConfig } from '../../data/portfolio.config';

export const About = () => {
  const { personal, education } = portfolioConfig;

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionTitle
            title="About Me"
            subtitle="Get to know more about my background and education"
          />
        </ScrollReveal>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Personal Summary */}
          <ScrollReveal direction="up" delay={0.2}>
            <Card className="text-center">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {personal.summary}
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {personal.location}
                </div>
              </div>
            </Card>
          </ScrollReveal>

          {/* Education */}
          <ScrollReveal direction="up" delay={0.3}>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card key={index} className="relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary-500 to-primary-700" />
                    <div className="pl-6">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
                          <GraduationCap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                            {edu.degree}
                          </h4>
                          <p className="text-primary-600 dark:text-primary-400 font-medium">
                            {edu.institution}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.duration}
                        </div>
                        <div className="font-semibold text-primary-600 dark:text-primary-400">
                          CGPA: {edu.grade}
                        </div>
                      </div>
                      {edu.description && (
                        <p className="text-gray-600 dark:text-gray-400">
                          {edu.description}
                        </p>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
