import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

const STORAGE_KEY = 'promo_banner_end';
const DISMISSED_KEY = 'promo_banner_dismissed';
const DURATION_MS = 24 * 60 * 60 * 1000; // 24h

const format = (ms: number) => {
  const total = Math.max(0, Math.floor(ms / 1000));
  const h = String(Math.floor(total / 3600)).padStart(2, '0');
  const m = String(Math.floor((total % 3600) / 60)).padStart(2, '0');
  const s = String(total % 60).padStart(2, '0');
  return { h, m, s };
};

const PromoBanner = () => {
  const [endTime, setEndTime] = useState<number | null>(null);
  const [remaining, setRemaining] = useState(DURATION_MS);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (localStorage.getItem(DISMISSED_KEY) === '1') return;

    let end = Number(localStorage.getItem(STORAGE_KEY));
    if (!end || Number.isNaN(end)) {
      end = Date.now() + DURATION_MS;
      localStorage.setItem(STORAGE_KEY, String(end));
    }

    if (end <= Date.now()) {
      localStorage.setItem(DISMISSED_KEY, '1');
      return;
    }

    setEndTime(end);
    setRemaining(end - Date.now());
    setVisible(true);
  }, []);

  useEffect(() => {
    if (!visible || endTime == null) return;
    const id = setInterval(() => {
      const left = endTime - Date.now();
      if (left <= 0) {
        localStorage.setItem(DISMISSED_KEY, '1');
        setVisible(false);
        clearInterval(id);
      } else {
        setRemaining(left);
      }
    }, 1000);
    return () => clearInterval(id);
  }, [visible, endTime]);

  const handleClose = () => {
    localStorage.setItem(DISMISSED_KEY, '1');
    setVisible(false);
  };

  if (!visible) return null;

  const { h, m, s } = format(remaining);

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
          onClick={handleClose}
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
