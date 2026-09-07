import React, { useState, useEffect } from 'react';
import { 
  Soup, 
  ShoppingBag, 
  Phone, 
  Clock, 
  MapPin, 
  Menu as MenuIcon, 
  X, 
  Star,
  MessageCircle
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

interface NavbarProps {
  cartCount: number;
  cartTotal: number;
  onOpenCart: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  cartTotal,
  onOpenCart,
  onNavigateSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Calculate if open (1:00 PM - 7:00 PM = 13:00 - 19:00)
    const now = new Date();
    const currentHour = now.getHours();
    setIsOpenNow(currentHour >= 13 && currentHour < 19);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    onNavigateSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Top Utility Announcement Bar */}
      <div className="bg-amber-900 text-amber-100 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1 font-medium">
              <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`}></span>
              {isOpenNow ? 'Abierto ahora hasta las 7:00 PM' : 'Abre a la 1:00 PM (13:00 hrs)'}
            </span>
            <span className="hidden sm:inline-block text-amber-300/60">•</span>
            <span className="hidden sm:flex items-center gap-1 text-amber-200">
              <MapPin className="w-3 h-3 text-amber-400" />
              Barrio de San Francisco, Campeche
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto text-[11px] sm:text-xs">
            <a 
              href={`tel:${RESTAURANT_INFO.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span className="font-semibold">{RESTAURANT_INFO.phone}</span>
            </a>
            <a
              href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1 text-emerald-300 hover:text-emerald-200 font-medium"
            >
              <MessageCircle className="w-3 h-3" />
              WhatsApp Directo
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-stone-200 py-2.5' 
            : 'bg-white/90 backdrop-blur-sm border-b border-stone-100 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Identity */}
          <button 
            onClick={() => handleNavClick('inicio')}
            className="flex items-center gap-3 text-left group"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-amber-600 to-amber-700 text-white flex items-center justify-center shadow-md shadow-amber-700/20 group-hover:scale-105 transition-transform">
              <Soup className="w-6 h-6 text-amber-100" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-bold font-serif-display text-stone-900 tracking-tight leading-none">
                  Los Calditos
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded-full">
                  <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                  4.2 (358)
                </span>
              </div>
              <span className="text-[11px] sm:text-xs text-stone-500 block font-medium">
                Restaurante Típico · Campeche
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            <button 
              onClick={() => handleNavClick('menu')} 
              className="px-3 py-1.5 text-sm font-semibold text-stone-700 hover:text-amber-700 hover:bg-stone-100/80 rounded-lg transition-colors"
            >
              Menú Completo
            </button>
            <button 
              onClick={() => handleNavClick('especiales-dia')} 
              className="px-3 py-1.5 text-sm font-semibold text-stone-700 hover:text-amber-700 hover:bg-stone-100/80 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              Especiales del Día
            </button>
            <button 
              onClick={() => handleNavClick('combos')} 
              className="px-3 py-1.5 text-sm font-semibold text-stone-700 hover:text-amber-700 hover:bg-stone-100/80 rounded-lg transition-colors"
            >
              Combos
            </button>
            <button 
              onClick={() => handleNavClick('resenas')} 
              className="px-3 py-1.5 text-sm font-semibold text-stone-700 hover:text-amber-700 hover:bg-stone-100/80 rounded-lg transition-colors"
            >
              Opiniones (4.2★)
            </button>
            <button 
              onClick={() => handleNavClick('ubicacion')} 
              className="px-3 py-1.5 text-sm font-semibold text-stone-700 hover:text-amber-700 hover:bg-stone-100/80 rounded-lg transition-colors"
            >
              Ubicación & Horarios
            </button>
          </div>

          {/* Actions: Cart & Mobile Button */}
          <div className="flex items-center gap-3">
            {/* Cart Button */}
            <button
              id="cart-trigger-btn"
              onClick={onOpenCart}
              className="relative flex items-center gap-2.5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl font-semibold text-sm shadow-md shadow-amber-700/20 hover:shadow-lg transition-all active:scale-95"
            >
              <ShoppingBag className="w-4 h-4 text-amber-100" />
              <span className="hidden sm:inline">Mi Pedido</span>
              {cartCount > 0 ? (
                <div className="flex items-center gap-1.5">
                  <span className="bg-amber-400 text-stone-950 text-xs px-1.5 py-0.5 rounded-full font-bold">
                    {cartCount}
                  </span>
                  <span className="hidden lg:inline text-amber-100 text-xs font-bold">
                    ${cartTotal} MXN
                  </span>
                </div>
              ) : (
                <span className="text-xs text-amber-200 font-normal hidden sm:inline">($0)</span>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-stone-700 hover:bg-stone-100 rounded-lg transition-colors"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-stone-200 px-4 pt-2 pb-4 shadow-xl space-y-1">
            <button 
              onClick={() => handleNavClick('menu')} 
              className="w-full text-left px-3 py-2 text-sm font-semibold text-stone-800 hover:bg-amber-50 hover:text-amber-800 rounded-lg"
            >
              🍲 Menú Completo
            </button>
            <button 
              onClick={() => handleNavClick('especiales-dia')} 
              className="w-full text-left px-3 py-2 text-sm font-semibold text-stone-800 hover:bg-amber-50 hover:text-amber-800 rounded-lg"
            >
              📅 Especiales del Día (Frijol con Puerco, Chocolomo, etc.)
            </button>
            <button 
              onClick={() => handleNavClick('combos')} 
              className="w-full text-left px-3 py-2 text-sm font-semibold text-stone-800 hover:bg-amber-50 hover:text-amber-800 rounded-lg"
            >
              🔥 Combo Los Calditos
            </button>
            <button 
              onClick={() => handleNavClick('resenas')} 
              className="w-full text-left px-3 py-2 text-sm font-semibold text-stone-800 hover:bg-amber-50 hover:text-amber-800 rounded-lg"
            >
              ⭐ Opiniones de Clientes (358)
            </button>
            <button 
              onClick={() => handleNavClick('ubicacion')} 
              className="w-full text-left px-3 py-2 text-sm font-semibold text-stone-800 hover:bg-amber-50 hover:text-amber-800 rounded-lg"
            >
              📍 Ubicación, Teléfono & Horarios
            </button>
            <div className="pt-2 border-t border-stone-100 mt-2 flex flex-col gap-2">
              <a 
                href={`tel:${RESTAURANT_INFO.phone.replace(/\s/g, '')}`}
                className="flex items-center justify-center gap-2 w-full py-2 bg-stone-100 text-stone-800 font-medium rounded-lg text-sm"
              >
                <Phone className="w-4 h-4 text-amber-600" />
                Llamar: {RESTAURANT_INFO.phone}
              </a>
              <a 
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Hola%20Los%20Calditos,%20quisiera%20consultar%20el%20menú%20o%20hacer%20un%20pedido`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2 bg-emerald-600 text-white font-medium rounded-lg text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Pedir por WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
