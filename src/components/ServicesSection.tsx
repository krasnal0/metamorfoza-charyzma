import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, FileText, Monitor, CheckCircle2 } from 'lucide-react';
import TrainingPlanForm from './TrainingPlanForm';

const services = [
  {
    icon: Dumbbell,
    title: 'Trening Personalny',
    subtitle: 'Pierwsza sesja GRATIS',
    description: 'Trening 1-na-1 pod pełną kontrolą. Analiza ruchu, korekta techniki, plan progresji.',
    features: ['Darmowy trening próbny', 'Analiza sylwetki i celów', 'Kontakt 24/7'],
    cta: 'Zapisz się na darmowy trening',
    ctaHref: 'https://calendly.com/d-owczarek2007/30min',
    external: true,
    highlight: true,
  },
  {
    icon: FileText,
    title: 'Plan Treningowy',
    subtitle: 'Spersonalizowany pod Ciebie',
    description: 'Kompletny plan treningowy dopasowany do Twojego sprzętu, celów i poziomu.',
    features: ['Ankieta dopasowująca', 'Plan na 12 tygodni'],
    price: '100 zł',
    cta: 'Wypełnij ankietę',
    isForm: true,
    highlight: false,
  },
  {
    icon: Monitor,
    title: 'Coaching Online',
    subtitle: 'Trenuj z dowolnego miejsca',
    description: 'Pełne prowadzenie online — treningi, dieta, ewaluacja.',
    features: ['Dostępność 24/7', 'Wsparcie techniki', 'Analiza progresu', 'Darmowy plan treningowy'],
    price: '400 zł',
    cta: 'Wypełnij formularz',
    isForm: true,
    formSource: 'coaching',
    highlight: false,
  },
];

  const [formSource, setFormSource] = useState<'plan' | 'coaching'>('plan');
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-black text-3xl md:text-5xl text-foreground mb-4">
            Co mogę <span className="text-primary">dla Ciebie zrobić?</span>
          </h2>
          <p className="text-muted-foreground">Wybierz opcję, która pasuje do Twojego stylu życia.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 border transition-all duration-300 hover:translate-y-[-4px] ${
                s.highlight
                  ? 'bg-card border-primary/30 shadow-glow'
                  : 'bg-card border-border hover:border-muted-foreground/30'
              }`}
            >
              {s.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-amber text-primary-foreground text-xs font-heading font-bold px-4 py-1 rounded-full">
                  NAJPOPULARNIEJSZE
                </span>
              )}
              <s.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-heading font-bold text-xl text-foreground mb-1">{s.title}</h3>
              <p className="text-primary text-sm font-semibold mb-3">{s.subtitle}</p>
              <p className="text-muted-foreground text-sm mb-6">{s.description}</p>
              <div className="space-y-2 mb-4">
                {s.features.map((f, fi) => (
                  <div key={fi} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-sm text-foreground">{f}</span>
                  </div>
                ))}
              </div>
              {'price' in s && s.price && (
                <p className="text-primary font-heading font-bold text-xl mb-6">
                  {s.price}
                </p>
              )}
              {s.isForm ? (
                <button
                  onClick={() => setShowForm(true)}
                  className="w-full bg-secondary text-secondary-foreground font-heading font-semibold py-3 rounded-xl hover:bg-muted transition-colors text-sm"
                >
                  {s.cta}
                </button>
              ) : (
                <a
                  href={s.ctaHref}
                  target={s.external ? '_blank' : undefined}
                  rel={s.external ? 'noopener noreferrer' : undefined}
                  className={`block w-full text-center font-heading font-semibold py-3 rounded-xl text-sm transition-all ${
                    s.highlight
                      ? 'bg-gradient-amber text-primary-foreground hover:opacity-90'
                      : 'bg-secondary text-secondary-foreground hover:bg-muted'
                  }`}
                >
                  {s.cta}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {showForm && <TrainingPlanForm onClose={() => setShowForm(false)} />}
    </section>
  );
};

export default ServicesSection;
