import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

const BookingSection = () => {
  return (
    <section id="booking" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <Calendar className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="font-heading font-black text-3xl md:text-5xl text-foreground mb-4">
            Gotowy na <span className="text-primary">zmianę?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Umów się na darmowy trening próbny. Bez zobowiązań — sprawdź, czy pasujemy.
          </p>

          <motion.a
            href="https://calendly.com/d-owczarek2007/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-amber text-primary-foreground px-10 py-5 rounded-xl font-heading font-bold text-xl animate-pulse-glow hover:scale-105 transition-transform"
            whileTap={{ scale: 0.97 }}
          >
            Umów darmowy trening
            <ArrowRight className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;
