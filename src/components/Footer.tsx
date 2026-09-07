import React from 'react';
import { Soup, Phone, MapPin, Clock, Heart, MessageCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

interface FooterProps {
  onNavigateSection: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          
          {/* Column 1: Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center shadow-md">
                <Soup className="w-6 h-6 text-amber-100" />
              </div>
              <span className="text-2xl font-bold font-serif-display text-white">
                Los Calditos
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              El restaurante de caldos, pozoles, mariscos y comida típica preferido de las familias en San Francisco de Campeche. Sabor casero de generación en generación.
            </p>
            <div className="pt-2">
              <span className="text-xs bg-stone-800 text-amber-400 font-semibold px-3 py-1 rounded-full border border-stone-700 inline-block">
                ⭐ 4.2 en Google Maps (358 reseñas)
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigateSection('inicio')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('menu')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Menú y Precios
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('especiales-dia')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Especiales del Día (Lunes a Domingo)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('combos')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Combo Los Calditos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('resenas')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Opiniones de Clientes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('ubicacion')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Ubicación & Horarios
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Delivery */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Contacto Directo
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`tel:${RESTAURANT_INFO.phone.replace(/\s/g, '')}`} className="hover:text-white font-semibold">
                  {RESTAURANT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white font-semibold text-emerald-300"
                >
                  WhatsApp: +52 981 107 6384
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Horario de Atención
            </h4>
            <div className="bg-stone-800/80 p-3.5 rounded-xl border border-stone-700/60 text-xs space-y-1.5">
              <div className="flex items-center justify-between text-stone-300 font-medium">
                <span>Lunes a Domingo:</span>
                <span className="text-amber-400 font-bold">1:00 PM – 7:00 PM</span>
              </div>
              <p className="text-[11px] text-stone-400 pt-1">
                Servicio en comedor, para llevar y entregas a domicilio en San Francisco de Campeche.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© 2026 Los Calditos · San Francisco de Campeche, Campeche, México. Todos los derechos reservados.</p>
          <div className="flex items-center gap-1">
            <span>Tradición culinaria preparada con</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
            <span>en Campeche</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
