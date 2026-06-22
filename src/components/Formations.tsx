import SectionHeader from './SectionHeader';

const formations = [
  {
    title: 'Formation PHP Avancé',
    date: 'Mai 2025',
    institution: 'eTech • Madagascar',
    description:
      'Formation intensive en développement PHP avec le framework Symfony. Apprentissage des bonnes pratiques, architecture MVC, sécurité et performance des applications web.',
    skills: [
      'Développement d\'applications web avec Symfony',
      'Conception d\'API RESTful',
      'Optimisation des performances',
      'Sécurité des applications web',
      'Tests unitaires et fonctionnels',
    ],
  },
  {
    title: 'Licence en Informatique',
    date: '2022 - 2025',
    institution: 'IT University - Antananarivo/Madagascar',
    description:
      'Formation complète en informatique avec spécialisation en développement logiciel et systèmes intelligents. Acquisition de compétences en programmation, bases de données et intelligence artificielle.',
    skills: [],
  },
];

export default function Formations() {
  return (
    <section id="formations" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader command="cat formation.txt" title="Formations" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-terminal-cyan/50 via-terminal-purple/30 to-transparent" />

          {formations.map((formation, index) => (
            <div
              key={index}
              className="relative pl-12 sm:pl-16 pb-10 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-2.5 sm:left-4.5 top-1 w-3 h-3 rounded-full bg-terminal-cyan border-2 border-terminal-bg shadow-[0_0_10px_#00d4ff44]" />

              <div className="bg-terminal-card/60 backdrop-blur border border-terminal-border/50 rounded-lg p-6 card-hover">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h3 className="text-lg font-bold text-white">{formation.title}</h3>
                  <span className="text-xs px-3 py-1 rounded-full border border-terminal-cyan/30 text-terminal-cyan bg-terminal-cyan/10 w-fit">
                    {formation.date}
                  </span>
                </div>
                <p className="text-terminal-purple text-sm mb-3 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                  {formation.institution}
                </p>
                <p className="text-terminal-text/70 text-sm leading-relaxed mb-4">
                  {formation.description}
                </p>

                {formation.skills.length > 0 && (
                  <div className="mt-4 border-t border-terminal-border/30 pt-4">
                    <p className="text-terminal-green text-xs font-semibold mb-2">
                      Compétences acquises:
                    </p>
                    <ul className="space-y-1">
                      {formation.skills.map((skill, i) => (
                        <li
                          key={i}
                          className="text-terminal-text/60 text-xs flex items-start gap-2"
                        >
                          <span className="text-terminal-green mt-0.5">→</span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm mb-3 font-mono">
              <span className="text-terminal-green">❯</span>
              <span className="text-terminal-text/70">ls certifications/</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              <span className="text-terminal-purple mr-2">#</span>
              Certifications
            </h2>
            <div className="mt-3 h-px bg-gradient-to-r from-terminal-purple/50 via-terminal-cyan/30 to-transparent" />
          </div>

          <div className="bg-terminal-card/40 border border-terminal-border/30 rounded-lg p-8 text-center">
            <p className="text-terminal-muted text-sm italic">
              <span className="text-terminal-yellow mr-2">⚠</span>
              En cours d'acquisition...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
