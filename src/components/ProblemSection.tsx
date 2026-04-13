import { motion } from 'framer-motion';
import { AlertTriangle, ArrowRight, CheckCircle2 } from 'lucide-react';

const problems = [
  { icon: '😩', text: 'Ból pleców, który nie pozwala normalnie trenować' },
  { icon: '📉', text: 'Stagnacja — miesiące bez postępów' },
  { icon: '😴', text: 'Brak motywacji i wymówki typu "nie mam czasu"' },
];

const solutions = [
  'Profesjonalna diagnoza ruchowa i plan naprawczy',
  'Indywidualny program dostosowany do TWOJEGO ciała',
  'Dedykowany trening 1-na-1 — pełna uwaga na Tobie',
  'Wsparcie i rozliczalność — nie dasz rady się wymigać',
];

const ProblemSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-black text-3xl md:text-5xl text-foreground mb-4">
            Znasz to <span className="text-primary">uczucie?</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <AlertTriangle className="w-5 h-5 text-destructive" />
              <h3 className="font-heading font-bold text-lg text-foreground">Problem</h3>
            </div>
            <div className="space-y-5">
              {problems.map((p, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-2xl">{p.icon}</span>
                  <p className="text-muted-foreground">{p.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-primary/20 rounded-2xl p-8 shadow-glow"
          >
            <div className="flex items-center gap-2 mb-6">
              <ArrowRight className="w-5 h-5 text-primary" />
              <h3 className="font-heading font-bold text-lg text-foreground">Rozwiązanie</h3>
            </div>
            <div className="space-y-5">
              {solutions.map((s, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{s}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
