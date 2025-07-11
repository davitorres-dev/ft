
import { Download, Play, Star, Smartphone, CheckCircle, Zap, Heart, Users, Monitor, Tv } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/33ede6fd-2b3a-46e3-8c0e-9936b66dc3a5.png" 
              alt="StreamTV Logo" 
              className="h-12 w-auto"
            />
          </div>
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('recursos')}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Recursos
            </button>
            <button 
              onClick={() => scrollToSection('download')}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Download
            </button>
          </div>
          <Button 
            onClick={() => scrollToSection('download')}
            className="bg-primary hover:bg-primary/90"
          >
            <Download className="w-4 h-4 mr-2" />
            Baixar App
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
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

      {/* Features Section */}
      <section id="recursos" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Recursos <span className="gradient-text">Incríveis</span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Desfrute da melhor experiência de streaming com recursos pensados para você
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Streaming Rápido",
                description: "Assista em qualidade HD com carregamento instantâneo"
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "100% Gratuito",
                description: "Sem mensalidades, sem taxas ocultas, sem pegadinhas"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Telas Ilimitadas",
                description: "Assista em quantos dispositivos quiser, simultaneamente"
              },
              {
                icon: <Monitor className="w-8 h-8" />,
                title: "Qualidade HD/4K",
                description: "Desfrute de conteúdo em alta definição"
              },
              {
                icon: <Download className="w-8 h-8" />,
                title: "Download Offline",
                description: "Baixe e assista offline quando quiser"
              }
            ].map((feature, index) => (
              <Card key={index} className="content-card glow-effect animate-fade-in hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-primary mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Content Statistics */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Conteúdo <span className="gradient-text">Infinito</span>
            </h2>
            <p className="text-xl text-foreground/80">
              Milhares de títulos atualizados diariamente para você
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Mais de 16.000", 
                subtitle: "Filmes", 
                icon: <Monitor className="w-12 h-12" />,
                gradient: "from-blue-500/20 to-purple-600/20"
              },
              { 
                title: "Mais de 8.500", 
                subtitle: "Séries", 
                icon: <Tv className="w-12 h-12" />,
                gradient: "from-green-500/20 to-teal-600/20"
              },
              { 
                title: "Mais de 2.300", 
                subtitle: "Documentários", 
                icon: <Play className="w-12 h-12" />,
                gradient: "from-orange-500/20 to-red-600/20"
              },
              { 
                title: "Mais de 1.200", 
                subtitle: "Animes", 
                icon: <Star className="w-12 h-12" />,
                gradient: "from-pink-500/20 to-purple-600/20"
              }
            ].map((stat, index) => (
              <Card key={index} className="content-card glow-effect group overflow-hidden animate-fade-in hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="relative z-10">
                    <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <h3 className="text-3xl font-bold mb-2 gradient-text">{stat.title}</h3>
                    <p className="text-foreground/70 text-lg">{stat.subtitle}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Baixe <span className="gradient-text">Agora</span>
              </h2>
              <p className="text-xl text-foreground/80 mb-12">
                Faça o download do APK e comece a assistir seus filmes e séries favoritos gratuitamente!
              </p>
            </div>

            <div className="max-w-md mx-auto mb-12">
              <Card className="content-card glow-effect group cursor-pointer animate-scale-up hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="text-primary mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    <Download className="w-16 h-16" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">StreamTV APK</h3>
                  <p className="text-foreground/70 mb-6">
                    Versão mais recente com todos os recursos premium desbloqueados
                  </p>
                  <div className="space-y-2 text-sm text-foreground/60 mb-6">
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Arquivo seguro e verificado
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Atualização automática
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Sem vírus ou malware
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-xl px-16 py-8 glow-effect transform hover:scale-105 transition-all duration-300"
              >
                <Download className="w-8 h-8 mr-4" />
                Download Gratuito - APK
              </Button>
              <p className="text-foreground/60 text-sm">
                Compatível com Android 5.0+ • Tamanho: 45MB
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card/30 border-t border-border/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img 
                src="/lovable-uploads/33ede6fd-2b3a-46e3-8c0e-9936b66dc3a5.png" 
                alt="StreamTV Logo" 
                className="h-10 w-auto"
              />
              <div>
                <p className="font-semibold">StreamTV</p>
                <p className="text-sm text-foreground/60">Entretenimento Gratuito</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-foreground/60 text-sm">
                © 2024 StreamTV. Todos os direitos reservados.
              </p>
              <p className="text-foreground/40 text-xs mt-1">
                100% Gratuito • Sem Limites • Para Sempre
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
