import { Button } from '@/components/ui/button';

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function CTAButton({ children, onClick }: CTAButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default action - scroll to top or handle purchase
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className="bg-cta hover:bg-cta-hover text-cta-foreground font-semibold text-lg px-12 py-7 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
    >
      {children}
    </Button>
  );
}
