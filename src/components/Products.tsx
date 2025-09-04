import { Database, BarChart3, Cog, BookOpen, TrendingUp, CheckCircle, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Products = () => {
  const products = [
    {
      name: "Business Discovery Framework",
      description: "A structured checklist and KPI mapping system to evaluate business processes and identify areas for measurable improvement.",
      detailedDescription: "Structured checklist and KPI mapping system",
      icon: Database,
      features: [
        "Process evaluation checklists",
        "KPI mapping and baseline measurement",
        "Improvement area identification",
        "ROI potential calculator"
      ],
      badge: "Assessment",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      name: "Audit Engine",
      description: "AI-assisted process analysis that produces custom dashboards and reports showing measurable operational improvements and recommended pilot actions.",
      detailedDescription: "AI-assisted process analysis with custom dashboards",
      icon: BarChart3,
      features: [
        "AI-powered workflow analysis",
        "Custom performance dashboards",
        "Automated report generation",
        "Pilot action recommendations"
      ],
      badge: "Analytics",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      name: "Pilot Automation Packages",
      description: "Pre-built AI workflow templates ready for deployment, including customer messaging automation, appointment scheduling, and lead qualification processes.",
      detailedDescription: "Pre-built AI workflow templates",
      icon: Cog,
      features: [
        "Customer messaging automation",
        "Appointment scheduling systems",
        "Lead qualification processes",
        "Outcome tracking and reporting"
      ],
      badge: "Automation",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      name: "Operational Playbooks",
      description: "Step-by-step guides for implementing, monitoring, and scaling AI automation solutions to ensure consistent and repeatable results across clients.",
      detailedDescription: "Step-by-step implementation guides",
      icon: BookOpen,
      features: [
        "Implementation step guides",
        "Monitoring best practices",
        "Scaling methodologies",
        "Quality assurance checklists"
      ],
      badge: "Guidelines",
      color: "text-warm",
      bgColor: "bg-warm/10"
    },
    {
      name: "ROI Tracking & Reporting Tools",
      description: "Dashboards and reporting systems that quantify improvements in revenue, time saved, customer satisfaction, retention, and operational efficiency.",
      detailedDescription: "Performance dashboards and metrics tracking",
      icon: TrendingUp,
      features: [
        "Revenue improvement tracking",
        "Time savings quantification",
        "Customer satisfaction metrics",
        "Operational efficiency reports"
      ],
      badge: "Reporting",
      color: "text-accent",
      bgColor: "bg-accent/10"
    }
  ];

  return (
    <section id="products" className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-accent font-bold text-foreground mb-6">
            Powerful Tools for <span className="text-accent">Measurable Results</span>
          </h2>
          <p className="text-xl text-muted font-body max-w-3xl mx-auto">
            Comprehensive suite of AI-powered tools designed to deliver clear, data-backed business improvements
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <Card 
              key={index}
              className="group p-8 hover:shadow-glow transition-all duration-500 hover:scale-[1.02] animate-fade-in relative overflow-hidden bg-background border-border shadow-card"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Background Gradient */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${product.bgColor} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
              
              <div className="relative space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className={`${product.bgColor} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <product.icon className={`h-7 w-7 ${product.color}`} />
                  </div>
                  <Badge variant="secondary" className="font-body font-medium">
                    {product.badge}
                  </Badge>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-accent font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted font-body leading-relaxed mb-4">
                    {product.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="font-body font-semibold text-foreground flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-muted font-body text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action */}
                <div className="pt-4 border-t border-border">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="group/btn w-full justify-between hover:bg-accent/10"
                  >
                    Learn More
                    <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Integration Note */}
        <div className="bg-background border border-border rounded-2xl p-8 text-center shadow-card">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-primary p-4 rounded-full">
              <Cog className="h-8 w-8 text-white animate-spin" style={{ animationDuration: '3s' }} />
            </div>
          </div>
          <h3 className="text-2xl font-accent font-semibold text-foreground mb-4">
            Seamlessly Integrated Ecosystem
          </h3>
          <p className="text-muted font-body mb-6 max-w-2xl mx-auto">
            All tools work together as a comprehensive solution, ensuring smooth data flow and consistent results across your entire business transformation journey.
          </p>
          <Button variant="success" size="lg" className="shadow-glow">
            Explore Integration Options
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;