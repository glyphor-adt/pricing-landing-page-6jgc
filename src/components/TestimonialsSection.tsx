import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  avatarUrl?: string;
  testimonial: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'Alice Smith',
    title: 'CEO, Company A',
    avatarUrl: 'https://avatars.dicebear.com/api/open-peeps/alice.svg',
    testimonial:
      'This product has revolutionized our workflow! We\'ve seen a significant increase in efficiency and productivity. Highly recommend!',
  },
  {
    id: 2,
    name: 'Bob Johnson',
    title: 'Marketing Director, Company B',
    avatarUrl: 'https://avatars.dicebear.com/api/open-peeps/bob.svg',
    testimonial:
      'The support team is incredibly responsive and helpful. They went above and beyond to ensure we were successful with the implementation. Excellent service!',
  },
  {
    id: 3,
    name: 'Charlie Brown',
    title: 'CTO, Company C',
    avatarUrl: 'https://avatars.dicebear.com/api/open-peeps/charlie.svg',
    testimonial:
      'As a technical user, I appreciate the clean code and well-documented API. Integration was a breeze, and the performance is top-notch.',
  },
  {
    id: 4,
    name: 'Diana Miller',
    title: 'Product Manager, Company D',
    avatarUrl: 'https://avatars.dicebear.com/api/open-peeps/diana.svg',
    testimonial:
      'We\'ve been using this product for over a year now and it has consistently delivered value. It\'s become an indispensable part of our toolkit.',
  },
];


const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-12 bg-secondary/50 dark:bg-secondary/70">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8 text-primary dark:text-primary-foreground">What Our Clients Say</h2>

        <Carousel
          opts={{
            loop: true,
          }}
          className="w-full max-w-screen-lg mx-auto"
        >
          <CarouselContent className="-ml-1 md:-ml-4">
            {testimonialsData.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 px-1 md:px-4">
                <Card className="bg-card text-card-foreground shadow-md dark:bg-card/90">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.title}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{testimonial.testimonial}</p>
                  </CardContent>
                  <CardFooter className="flex items-center justify-center">
                    <Avatar>
                      <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-2" />
          <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-2" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;