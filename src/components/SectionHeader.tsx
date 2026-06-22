interface SectionHeaderProps {
  command: string;
  title: string;
}

export default function SectionHeader({ command, title }: SectionHeaderProps) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-2 text-sm mb-3 font-mono">
        <span className="text-terminal-green">❯</span>
        <span className="text-terminal-text/70">{command}</span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-white">
        <span className="text-terminal-green mr-2">#</span>
        {title}
      </h2>
      <div className="mt-3 h-px bg-gradient-to-r from-terminal-green/50 via-terminal-cyan/30 to-transparent" />
    </div>
  );
}
