
import { Zap, Heart, Users, Monitor, Download } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const FeaturesSection = () => {
  const features = [
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
  ];

  return (
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
          {features.map((feature, index) => (
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
  );
};
