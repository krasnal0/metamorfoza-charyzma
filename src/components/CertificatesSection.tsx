import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import cert1 from '@/assets/certyfikat-1.png';
import cert2 from '@/assets/certyfikat-2.png';
import cert3 from '@/assets/certyfikat-3.png';
import cert4 from '@/assets/certyfikat-4.png';
import cert5 from '@/assets/certyfikat-5.png';
import cert6 from '@/assets/certyfikat-trener-personalny.png';

const certificates = [
  { image: cert1, title: 'Certyfikat – Knowledge & Perception of Personal Training (REPs Polska)' },
  { image: cert2, title: 'Certyfikat – Anatomy & Physiology (REPs Polska)' },
  { image: cert3, title: 'Certyfikat – Układanie planu treningowego cz. 1 (PLTP)' },
  { image: cert4, title: 'Certyfikat – Układanie planu treningowego cz. 2 (PLTP)' },
  { image: cert5, title: 'Certyfikat – Dojebane Plecy  (PLTP)' },
  { image: cert6, title: 'Certyfikat – Trener Perosnalny (PLTP)' },
];

const CertificatesSection = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="certificates" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-black text-3xl md:text-5xl text-foreground mb-4">
            Moje <span className="text-primary">Certyfikaty</span>
          </h2>
          <p className="text-muted-foreground">Potwierdzone kwalifikacje i wykształcenie.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelected(cert.image)}
              className="cursor-pointer group rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-all hover:shadow-glow"
            >
              <img
                src={cert.image}
                alt={cert.title}
                loading="lazy"
                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm p-4"
            onClick={() => setSelected(null)}
          >
            <button className="absolute top-6 right-6 text-foreground hover:text-primary z-10">
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selected}
              alt="Certyfikat"
              className="max-w-full max-h-[85vh] rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificatesSection;
