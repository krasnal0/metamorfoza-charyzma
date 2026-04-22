import { useEffect, useState } from 'react';

// Fixed deadline: April 23, 2026 at 20:00 local time
const DEADLINE = new Date(2026, 3, 23, 20, 0, 0, 0).getTime();
const DISMISSED_KEY = 'promo_banner_dismissed';

export const PROMO_EVENT = 'promo:changed';

export type PromoState = {
  active: boolean;
  remaining: number;
  endTime: number;
};

const readState = (): PromoState => {
  if (typeof window === 'undefined') {
    return { active: false, remaining: 0, endTime: DEADLINE };
  }
  const remaining = DEADLINE - Date.now();
  if (remaining <= 0) {
    return { active: false, remaining: 0, endTime: DEADLINE };
  }
  if (localStorage.getItem(DISMISSED_KEY) === '1') {
    return { active: false, remaining, endTime: DEADLINE };
  }
  return { active: true, remaining, endTime: DEADLINE };
};

export const dismissPromo = () => {
  localStorage.setItem(DISMISSED_KEY, '1');
  window.dispatchEvent(new Event(PROMO_EVENT));
};

export const usePromoTimer = (): PromoState => {
  const [state, setState] = useState<PromoState>(() => readState());

  useEffect(() => {
    const id = setInterval(() => {
      const next = readState();
      setState(next);
      if (!next.active && next.remaining <= 0) {
        window.dispatchEvent(new Event(PROMO_EVENT));
        clearInterval(id);
      }
    }, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const refresh = () => setState(readState());
    window.addEventListener(PROMO_EVENT, refresh);
    window.addEventListener('storage', refresh);
    return () => {
      window.removeEventListener(PROMO_EVENT, refresh);
      window.removeEventListener('storage', refresh);
    };
  }, []);

  return state;
};

export const formatRemaining = (ms: number) => {
  const total = Math.max(0, Math.floor(ms / 1000));
  const h = String(Math.floor(total / 3600)).padStart(2, '0');
  const m = String(Math.floor((total % 3600) / 60)).padStart(2, '0');
  const s = String(total % 60).padStart(2, '0');
  return { h, m, s };
};
