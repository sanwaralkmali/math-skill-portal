import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, BookOpen, Gamepad2, Sword, Brain, Target, Users, Trophy, Zap } from "lucide-react";
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

// Helper function to get game icon and color
const getGameProps = (gameTitle: string, index: number) => {
  const gameTypes = [
    { icon: <Sword className="h-6 w-6" />, color: "orange" as const },
    { icon: <Users className="h-6 w-6" />, color: "teal" as const },
    { icon: <Target className="h-6 w-6" />, color: "primary" as const },
    { icon: <Brain className="h-6 w-6" />, color: "pink" as const },
    { icon: <Trophy className="h-6 w-6" />, color: "secondary" as const },
    { icon: <Gamepad2 className="h-6 w-6" />, color: "yellow" as const },
  ];
  
  return gameTypes[index % gameTypes.length];
};

const SkillPage = () => {
  const { skillName } = useParams<{ skillName: string }>();
  const [skillData, setSkillData] = useState<SkillData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSkillData = async () => {
      if (!skillName) return;
      try {
        const response = await fetch(`/data/${skillName}.json`);
        if (!response.ok) throw new Error('Skill not found');
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
          <h1 className="text-2xl font-bold text-foreground mb-2">Skill Not Found</h1>
          <p className="text-muted-foreground mb-6">{error}</p>
          <Button asChild variant="default">
            <Link to="/">Back to Skills</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-cairo">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary py-12">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {skillData.skill}
          </h1>
          <p className="text-xl text-white/90">
            Choose a game to start your {skillData.skill.toLowerCase()} adventure!
          </p>
        </div>
      </div>

      {/* Games Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            🎮 Available Games
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each game offers a unique way to master {skillData.skill.toLowerCase()}. 
            Choose your favorite game style and start playing!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillData.games.map((game, index) => {
            const gameProps = getGameProps(game.title, index);
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
      <footer className="w-full py-4 text-center text-sm text-muted-foreground border-t font-cairo">
        <div className="container mx-auto">
          <p>
            Educational Game 2025 | Created for Educational purposes By{" "}
            <Link 
              to="https://sanwaralkmali.github.io/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Salah Alkmali
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SkillPage;