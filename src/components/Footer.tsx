import { Dumbbell, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="py-12 bg-background border-t border-border">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Dumbbell className="w-6 h-6 text-primary" />
          <span className="font-heading font-bold text-foreground">TRENER<span className="text-primary">ŻORY</span></span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Żory, Śląskie</span>
          <span className="flex items-center gap-1"><Phone className="w-4 h-4" /> +48 123 456 789</span>
          <span className="flex items-center gap-1"><Mail className="w-4 h-4" /> kontakt@trenerżory.pl</span>
        </div>
      </div>
      <p className="text-center text-xs text-muted-foreground mt-8">© 2026 Trener Personalny Żory. Wszystkie prawa zastrzeżone.</p>
    </div>
  </footer>
);

export default Footer;
