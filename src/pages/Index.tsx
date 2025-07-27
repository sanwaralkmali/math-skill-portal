import {
  Component,
  Calculator,
  Divide,
  X,
  Target,
  Brain,
  Trophy,
} from "lucide-react";
import { SkillCard } from "@/components/ui/skill-card";

const mathSkills = [
  {
    title: "Number Classification",
    description:
      "Learn to classify numbers into different categories based on their properties.",
    skillName: "classification-numbers",
    color: "primary" as const,
    icon: <Component className="h-6 w-6" />,
  },
  {
    title: "Operations Invasion",
    description:
      "Master addition, subtraction, multiplication, and division through exciting battles.",
    skillName: "operations-invasion",
    color: "orange" as const,
    icon: <Calculator className="h-6 w-6" />,
  },
  {
    title: "Scientific Notation",
    description:
      "Learn to work with scientific notation through interactive games and challenges.",
    skillName: "scientific-notation",
    color: "yellow" as const,
    icon: <Brain className="h-6 w-6" />,
  },
  {
    title: "Rational Conversion",
    description:
      "Master converting between fractions, decimals, and percentages.",
    skillName: "rational-conversion",
    color: "green" as const,
    icon: <Divide className="h-6 w-6" />,
  },
  {
    title: "Algebra Builder",
    description:
      "Explore variables and constants in algebra with hands-on practice.",
    skillName: "algebra-builder",
    color: "teal" as const,
    icon: <Target className="h-6 w-6" />,
  },
  {
    title: "Simplify Expressions",
    description:
      "Master the art of simplifying mathematical expressions step by step.",
    skillName: "simplify-expressions",
    color: "violet" as const,
    icon: <X className="h-6 w-6" />,
  },
  {
    title: "Solving Equations",
    description:
      "Learn to solve equations from simple linear to complex equations.",
    skillName: "solving-equations",
    color: "blue" as const,
    icon: <Divide className="h-6 w-6" />,
  },
  {
    title: "Solving Inequalities",
    description:
      "Master solving and graphing inequalities with interactive challenges.",
    skillName: "solving-inequalities",
    color: "purple" as const,
    icon: <Trophy className="h-6 w-6" />,
  },
  {
    title: "Basic Factoring",
    description: "Learn GCF and factoring by grouping techniques.",
    skillName: "factoring-basic",
    color: "cyan" as const,
    icon: <Trophy className="h-6 w-6" />,
  },
  {
    title: "Factoring Trinomials",
    description: "Master factoring trinomials with different coefficients.",
    skillName: "factoring-trinomials",
    color: "red" as const,
    icon: <Trophy className="h-6 w-6" />,
  },
  {
    title: "Factoring Special Forms",
    description:
      "Learn to factor difference of squares and perfect square trinomials.",
    skillName: "squares-trinomials",
    color: "sky" as const,
    icon: <Trophy className="h-6 w-6" />,
  },
  {
    title: "Factoring Cubes",
    description: "Master factoring sum and difference of cubes.",
    skillName: "difference-sum-of-cubes",
    color: "amber" as const,
    icon: <Trophy className="h-6 w-6" />,
  },
  {
    title: "Solving by Factoring",
    description: "Solve equations using various factoring techniques.",
    skillName: "solving-equations-by-factoring",
    color: "violet" as const,
    icon: <Trophy className="h-6 w-6" />,
  },
  {
    title: "Quadratic Formula",
    description:
      "Learn to solve quadratic equations using the quadratic formula.",
    skillName: "quadratic-formula",
    color: "orange" as const,
    icon: <Trophy className="h-6 w-6" />,
  },
  {
    title: "Understanding Polynomials",
    description: "Explore polynomial concepts and their properties.",
    skillName: "understanding-polynomials",
    color: "orange" as const,
    icon: <Trophy className="h-6 w-6" />,
  },
  {
    title: "Adding & Subtracting Polynomials",
    description: "Master polynomial addition and subtraction operations.",
    skillName: "adding-subtracting-polynomials",
    color: "cyan" as const,
    icon: <Trophy className="h-6 w-6" />,
  },
  {
    title: "Multiplying Polynomials",
    description: "Learn to multiply polynomials using various methods.",
    skillName: "multiplying-polynomials",
    color: "violet" as const,
    icon: <Trophy className="h-6 w-6" />,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 font-cairo">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary py-12 lg:py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:30px_30px] lg:bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />

        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 lg:px-4 lg:py-2 rounded-full mb-4 lg:mb-6">
              <span className="text-lg lg:text-2xl">🧮</span>
              <span className="text-white/90 font-medium text-sm lg:text-base">
                Math Skills Portal
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 lg:mb-8 animate-float">
              Master Math
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-white/90 mt-2">
                Through Games
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 lg:mb-10 leading-relaxed max-w-3xl mx-auto px-4">
              Choose your skill and embark on an educational adventure with
              interactive games and exciting challenges.
            </p>

            <div className="flex flex-wrap justify-center gap-2 lg:gap-4 text-white/90 mb-6 lg:mb-8 px-4">
              <span className="bg-white/15 backdrop-blur-sm px-3 py-2 lg:px-6 lg:py-3 rounded-full border border-white/20 text-xs lg:text-sm">
                ✨ Interactive Learning
              </span>
              <span className="bg-white/15 backdrop-blur-sm px-3 py-2 lg:px-6 lg:py-3 rounded-full border border-white/20 text-xs lg:text-sm">
                🎯 Skill-Based Progression
              </span>
              <span className="bg-white/15 backdrop-blur-sm px-3 py-2 lg:px-6 lg:py-3 rounded-full border border-white/20 text-xs lg:text-sm">
                🏆 Achievement System
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="container mx-auto px-2 sm:px-4 py-8 sm:py-12 lg:py-20">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 lg:mb-6">
            Choose Your Math Adventure
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
            Each skill contains multiple games designed to make learning math
            fun and engaging. Start with any skill that interests you!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-8 max-w-7xl mx-auto">
          {mathSkills.map((skill, index) => (
            <div key={skill.skillName} className="w-full">
              <SkillCard
                title={skill.title}
                description={skill.description}
                skillName={skill.skillName}
                color={skill.color}
                icon={skill.icon}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-muted/50 py-8 lg:py-12 mt-12 lg:mt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 lg:gap-4 text-muted-foreground mb-3 lg:mb-4">
            <span className="text-lg lg:text-2xl">🎓</span>
            <span className="text-lg lg:text-2xl">🎮</span>
            <span className="text-lg lg:text-2xl">🚀</span>
          </div>
          <p className="text-base lg:text-lg font-medium text-foreground">
            Learn • Play • Excel
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
