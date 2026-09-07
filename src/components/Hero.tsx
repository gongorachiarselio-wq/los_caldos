import React from 'react';
import { 
  Star, 
  Clock, 
  MapPin, 
  ShoppingBag, 
  Bike, 
  Utensils, 
  ArrowRight,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';
import heroBannerImg from '../assets/images/hero_calditos_banner_1788783841126.jpg';
import specialPozoleImg from '../assets/images/special_pozole_dish_1788783856952.jpg';

interface HeroProps {
  onExploreMenu: () => void;
  onOpenDailySpecials: () => void;
  onOpenCart: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreMenu,
  onOpenDailySpecials,
  onOpenCart
}) => {
  return (
    <section id="inicio" className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden bg-gradient-to-b from-[#FBF9F5] via-amber-50/40 to-[#FBF9F5]">
      {/* Subtle Mexican decorative pattern / ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/25 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl pointer-events-none -ml-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top trust badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 border border-amber-300/60 px-3 py-1 rounded-full text-xs font-semibold shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                Cocina Tradicional Campechana
              </span>
              <div className="inline-flex items-center gap-1.5 bg-white border border-stone-200 text-stone-700 px-3 py-1 rounded-full text-xs font-semibold shadow-xs">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>4.2 en Google Maps</span>
                <span className="text-stone-400">·</span>
                <span className="text-stone-500 font-normal">358 opiniones</span>
              </div>
              <span className="inline-flex items-center gap-1 bg-stone-100 text-stone-600 px-2.5 py-1 rounded-full text-xs font-medium">
                $100-200 / persona
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-serif-display text-stone-900 tracking-tight leading-[1.12]">
                Los Calditos
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal text-amber-800 italic mt-1 font-serif-display">
                  Sabor casero, caldos calientes y tradición que reconforta
                </span>
              </h1>
              <p className="text-base sm:text-lg text-stone-600 max-w-2xl leading-relaxed">
                El rincón más querido del <strong className="text-stone-800 font-semibold">Barrio de San Francisco en Campeche</strong>. Pozole estilo Jalisco, sopa de lima con pollo deshebrado, puchero de 3 carnes, frijol con puerco de los lunes y mariscos frescos al momento.
              </p>
            </div>

            {/* Service Modalities Chips */}
            <div className="grid grid-cols-3 gap-2.5 max-w-lg pt-1">
              <div className="bg-white/80 border border-stone-200/80 rounded-xl p-2.5 text-center shadow-xs">
                <Utensils className="w-4 h-4 mx-auto text-amber-700 mb-1" />
                <span className="text-xs font-bold text-stone-800 block">Consumo en local</span>
                <span className="text-[10px] text-stone-500">Mesa y ambiente familiar</span>
              </div>
              <div className="bg-white/80 border border-stone-200/80 rounded-xl p-2.5 text-center shadow-xs">
                <ShoppingBag className="w-4 h-4 mx-auto text-amber-700 mb-1" />
                <span className="text-xs font-bold text-stone-800 block">Para llevar</span>
                <span className="text-[10px] text-stone-500">Empacado hermético</span>
              </div>
              <div className="bg-white/80 border border-stone-200/80 rounded-xl p-2.5 text-center shadow-xs">
                <Bike className="w-4 h-4 mx-auto text-amber-700 mb-1" />
                <span className="text-xs font-bold text-stone-800 block">A domicilio</span>
                <span className="text-[10px] text-stone-500">Todo Campeche</span>
              </div>
            </div>

            {/* Quick Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                id="hero-order-btn"
                onClick={onExploreMenu}
                className="flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-bold px-6 py-3.5 rounded-xl shadow-md shadow-amber-800/20 hover:shadow-lg transition-all text-base active:scale-95 group"
              >
                <span>Explorar Menú & Precios</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-specials-btn"
                onClick={onOpenDailySpecials}
                className="flex items-center justify-center gap-2 bg-white hover:bg-stone-50 text-stone-800 font-semibold px-5 py-3.5 rounded-xl border border-stone-300 hover:border-amber-400 transition-all text-base shadow-xs"
              >
                <Clock className="w-4 h-4 text-amber-600" />
                <span>Especiales por Día</span>
              </button>

              <a
                href={`tel:${RESTAURANT_INFO.phone.replace(/\s/g, '')}`}
                className="flex items-center justify-center gap-2 text-stone-700 hover:text-amber-800 px-4 py-3.5 rounded-xl border border-transparent hover:border-stone-200 transition-all text-sm font-semibold"
              >
                <PhoneCall className="w-4 h-4 text-amber-600" />
                <span>{RESTAURANT_INFO.phone}</span>
              </a>
            </div>

            {/* Location strip */}
            <div className="pt-2 flex items-center gap-2 text-xs text-stone-500">
              <MapPin className="w-4 h-4 text-amber-700 shrink-0" />
              <span>{RESTAURANT_INFO.address}</span>
            </div>

          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-stone-900 group">
                <img 
                  src={heroBannerImg} 
                  alt="Mesa tradicional de Los Calditos con pozole rojo y sopa de lima"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent"></div>

                {/* Overlay details */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-amber-300 bg-amber-950/70 backdrop-blur-xs px-2.5 py-0.5 rounded-md mb-1.5 border border-amber-500/30">
                    Hecho con amor y sazón
                  </span>
                  <h3 className="text-xl font-bold font-serif-display leading-snug">
                    Pozole Estilo Jalisco & Caldos Calientes
                  </h3>
                  <p className="text-xs text-stone-200 line-clamp-2 mt-1">
                    Acompañados siempre con tostadas con chile, limones recién cortados, rábano, cebolla y orégano.
                  </p>
                </div>
              </div>

              {/* Floating Mini Showcase Pill (Bottom Right) */}
              <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-white p-3 sm:p-3.5 rounded-2xl shadow-xl border border-stone-100 flex items-center gap-3 max-w-[240px] sm:max-w-[260px] animate-fade-in">
                <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-amber-200">
                  <img 
                    src={specialPozoleImg} 
                    alt="Pozole Estilo Jalisco" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wide block">
                    Más Pedido
                  </span>
                  <h4 className="text-xs font-bold text-stone-900 leading-tight">
                    Pozole Jalisco
                  </h4>
                  <span className="text-xs font-extrabold text-stone-900 mt-0.5 block">
                    $143.00 MXN
                  </span>
                </div>
                <button
                  onClick={onExploreMenu}
                  className="ml-auto p-1.5 bg-amber-100 hover:bg-amber-200 text-amber-900 rounded-lg text-xs font-bold transition-colors"
                  title="Ver en menú"
                >
                  +
                </button>
              </div>

              {/* Floating Top Left Badge: Horario */}
              <div className="absolute -top-3 -left-3 sm:-left-4 bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl shadow-lg border border-stone-200 flex items-center gap-2 text-xs">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></div>
                <span className="font-semibold text-stone-800">Servicio hoy desde la 1:00 PM</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
