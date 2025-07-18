
import { Monitor, Tv, Play, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const ContentStatistics = () => {
  const stats = [
    { 
      title: "Mais de 16.000", 
      subtitle: "Filmes", 
      icon: <Monitor className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      gradient: "from-blue-500/20 to-purple-600/20"
    },
    { 
      title: "Mais de 8.500", 
      subtitle: "Séries", 
      icon: <Tv className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      gradient: "from-green-500/20 to-teal-600/20"
    },
    { 
      title: "Mais de 2.300", 
      subtitle: "Documentários", 
      icon: <Play className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      gradient: "from-orange-500/20 to-red-600/20"
    },
    { 
      title: "Mais de 1.200", 
      subtitle: "Animes", 
      icon: <Star className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      gradient: "from-pink-500/20 to-purple-600/20"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
            Conteúdo <span className="gradient-text">Infinito</span>
          </h2>
          <p className="text-lg sm:text-xl text-foreground/80">
            Milhares de títulos atualizados diariamente para você
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="content-card glow-effect group overflow-hidden animate-fade-in hover:scale-105 transition-all duration-300">
              <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className="text-primary mb-3 lg:mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold mb-1 lg:mb-2 gradient-text">{stat.title}</h3>
                  <p className="text-foreground/70 text-sm sm:text-base lg:text-lg">{stat.subtitle}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
