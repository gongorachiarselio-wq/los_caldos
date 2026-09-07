import React, { useState, useMemo } from 'react';
import { 
  Search, 
  X, 
  Plus, 
  Check, 
  Sparkles, 
  Soup, 
  Calendar, 
  UtensilsCrossed, 
  Fish, 
  CookingPot, 
  Flame, 
  Salad, 
  Cake, 
  CupSoda,
  Info
} from 'lucide-react';
import { MENU_ITEMS, CATEGORY_FILTERS } from '../data/menuData';
import { MenuItem, MenuCategory, CartItem } from '../types';

interface MenuSectionProps {
  cart: CartItem[];
  onAddToCart: (item: MenuItem) => void;
  onOpenDishDetail: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  cart,
  onAddToCart,
  onOpenDishDetail
}) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  // Map category icons
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'caldos': return <Soup className="w-3.5 h-3.5" />;
      case 'diario': return <Calendar className="w-3.5 h-3.5" />;
      case 'fuertes': return <UtensilsCrossed className="w-3.5 h-3.5" />;
      case 'mariscos': return <Fish className="w-3.5 h-3.5" />;
      case 'pastas': return <CookingPot className="w-3.5 h-3.5" />;
      case 'combos': return <Flame className="w-3.5 h-3.5 text-amber-500" />;
      case 'antojos': return <Salad className="w-3.5 h-3.5" />;
      case 'postres': return <Cake className="w-3.5 h-3.5" />;
      case 'bebidas': return <CupSoda className="w-3.5 h-3.5" />;
      default: return <Sparkles className="w-3.5 h-3.5" />;
    }
  };

  // Filter items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'todos' || item.category === selectedCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch = 
        !query || 
        item.name.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query) ||
        (item.complements && item.complements.some((c) => c.toLowerCase().includes(query)));
      
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const getItemQuantityInCart = (itemId: string) => {
    const found = cart.find((ci) => ci.menuItem.id === itemId);
    return found ? found.quantity : 0;
  };

  const handleQuickAdd = (item: MenuItem, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(item);
    setJustAddedId(item.id);
    setTimeout(() => setJustAddedId(null), 1200);
  };

  return (
    <section id="menu" className="py-14 sm:py-20 bg-[#FBF9F5] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100/80 px-3 py-1 rounded-full inline-block mb-2">
            Nuestra Carta & Especialidades
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif-display text-stone-900 tracking-tight">
            Menú Tradicional Campechano
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Preparados al momento con ingredientes frescos. Consulta complementos, guarniciones y pide directamente a tu mesa o a domicilio.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="space-y-4 mb-8">
          
          {/* Search Box */}
          <div className="relative max-w-lg mx-auto">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar caldo, pozole, chaya, camarones, postre..."
              className="w-full pl-10 pr-10 py-3 rounded-xl bg-white border border-stone-200 text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:border-amber-600 focus:ring-2 focus:ring-amber-500/20 text-sm shadow-xs transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-stone-400 hover:text-stone-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Chips Scrollbar */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none justify-start lg:justify-center">
            {CATEGORY_FILTERS.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              const count = cat.id === 'todos' 
                ? MENU_ITEMS.length 
                : MENU_ITEMS.filter((i) => i.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as MenuCategory)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 border ${
                    isSelected
                      ? 'bg-amber-800 text-white border-amber-900 shadow-sm'
                      : 'bg-white text-stone-700 hover:bg-stone-50 border-stone-200/90'
                  }`}
                >
                  {getCategoryIcon(cat.id)}
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isSelected ? 'bg-amber-400 text-stone-950' : 'bg-stone-100 text-stone-600'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Results Count & Current Filter indicator */}
        <div className="flex items-center justify-between text-xs text-stone-500 mb-6 px-1">
          <span>
            Mostrando <strong className="text-stone-800">{filteredItems.length}</strong> platillos y bebidas
          </span>
          {searchQuery && (
            <span className="text-amber-800 font-medium">
              Filtro de búsqueda: "{searchQuery}"
            </span>
          )}
        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div className="bg-white rounded-2xl border border-stone-200 p-12 text-center max-w-md mx-auto my-8">
            <Soup className="w-12 h-12 text-stone-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-stone-800">No encontramos resultados</h3>
            <p className="text-stone-500 text-xs mt-1">
              Intenta con otra palabra clave como "pozole", "caldo", "carne", "limonada" o selecciona otra categoría.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('todos');
              }}
              className="mt-4 px-4 py-2 bg-amber-700 text-white rounded-lg text-xs font-semibold hover:bg-amber-800 transition-colors"
            >
              Ver todo el menú
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredItems.map((item) => {
              const qtyInCart = getItemQuantityInCart(item.id);
              const isAdded = justAddedId === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => onOpenDishDetail(item)}
                  className="group bg-white rounded-2xl border border-stone-200/90 hover:border-amber-400/90 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col cursor-pointer"
                >
                  {/* Item Image Header */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Badge */}
                    {item.badge && (
                      <span className="absolute top-2.5 left-2.5 bg-amber-900/90 text-amber-100 text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs backdrop-blur-xs">
                        {item.badge}
                      </span>
                    )}

                    {/* Day badge for daily specials */}
                    {item.dayName && (
                      <span className="absolute bottom-2.5 left-2.5 bg-stone-900/85 text-white text-[10px] font-semibold px-2 py-0.5 rounded-md backdrop-blur-xs">
                        📅 {item.dayName}
                      </span>
                    )}

                    {/* Cart quantity indicator pill if in cart */}
                    {qtyInCart > 0 && (
                      <span className="absolute top-2.5 right-2.5 bg-emerald-600 text-white text-xs font-extrabold px-2 py-0.5 rounded-full shadow-md">
                        {qtyInCart} en orden
                      </span>
                    )}
                  </div>

                  {/* Item Body */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="flex items-baseline justify-between gap-2">
                        <h3 className="text-base sm:text-lg font-bold font-serif-display text-stone-900 group-hover:text-amber-800 transition-colors leading-snug">
                          {item.name}
                        </h3>
                        <span className="text-base font-extrabold text-amber-900 whitespace-nowrap">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>

                      <p className="text-stone-600 text-xs sm:text-[13px] line-clamp-2 mt-1.5 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Complements preview */}
                      {item.complements && item.complements.length > 0 && (
                        <div className="mt-2.5 flex flex-wrap gap-1">
                          {item.complements.slice(0, 3).map((comp, idx) => (
                            <span 
                              key={idx}
                              className="text-[10px] bg-stone-100 text-stone-600 px-1.5 py-0.5 rounded font-medium"
                            >
                              + {comp}
                            </span>
                          ))}
                          {item.complements.length > 3 && (
                            <span className="text-[10px] text-stone-400 font-medium self-center">
                              +{item.complements.length - 3} más
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Bottom Action Row */}
                    <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenDishDetail(item);
                        }}
                        className="text-xs text-stone-500 hover:text-stone-800 font-medium flex items-center gap-1"
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>Detalles</span>
                      </button>

                      <button
                        type="button"
                        onClick={(e) => handleQuickAdd(item, e)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all active:scale-95 shadow-xs ${
                          isAdded
                            ? 'bg-emerald-600 text-white'
                            : 'bg-amber-700 hover:bg-amber-800 text-white'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>¡Listo!</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Agregar</span>
                          </>
                        )}
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
