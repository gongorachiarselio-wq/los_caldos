import React, { useState } from 'react';
import { Flame, Plus, Check, Sparkles, ShoppingBag } from 'lucide-react';
import { MENU_ITEMS } from '../data/menuData';
import { MenuItem } from '../types';

interface CombosHighlightProps {
  onAddToCart: (item: MenuItem) => void;
}

export const CombosHighlight: React.FC<CombosHighlightProps> = ({ onAddToCart }) => {
  const combo = MENU_ITEMS.find((item) => item.id === 'combo-los-calditos');
  const [added, setAdded] = useState(false);

  if (!combo) return null;

  const handleAdd = () => {
    onAddToCart(combo);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <section id="combos" className="py-12 bg-amber-900 text-white relative overflow-hidden scroll-mt-16">
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-stone-950/40 rounded-3xl p-6 sm:p-10 border border-amber-500/30 backdrop-blur-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Details */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 bg-amber-500 text-stone-950 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-sm">
                <Flame className="w-3.5 h-3.5 fill-stone-950 text-stone-950" />
                El Paquete Más Completo de la Casa
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif-display text-white tracking-tight">
                {combo.name}
              </h2>

              <p className="text-amber-100/90 text-sm sm:text-base leading-relaxed">
                Diseñado para compartir o para los que quieren probar lo mejor de Campeche en una sola comida: nuestro auténtico <strong>Pozole Estilo Jalisco</strong> calientito + crujiente <strong>Milanesa de Pollo</strong> con todas sus guarniciones + <strong>Coca Cola fría de 600 ml</strong>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-white/10 rounded-xl p-3 border border-white/10">
                  <span className="text-[10px] uppercase font-bold text-amber-300 block">Platillo 1</span>
                  <strong className="text-xs text-white block mt-0.5">Pozole Jalisco</strong>
                  <span className="text-[11px] text-stone-300">Tostadas, limón y orégano</span>
                </div>
                <div className="bg-white/10 rounded-xl p-3 border border-white/10">
                  <span className="text-[10px] uppercase font-bold text-amber-300 block">Platillo 2</span>
                  <strong className="text-xs text-white block mt-0.5">Milanesa de Pollo</strong>
                  <span className="text-[11px] text-stone-300">Arroz, frijol y ensalada</span>
                </div>
                <div className="bg-white/10 rounded-xl p-3 border border-white/10">
                  <span className="text-[10px] uppercase font-bold text-amber-300 block">Bebida Incluida</span>
                  <strong className="text-xs text-white block mt-0.5">Coca Cola 600 ml</strong>
                  <span className="text-[11px] text-stone-300">Original bien fría</span>
                </div>
              </div>

              {/* Price and CTA */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold font-serif-display text-amber-400">
                    ${combo.price.toFixed(2)}
                  </span>
                  <span className="text-xs text-amber-200">MXN todo incluido</span>
                </div>

                <button
                  onClick={handleAdd}
                  className={`flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-lg active:scale-95 ${
                    added
                      ? 'bg-emerald-500 text-white'
                      : 'bg-amber-400 hover:bg-amber-300 text-stone-950 shadow-amber-500/20'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>¡Agregado a tu pedido!</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4 text-stone-950" />
                      <span>Pedir Combo Ahora</span>
                    </>
                  )}
                </button>
              </div>

            </div>

            {/* Right: Picture */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-500/40 aspect-[4/3] bg-stone-900">
                <img
                  src={combo.image}
                  alt={combo.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="bg-amber-500 text-stone-950 text-xs font-black px-2.5 py-1 rounded-md">
                    Ahorro Especial
                  </span>
                  <p className="text-xs text-stone-200 mt-1">
                    Ideal para 1 a 2 personas con gran apetito
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
