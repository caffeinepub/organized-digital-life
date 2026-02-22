import { useScrollAnimation } from '../hooks/useScrollAnimation';

const benefits = [
  {
    title: 'Weekly + Daily Pages',
    description: 'Plan your entire week and dive into daily details with ease',
  },
  {
    title: 'Hyperlinked Navigation',
    description: 'Jump between sections instantly with smart navigation',
  },
  {
    title: 'Habit & Goal Tracking',
    description: 'Build better habits and achieve your goals consistently',
  },
  {
    title: 'Clean, Aesthetic Design',
    description: 'Beautiful layouts that inspire productivity and creativity',
  },
];

export default function BenefitsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`px-6 py-16 md:py-24 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-16">
          Why You'll Love This Planner
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 rounded-2xl bg-card hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex-shrink-0">
                <img
                  src="/assets/generated/check-icon.dim_48x48.png"
                  alt="Check"
                  className="w-12 h-12"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
