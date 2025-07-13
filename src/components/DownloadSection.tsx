
import { Download, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const DownloadSection = () => {
  return (
    <section id="download" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
              Baixe <span className="gradient-text">Agora</span>
            </h2>
            <p className="text-lg sm:text-xl text-foreground/80 mb-8 lg:mb-12 max-w-2xl mx-auto">
              Faça o download do APK e comece a assistir seus filmes e séries favoritos gratuitamente!
            </p>
          </div>

          <div className="max-w-sm sm:max-w-md mx-auto mb-8 lg:mb-12">
            <Card className="content-card glow-effect group cursor-pointer animate-scale-up hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="text-primary mb-4 lg:mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  <Download className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">FilserTV APK</h3>
                <p className="text-sm sm:text-base text-foreground/70 mb-4 lg:mb-6">
                  Versão mais recente com todos os recursos premium desbloqueados
                </p>
                <div className="space-y-2 text-xs sm:text-sm text-foreground/60 mb-4 lg:mb-6">
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
              className="bg-primary hover:bg-primary/90 text-base sm:text-lg lg:text-xl px-8 sm:px-12 lg:px-16 py-4 sm:py-6 lg:py-8 glow-effect transform hover:scale-105 transition-all duration-300 w-full max-w-sm sm:max-w-md mx-auto"
              onClick={() => window.open('https://filsertv.com/filsertv.apk', '_blank')}
            >
              <Download className="w-6 h-6 lg:w-8 lg:h-8 mr-3 lg:mr-4" />
              Download Gratuito - APK
            </Button>
            <p className="text-foreground/60 text-xs sm:text-sm">
              Compatível com Android 5.0+ • Tamanho: 12MB
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
