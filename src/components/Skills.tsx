import SectionHeader from './SectionHeader';

const skillCategories = [
  {
    title: 'Langages de programmation',
    icon: '💻',
    color: 'terminal-green',
    skills: ['C', 'Java', 'JavaScript', 'PHP', 'C#', 'Python'],
  },
  {
    title: 'Frameworks',
    icon: '⚡',
    color: 'terminal-cyan',
    skills: ['Spring Boot', 'Laravel', 'Symfony', 'CodeIgniter', 'Vue.js', 'React'],
  },
  {
    title: 'Bases de données',
    icon: '🗄️',
    color: 'terminal-purple',
    skills: ['MySQL', 'PostgreSQL', 'Oracle'],
  },
  {
    title: 'Outils & Technologies',
    icon: '🔧',
    color: 'terminal-yellow',
    skills: ['Git', 'Linux', 'Docker', 'Postman', 'Apache', 'WildFly'],
  },
];

const colorMap: Record<string, { border: string; bg: string; text: string; glow: string }> = {
  'terminal-green': {
    border: 'border-terminal-green/30',
    bg: 'bg-terminal-green/5',
    text: 'text-terminal-green',
    glow: 'hover:shadow-terminal-green/10',
  },
  'terminal-cyan': {
    border: 'border-terminal-cyan/30',
    bg: 'bg-terminal-cyan/5',
    text: 'text-terminal-cyan',
    glow: 'hover:shadow-terminal-cyan/10',
  },
  'terminal-purple': {
    border: 'border-terminal-purple/30',
    bg: 'bg-terminal-purple/5',
    text: 'text-terminal-purple',
    glow: 'hover:shadow-terminal-purple/10',
  },
  'terminal-yellow': {
    border: 'border-terminal-yellow/30',
    bg: 'bg-terminal-yellow/5',
    text: 'text-terminal-yellow',
    glow: 'hover:shadow-terminal-yellow/10',
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader command="ls skills/" title="Compétences Techniques" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, index) => {
            const colors = colorMap[cat.color];
            return (
              <div
                key={cat.title}
                className={`bg-terminal-card/60 backdrop-blur border ${colors.border} rounded-lg p-6 card-hover`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl">{cat.icon}</span>
                  <h3 className={`font-semibold ${colors.text}`}>{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 text-xs sm:text-sm ${colors.bg} border ${colors.border} rounded-md ${colors.text} skill-tag cursor-default`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
