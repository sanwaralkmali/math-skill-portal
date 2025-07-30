function MATHLOGAMEFooter() {
  return (
    <footer className="w-full py-4 text-center text-sm text-muted-foreground border-t bg-background/80 backdrop-blur-sm font-cairo flex-shrink-0">
      <a
        href="https://sanwaralkmali.github.io/mathlogame"
        className="flex items-center justify-center gap-2 hover:opacity-80 transition-opacity"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/icons/MATHLOGAME-light.png"
          alt="MATHLOGAME"
          className="h-12 w-auto"
        />
        Powered by
        <span className="mathlogame-logo"> MATHLOGAME</span>
      </a>
    </footer>
  );
}

export default MATHLOGAMEFooter;
