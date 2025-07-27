import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Play, Zap } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface GameCardProps {
  title: string;
  description: string;
  link: string;
  color:
    | "orange"
    | "pink"
    | "yellow"
    | "teal"
    | "primary"
    | "secondary"
    | "blue"
    | "red"
    | "purple";
  icon?: string;
}

const colorClasses = {
  orange:
    "from-game-orange/20 to-game-orange/5 border-game-orange/30 hover:border-game-orange/50",
  pink: "from-game-pink/20 to-game-pink/5 border-game-pink/30 hover:border-game-pink/50",
  yellow:
    "from-game-yellow/20 to-game-yellow/5 border-game-yellow/30 hover:border-game-yellow/50",
  teal: "from-game-teal/20 to-game-teal/5 border-game-teal/30 hover:border-game-teal/50",
  blue: "from-blue-500/20 to-blue-500/5 border-blue-500/30 hover:border-blue-500/50",
  red: "from-red-500/20 to-red-500/5 border-red-500/30 hover:border-red-500/50",
  purple:
    "from-purple-500/20 to-purple-500/5 border-purple-500/30 hover:border-purple-500/50",
  primary:
    "from-primary/20 to-primary/5 border-primary/30 hover:border-primary/50",
  secondary:
    "from-secondary/20 to-secondary/5 border-secondary/30 hover:border-secondary/50",
};

const iconClasses = {
  orange: "text-game-orange bg-game-orange/10",
  pink: "text-game-pink bg-game-pink/10",
  yellow: "text-game-yellow bg-game-yellow/10",
  teal: "text-game-teal bg-game-teal/10",
  blue: "text-blue-500 bg-blue-500/10",
  red: "text-red-500 bg-red-500/10",
  purple: "text-purple-500 bg-purple-500/10",
  primary: "text-primary bg-primary/10",
  secondary: "text-secondary bg-secondary/10",
};

const buttonClasses = {
  orange:
    "from-game-orange to-game-orange/80 hover:from-game-orange/90 hover:to-game-orange/70",
  pink: "from-game-pink to-game-pink/80 hover:from-game-pink/90 hover:to-game-pink/70",
  yellow:
    "from-game-yellow to-game-yellow/80 hover:from-game-yellow/90 hover:to-game-yellow/70",
  teal: "from-game-teal to-game-teal/80 hover:from-game-teal/90 hover:to-game-teal/70",
  blue: "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
  red: "from-red-500 to-red-600 hover:from-red-600 hover:to-red-700",
  purple:
    "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
  primary:
    "from-primary to-secondary hover:from-primary-glow hover:to-secondary",
  secondary:
    "from-secondary to-primary hover:from-secondary/90 hover:to-primary/90",
};

export const GameCard = ({
  title,
  description,
  link,
  color,
  icon,
}: GameCardProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (link.toLowerCase().includes("coming soon")) {
      e.preventDefault();
      toast({
        title: "Coming Soon!",
        description: "This game will be available soon. Stay tuned!",
      });
    }
  };

  return (
    <Card
      className={`group h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br ${colorClasses[color]} border-2 cursor-pointer overflow-hidden`}
    >
      <CardHeader className="pb-2 lg:pb-3">
        <div className="flex items-center justify-between mb-2 lg:mb-3">
          <div
            className={`p-2 lg:p-3 rounded-xl ${iconClasses[color]} group-hover:scale-110 transition-all duration-300`}
          >
            {icon ? (
              <img
                src={icon}
                alt="Game type"
                className="h-5 w-5 lg:h-6 lg:w-6 object-contain"
              />
            ) : (
              <Play className="h-5 w-5 lg:h-6 lg:w-6" />
            )}
          </div>
          <Zap
            className={`h-4 w-4 lg:h-5 lg:w-5 ${
              iconClasses[color].split(" ")[0]
            } group-hover:animate-bounce opacity-60 group-hover:opacity-100 transition-all`}
          />
        </div>
        <CardTitle className="text-base lg:text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4 lg:space-y-6">
        <CardDescription className="text-muted-foreground leading-relaxed text-xs lg:text-sm">
          {description}
        </CardDescription>

        <Button
          asChild
          className={`w-full bg-gradient-to-r ${buttonClasses[color]} text-white font-semibold py-2 lg:py-3 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl text-sm lg:text-base`}
        >
          <a href={link} rel="noopener noreferrer" onClick={handleClick}>
            <Play className="w-3 h-3 lg:w-4 lg:h-4 mr-2 group-hover:animate-pulse" />
            Start Game
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};
