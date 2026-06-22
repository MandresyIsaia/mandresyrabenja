import { useState, useEffect } from 'react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [showContent, setShowContent] = useState(false);
  const fullText = 'RAMAMONJISOA Aina Aneliot';

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowContent(true), 300);
      }
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-terminal-green/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-terminal-green/3 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-terminal-cyan/3 rounded-full blur-[128px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#00ff41 1px, transparent 1px), linear-gradient(90deg, #00ff41 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Terminal window */}
        <div className="bg-terminal-card/80 backdrop-blur border border-terminal-border/50 rounded-lg overflow-hidden mb-8 text-left max-w-2xl mx-auto">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-2 bg-terminal-dark/50 border-b border-terminal-border/30">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-2 text-xs text-terminal-muted">
              terminal — bash
            </span>
          </div>
          {/* Terminal content */}
          <div className="p-4 sm:p-6 font-mono text-sm">
            <div className="flex items-center gap-2 text-terminal-muted mb-2">
              <span className="text-terminal-green">aneliot@portfolio</span>
              <span className="text-terminal-muted">:</span>
              <span className="text-terminal-cyan">~</span>
              <span className="text-terminal-muted">$</span>
              <span className="text-terminal-text ml-1">whoami</span>
            </div>
            <p className="text-terminal-green mb-4 glow-green text-base">
              {displayText}
              <span className="animate-pulse">▊</span>
            </p>
            <div className="flex items-center gap-2 text-terminal-muted mb-2">
              <span className="text-terminal-green">aneliot@portfolio</span>
              <span className="text-terminal-muted">:</span>
              <span className="text-terminal-cyan">~</span>
              <span className="text-terminal-muted">$</span>
              <span className="text-terminal-text ml-1">cat about.txt</span>
            </div>
            {showContent && (
              <div className="animate-fadeIn text-terminal-text/80 text-xs sm:text-sm leading-relaxed">
                <p>→ Développeur Full-Stack passionné</p>
                <p>→ Étudiant en Licence Informatique @ IT University</p>
                <p>→ Antananarivo, Madagascar 🇲🇬</p>
              </div>
            )}
          </div>
        </div>

        {/* Name & title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
          <span className="text-terminal-green glow-green">{'<'}</span>
          <span className="text-white"> Aina Aneliot </span>
          <span className="text-terminal-green glow-green">{'/>'}</span>
        </h1>

        <p className="text-lg sm:text-xl text-terminal-cyan mb-2 glow-cyan">
          Développeur Full-Stack
        </p>
        <p className="text-terminal-muted text-sm sm:text-base mb-8">
          Symfony • Spring Boot • React • Vue.js • .NET
        </p>

        {/* CTA buttons */}
        {showContent && (
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fadeInUp">
            <a
              href="#projects"
              className="px-6 py-3 bg-terminal-green/10 border border-terminal-green/50 text-terminal-green rounded-lg hover:bg-terminal-green/20 transition-all duration-300 text-sm font-medium"
            >
              {'>'} Voir mes projets
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-terminal-cyan/10 border border-terminal-cyan/50 text-terminal-cyan rounded-lg hover:bg-terminal-cyan/20 transition-all duration-300 text-sm font-medium"
            >
              {'>'} Me contacter
            </a>
          </div>
        )}

        {/* Social links */}
        {showContent && (
          <div className="flex items-center justify-center gap-6 mt-8 animate-fadeIn">
            <a
              href="https://github.com/Aneliot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-muted hover:text-terminal-green transition-colors"
              title="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/aneliot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-muted hover:text-terminal-cyan transition-colors"
              title="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:ramamonjisoaaneliot@gmail.com"
              className="text-terminal-muted hover:text-terminal-yellow transition-colors"
              title="Email"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-terminal-green/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
