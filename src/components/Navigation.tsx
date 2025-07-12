
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  scrollToSection: (id: string) => void;
}

export const Navigation = ({ scrollToSection }: NavigationProps) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/33ede6fd-2b3a-46e3-8c0e-9936b66dc3a5.png" 
            alt="StreamTV Logo" 
            className="h-8 sm:h-12 w-auto"
          />
        </div>
        
        {/* Desktop Menu */}
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
        
        {/* Download Button - Now visible on all screen sizes */}
        <Button 
          onClick={() => scrollToSection('download')}
          className="bg-primary hover:bg-primary/90 text-sm px-4 py-2 md:text-base md:px-6 md:py-3"
        >
          <Download className="w-4 h-4 mr-2" />
          Baixar App
        </Button>
      </div>
    </nav>
  );
};
