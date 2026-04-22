import { useEffect, useState } from 'react';

const STORAGE_KEY = 'promo_banner_end';
const DISMISSED_KEY = 'promo_banner_dismissed';
const DURATION_MS = 24 * 60 * 60 * 1000;

export const PROMO_EVENT = 'promo:changed';

export type PromoState = {
  active: boolean;
  remaining: number;
  endTime: number | null;
};

const readState = (): PromoState => {
  if (typeof window === 'undefined') {
    return { active: false, remaining: 0, endTime: null };
  }
  if (localStorage.getItem(DISMISSED_KEY) === '1') {
    return { active: false, remaining: 0, endTime: null };
  }
  let end = Number(localStorage.getItem(STORAGE_KEY));
  if (!end || Number.isNaN(end)) {
    end = Date.now() + DURATION_MS;
    localStorage.setItem(STORAGE_KEY, String(end));
  }
  const remaining = end - Date.now();
  if (remaining <= 0) {
    localStorage.setItem(DISMISSED_KEY, '1');
    return { active: false, remaining: 0, endTime: end };
  }
  return { active: true, remaining, endTime: end };
};

export const dismissPromo = () => {
  localStorage.setItem(DISMISSED_KEY, '1');
  window.dispatchEvent(new Event(PROMO_EVENT));
};

export const usePromoTimer = (): PromoState => {
  const [state, setState] = useState<PromoState>(() => readState());

  useEffect(() => {
    if (!state.active || !state.endTime) return;
    const id = setInterval(() => {
      const left = (state.endTime as number) - Date.now();
      if (left <= 0) {
        localStorage.setItem(DISMISSED_KEY, '1');
        setState({ active: false, remaining: 0, endTime: state.endTime });
        window.dispatchEvent(new Event(PROMO_EVENT));
        clearInterval(id);
      } else {
        setState((s) => ({ ...s, remaining: left }));
      }
    }, 1000);
    return () => clearInterval(id);
  }, [state.active, state.endTime]);

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
