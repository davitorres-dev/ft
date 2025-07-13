
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
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="animate-slide-in-left text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-6 leading-tight">
              Entretenimento
              <span className="gradient-text block">Ilimitado</span>
              <span className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium text-foreground/80">
                100% Gratuito
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-foreground/80 mb-6 lg:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Assista milhares de filmes, séries e programas de TV sem pagar nada. 
              Sem limites de telas, sem mensalidades, sem pegadinhas.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-base lg:text-lg px-6 lg:px-8 py-4 lg:py-6 glow-effect"
                onClick={() => scrollToSection('download')}
              >
                <Download className="w-5 h-5 lg:w-6 lg:h-6 mr-2 lg:mr-3" />
                Download Grátis
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base lg:text-lg px-6 lg:px-8 py-4 lg:py-6 border-primary/30 hover:bg-primary/10"
                onClick={() => scrollToSection('recursos')}
              >
                <Play className="w-5 h-5 lg:w-6 lg:h-6 mr-2 lg:mr-3" />
                Ver Recursos
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 mt-6 lg:mt-8 text-sm text-foreground/60">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                100% Gratuito
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Sem Limites
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Qualidade HD
              </div>
            </div>
          </div>
          <div className="animate-scale-up order-last">
            <div className="relative flex justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-red-600/30 rounded-3xl blur-3xl scale-75"></div>
              <div className="relative">
                {/* Smartphone Mockup */}
                <div className="w-48 h-[360px] sm:w-56 sm:h-[420px] lg:w-64 lg:h-[480px] bg-gradient-to-b from-slate-900 to-slate-800 rounded-[2rem] lg:rounded-[2.5rem] p-1.5 lg:p-2 shadow-2xl">
                  {/* Phone Frame */}
                  <div className="w-full h-full bg-background rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden relative">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center px-4 lg:px-6 py-2 lg:py-3 text-xs text-foreground/70">
                      <span>9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-3 h-1.5 lg:w-4 lg:h-2 bg-foreground/30 rounded-sm"></div>
                        <div className="w-4 h-1.5 lg:w-6 lg:h-2 bg-primary rounded-sm"></div>
                      </div>
                    </div>
                    
                    {/* App Header */}
                    <div className="px-3 lg:px-4 pb-3 lg:pb-4">
                      <div className="flex items-center justify-between mb-3 lg:mb-4">
                        <img 
                          src="/lovable-uploads/33ede6fd-2b3a-46e3-8c0e-9936b66dc3a5.png" 
                          alt="StreamTV" 
                          className="h-6 lg:h-8 w-auto"
                        />
                        <div className="w-6 h-6 lg:w-8 lg:h-8 bg-foreground/10 rounded-full"></div>
                      </div>
                      
                      {/* Featured Content */}
                      <div className="bg-gradient-to-r from-primary/20 to-red-600/20 rounded-lg lg:rounded-xl p-3 lg:p-4 mb-3 lg:mb-4">
                        <div className="w-full h-16 lg:h-24 bg-foreground/20 rounded-md lg:rounded-lg mb-2"></div>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="w-16 lg:w-20 h-2.5 lg:h-3 bg-foreground/40 rounded mb-1"></div>
                            <div className="flex items-center">
                              <Star className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-yellow-500 mr-1" />
                              <div className="w-6 lg:w-8 h-1.5 lg:h-2 bg-foreground/30 rounded"></div>
                            </div>
                          </div>
                          <div className="w-12 lg:w-16 h-6 lg:h-8 bg-primary/80 rounded-full"></div>
                        </div>
                      </div>
                      
                      {/* Content Grid */}
                      <div className="grid grid-cols-3 gap-1.5 lg:gap-2">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                          <div key={item} className="aspect-[3/4] bg-foreground/20 rounded-md lg:rounded-lg"></div>
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
