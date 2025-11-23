import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircleIcon } from '@heroicons/react/20/solid';

interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  cta: string;
  mostPopular?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Basic',
    price: '$9 / month',
    features: [
      'Access to core features',
      '10 Projects',
      'Community Support',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Pro',
    price: '$29 / month',
    features: [
      'All Basic features',
      'Unlimited Projects',
      'Priority Support',
      'Advanced Analytics',
    ],
    cta: 'Upgrade to Pro',
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    price: 'Contact Us',
    features: [
      'All Pro features',
      'Dedicated Support',
      'Custom Integrations',
      'White Labeling',
    ],
    cta: 'Contact Sales',
  },
];

const PricingSection: React.FC = () => {
  return (
    <div className="bg-background py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-foreground mb-8">
          Choose the plan that's right for you
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`shadow-md ${plan.mostPopular ? 'border-2 border-primary' : ''}`}>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                {plan.mostPopular && (
                  <div className="text-sm text-primary mt-2">Most Popular</div>
                )}
                <div className="text-xl font-medium mt-2">{plan.price}</div>
              </CardHeader>
              <CardContent className="px-4">
                <ul className="list-none space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircleIcon className="h-4 w-4 mr-2 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button variant={plan.mostPopular ? 'primary' : 'outline'} className="w-full">
                    {plan.cta}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;