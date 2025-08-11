import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  { quote: "GhoziTech delivered a flawless, secure platform ahead of schedule.", author: "A. Rahman, CTO" },
  { quote: "Exceptional code quality and proactive security mindset.", author: "S. Lee, Product Lead" },
  { quote: "Automation reduced our ops time by 60%. Remarkable work.", author: "M. Chen, COO" },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="container mx-auto py-20">
      <h2 className="font-display text-3xl md:text-4xl mb-10">Testimonials</h2>
      <div className="relative">
        <Carousel className="w-full" opts={{ align: "start" }}>
          <CarouselContent>
            {testimonials.map((t) => (
              <CarouselItem key={t.author} className="md:basis-1/2 lg:basis-1/3">
                <blockquote className="rounded-xl border p-6 h-full bg-card">
                  <p className="text-lg mb-4">“{t.quote}”</p>
                  <footer className="text-sm text-muted-foreground">— {t.author}</footer>
                </blockquote>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-6" />
          <CarouselNext className="-right-6" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
