import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Sala treningowa" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 pt-24 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-primary text-primary" />
            ))}
            <span className="ml-2 text-sm text-muted-foreground">50+ zadowolonych klientów</span>
          </div>

          <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-7xl leading-tight mb-6">
            <span className="text-foreground">Metamorfoza</span>
            <br />
            <span className="text-gradient-amber">i Charyzma</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-xl mx-auto">
            Trener Personalny Żory — Bezpieczny trening bez bólu. Realne efekty, bez ściemy.
          </p>

          <p className="text-sm text-muted-foreground mb-10">
            Zacznij bez ryzyka. Sprawdź, dlaczego 50+ osób mi zaufało.
          </p>

          <motion.a
            href="#booking"
            className="inline-flex items-center gap-3 bg-gradient-amber text-primary-foreground px-8 py-4 rounded-xl font-heading font-bold text-lg animate-pulse-glow hover:scale-105 transition-transform"
            whileTap={{ scale: 0.97 }}
          >
            Zapisz się na DARMOWY trening
            <ArrowRight className="w-5 h-5" />
          </motion.a>
          <p className="mt-3 text-primary font-semibold text-sm">
            🔥 Ostatnie 3 miejsca w tym tygodniu
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
