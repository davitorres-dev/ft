
import { Monitor, Tv, Play, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const ContentStatistics = () => {
  const stats = [
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
  ];

  return (
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
          {stats.map((stat, index) => (
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
  );
};
