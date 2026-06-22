import { useState, useEffect, useCallback, useRef } from 'react';
import SectionHeader from './SectionHeader';

interface Star {
  x: number;
  y: number;
  speed: number;
  size: number;
}

interface Enemy {
  id: number;
  x: number;
  y: number;
  speed: number;
}

interface Bullet {
  id: number;
  x: number;
  y: number;
}

function GalacticDefenderGame({ onClose }: { onClose: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameRef = useRef({
    playerX: 200,
    bullets: [] as Bullet[],
    enemies: [] as Enemy[],
    stars: [] as Star[],
    score: 0,
    gameOver: false,
    nextBulletId: 0,
    nextEnemyId: 0,
    frameCount: 0,
    keys: {} as Record<string, boolean>,
  });
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const animRef = useRef<number>(0);

  const initStars = useCallback(() => {
    const stars: Star[] = [];
    for (let i = 0; i < 50; i++) {
      stars.push({
        x: Math.random() * 400,
        y: Math.random() * 500,
        speed: 1 + Math.random() * 2,
        size: Math.random() * 2,
      });
    }
    return stars;
  }, []);

  useEffect(() => {
    const game = gameRef.current;
    game.stars = initStars();
    game.playerX = 185;

    const handleKeyDown = (e: KeyboardEvent) => {
      game.keys[e.key] = true;
      if (e.key === ' ') {
        e.preventDefault();
        game.bullets.push({
          id: game.nextBulletId++,
          x: game.playerX + 12,
          y: 450,
        });
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      game.keys[e.key] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const gameLoop = () => {
      if (game.gameOver) return;

      game.frameCount++;

      // Move player
      if (game.keys['ArrowLeft'] || game.keys['a']) {
        game.playerX = Math.max(0, game.playerX - 5);
      }
      if (game.keys['ArrowRight'] || game.keys['d']) {
        game.playerX = Math.min(375, game.playerX + 5);
      }

      // Spawn enemies
      if (game.frameCount % 40 === 0) {
        game.enemies.push({
          id: game.nextEnemyId++,
          x: Math.random() * 370,
          y: -20,
          speed: 1.5 + Math.random() * 2,
        });
      }

      // Move bullets
      game.bullets = game.bullets
        .map((b) => ({ ...b, y: b.y - 7 }))
        .filter((b) => b.y > -10);

      // Move enemies
      game.enemies = game.enemies
        .map((e) => ({ ...e, y: e.y + e.speed }))
        .filter((e) => {
          if (e.y > 500) {
            game.gameOver = true;
            setGameOver(true);
            return false;
          }
          return true;
        });

      // Collision detection
      game.bullets = game.bullets.filter((b) => {
        const hit = game.enemies.findIndex(
          (e) =>
            Math.abs(b.x - e.x) < 20 && Math.abs(b.y - e.y) < 20
        );
        if (hit >= 0) {
          game.enemies.splice(hit, 1);
          game.score += 10;
          setScore(game.score);
          return false;
        }
        return true;
      });

      // Move stars
      game.stars = game.stars.map((s) => ({
        ...s,
        y: s.y + s.speed > 500 ? 0 : s.y + s.speed,
      }));

      // Draw
      ctx.fillStyle = '#0a0e17';
      ctx.fillRect(0, 0, 400, 500);

      // Draw stars
      game.stars.forEach((s) => {
        ctx.fillStyle = `rgba(0, 255, 65, ${0.3 + s.size * 0.2})`;
        ctx.fillRect(s.x, s.y, s.size, s.size);
      });

      // Draw player (triangle ship)
      ctx.fillStyle = '#00ff41';
      ctx.beginPath();
      ctx.moveTo(game.playerX + 12, 440);
      ctx.lineTo(game.playerX, 465);
      ctx.lineTo(game.playerX + 25, 465);
      ctx.closePath();
      ctx.fill();

      // Glow effect
      ctx.shadowColor = '#00ff41';
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Draw bullets
      ctx.fillStyle = '#00d4ff';
      game.bullets.forEach((b) => {
        ctx.fillRect(b.x - 1, b.y, 3, 10);
      });

      // Draw enemies
      ctx.fillStyle = '#ec4899';
      game.enemies.forEach((e) => {
        ctx.beginPath();
        ctx.arc(e.x + 10, e.y + 10, 10, 0, Math.PI * 2);
        ctx.fill();
      });

      // Score
      ctx.fillStyle = '#00ff41';
      ctx.font = '14px "Fira Code", monospace';
      ctx.fillText(`Score: ${game.score}`, 10, 25);

      animRef.current = requestAnimationFrame(gameLoop);
    };

    animRef.current = requestAnimationFrame(gameLoop);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [initStars]);

  const restart = () => {
    const game = gameRef.current;
    game.playerX = 185;
    game.bullets = [];
    game.enemies = [];
    game.score = 0;
    game.gameOver = false;
    game.frameCount = 0;
    setScore(0);
    setGameOver(false);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const gameLoop = () => {
      if (game.gameOver) return;
      game.frameCount++;

      if (game.keys['ArrowLeft'] || game.keys['a']) {
        game.playerX = Math.max(0, game.playerX - 5);
      }
      if (game.keys['ArrowRight'] || game.keys['d']) {
        game.playerX = Math.min(375, game.playerX + 5);
      }

      if (game.frameCount % 40 === 0) {
        game.enemies.push({
          id: game.nextEnemyId++,
          x: Math.random() * 370,
          y: -20,
          speed: 1.5 + Math.random() * 2,
        });
      }

      game.bullets = game.bullets.map((b) => ({ ...b, y: b.y - 7 })).filter((b) => b.y > -10);
      game.enemies = game.enemies.map((e) => ({ ...e, y: e.y + e.speed })).filter((e) => {
        if (e.y > 500) { game.gameOver = true; setGameOver(true); return false; }
        return true;
      });
      game.bullets = game.bullets.filter((b) => {
        const hit = game.enemies.findIndex((e) => Math.abs(b.x - e.x) < 20 && Math.abs(b.y - e.y) < 20);
        if (hit >= 0) { game.enemies.splice(hit, 1); game.score += 10; setScore(game.score); return false; }
        return true;
      });
      game.stars = game.stars.map((s) => ({ ...s, y: s.y + s.speed > 500 ? 0 : s.y + s.speed }));

      ctx.fillStyle = '#0a0e17';
      ctx.fillRect(0, 0, 400, 500);
      game.stars.forEach((s) => { ctx.fillStyle = `rgba(0, 255, 65, ${0.3 + s.size * 0.2})`; ctx.fillRect(s.x, s.y, s.size, s.size); });
      ctx.fillStyle = '#00ff41';
      ctx.beginPath(); ctx.moveTo(game.playerX + 12, 440); ctx.lineTo(game.playerX, 465); ctx.lineTo(game.playerX + 25, 465); ctx.closePath(); ctx.fill();
      ctx.shadowColor = '#00ff41'; ctx.shadowBlur = 10; ctx.fill(); ctx.shadowBlur = 0;
      ctx.fillStyle = '#00d4ff';
      game.bullets.forEach((b) => { ctx.fillRect(b.x - 1, b.y, 3, 10); });
      ctx.fillStyle = '#ec4899';
      game.enemies.forEach((e) => { ctx.beginPath(); ctx.arc(e.x + 10, e.y + 10, 10, 0, Math.PI * 2); ctx.fill(); });
      ctx.fillStyle = '#00ff41'; ctx.font = '14px "Fira Code", monospace'; ctx.fillText(`Score: ${game.score}`, 10, 25);

      animRef.current = requestAnimationFrame(gameLoop);
    };
    animRef.current = requestAnimationFrame(gameLoop);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-terminal-card border border-terminal-green/30 rounded-lg overflow-hidden max-w-md w-full">
        <div className="flex items-center justify-between px-4 py-2 bg-terminal-dark border-b border-terminal-border/30">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose} />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-xs text-terminal-muted">Galactic Defender</span>
          <span className="text-xs text-terminal-green">Score: {score}</span>
        </div>

        <div className="relative flex justify-center p-2 bg-terminal-bg">
          <canvas
            ref={canvasRef}
            width={400}
            height={500}
            className="border border-terminal-border/20 rounded"
          />

          {gameOver && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70">
              <p className="text-terminal-pink text-2xl font-bold mb-2">GAME OVER</p>
              <p className="text-terminal-green text-lg mb-4">Score: {score}</p>
              <button
                onClick={restart}
                className="px-6 py-2 bg-terminal-green/10 border border-terminal-green/50 text-terminal-green rounded hover:bg-terminal-green/20 transition-all text-sm"
              >
                Rejouer
              </button>
            </div>
          )}
        </div>

        <div className="px-4 py-3 bg-terminal-dark/50 border-t border-terminal-border/30 text-xs text-terminal-muted text-center">
          ← → pour bouger | Espace pour tirer
        </div>
      </div>
    </div>
  );
}

export default function ArcadeGame() {
  const [showGame, setShowGame] = useState(false);

  return (
    <section id="game" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader command="./play-arcade.sh" title="Arcade Game" />

        <div
          onClick={() => setShowGame(true)}
          className="bg-terminal-card/60 backdrop-blur border border-terminal-pink/30 rounded-lg p-8 text-center cursor-pointer card-hover group"
        >
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-xl font-bold text-terminal-pink mb-2 group-hover:glow-green transition-all">
            Galactic Defender
          </h3>
          <p className="text-terminal-muted text-sm mb-4">
            Jeu de tir spatial rétro
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-terminal-pink/10 border border-terminal-pink/30 text-terminal-pink rounded text-sm hover:bg-terminal-pink/20 transition-all">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Jouer
          </div>
        </div>

        {showGame && <GalacticDefenderGame onClose={() => setShowGame(false)} />}
      </div>
    </section>
  );
}
