import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';
import { addLead } from '@/lib/store';
import { toast } from '@/hooks/use-toast';

interface Props {
  onClose: () => void;
  source?: 'plan' | 'coaching' | 'hero' | 'booking' | 'online';
}

const TrainingPlanForm = ({ onClose, source = 'plan' }: Props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = !!name.trim() && !!phone.trim();

  const handleSubmit = () => {
    addLead({ name, email, phone, goal: '', weight: '', height: '', equipment: '', source });
    setSubmitted(true);
    toast({ title: '✅ Formularz wysłany!', description: 'Odezwę się w ciągu 24h.' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card border border-border rounded-2xl w-full max-w-lg p-8 relative"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <CheckCircle2 className="w-16 h-16 text-accent mx-auto mb-4" />
            <h3 className="font-heading font-bold text-2xl text-foreground mb-2">Gotowe!</h3>
            <p className="text-muted-foreground mb-6">Odezwę się w ciągu 24h.</p>
            <button onClick={onClose} className="bg-gradient-amber text-primary-foreground px-6 py-3 rounded-xl font-heading font-semibold">
              Zamknij
            </button>
          </div>
        ) : (
          <div>
            <h3 className="font-heading font-bold text-xl text-foreground mb-2">
              {source === 'coaching' ? 'Coaching Online' : 'Plan Treningowy'}
            </h3>
            <p className="text-sm text-muted-foreground mb-6">Zostaw dane, odezwę się w ciągu 24h.</p>
            <div className="space-y-4">
              <input value={name} onChange={e => setName(e.target.value)} placeholder="Imię" className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary" />
              <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email (opcjonalnie)" className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary" />
              <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="Numer telefonu" className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary" />
            </div>
            <button
              onClick={handleSubmit}
              disabled={!canSubmit}
              className="w-full mt-6 flex items-center justify-center gap-2 bg-gradient-amber text-primary-foreground px-6 py-3 rounded-xl font-heading font-semibold text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Wyślij <CheckCircle2 className="w-4 h-4" />
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default TrainingPlanForm;
