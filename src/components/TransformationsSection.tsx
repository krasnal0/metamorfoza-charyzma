import { motion } from 'framer-motion';
import tAleksandra from '@/assets/transformation-aleksandra.png';
import tDominik from '@/assets/transformation-dominik.png';
import tKuba from '@/assets/transformation-kuba.png';

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
            <img src={tDominik} alt="Przemiana Kuba" loading="lazy" className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-block bg-gradient-amber text-primary-foreground px-3 py-1 rounded-full font-heading font-bold text-sm mb-2">
                +5 kg w 3 miesiące
              </span>
              <h3 className="font-heading font-bold text-lg text-foreground">Dominik</h3>
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
            <img src={tAleksandra} alt="Przemiana Aleksandra" loading="lazy" className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-block bg-gradient-amber text-primary-foreground px-3 py-1 rounded-full font-heading font-bold text-sm mb-2">
                -3 kg w 6 miesięcy
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
            <img src={tKuba} alt="Przemiana Dominik" loading="lazy" className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-block bg-gradient-amber text-primary-foreground px-3 py-1 rounded-full font-heading font-bold text-sm mb-2">
                +15 kg w 2 lata
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
