import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-navigation/90 via-header/70 to-card/80" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-float blur-sm" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-primary/20 rounded-full animate-float delay-700 blur-sm" />
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-success/20 rounded-full animate-float delay-1000 blur-sm" />
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-accent/30 rounded-full animate-float delay-500 blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm border border-border rounded-full mb-8 animate-fade-in">
            <Sparkles className="h-4 w-4 text-accent animate-pulse" />
            <span className="text-foreground font-body font-medium">
              AI-Driven Business Transformation
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-logo font-bold text-foreground mb-6 leading-tight animate-fade-in delay-300">
            Transform Your Business with{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent animate-pulse-glow">
              AI-Driven Solutions
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted font-body font-light mb-12 max-w-3xl mx-auto animate-fade-in delay-500">
            Measure, Optimize, and Automate Your Operations with Clear, Data-Backed Results
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-fade-in delay-700">
            <Button 
              variant="success" 
              size="xl" 
              className="group shadow-glow animate-pulse-glow"
            >
              Get Your Free Business Discovery
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="bg-transparent border-accent text-accent hover:bg-accent hover:text-white backdrop-blur-sm"
            >
              <Play className="mr-2 h-5 w-5" />
              See Success Stories
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-border animate-fade-in delay-1000">
            <p className="text-muted font-body mb-4">Trusted by 100+ Turkish Businesses</p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
              <div className="text-center">
                <div className="text-2xl font-accent font-bold text-accent">30%</div>
                <div className="text-sm font-body">Average Efficiency Gain</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-accent font-bold text-accent">100+</div>
                <div className="text-sm font-body">Businesses Transformed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-accent font-bold text-accent">90%</div>
                <div className="text-sm font-body">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-accent font-bold text-accent">60</div>
                <div className="text-sm font-body">Days Average ROI</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;