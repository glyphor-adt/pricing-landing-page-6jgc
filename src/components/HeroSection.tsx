import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  imageUrl,
  primaryCtaText,
  primaryCtaLink,
  secondaryCtaText,
  secondaryCtaLink,
}) => {
  return (
    <section className="bg-background text-foreground py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/2 flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            {title}
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl">
            {description}
          </p>
          <div className="flex items-center gap-4">
            <Button asChild>
              <a href={primaryCtaLink}>{primaryCtaText}</a>
            </Button>
            {secondaryCtaText && secondaryCtaLink && (
              <Button variant="outline" asChild>
                <a href={secondaryCtaLink}>{secondaryCtaText}</a>
              </Button>
            )}
          </div>
        </div>
        <div className="md:w-1/2">
          <Image
            src={imageUrl}
            alt="Hero Image"
            width={700}
            height={500}
            className="rounded-lg shadow-md"
            style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
            priority // Add priority prop for initial load
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;