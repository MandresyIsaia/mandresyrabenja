import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#home', label: '~/' },
  { href: '#skills', label: 'skills/' },
  { href: '#projects', label: 'projects/' },
  { href: '#experiences', label: 'experience/' },
  { href: '#formations', label: 'formation/' },
  { href: '#contact', label: 'contact/' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection('#' + sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-terminal-bg/95 backdrop-blur-md border-b border-terminal-border/50 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 text-terminal-green font-bold text-lg hover:text-terminal-cyan transition-colors"
          >
            <span className="text-terminal-green">{'>'}</span>
            <span className="glow-green">flymetothemoon</span>
            <span className="animate-pulse text-terminal-green">_</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded text-sm transition-all duration-200 ${
                  activeSection === link.href
                    ? 'text-terminal-green bg-terminal-green/10 border border-terminal-green/30'
                    : 'text-terminal-muted hover:text-terminal-green hover:bg-terminal-green/5'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-terminal-green p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-terminal-border/30 mt-2 pt-2 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-2 rounded text-sm transition-all ${
                  activeSection === link.href
                    ? 'text-terminal-green bg-terminal-green/10'
                    : 'text-terminal-muted hover:text-terminal-green'
                }`}
              >
                <span className="text-terminal-green mr-2">❯</span>
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
