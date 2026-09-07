import React, { useState } from 'react';
import { X, Plus, Minus, Check, ShoppingBag, Flame, Sparkles } from 'lucide-react';
import { MenuItem } from '../types';

interface DishModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCartWithOptions: (
    item: MenuItem, 
    quantity: number, 
    notes?: string,
    customization?: { chile?: string; tortillas?: string }
  ) => void;
}

export const DishModal: React.FC<DishModalProps> = ({
  item,
  onClose,
  onAddToCartWithOptions
}) => {
  if (!item) return null;

  const [quantity, setQuantity] = useState(1);
  const [chileOption, setChileOption] = useState('chile_aparte');
  const [tortillaOption, setTortillaOption] = useState('tortillas_maiz');
  const [specialNotes, setSpecialNotes] = useState('');
  const [added, setAdded] = useState(false);

  const totalPrice = item.price * quantity;

  const handleAdd = () => {
    onAddToCartWithOptions(item, quantity, specialNotes, {
      chile: chileOption,
      tortillas: tortillaOption
    });
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs animate-fade-in">
      <div 
        className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-stone-900/60 hover:bg-stone-900/80 text-white transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header Image */}
        <div className="relative aspect-[16/10] w-full bg-stone-100 shrink-0">
          <img
            src={item.image}
            alt={item.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent"></div>
          
          <div className="absolute bottom-3 left-4 right-4 text-white">
            {item.badge && (
              <span className="inline-block bg-amber-500 text-stone-950 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md mb-1 shadow-xs">
                {item.badge}
              </span>
            )}
            <h3 className="text-xl sm:text-2xl font-bold font-serif-display leading-tight">
              {item.name}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 space-y-5 flex-1">
          
          {/* Price & Description */}
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-2xl font-extrabold font-serif-display text-amber-900">
              ${item.price.toFixed(2)} <span className="text-xs text-stone-500 font-sans font-normal">MXN</span>
            </span>
            {item.dayName && (
              <span className="text-xs font-semibold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                Especial de {item.dayName}
              </span>
            )}
          </div>

          <p className="text-sm text-stone-600 leading-relaxed">
            {item.description}
          </p>

          {/* Included Complements */}
          {item.complements && item.complements.length > 0 && (
            <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/80 space-y-2">
              <span className="text-xs font-bold text-stone-800 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                Guarniciones y complementos incluidos:
              </span>
              <ul className="grid grid-cols-2 gap-1.5 text-xs text-stone-700">
                {item.complements.map((comp, idx) => (
                  <li key={idx} className="flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                    <span>{comp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Customization: Chile */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-stone-800 flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-amber-600" />
              Preferencia de Chile / Picante:
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'chile_aparte', label: 'Chile aparte' },
                { id: 'sin_chile', label: 'Sin chile' },
                { id: 'con_chile', label: 'Bien picante' }
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setChileOption(opt.id)}
                  className={`py-2 px-2 text-xs rounded-lg font-medium border text-center transition-all ${
                    chileOption === opt.id
                      ? 'bg-amber-800 text-white border-amber-900 font-bold shadow-xs'
                      : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Customization: Tortillas or totopos preference */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-stone-800 block">
              Preferencia de Acompañamiento:
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'tortillas_maiz', label: 'Tortillas de maíz calientes' },
                { id: 'totopos_crujientes', label: 'Tostadas / Totopos dorados' }
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setTortillaOption(opt.id)}
                  className={`py-2 px-2 text-xs rounded-lg font-medium border text-center transition-all ${
                    tortillaOption === opt.id
                      ? 'bg-amber-800 text-white border-amber-900 font-bold shadow-xs'
                      : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Kitchen notes */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-stone-800 block">
              Instrucciones especiales para cocina (opcional):
            </label>
            <input
              type="text"
              value={specialNotes}
              onChange={(e) => setSpecialNotes(e.target.value)}
              placeholder="Ej: Extra limón, sin cilantro, salsa de tomate bien caliente..."
              className="w-full px-3 py-2 text-xs rounded-lg bg-stone-50 border border-stone-200 text-stone-800 placeholder:text-stone-400 focus:outline-hidden focus:border-amber-600 focus:bg-white"
            />
          </div>

          {/* Quantity and Order Button */}
          <div className="pt-3 border-t border-stone-200 flex items-center justify-between gap-4">
            {/* Quantity controls */}
            <div className="flex items-center border border-stone-300 rounded-xl bg-white p-1">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 hover:bg-stone-100 rounded-lg text-stone-600 transition-colors"
                aria-label="Disminuir cantidad"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-8 text-center text-sm font-bold text-stone-900">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 hover:bg-stone-100 rounded-lg text-stone-600 transition-colors"
                aria-label="Aumentar cantidad"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Submit Add button */}
            <button
              type="button"
              onClick={handleAdd}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white transition-all shadow-md active:scale-95 ${
                added ? 'bg-emerald-600' : 'bg-amber-700 hover:bg-amber-800 shadow-amber-800/20'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>¡Agregado con éxito!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4 text-amber-200" />
                  <span>Agregar por ${totalPrice.toFixed(2)} MXN</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
