import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { BookOpen, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GameCard } from "@/components/ui/game-card";

interface Game {
  title: string;
  description: string;
  link: string;
}

interface SkillData {
  skill: string;
  games: Game[];
}

// Helper function to get game icon and color based on game type
const getGameProps = (gameTitle: string, gameDescription: string) => {
  const title = gameTitle.toLowerCase();
  const description = gameDescription.toLowerCase();

  // Speed games (check first to avoid conflict with battle)
  if (title.includes("speed") || description.includes("speed")) {
    return {
      icon: "/icons/speed-buzzer.png",
      color: "red" as const,
      gameType: "Speed",
    };
  }

  // Quiz games
  if (title.includes("quiz") || description.includes("quiz")) {
    return {
      icon: "/icons/quiz.png",
      color: "blue" as const,
      gameType: "Quiz",
    };
  }

  // Battle games
  if (title.includes("battle") || description.includes("battle")) {
    return {
      icon: "/icons/battle.png",
      color: "orange" as const,
      gameType: "Battle",
    };
  }

  // Memory games (if any)
  if (
    title.includes("memory") ||
    description.includes("memory") ||
    title.includes("match")
  ) {
    return {
      icon: "/icons/memory-game.png",
      color: "purple" as const,
      gameType: "Memory",
    };
  }

  // Drag and drop games (if any)
  if (title.includes("drag") || description.includes("drag")) {
    return {
      icon: "/icons/drag-drop.png",
      color: "teal" as const,
      gameType: "Drag & Drop",
    };
  }

  // Default fallback
  return {
    icon: "/icons/quiz.png",
    color: "primary" as const,
    gameType: "Game",
  };
};

const Footer = () => (
  <footer className="w-full py-8 lg:py-12 text-center border-t bg-muted/50 font-cairo">
    <div className="container mx-auto">
      <div className="flex items-center justify-center gap-3 lg:gap-4 text-muted-foreground mb-3 lg:mb-4">
        <span className="text-lg lg:text-2xl">🎓</span>
        <span className="text-lg lg:text-2xl">🎮</span>
        <span className="text-lg lg:text-2xl">🚀</span>
      </div>
      <p className="text-base lg:text-lg font-medium text-foreground mb-2">
        Educational Game 2025
      </p>
      <p className="text-xs lg:text-sm text-muted-foreground">
        Created for Educational purposes By{" "}
        <a
          href="https://sanwaralkmali.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline font-medium"
        >
          Salah Alkmali
        </a>
      </p>
    </div>
  </footer>
);

const SkillPage = () => {
  const { skillName } = useParams<{ skillName: string }>();
  const [skillData, setSkillData] = useState<SkillData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadSkillData = async () => {
      if (!skillName) return;
      try {
        const response = await fetch(`/data/${skillName}.json`);
        if (!response.ok) throw new Error("Skill not found");
        const data = await response.json();
        setSkillData(data);
        setError(null);
      } catch (err) {
        setError("Skill not found");
        setSkillData(null);
      } finally {
        setLoading(false);
      }
    };
    loadSkillData();
  }, [skillName]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background font-cairo flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !skillData) {
    return (
      <div className="min-h-screen bg-background font-cairo flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Skill Not Found
          </h1>
          <p className="text-muted-foreground mb-6">{error}</p>
          <Button asChild variant="default">
            <a href="/">Back to Skills</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 font-cairo">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-primary to-secondary py-12 lg:py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:30px_30px] lg:bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />

        <div className="relative container mx-auto px-4 flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 lg:mb-6">
            {skillData.skill}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed px-4">
            Choose a game to start your {skillData.skill.toLowerCase()}{" "}
            adventure!
          </p>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-background/80 backdrop-blur-sm border-b border-border/50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-center sm:justify-between">
          {/* Modern Home Button */}
          <a
            href="https://sanwaralkmali.github.io/mathlogame"
            className="flex items-center gap-2 rounded-full bg-white/90 text-primary hover:bg-primary hover:text-white shadow transition-colors border border-primary/20 px-4 py-2
              mx-auto sm:mx-0 sm:static"
            aria-label="Back to Home"
          >
            <Home className="w-5 h-5 sm:w-4 sm:h-4" />
            <span className="text-sm font-medium">Home</span>
          </a>
        </div>
      </div>

      {/* Games Grid */}
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6">
            🎮 Available Games
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Each game offers a unique way to master{" "}
            {skillData.skill.toLowerCase()}. Choose your favorite game style and
            start playing!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 max-w-7xl mx-auto">
          {skillData.games
            .filter((game) => !game.link.toLowerCase().includes("coming soon"))
            .map((game, index) => {
              const gameProps = getGameProps(game.title, game.description);
              return (
                <GameCard
                  key={index}
                  title={game.title}
                  description={game.description}
                  link={game.link}
                  color={gameProps.color}
                  icon={gameProps.icon}
                />
              );
            })}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SkillPage;
