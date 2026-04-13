import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  'zbudować sylwetkę',
  'pozbyć się bólu pleców',
  'wyjść ze stagnacji',
  'schudnąć',
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-heading font-black text-3xl md:text-5xl text-foreground mb-6">
            Dlaczego warto <span className="text-primary">trenować ze mną?</span>
          </h2>

          <p className="text-muted-foreground text-lg mb-4">
            Trening to dla mnie coś więcej niż siłownia.
            <br />
            To sposób na zmianę życia – fizycznie i mentalnie.
          </p>

          <p className="text-muted-foreground text-lg mb-8">
            Przez ponad 3 lata treningu na siłowni pomogłem dziesiątkom osób:
          </p>

          <div className="flex flex-col items-center gap-3 mb-8">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-foreground text-lg">{b}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-primary font-semibold text-lg">
            Jeśli chcesz realnych efektów – jesteś w dobrym miejscu.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
