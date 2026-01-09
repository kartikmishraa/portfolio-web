import { Award, ExternalLink, Calendar } from 'lucide-react';
import { ScrollReveal } from '../animations/ScrollReveal';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { portfolioConfig } from '../../data/portfolio.config';

export const Certificates = () => {
  const { certificates } = portfolioConfig;

  return (
    <section id="certificates" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionTitle
            title="Certificates & Achievements"
            subtitle="Professional certifications and credentials"
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.1}>
              <Card className="h-full flex flex-col">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                      <Award className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {cert.name}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-medium">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {cert.description}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {cert.date}
                    </div>
                  </div>

                  {cert.credentialId && (
                    <p className="text-xs text-gray-500 dark:text-gray-500 mb-4">
                      Credential ID: {cert.credentialId}
                    </p>
                  )}
                </div>

                {cert.link && (
                  <div className="mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(cert.link, '_blank')}
                      className="w-full"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Credential
                    </Button>
                  </div>
                )}
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
