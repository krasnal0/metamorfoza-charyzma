import { useState, useEffect } from 'react';
import { getLeads, updateLeadStatus, type Lead } from '@/lib/store';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';
import { ArrowLeft, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const statusColors: Record<Lead['status'], string> = {
  'Nowy': 'bg-primary/20 text-primary',
  'Skontaktowany': 'bg-accent/20 text-accent',
  'Zakończony': 'bg-muted text-muted-foreground',
};

const AdminLeads = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    setLeads(getLeads());
  }, [refresh]);

  const handleStatusChange = (id: string, status: Lead['status']) => {
    updateLeadStatus(id, status);
    setRefresh(r => r + 1);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/" className="text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <Users className="w-6 h-6 text-primary" />
          <h1 className="font-heading font-bold text-2xl">Panel Leadów</h1>
          <span className="bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full ml-auto">
            {leads.length} leadów
          </span>
        </div>

        {leads.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground">Brak leadów. Wypełnij formularz na stronie głównej, aby zobaczyć dane tutaj.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  <th className="py-3 px-4 font-medium">Imię</th>
                  <th className="py-3 px-4 font-medium">Telefon</th>
                  <th className="py-3 px-4 font-medium">Źródło</th>
                  <th className="py-3 px-4 font-medium">Cel</th>
                  <th className="py-3 px-4 font-medium">Data</th>
                  <th className="py-3 px-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {leads.map(lead => (
                  <tr key={lead.id} className="border-b border-border hover:bg-card transition-colors">
                    <td className="py-3 px-4 font-medium text-foreground">{lead.name}</td>
                    <td className="py-3 px-4 text-muted-foreground">{lead.phone}</td>
                    <td className="py-3 px-4">
                      <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded">{lead.source}</span>
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">{lead.goal || '—'}</td>
                    <td className="py-3 px-4 text-muted-foreground">{format(lead.createdAt, 'dd MMM yyyy', { locale: pl })}</td>
                    <td className="py-3 px-4">
                      <select
                        value={lead.status}
                        onChange={e => handleStatusChange(lead.id, e.target.value as Lead['status'])}
                        className={`text-xs font-semibold px-3 py-1 rounded-full border-none cursor-pointer ${statusColors[lead.status]}`}
                      >
                        <option value="Nowy">Nowy</option>
                        <option value="Skontaktowany">Skontaktowany</option>
                        <option value="Zakończony">Zakończony</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminLeads;
