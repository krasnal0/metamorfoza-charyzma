import { X } from 'lucide-react';
import { usePromoTimer, dismissPromo, formatRemaining } from '@/hooks/usePromoTimer';

const PromoBanner = () => {
  const { active, remaining } = usePromoTimer();
  if (!active) return null;

  const { h, m, s } = formatRemaining(remaining);

  return (
    <div className="sticky top-0 left-0 right-0 z-[60] bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-lg">
      <div className="container mx-auto px-3 py-2 sm:py-2.5 flex items-center justify-between gap-2">
        <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-1 sm:gap-3 text-center">
          <span className="font-bold text-xs sm:text-sm md:text-base leading-tight">
            🔥 PROMOCJA: -20% na plany treningowe i coaching online!
          </span>
          <span className="inline-flex items-center gap-1 font-mono font-bold text-xs sm:text-sm bg-black/25 rounded px-2 py-0.5 mx-auto sm:mx-0">
            <span>{h}</span>:<span>{m}</span>:<span>{s}</span>
          </span>
        </div>
        <button
          onClick={dismissPromo}
          aria-label="Zamknij baner promocyjny"
          className="shrink-0 p-1 rounded hover:bg-white/20 transition-colors"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
};

export default PromoBanner;
