export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  goal?: string;
  weight?: string;
  height?: string;
  equipment?: string;
  source: 'hero' | 'plan' | 'booking' | 'online' | 'coaching';
  status: 'Nowy' | 'Skontaktowany' | 'Zakończony';
  createdAt: Date;
}

export interface BookingSlot {
  date: Date;
  time: string;
  available: boolean;
}

let leads: Lead[] = [];

export const addLead = (lead: Omit<Lead, 'id' | 'status' | 'createdAt'>) => {
  const newLead: Lead = {
    ...lead,
    id: crypto.randomUUID(),
    status: 'Nowy',
    createdAt: new Date(),
  };
  leads = [...leads, newLead];
  return newLead;
};

export const getLeads = () => leads;

export const updateLeadStatus = (id: string, status: Lead['status']) => {
  leads = leads.map(l => l.id === id ? { ...l, status } : l);
};

export const generateSlots = (date: Date): BookingSlot[] => {
  const times = ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];
  const dayOfWeek = date.getDay();
  if (dayOfWeek === 0) return [];
  
  return times.map(time => ({
    date,
    time,
    available: Math.random() > 0.4,
  }));
};
