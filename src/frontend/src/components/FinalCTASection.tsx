import { useScrollAnimation } from '../hooks/useScrollAnimation';
import CTAButton from './CTAButton';

export default function FinalCTASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`px-6 py-16 md:py-24 lg:py-32 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12">
          Start Planning Smarter Today
        </h2>

        <CTAButton>Get The Planner Now</CTAButton>
      </div>
    </section>
  );
}
