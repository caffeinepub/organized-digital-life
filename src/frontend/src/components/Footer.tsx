export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'organized-digital-life'
  );

  return (
    <footer className="px-6 py-8 text-center border-t border-border/30">
      <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
        Built with <span className="text-accent">♥</span> using{' '}
        <a
          href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors underline"
        >
          caffeine.ai
        </a>
      </p>
      <p className="text-xs text-muted-foreground mt-2">
        © {currentYear} Organized Digital Life
      </p>
    </footer>
  );
}
