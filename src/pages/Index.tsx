import {
  Component,
  Calculator,
  Divide,
  X,
  Target,
  Brain,
  Gamepad2,
  Trophy,
} from "lucide-react";
import { SkillCard } from "@/components/ui/skill-card";

const mathSkills = [
  {
    title: "Number Classification",
    description:
      "Master number classification by classify numbers into different categories based on their properties.",
    skillName: "classification-numbers",
    color: "primary" as const,
    icon: <Component className="h-6 w-6" />,
  },
  {
    title: "Operations Invasion",
    description:
      "Master addition, subtraction, multiplication, and division through exciting battle scenarios. Fight math monsters with your calculation skills!",
    skillName: "operations-invasion",
    color: "orange" as const,
    icon: <Calculator className="h-6 w-6" />,
  },
  {
    title: "Scientific Notation",
    description:
      "Master the basics and operations of scientific notation through quizzes and battles!",
    skillName: "scientific-notation",
    color: "yellow" as const,
    icon: <Brain className="h-6 w-6" />,
  },

  {
    title: "Algebra Builder",
    description:
      "Explore the concepts of variables and constants in algebra. Practice identifying and using them in mathematical expressions and equations!",
    skillName: "algebra-builder",
    color: "teal" as const,
    icon: <Target className="h-6 w-6" />,
  },
  {
    title: "Simplify Expressions",
    description:
      "Master the art of simplifying mathematical expressions through quizzes and battles!",
    skillName: "simplify-expressions",
    color: "red" as const,
    icon: <X className="h-6 w-6" />,
  },

  {
    title: "Solving Equations",
    description:
      "Master the art of solving equations step by step, from simple linear to more complex equations!",
    skillName: "solving-equations",
    color: "blue" as const,
    icon: <Divide className="h-6 w-6" />,
  },
  {
    title: "Solving Inequalities",
    description:
      "Learn to solve and graph inequalities with interactive challenges and games!",
    skillName: "solving-inequalities",
    color: "purple" as const,
    icon: <Trophy className="h-6 w-6" />,
  },
  {
    title: "Basic Factoring",
    description: "GCF: Greatest Common Factor & Factoring by Grouping",
    skillName: "factoring-basic",
    color: "cyan" as const,
    icon: <Trophy className="h-6 w-6" />,
  },
  {
    title: "Factoring Trinomials",
    description: "Factoring Trinomials: x² + bx + c && ax² + bx + c",
    skillName: "factoring-trinomials",
    color: "red" as const,
    icon: <Trophy className="h-6 w-6" />,
  },
  {
    title: "Logic Puzzles",
    description:
      "Sharpen your problem-solving skills with mind-bending puzzles and logical challenges that make math fun!",
    skillName: "logic-puzzles",
    color: "primary" as const,
    icon: <Gamepad2 className="h-6 w-6" />,
  },
  {
    title: "Math Olympics",
    description:
      "Compete in mathematical challenges across all skill levels. From basic arithmetic to advanced problem solving!",
    skillName: "math-olympics",
    color: "secondary" as const,
    icon: <Trophy className="h-6 w-6" />,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-cairo">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary via-secondary to-primary py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-float">
              🧮 Math Skills Game Portal
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Master mathematics through engaging games and exciting challenges.
              Choose your skill and embark on an educational adventure!
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-white/80">
              <span className="bg-white/20 px-4 py-2 rounded-full">
                ✨ Interactive Learning
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full">
                🎯 Skill-Based Progression
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full">
                🏆 Achievement System
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Choose Your Math Adventure
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each skill contains multiple games designed to make learning math
            fun and engaging. Start with any skill that interests you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {mathSkills.map((skill, index) => (
            <SkillCard
              key={skill.skillName}
              title={skill.title}
              description={skill.description}
              skillName={skill.skillName}
              color={skill.color}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-muted py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">🎓 Learn • 🎮 Play • 🚀 Excel</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
