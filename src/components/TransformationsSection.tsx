import { motion } from 'framer-motion';
import tAleksandra from '@/assets/transformation-aleksandra.png';
import tDominik from '@/assets/transformation-dominik.png';
import tKuba from '@/assets/transformation-kuba-new.png';
import tGabriel from '@/assets/transformation-gabriel.png';

const TransformationsSection = () => {
  return (
    <section id="transformations" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-black text-3xl md:text-5xl text-foreground mb-4">
            Realne <span className="text-primary">Przemiany</span>
          </h2>
          <p className="text-muted-foreground">Nie obietnice. Efekty.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-end">
          {/* Left - Dominik */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="group relative rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-colors"
          >
            <img src={tGabriel} alt="Przemiana Gabriel - trening personalny Żory" loading="lazy" className="w-full aspect-[3/4] object-cover object-top group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-block bg-gradient-amber text-primary-foreground px-3 py-1 rounded-full font-heading font-bold text-sm mb-2">
                +10kg w 8 miesięcy
              </span>
              <h3 className="font-heading font-bold text-lg text-foreground">Gabriel</h3>
            </div>
          </motion.div>

          {/* Center - Aleksandra (largest) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="group relative rounded-2xl overflow-hidden border border-primary/30 hover:border-primary/50 transition-colors shadow-glow md:scale-105"
          >
            <img src={tAleksandra} alt="Przemiana Aleksandra - trener personalny Żory efekty" loading="lazy" className="w-full aspect-[3/4] object-cover object-top group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-block bg-gradient-amber text-primary-foreground px-3 py-1 rounded-full font-heading font-bold text-sm mb-2">
                -3 kg w 6 miesięcy + Rekompozycja
              </span>
              <h3 className="font-heading font-bold text-lg text-foreground">Aleksandra</h3>
            </div>
          </motion.div>

          {/* Right - Kuba */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group relative rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-colors"
          >
            <img src={tKuba} alt="Przemiana Kuba - trening siłowy Żory" loading="lazy" className="w-full aspect-[3/4] object-cover object-top group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-block bg-gradient-amber text-primary-foreground px-3 py-1 rounded-full font-heading font-bold text-sm mb-2">
                +6kg w 4 miesiące
              </span>
              <h3 className="font-heading font-bold text-lg text-foreground">Kuba</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TransformationsSection;
