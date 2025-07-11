
export const Footer = () => {
  return (
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
  );
};
