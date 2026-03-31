import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Dumbbell } from 'lucide-react';

const navItems = [
  { label: 'Start', href: '#hero' },
  { label: 'Przemiany', href: '#transformations' },
  { label: 'Usługi', href: '#services' },
  { label: 'Terminarz', href: '#booking' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <Dumbbell className="w-7 h-7 text-primary" />
          <span className="font-heading font-bold text-lg text-foreground">TRENER<span className="text-primary">ŻORY</span></span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#hero" className="bg-gradient-amber text-primary-foreground px-5 py-2 rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-opacity">
            Darmowy Trening
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navItems.map(item => (
                <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="text-foreground font-medium py-2">
                  {item.label}
                </a>
              ))}
              <a href="#hero" onClick={() => setMobileOpen(false)} className="bg-gradient-amber text-primary-foreground px-5 py-3 rounded-lg font-heading font-semibold text-center">
                Darmowy Trening
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
