import React, { useState } from 'react';
import { MessageCircle, Phone, ShoppingBag, X } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

interface FloatingWhatsAppProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ cartCount, onOpenCart }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Hola%20Los%20Calditos,%20quisiera%20hacer%20un%20pedido%20o%20consultar%20el%20menú`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {/* If cart has items, show floating cart pill */}
      {cartCount > 0 && (
        <button
          onClick={onOpenCart}
          className="flex items-center gap-2 bg-stone-900 text-white px-4 py-2.5 rounded-full shadow-xl border border-stone-700 hover:bg-stone-800 transition-all hover:scale-105 active:scale-95 group text-xs font-bold"
        >
          <ShoppingBag className="w-4 h-4 text-amber-400" />
          <span>Ver mi pedido</span>
          <span className="bg-amber-500 text-stone-950 px-1.5 py-0.2 rounded-full font-black text-[11px]">
            {cartCount}
          </span>
        </button>
      )}

      {/* Floating WhatsApp Button */}
      <div className="relative group">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all relative border-2 border-white"
          aria-label="Contactar por WhatsApp a Los Calditos"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 rounded-full border-2 border-white animate-pulse"></span>
        </a>

        {/* Hover Tooltip */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-stone-900 text-white text-xs px-3 py-1.5 rounded-lg shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap">
          ¿Dudas o pedidos? Escríbenos por WhatsApp
        </div>
      </div>
    </div>
  );
};
