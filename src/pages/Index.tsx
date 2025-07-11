
import { Download, Play, Star, Smartphone, Monitor, Tv, CheckCircle, Zap, Heart, Users } from 'lucide-react';
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
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-red-600/30 rounded-3xl blur-3xl"></div>
                <div className="relative bg-card/30 backdrop-blur-sm border border-border/30 rounded-3xl p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { title: "Avengers: Endgame", rating: "9.2", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=400&fit=crop" },
                      { title: "Breaking Bad", rating: "9.5", image: "https://images.unsplash.com/photo-1489599663699-bfd42e5e4b4c?w=300&h=400&fit=crop" },
                      { title: "The Dark Knight", rating: "9.0", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop" },
                      { title: "Stranger Things", rating: "8.8", image: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=300&h=400&fit=crop" }
                    ].map((item, index) => (
                      <div key={index} className="content-card p-3">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-32 object-cover rounded-lg mb-2"
                        />
                        <h4 className="font-semibold text-sm truncate">{item.title}</h4>
                        <div className="flex items-center mt-1">
                          <Star className="w-3 h-3 text-yellow-500 mr-1" />
                          <span className="text-xs text-foreground/70">{item.rating}</span>
                        </div>
                      </div>
                    ))}
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
                icon: <Smartphone className="w-8 h-8" />,
                title: "Multi-Plataforma",
                description: "Android, iOS, Smart TV, computador e muito mais"
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

      {/* Content Preview */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Catálogo <span className="gradient-text">Gigantesco</span>
            </h2>
            <p className="text-xl text-foreground/80">
              Milhares de filmes, séries e documentários atualizados diariamente
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { category: "Ação", count: "2,847", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop" },
              { category: "Drama", count: "1,932", image: "https://images.unsplash.com/photo-1489599663699-bfd42e5e4b4c?w=400&h=600&fit=crop" },
              { category: "Comédia", count: "1,654", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop" },
              { category: "Ficção", count: "987", image: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=400&h=600&fit=crop" }
            ].map((category, index) => (
              <div key={index} className="content-card glow-effect group overflow-hidden animate-fade-in">
                <div className="relative">
                  <img 
                    src={category.image} 
                    alt={category.category}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold mb-1">{category.category}</h3>
                    <p className="text-foreground/70">{category.count} títulos</p>
                  </div>
                </div>
              </div>
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
                Disponível para todas as plataformas. Escolha a sua e comece a assistir!
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                { platform: "Android", icon: <Smartphone className="w-8 h-8" />, description: "Google Play Store" },
                { platform: "iOS", icon: <Smartphone className="w-8 h-8" />, description: "App Store" },
                { platform: "Windows", icon: <Monitor className="w-8 h-8" />, description: "PC Desktop" },
                { platform: "Smart TV", icon: <Tv className="w-8 h-8" />, description: "Android TV" },
                { platform: "Web App", icon: <Monitor className="w-8 h-8" />, description: "Navegador" },
                { platform: "APK Direto", icon: <Download className="w-8 h-8" />, description: "Download Direto" }
              ].map((platform, index) => (
                <Card key={index} className="content-card glow-effect group cursor-pointer animate-scale-up hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {platform.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{platform.platform}</h3>
                    <p className="text-foreground/70 text-sm">{platform.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-xl px-12 py-8 glow-effect transform hover:scale-105 transition-all duration-300"
              >
                <Download className="w-8 h-8 mr-4" />
                Download Gratuito - APK
              </Button>
              <p className="text-foreground/60 text-sm">
                Arquivo seguro • Sem vírus • Atualização automática
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
