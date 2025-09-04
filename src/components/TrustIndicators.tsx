import { TrendingUp, Users, Star, Clock, CheckCircle, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const TrustIndicators = () => {
  const stats = [
    {
      icon: TrendingUp,
      metric: "30%",
      description: "Average Efficiency Improvement",
      color: "text-accent"
    },
    {
      icon: Users,
      metric: "100+",
      description: "Businesses Transformed",
      color: "text-secondary"
    },
    {
      icon: Star,
      metric: "90%",
      description: "Client Satisfaction Rate",
      color: "text-warm"
    },
    {
      icon: Clock,
      metric: "60",
      description: "Days Average ROI Timeline",
      color: "text-accent"
    }
  ];

  const achievements = [
    {
      icon: CheckCircle,
      text: "Certified AI Implementation Partner"
    },
    {
      icon: Award,
      text: "Top-Rated Business Automation Solutions"
    },
    {
      icon: Users,
      text: "Serving SMBs Across Turkey & Globally"
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-accent font-bold text-foreground mb-6">
            Trusted by <span className="text-secondary">100+ Turkish Businesses</span>
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            Join leading companies who have transformed their operations with measurable AI solutions
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="p-6 text-center hover:shadow-glow transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col items-center space-y-4">
                <div className={`p-3 rounded-full bg-muted ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <div className={`text-3xl font-accent font-bold ${stat.color}`}>
                    {stat.metric}
                  </div>
                  <p className="text-sm text-muted-foreground font-body leading-tight">
                    {stat.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="flex items-center space-x-3 p-4 bg-card rounded-lg shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${(index + 4) * 200}ms` }}
            >
              <achievement.icon className="h-5 w-5 text-accent flex-shrink-0" />
              <span className="text-card-foreground font-body font-medium">
                {achievement.text}
              </span>
            </div>
          ))}
        </div>

        {/* Client Testimonial Quote */}
        <div className="mt-16 text-center">
          <blockquote className="text-2xl font-accent font-light text-muted-foreground italic max-w-4xl mx-auto">
            "Thessa's AI solutions helped us achieve a 35% efficiency improvement in just 60 days. 
            The data-backed approach gave us confidence in every decision."
          </blockquote>
          <div className="mt-6 flex items-center justify-center space-x-4">
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div className="text-left">
              <div className="font-body font-semibold text-foreground">Healthcare Clinic Owner</div>
              <div className="text-muted-foreground text-sm font-body">Istanbul, Turkey</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;