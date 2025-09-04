import { Search, Brain, Rocket, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      name: "Discovery & Analysis",
      icon: Search,
      description: "Conduct structured assessments of client business processes, identify inefficiencies, and collect baseline data for revenue, time, customer retention, and operational costs.",
      detailedDescription: "Structured assessment of your business processes with baseline data collection",
      outcome: "Identify 3-5 key improvement areas",
      deliverables: [
        "Business process audit checklist",
        "KPI baseline measurements",
        "Inefficiency identification report"
      ],
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      name: "AI-Driven Process Audit",
      icon: Brain,
      description: "Perform detailed analysis of critical workflows, generate actionable insights with measurable impact, and recommend 1–3 pilot solutions that can be deployed quickly.",
      detailedDescription: "Detailed workflow analysis with actionable insights and measurable impact",
      outcome: "Get 1-3 ready-to-deploy pilot solutions",
      deliverables: [
        "Workflow analysis report",
        "Actionable improvement insights",
        "Pilot solution recommendations"
      ],
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      name: "Pilot Implementation",
      icon: Rocket,
      description: "Deploy AI automation pilots using n8n workflows and AI tools for tasks such as customer communication, scheduling, sales assistance, or data processing. Measure results and generate reports for clients.",
      detailedDescription: "Deploy AI automation using n8n workflows for immediate results",
      outcome: "See measurable improvements in 30 days",
      deliverables: [
        "Deployed automation workflows",
        "Performance monitoring setup",
        "30-day results report"
      ],
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      name: "Continuous Improvement & Optimization",
      icon: TrendingUp,
      description: "Monitor deployed solutions, optimize workflows based on performance data, and scale successful pilots into repeatable processes.",
      detailedDescription: "Monitor, optimize, and scale successful solutions",
      outcome: "Scale pilots into repeatable processes",
      deliverables: [
        "Performance optimization reports",
        "Scaled automation processes",
        "Long-term improvement roadmap"
      ],
      color: "text-warm",
      bgColor: "bg-warm/10"
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-accent font-bold text-foreground mb-6">
            Our Proven <span className="text-secondary">4-Step Process</span>
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto">
            A systematic approach to transform your business operations with measurable AI solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-elegant transition-all duration-500 hover:scale-[1.02] group animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-start space-x-6">
                {/* Icon */}
                <div className={`${service.bgColor} p-4 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-accent font-semibold text-foreground mb-2">
                      {service.name}
                    </h3>
                    <p className="text-muted-foreground font-body leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Outcome */}
                  <div className="flex items-center space-x-2 p-3 bg-muted rounded-lg">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="font-body font-medium text-foreground">
                      {service.outcome}
                    </span>
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-2">
                    <h4 className="font-body font-semibold text-foreground">Key Deliverables:</h4>
                    <ul className="space-y-1">
                      {service.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-muted-foreground font-body text-sm">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="relative">
          <h3 className="text-3xl font-accent font-semibold text-center text-foreground mb-12">
            Typical Implementation Timeline
          </h3>
          
          <div className="flex flex-col md:flex-row items-center justify-between relative">
            {/* Timeline Line */}
            <div className="absolute hidden md:block top-1/2 left-0 right-0 h-0.5 bg-gradient-primary transform -translate-y-1/2" />
            
            {/* Timeline Steps */}
            {services.map((service, index) => (
              <div key={index} className="flex flex-col items-center text-center relative z-10 mb-8 md:mb-0">
                <div className={`${service.bgColor} p-4 rounded-full mb-4 border-4 border-background shadow-elegant`}>
                  <service.icon className={`h-6 w-6 ${service.color}`} />
                </div>
                <div className="max-w-32">
                  <div className="font-accent font-semibold text-foreground mb-1">
                    Week {index + 1}-{index + 2}
                  </div>
                  <div className="text-sm text-muted-foreground font-body">
                    {service.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="hero" size="xl" className="group shadow-glow">
            Start Your Transformation Today
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;