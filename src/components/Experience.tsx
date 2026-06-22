import SectionHeader from './SectionHeader';

const experiences = [
  {
    title: 'Développeur Full-Stack - Stage',
    date: 'Juin 2025 - Septembre 2025',
    company: 'eTech Consulting • Madagascar',
    description:
      'Stage de développement Full-Stack dans une entreprise technologique. Participation au développement d\'applications web modernes et mise en pratique des technologies avancées.',
  },
];

export default function Experience() {
  return (
    <section id="experiences" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader command="cat experience.txt" title="Expériences Professionnelles" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-terminal-green/50 via-terminal-cyan/30 to-transparent" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-12 sm:pl-16 pb-10 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-2.5 sm:left-4.5 top-1 w-3 h-3 rounded-full bg-terminal-green border-2 border-terminal-bg shadow-[0_0_10px_#00ff4144]" />

              <div className="bg-terminal-card/60 backdrop-blur border border-terminal-border/50 rounded-lg p-6 card-hover">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                  <span className="text-xs px-3 py-1 rounded-full border border-terminal-green/30 text-terminal-green bg-terminal-green/10 w-fit">
                    {exp.date}
                  </span>
                </div>
                <p className="text-terminal-cyan text-sm mb-3 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  {exp.company}
                </p>
                <p className="text-terminal-text/70 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
