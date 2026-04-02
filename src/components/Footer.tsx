import { Dumbbell, MapPin, Phone, Mail, Instagram } from 'lucide-react';

const Footer = () => (
  <footer className="py-12 bg-background border-t border-border">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Dumbbell className="w-6 h-6 text-primary" />
          <span className="font-heading font-bold text-foreground">Dominik <span className="text-primary">Owczarek</span></span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Żory, Śląskie</span>
          <a href="tel:+48530339414" className="flex items-center gap-1 hover:text-primary transition-colors"><Phone className="w-4 h-4" /> 530 339 414</a>
          <a href="mailto:d.owczarek2007@gmail.com" className="flex items-center gap-1 hover:text-primary transition-colors"><Mail className="w-4 h-4" /> d.owczarek2007@gmail.com</a>
          <a href="https://instagram.com/krasnal_dominik" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors"><Instagram className="w-4 h-4" /> @krasnal_dominik</a>
        </div>
      </div>
      <p className="text-center text-xs text-muted-foreground mt-8">© 2026 Dominik Owczarek — Trener Personalny Żory. Wszystkie prawa zastrzeżone.</p>
    </div>
  </footer>
);

export default Footer;
