
import { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileMenuProps {
  scrollToSection: (id: string) => void;
}

export const MobileMenu = ({ scrollToSection }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <button 
              onClick={() => handleNavClick('inicio')}
              className="text-2xl text-foreground/80 hover:text-primary transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => handleNavClick('recursos')}
              className="text-2xl text-foreground/80 hover:text-primary transition-colors"
            >
              Recursos
            </button>
            <button 
              onClick={() => handleNavClick('download')}
              className="text-2xl text-foreground/80 hover:text-primary transition-colors"
            >
              Download
            </button>
            <Button 
              onClick={() => handleNavClick('download')}
              className="bg-primary hover:bg-primary/90 mt-8"
              size="lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Baixar App
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
