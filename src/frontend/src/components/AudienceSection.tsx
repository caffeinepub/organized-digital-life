import { useScrollAnimation } from '../hooks/useScrollAnimation';

const audiences = [
  'Students',
  'Busy Professionals',
  'Entrepreneurs',
  'Anyone who wants clarity & structure',
];

export default function AudienceSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`px-6 py-16 md:py-24 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12">
          Who It's For
        </h2>

        <ul className="space-y-4 text-left max-w-md mx-auto">
          {audiences.map((audience, index) => (
            <li
              key={index}
              className="flex items-center gap-4 text-lg text-foreground"
            >
              <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
              <span>{audience}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
