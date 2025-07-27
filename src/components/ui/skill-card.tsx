import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Zap } from "lucide-react";

interface SkillCardProps {
  title: string;
  description: string;
  skillName: string;
  color:
    | "orange"
    | "pink"
    | "yellow"
    | "teal"
    | "primary"
    | "secondary"
    | "blue"
    | "green"
    | "red"
    | "purple"
    | "cyan"
    | "lime"
    | "amber"
    | "indigo"
    | "rose"
    | "violet"
    | "sky";
  icon?: React.ReactNode;
}

const colorClasses = {
  orange:
    "from-orange-500/10 to-orange-500/5 border-orange-200/50 hover:border-orange-300/70 hover:from-orange-500/15",
  pink: "from-pink-500/10 to-pink-500/5 border-pink-200/50 hover:border-pink-300/70 hover:from-pink-500/15",
  yellow:
    "from-yellow-500/10 to-yellow-500/5 border-yellow-200/50 hover:border-yellow-300/70 hover:from-yellow-500/15",
  teal: "from-teal-500/10 to-teal-500/5 border-teal-200/50 hover:border-teal-300/70 hover:from-teal-500/15",
  blue: "from-blue-500/10 to-blue-500/5 border-blue-200/50 hover:border-blue-300/70 hover:from-blue-500/15",
  green:
    "from-green-500/10 to-green-500/5 border-green-200/50 hover:border-green-300/70 hover:from-green-500/15",
  red: "from-red-500/10 to-red-500/5 border-red-200/50 hover:border-red-300/70 hover:from-red-500/15",
  purple:
    "from-purple-500/10 to-purple-500/5 border-purple-200/50 hover:border-purple-300/70 hover:from-purple-500/15",
  cyan: "from-cyan-500/10 to-cyan-500/5 border-cyan-200/50 hover:border-cyan-300/70 hover:from-cyan-500/15",
  lime: "from-lime-500/10 to-lime-500/5 border-lime-200/50 hover:border-lime-300/70 hover:from-lime-500/15",
  amber:
    "from-amber-500/10 to-amber-500/5 border-amber-200/50 hover:border-amber-300/70 hover:from-amber-500/15",
  indigo:
    "from-indigo-500/10 to-indigo-500/5 border-indigo-200/50 hover:border-indigo-300/70 hover:from-indigo-500/15",
  rose: "from-rose-500/10 to-rose-500/5 border-rose-200/50 hover:border-rose-300/70 hover:from-rose-500/15",
  violet:
    "from-violet-500/10 to-violet-500/5 border-violet-200/50 hover:border-violet-300/70 hover:from-violet-500/15",
  sky: "from-sky-500/10 to-sky-500/5 border-sky-200/50 hover:border-sky-300/70 hover:from-sky-500/15",
  primary:
    "from-primary/10 to-primary/5 border-primary/20 hover:border-primary/30 hover:from-primary/15",
  secondary:
    "from-secondary/10 to-secondary/5 border-secondary/20 hover:border-secondary/30 hover:from-secondary/15",
};

const iconClasses = {
  orange: "text-orange-600 bg-orange-100",
  pink: "text-pink-600 bg-pink-100",
  yellow: "text-yellow-600 bg-yellow-100",
  teal: "text-teal-600 bg-teal-100",
  blue: "text-blue-600 bg-blue-100",
  green: "text-green-600 bg-green-100",
  red: "text-red-600 bg-red-100",
  purple: "text-purple-600 bg-purple-100",
  cyan: "text-cyan-600 bg-cyan-100",
  lime: "text-lime-600 bg-lime-100",
  amber: "text-amber-600 bg-amber-100",
  indigo: "text-indigo-600 bg-indigo-100",
  rose: "text-rose-600 bg-rose-100",
  violet: "text-violet-600 bg-violet-100",
  sky: "text-sky-600 bg-sky-100",
  primary: "text-primary bg-primary/10",
  secondary: "text-secondary bg-secondary/10",
};

export const SkillCard = ({
  title,
  description,
  skillName,
  color,
  icon,
}: SkillCardProps) => {
  return (
    <Card
      className={`group h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br ${colorClasses[color]} border backdrop-blur-sm`}
    >
      <CardHeader className="pb-3 lg:pb-4">
        <div className="flex items-center justify-between mb-2 lg:mb-3">
          <div className={`p-2 lg:p-3 rounded-xl ${iconClasses[color]} group-hover:scale-110 transition-all duration-300`}>
            {icon || <Zap className="h-5 w-5 lg:h-6 lg:w-6" />}
          </div>
          <Zap className="h-4 w-4 lg:h-5 lg:w-5 text-muted-foreground group-hover:text-primary group-hover:animate-bounce transition-all" />
        </div>
        <CardTitle className="text-lg lg:text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-3 lg:space-y-4">
        <CardDescription className="text-muted-foreground leading-relaxed text-xs lg:text-sm">
          {description}
        </CardDescription>

        <Button
          asChild
          className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold group-hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl text-sm lg:text-base py-2 lg:py-3"
        >
          <Link to={`/skills/${skillName}`}>
            Explore Games
            <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};
