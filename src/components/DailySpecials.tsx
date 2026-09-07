import React, { useState, useEffect } from 'react';
import { Calendar, Sparkles, Plus, Check, Clock, Info } from 'lucide-react';
import { MENU_ITEMS } from '../data/menuData';
import { MenuItem } from '../types';

interface DailySpecialsProps {
  onAddToCart: (item: MenuItem) => void;
  onOpenDishDetail: (item: MenuItem) => void;
}

const DAYS_DATA = [
  {
    id: 'lunes',
    dayName: 'Lunes',
    title: 'Lunes de Frijol con Puerco',
    description: 'La tradición sagrada peninsular: frijol negro espeso, carne tierna de puerco y chiltomate asado.',
    itemId: 'frijol-con-puerco',
    tag: 'Tradición Peninsular'
  },
  {
    id: 'martes',
    dayName: 'Martes',
    title: 'Martes de Potaje de Lentejas',
    description: 'Potaje calientito con verduras, carne de puerco y carnes frías al estilo casero campechano.',
    itemId: 'potaje-de-lentejas',
    tag: 'Sabor Casero'
  },
  {
    id: 'jueves',
    dayName: 'Jueves',
    title: 'Jueves de Pollo Asado con Macarrones',
    description: '1/4 de pollo asado al carbón con ensalada rusa, arroz, frijol y macarrones tradicionales.',
    itemId: 'pollo-asado-macarrones',
    tag: 'Al Carbón'
  },
  {
    id: 'viernes',
    dayName: 'Viernes',
    title: 'Viernes de Puchero de 3 Carnes',
    description: 'Caldo sustancioso de pollo, res y cerdo cocinado a fuego lento con legumbres frescas.',
    itemId: 'puchero-tres-carnes',
    tag: 'Rey de los Caldos'
  },
  {
    id: 'sabado_domingo',
    dayName: 'Sábado y Domingo',
    title: 'Fin de Semana: Chocolomo Campechano',
    description: 'El clásico campechano por excelencia: caldo de res en presas con tuétano, tostadas y limón.',
    itemId: 'chocolomo',
    tag: 'Fin de Semana'
  }
];

export const DailySpecials: React.FC<DailySpecialsProps> = ({
  onAddToCart,
  onOpenDishDetail
}) => {
  const [activeDayId, setActiveDayId] = useState<string>('lunes');
  const [todayId, setTodayId] = useState<string>('lunes');
  const [addedItem, setAddedItem] = useState<string | null>(null);

  useEffect(() => {
    // Current day detection (0 = Sun, 1 = Mon, 2 = Tue, 3 = Wed, 4 = Thu, 5 = Fri, 6 = Sat)
    const dayOfWeek = new Date().getDay();
    let currentId = 'lunes';
    if (dayOfWeek === 1) currentId = 'lunes';
    else if (dayOfWeek === 2) currentId = 'martes';
    else if (dayOfWeek === 4) currentId = 'jueves';
    else if (dayOfWeek === 5) currentId = 'viernes';
    else if (dayOfWeek === 6 || dayOfWeek === 0) currentId = 'sabado_domingo';
    else currentId = 'lunes'; // Wed default to Mon or general

    setTodayId(currentId);
    setActiveDayId(currentId);
  }, []);

  const activeDay = DAYS_DATA.find((d) => d.id === activeDayId) || DAYS_DATA[0];
  const dishItem = MENU_ITEMS.find((item) => item.id === activeDay.itemId);

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item);
    setAddedItem(item.id);
    setTimeout(() => setAddedItem(null), 1500);
  };

  return (
    <section id="especiales-dia" className="py-12 sm:py-16 bg-stone-100/70 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 mb-1">
              <Calendar className="w-4 h-4 text-amber-600" />
              <span>Especialidades del Diario</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif-display text-stone-900 tracking-tight">
              Cada día tiene su caldo y tradición
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-1.5 max-w-2xl">
              En Campeche, cada día de la semana se celebra con un platillo icónico cocinado con recetas familiares desde temprano.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-amber-50 border border-amber-200/80 px-3.5 py-2 rounded-xl text-xs text-amber-900 font-medium">
            <Clock className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Disponible a partir de la 1:00 PM hasta agotar existencias</span>
          </div>
        </div>

        {/* Days Pill Selector Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
          {DAYS_DATA.map((day) => {
            const isSelected = activeDayId === day.id;
            const isToday = todayId === day.id;
            return (
              <button
                key={day.id}
                onClick={() => setActiveDayId(day.id)}
                className={`px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm whitespace-nowrap transition-all flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-amber-800 text-white border-amber-900 shadow-md shadow-amber-900/20'
                    : 'bg-white text-stone-700 hover:bg-stone-50 border-stone-200/80'
                }`}
              >
                <span>{day.dayName}</span>
                {isToday && (
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                    isSelected ? 'bg-amber-400 text-stone-950' : 'bg-amber-100 text-amber-800'
                  }`}>
                    ¡Hoy!
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Featured Daily Dish Card */}
        {dishItem && (
          <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden p-5 sm:p-7 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              
              {/* Photo */}
              <div className="lg:col-span-5 relative rounded-xl overflow-hidden shadow-inner aspect-[4/3] bg-stone-100 group">
                <img 
                  src={dishItem.image} 
                  alt={dishItem.name} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-amber-900/90 text-amber-100 text-xs font-bold px-3 py-1 rounded-lg backdrop-blur-xs flex items-center gap-1.5 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>{dishItem.badge || activeDay.tag}</span>
                </div>
                <div className="absolute bottom-3 right-3 bg-stone-900/90 text-white text-xs font-bold px-3 py-1 rounded-lg backdrop-blur-xs">
                  ${dishItem.price.toFixed(2)} MXN
                </div>
              </div>

              {/* Details and Ordering */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider bg-amber-50 px-2.5 py-1 rounded-md">
                    {activeDay.title}
                  </span>
                  <span className="text-2xl sm:text-3xl font-extrabold font-serif-display text-stone-900">
                    ${dishItem.price.toFixed(2)} <span className="text-xs text-stone-500 font-sans font-normal">MXN</span>
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-serif-display text-stone-900">
                  {dishItem.name}
                </h3>

                <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                  {dishItem.description}
                </p>

                {/* Complements Pill List */}
                {dishItem.complements && (
                  <div className="space-y-1.5 pt-1">
                    <span className="text-xs font-semibold text-stone-700 block">
                      Incluye sus complementos tradicionales:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {dishItem.complements.map((c, i) => (
                        <span 
                          key={i}
                          className="text-xs bg-stone-100 text-stone-700 px-2.5 py-1 rounded-lg border border-stone-200/80 font-medium"
                        >
                          ✓ {c}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => handleAdd(dishItem)}
                    className="flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-bold px-6 py-3 rounded-xl shadow-sm transition-all active:scale-95 text-sm"
                  >
                    {addedItem === dishItem.id ? (
                      <>
                        <Check className="w-4 h-4 text-amber-200" />
                        <span>¡Agregado al pedido!</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        <span>Agregar al Pedido (${dishItem.price} MXN)</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => onOpenDishDetail(dishItem)}
                    className="flex items-center gap-1.5 text-stone-700 hover:text-amber-800 text-sm font-semibold px-4 py-3 rounded-xl border border-stone-200 hover:bg-stone-50 transition-colors"
                  >
                    <Info className="w-4 h-4 text-stone-500" />
                    <span>Ver detalles y notas</span>
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
