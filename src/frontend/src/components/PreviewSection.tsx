import { useScrollAnimation } from '../hooks/useScrollAnimation';

const previews = [
  {
    src: '/assets/generated/weekly-layout-preview.dim_600x800.png',
    alt: 'Weekly layout preview',
    title: 'Weekly Layout',
  },
  {
    src: '/assets/generated/daily-layout-preview.dim_600x800.png',
    alt: 'Daily layout preview',
    title: 'Daily Layout',
  },
  {
    src: '/assets/generated/habit-tracker-preview.dim_600x800.png',
    alt: 'Habit tracker preview',
    title: 'Habit Tracker',
  },
];

export default function PreviewSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`px-6 py-16 md:py-24 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previews.map((preview, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={preview.src}
                  alt={preview.alt}
                  className="w-full h-auto"
                />
              </div>
              <p className="mt-4 text-lg font-medium text-foreground">
                {preview.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
