import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Zap } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface GameCardProps {
  title: string;
  description: string;
  link: string;
  color: "orange" | "pink" | "yellow" | "teal" | "primary" | "secondary";
  icon?: React.ReactNode;
}

const colorClasses = {
  orange: "from-game-orange/20 to-game-orange/5 border-game-orange/30 hover:border-game-orange/50",
  pink: "from-game-pink/20 to-game-pink/5 border-game-pink/30 hover:border-game-pink/50",
  yellow: "from-game-yellow/20 to-game-yellow/5 border-game-yellow/30 hover:border-game-yellow/50",
  teal: "from-game-teal/20 to-game-teal/5 border-game-teal/30 hover:border-game-teal/50",
  primary: "from-primary/20 to-primary/5 border-primary/30 hover:border-primary/50",
  secondary: "from-secondary/20 to-secondary/5 border-secondary/30 hover:border-secondary/50",
};

const iconClasses = {
  orange: "text-game-orange bg-game-orange/10",
  pink: "text-game-pink bg-game-pink/10", 
  yellow: "text-game-yellow bg-game-yellow/10",
  teal: "text-game-teal bg-game-teal/10",
  primary: "text-primary bg-primary/10",
  secondary: "text-secondary bg-secondary/10",
};

const buttonClasses = {
  orange: "from-game-orange to-game-orange/80 hover:from-game-orange/90 hover:to-game-orange/70",
  pink: "from-game-pink to-game-pink/80 hover:from-game-pink/90 hover:to-game-pink/70",
  yellow: "from-game-yellow to-game-yellow/80 hover:from-game-yellow/90 hover:to-game-yellow/70",
  teal: "from-game-teal to-game-teal/80 hover:from-game-teal/90 hover:to-game-teal/70",
  primary: "from-primary to-secondary hover:from-primary-glow hover:to-secondary",
  secondary: "from-secondary to-primary hover:from-secondary/90 hover:to-primary/90",
};

export const GameCard = ({ title, description, link, color, icon }: GameCardProps) => {
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
    <Card className={`group h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-gradient-to-br ${colorClasses[color]} border-2 cursor-pointer overflow-hidden`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-3">
          <div className={`p-3 rounded-xl ${iconClasses[color]} group-hover:scale-110 transition-all duration-300`}>
            {icon || <Play className="h-6 w-6" />}
          </div>
          <Zap className={`h-5 w-5 ${iconClasses[color].split(' ')[0]} group-hover:animate-bounce opacity-60 group-hover:opacity-100 transition-all`} />
        </div>
        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <CardDescription className="text-muted-foreground leading-relaxed text-sm">
          {description}
        </CardDescription>
        
        <Button 
          asChild 
          className={`w-full bg-gradient-to-r ${buttonClasses[color]} text-white font-semibold py-3 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl`}
        >
          <a href={link} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
            <Play className="w-4 h-4 mr-2 group-hover:animate-pulse" />
            Start Game
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};