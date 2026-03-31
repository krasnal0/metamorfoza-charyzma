import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { addLead } from '@/lib/store';
import { toast } from '@/hooks/use-toast';

interface Props {
  onClose: () => void;
}

const goals = ['Schudnąć', 'Zbudować masę', 'Poprawić siłę', 'Poprawić kondycję', 'Rehabilitacja'];
const equipmentOptions = ['Pełna siłownia', 'Domowa siłownia', 'Tylko hantle', 'Brak sprzętu (kalistenika)'];

const TrainingPlanForm = ({ onClose }: Props) => {
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [equipment, setEquipment] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const canNext = () => {
    switch (step) {
      case 1: return !!goal;
      case 2: return !!weight && !!height;
      case 3: return !!equipment;
      case 4: return !!name && !!phone;
      default: return false;
    }
  };

  const handleSubmit = () => {
    addLead({ name, email, phone, goal, weight, height, equipment, source: 'plan' });
    setSubmitted(true);
    toast({ title: '✅ Formularz wysłany!', description: 'Odezwę się w ciągu 24h.' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-card border border-border rounded-2xl w-full max-w-lg p-8 relative"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
          <X className="w-5 h-5" />
        </button>

        {/* Progress bar */}
        <div className="flex gap-2 mb-8">
          {[1, 2, 3, 4].map(s => (
            <div key={s} className={`progress-step ${s <= step ? 'active' : 'inactive'}`} />
          ))}
        </div>

        {submitted ? (
          <div className="text-center py-8">
            <CheckCircle2 className="w-16 h-16 text-accent mx-auto mb-4" />
            <h3 className="font-heading font-bold text-2xl text-foreground mb-2">Gotowe!</h3>
            <p className="text-muted-foreground mb-6">Twój plan jest już w przygotowaniu. Odezwę się wkrótce.</p>
            <button onClick={onClose} className="bg-gradient-amber text-primary-foreground px-6 py-3 rounded-xl font-heading font-semibold">
              Zamknij
            </button>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              {step === 1 && (
                <div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">Jaki jest Twój cel?</h3>
                  <p className="text-sm text-muted-foreground mb-6">Wybierz główny cel treningowy</p>
                  <div className="space-y-3">
                    {goals.map(g => (
                      <button
                        key={g}
                        onClick={() => setGoal(g)}
                        className={`w-full text-left px-5 py-3 rounded-xl border transition-all text-sm ${
                          goal === g
                            ? 'border-primary bg-primary/10 text-foreground'
                            : 'border-border text-muted-foreground hover:border-muted-foreground'
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">Twoje wymiary</h3>
                  <p className="text-sm text-muted-foreground mb-6">Potrzebne do kalkulacji</p>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-muted-foreground mb-1 block">Waga (kg)</label>
                      <input
                        type="number"
                        value={weight}
                        onChange={e => setWeight(e.target.value)}
                        placeholder="np. 85"
                        className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-1 block">Wzrost (cm)</label>
                      <input
                        type="number"
                        value={height}
                        onChange={e => setHeight(e.target.value)}
                        placeholder="np. 180"
                        className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">Dostępny sprzęt</h3>
                  <p className="text-sm text-muted-foreground mb-6">Gdzie będziesz trenować?</p>
                  <div className="space-y-3">
                    {equipmentOptions.map(e => (
                      <button
                        key={e}
                        onClick={() => setEquipment(e)}
                        className={`w-full text-left px-5 py-3 rounded-xl border transition-all text-sm ${
                          equipment === e
                            ? 'border-primary bg-primary/10 text-foreground'
                            : 'border-border text-muted-foreground hover:border-muted-foreground'
                        }`}
                      >
                        {e}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">Dane kontaktowe</h3>
                  <p className="text-sm text-muted-foreground mb-6">Jak się z Tobą skontaktować?</p>
                  <div className="space-y-4">
                    <input value={name} onChange={e => setName(e.target.value)} placeholder="Imię" className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary" />
                    <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email (opcjonalnie)" className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary" />
                    <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="Telefon" className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary" />
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        )}

        {!submitted && (
          <div className="flex justify-between mt-8">
            <button
              onClick={() => setStep(s => s - 1)}
              disabled={step === 1}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-4 h-4" /> Wstecz
            </button>
            {step < 4 ? (
              <button
                onClick={() => setStep(s => s + 1)}
                disabled={!canNext()}
                className="flex items-center gap-1 bg-gradient-amber text-primary-foreground px-6 py-2 rounded-xl font-heading font-semibold text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Dalej <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canNext()}
                className="flex items-center gap-1 bg-gradient-green text-accent-foreground px-6 py-2 rounded-xl font-heading font-semibold text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Wyślij <CheckCircle2 className="w-4 h-4" />
              </button>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default TrainingPlanForm;
