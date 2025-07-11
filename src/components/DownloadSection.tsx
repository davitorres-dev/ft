
import { Download, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const DownloadSection = () => {
  return (
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
  );
};
