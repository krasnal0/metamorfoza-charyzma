import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { format, addDays, isSameDay } from 'date-fns';
import { pl } from 'date-fns/locale';
import { Calendar } from '@/components/ui/calendar';
import { Clock, CheckCircle2 } from 'lucide-react';
import { addLead, generateSlots, type BookingSlot } from '@/lib/store';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const BookingSection = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(addDays(new Date(), 1));
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [booked, setBooked] = useState(false);

  const slots = useMemo(() => {
    if (!selectedDate) return [];
    return generateSlots(selectedDate);
  }, [selectedDate]);

  const handleBook = () => {
    if (!selectedDate || !selectedSlot || !name || !phone) return;
    addLead({ name, email: '', phone, source: 'booking' });
    setBooked(true);
    toast({ title: '🎉 Zarezerwowane!', description: `${format(selectedDate, 'dd MMMM', { locale: pl })} o ${selectedSlot}` });
  };

  return (
    <section id="booking" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-black text-3xl md:text-5xl text-foreground mb-4">
            Terminarz <span className="text-primary">Treningów</span>
          </h2>
          <p className="text-muted-foreground">Wybierz datę i godzinę. Darmowy trening próbny czeka.</p>
        </motion.div>

        {booked ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <CheckCircle2 className="w-20 h-20 text-accent mx-auto mb-4" />
            <h3 className="font-heading font-bold text-2xl text-foreground mb-2">Jesteś umówiony!</h3>
            <p className="text-muted-foreground">Potwierdzenie wyślę SMS-em. Do zobaczenia na sali! 💪</p>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex justify-center">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(d) => { setSelectedDate(d); setSelectedSlot(null); }}
                disabled={(date) => date < new Date() || date.getDay() === 0}
                className={cn("p-3 pointer-events-auto bg-secondary rounded-2xl border border-border")}
              />
            </div>

            <div>
              {selectedDate && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-4">
                    {format(selectedDate, 'EEEE, dd MMMM', { locale: pl })}
                  </h3>

                  {slots.length === 0 ? (
                    <p className="text-muted-foreground text-sm">Brak dostępnych terminów w niedzielę.</p>
                  ) : (
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {slots.map((slot, i) => (
                        <button
                          key={i}
                          disabled={!slot.available}
                          onClick={() => setSelectedSlot(slot.time)}
                          className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm transition-all ${
                            !slot.available
                              ? 'border-border text-muted-foreground/40 cursor-not-allowed line-through'
                              : selectedSlot === slot.time
                              ? 'border-primary bg-primary/10 text-foreground'
                              : 'border-border text-foreground hover:border-muted-foreground'
                          }`}
                        >
                          <Clock className="w-4 h-4" />
                          {slot.time}
                          {!slot.available && <span className="text-xs text-destructive ml-auto">Zajęte</span>}
                        </button>
                      ))}
                    </div>
                  )}

                  {selectedSlot && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
                      <input value={name} onChange={e => setName(e.target.value)} placeholder="Imię" className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary" />
                      <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="Telefon" className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary" />
                      <button
                        onClick={handleBook}
                        disabled={!name || !phone}
                        className="w-full bg-gradient-amber text-primary-foreground py-3 rounded-xl font-heading font-bold text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
                      >
                        Zarezerwuj darmowy trening
                      </button>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BookingSection;
