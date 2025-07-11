
import { Download, Play, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

export const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center hero-gradient">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/50"></div>
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Entretenimento
              <span className="gradient-text block">Ilimitado</span>
              <span className="text-2xl lg:text-3xl font-medium text-foreground/80">
                100% Gratuito
              </span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              Assista milhares de filmes, séries e programas de TV sem pagar nada. 
              Sem limites de telas, sem mensalidades, sem pegadinhas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 glow-effect"
                onClick={() => scrollToSection('download')}
              >
                <Download className="w-6 h-6 mr-3" />
                Download Grátis
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/10"
                onClick={() => scrollToSection('recursos')}
              >
                <Play className="w-6 h-6 mr-3" />
                Ver Recursos
              </Button>
            </div>
            <div className="flex items-center space-x-6 mt-8 text-sm text-foreground/60">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                100% Gratuito
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                Sem Limites
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                HD Quality
              </div>
            </div>
          </div>
          <div className="animate-scale-up">
            <div className="relative flex justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-red-600/30 rounded-3xl blur-3xl scale-75"></div>
              <div className="relative">
                {/* Smartphone Mockup */}
                <div className="w-64 h-[480px] bg-gradient-to-b from-slate-900 to-slate-800 rounded-[2.5rem] p-2 shadow-2xl">
                  {/* Phone Frame */}
                  <div className="w-full h-full bg-background rounded-[2rem] overflow-hidden relative">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center px-6 py-3 text-xs text-foreground/70">
                      <span>9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 bg-foreground/30 rounded-sm"></div>
                        <div className="w-6 h-2 bg-primary rounded-sm"></div>
                      </div>
                    </div>
                    
                    {/* App Header */}
                    <div className="px-4 pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <img 
                          src="/lovable-uploads/33ede6fd-2b3a-46e3-8c0e-9936b66dc3a5.png" 
                          alt="StreamTV" 
                          className="h-8 w-auto"
                        />
                        <div className="w-8 h-8 bg-foreground/10 rounded-full"></div>
                      </div>
                      
                      {/* Featured Content */}
                      <div className="bg-gradient-to-r from-primary/20 to-red-600/20 rounded-xl p-4 mb-4">
                        <div className="w-full h-24 bg-foreground/20 rounded-lg mb-2"></div>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="w-20 h-3 bg-foreground/40 rounded mb-1"></div>
                            <div className="flex items-center">
                              <Star className="w-3 h-3 text-yellow-500 mr-1" />
                              <div className="w-8 h-2 bg-foreground/30 rounded"></div>
                            </div>
                          </div>
                          <div className="w-16 h-8 bg-primary/80 rounded-full"></div>
                        </div>
                      </div>
                      
                      {/* Content Grid */}
                      <div className="grid grid-cols-3 gap-2">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                          <div key={item} className="aspect-[3/4] bg-foreground/20 rounded-lg"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
