import React from 'react';
import { Grid, GridItem } from '@/components/ui/grid';
import {
  CheckCircleIcon,
  TrendingUpIcon,
  ShieldCheckIcon,
  ClockIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <CheckCircleIcon className="h-6 w-6 text-primary" />,
    title: 'Effortless Onboarding',
    description:
      'Get started quickly with our intuitive interface and seamless onboarding process. Experience a smooth transition and unlock the full potential of our platform from day one.',
  },
  {
    icon: <TrendingUpIcon className="h-6 w-6 text-primary" />,
    title: 'Increased Productivity',
    description:
      'Boost your productivity with our streamlined workflows and powerful features. Spend less time on repetitive tasks and more time on what truly matters.',
  },
  {
    icon: <ShieldCheckIcon className="h-6 w-6 text-primary" />,
    title: 'Robust Security',
    description:
      'Your data is safe and secure with our advanced security measures. We prioritize your privacy and protect your information with industry-leading encryption and protocols.',
  },
  {
    icon: <ClockIcon className="h-6 w-6 text-primary" />,
    title: '24/7 Support',
    description:
      'We are here to support you every step of the way. Our dedicated support team is available 24/7 to answer your questions and resolve any issues you may encounter.',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-12 bg-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8 text-primary-foreground">
          Key Features & Benefits
        </h2>
        <Grid className="grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <GridItem key={index} className="p-6 rounded-md shadow-md bg-card">
              <div className="flex items-center space-x-4 mb-4">
                {feature.icon}
                <h3 className="text-lg font-semibold text-card-foreground">{feature.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </GridItem>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default FeaturesSection;