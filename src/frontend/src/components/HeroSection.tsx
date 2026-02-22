import { useScrollAnimation } from '../hooks/useScrollAnimation';
import CTAButton from './CTAButton';

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`px-6 py-16 md:py-24 lg:py-32 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
          Stay Organized in 2026 Without Overcomplicating Your Life
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-light">
          The All-in-One Digital Planner for iPad & GoodNotes
        </p>

        <div className="mb-12 flex justify-center">
          <img
            src="/assets/generated/ipad-mockup.dim_800x600.png"
            alt="iPad showing colorful weekly planner layout"
            className="max-w-full h-auto rounded-2xl shadow-2xl"
          />
        </div>

        <CTAButton>Get The Planner Now</CTAButton>
      </div>
    </section>
  );
}
