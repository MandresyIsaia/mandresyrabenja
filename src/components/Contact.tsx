import { useState } from 'react';
import SectionHeader from './SectionHeader';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader command="./contact_form.sh" title="Me contacter" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="bg-terminal-card/60 backdrop-blur border border-terminal-border/50 rounded-lg p-6">
              <h3 className="text-terminal-green font-semibold mb-4">
                Informations de contact
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:ramamonjisoaaneliot@gmail.com"
                  className="flex items-center gap-3 text-terminal-text/70 hover:text-terminal-cyan transition-colors text-sm"
                >
                  <svg className="w-5 h-5 text-terminal-cyan shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  ramamonjisoaaneliot@gmail.com
                </a>
                <div className="flex items-center gap-3 text-terminal-text/70 text-sm">
                  <svg className="w-5 h-5 text-terminal-green shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Antananarivo, Madagascar
                </div>
                <a
                  href="https://github.com/Aneliot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-terminal-text/70 hover:text-terminal-purple transition-colors text-sm"
                >
                  <svg className="w-5 h-5 text-terminal-purple shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  github.com/Aneliot
                </a>
                <a
                  href="https://linkedin.com/in/aneliot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-terminal-text/70 hover:text-terminal-cyan transition-colors text-sm"
                >
                  <svg className="w-5 h-5 text-terminal-cyan shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  linkedin.com/in/aneliot
                </a>
              </div>
            </div>

            {/* Terminal style info */}
            <div className="bg-terminal-card/60 border border-terminal-border/50 rounded-lg p-4 font-mono text-xs">
              <div className="text-terminal-muted mb-1">
                <span className="text-terminal-green">❯</span> echo $STATUS
              </div>
              <p className="text-terminal-green">
                Disponible pour de nouvelles opportunités ✓
              </p>
              <div className="text-terminal-muted mt-2 mb-1">
                <span className="text-terminal-green">❯</span> echo $LOCATION
              </div>
              <p className="text-terminal-cyan">Antananarivo, Madagascar 🇲🇬</p>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-terminal-card/60 backdrop-blur border border-terminal-border/50 rounded-lg overflow-hidden">
            {/* Terminal bar */}
            <div className="flex items-center gap-2 px-4 py-2 bg-terminal-dark/50 border-b border-terminal-border/30">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs text-terminal-muted">
                message — compose
              </span>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {submitted && (
                <div className="bg-terminal-green/10 border border-terminal-green/30 rounded-lg p-3 text-terminal-green text-xs">
                  ✓ Message envoyé avec succès !
                </div>
              )}

              <div>
                <label className="block text-xs text-terminal-muted mb-1.5 font-mono">
                  <span className="text-terminal-green mr-1">$</span>NOM
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full bg-terminal-bg/50 border border-terminal-border/40 rounded-md px-4 py-2.5 text-sm text-terminal-text focus:outline-none focus:border-terminal-green/50 focus:ring-1 focus:ring-terminal-green/20 transition-all placeholder-terminal-muted/40"
                  placeholder="Votre nom..."
                />
              </div>

              <div>
                <label className="block text-xs text-terminal-muted mb-1.5 font-mono">
                  <span className="text-terminal-green mr-1">$</span>EMAIL
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full bg-terminal-bg/50 border border-terminal-border/40 rounded-md px-4 py-2.5 text-sm text-terminal-text focus:outline-none focus:border-terminal-green/50 focus:ring-1 focus:ring-terminal-green/20 transition-all placeholder-terminal-muted/40"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label className="block text-xs text-terminal-muted mb-1.5 font-mono">
                  <span className="text-terminal-green mr-1">$</span>MESSAGE
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="w-full bg-terminal-bg/50 border border-terminal-border/40 rounded-md px-4 py-2.5 text-sm text-terminal-text focus:outline-none focus:border-terminal-green/50 focus:ring-1 focus:ring-terminal-green/20 transition-all placeholder-terminal-muted/40 resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-terminal-green/10 border border-terminal-green/50 text-terminal-green rounded-md hover:bg-terminal-green/20 transition-all duration-300 text-sm font-medium"
              >
                {'>'} Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
