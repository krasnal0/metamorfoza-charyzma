import { motion } from 'framer-motion';
import { ArrowRight, Trophy } from 'lucide-react';
import dominikImg from '@/assets/dominik.jpg';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40" />

      <div className="relative container mx-auto px-4 pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl leading-tight mb-4">
              <span className="text-foreground">Dominik</span>
              <br />
              <span className="text-gradient-amber">Owczarek</span>
            </h1>

            <h2 className="font-heading font-bold text-xl md:text-2xl text-foreground/90 mb-6">
              Metamorfoza Twojego Ciała i Głowy
            </h2>

            <p className="text-muted-foreground text-lg mb-4 max-w-lg">
              Trenuję na siłowni od ponad 3 lat.
              Pomagam budować sylwetkę, siłę i pewność siebie – bez kontuzji i bez ściemy.
            </p>

            <div className="flex items-center gap-2 mb-8">
              <Trophy className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold text-sm">
                🏆 2 miejsce w wyciskaniu na klatkę (PLTRAW)
              </span>
            </div>

            <motion.a
              href="https://calendly.com/d-owczarek2007/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-amber text-primary-foreground px-8 py-4 rounded-xl font-heading font-bold text-lg animate-pulse-glow hover:scale-105 transition-transform"
              whileTap={{ scale: 0.97 }}
            >
              Zapisz się na darmowy trening
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl" />
              <img
                src={dominikImg}
                alt="Dominik Owczarek – Trener Personalny"
                className="relative w-80 lg:w-96 rounded-2xl object-cover shadow-2xl"
                width={400}
                height={600}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
