import { motion } from 'framer-motion';
import t1 from '@/assets/transformation-1.jpg';
import t2 from '@/assets/transformation-2.jpg';
import t3 from '@/assets/transformation-3.jpg';

const transformations = [
  { image: t1, name: 'Kamil', result: '-15kg w 4 miesiące', detail: 'Z "dad bod" do sixpacka' },
  { image: t2, name: 'Ania', result: '-12kg + siła', detail: 'Pierwsza osoba z wynikiem 100kg w przysiadzie' },
  { image: t3, name: 'Marek', result: '300kg w martwym ciągu', detail: 'Marzenie z liceum spełnione po 30-tce' },
];

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {transformations.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-colors"
            >
              <img src={t.image} alt={`Przemiana ${t.name}`} loading="lazy" width={640} height={800} className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block bg-gradient-amber text-primary-foreground px-3 py-1 rounded-full font-heading font-bold text-sm mb-2">
                  {t.result}
                </span>
                <h3 className="font-heading font-bold text-lg text-foreground">{t.name}</h3>
                <p className="text-sm text-muted-foreground">{t.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationsSection;
