import { Code, Database, Layout, Wrench } from 'lucide-react';
import { ScrollReveal } from '../animations/ScrollReveal';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { portfolioConfig } from '../../data/portfolio.config';

export const Skills = () => {
  const { skills } = portfolioConfig;

  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: skills.languages,
      color: 'from-primary-500 to-primary-700',
    },
    {
      title: 'Back-End',
      icon: Database,
      skills: skills.backend,
      color: 'from-primary-600 to-primary-800',
    },
    {
      title: 'Front-End',
      icon: Layout,
      skills: skills.frontend,
      color: 'from-primary-400 to-primary-600',
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      skills: skills.tools,
      color: 'from-primary-500 to-primary-900',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-primary-800">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionTitle
            title="Technical Skills"
            subtitle="Technologies and tools I work with"
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={category.title} direction="up" delay={index * 0.1}>
              <Card className="h-full">
                <div className="text-center mb-4">
                  <div
                    className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} mb-3`}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      // className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
                      className="px-3 py-2 bg-gray-100 dark:bg-primary-700 rounded-lg text-center text-sm font-medium text-primary-700 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
