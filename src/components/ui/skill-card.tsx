import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calculator, Zap } from "lucide-react";

interface SkillCardProps {
  title: string;
  description: string;
  skillName: string;
  color: "orange" | "pink" | "yellow" | "teal" | "primary" | "secondary";
  icon?: React.ReactNode;
}

const colorClasses = {
  orange: "from-game-orange/20 to-game-orange/5 border-game-orange/20 hover:border-game-orange/40",
  pink: "from-game-pink/20 to-game-pink/5 border-game-pink/20 hover:border-game-pink/40",
  yellow: "from-game-yellow/20 to-game-yellow/5 border-game-yellow/20 hover:border-game-yellow/40",
  teal: "from-game-teal/20 to-game-teal/5 border-game-teal/20 hover:border-game-teal/40",
  primary: "from-primary/20 to-primary/5 border-primary/20 hover:border-primary/40",
  secondary: "from-secondary/20 to-secondary/5 border-secondary/20 hover:border-secondary/40",
};

const iconClasses = {
  orange: "text-game-orange",
  pink: "text-game-pink", 
  yellow: "text-game-yellow",
  teal: "text-game-teal",
  primary: "text-primary",
  secondary: "text-secondary",
};

export const SkillCard = ({ title, description, skillName, color, icon }: SkillCardProps) => {
  return (
    <Card className={`group h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-gradient-to-br ${colorClasses[color]} border-2 cursor-pointer`}>
      <CardHeader className="pb-3">
        <div className="flex items-center space-x-3 mb-2">
          <div className={`p-2 rounded-lg bg-white/80 ${iconClasses[color]}`}>
            {icon || <Calculator className="h-6 w-6" />}
          </div>
          <Zap className={`h-5 w-5 ${iconClasses[color]} group-hover:animate-bounce`} />
        </div>
        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
        
        <Button 
          asChild 
          className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary-glow hover:to-secondary text-white font-semibold group-hover:scale-105 transition-all duration-200"
        >
          <Link to={`/skills/${skillName}`}>
            View Games
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};