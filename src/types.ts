export type MenuCategory = 
  | 'todos'
  | 'caldos'
  | 'diario'
  | 'fuertes'
  | 'mariscos'
  | 'pastas'
  | 'antojos'
  | 'postres'
  | 'bebidas'
  | 'combos';

export type DayOfWeek = 'lunes' | 'martes' | 'miercoles' | 'jueves' | 'viernes' | 'sabado' | 'domingo';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  complements?: string[];
  dayExclusive?: DayOfWeek | 'sabado_domingo';
  dayName?: string;
  badge?: string;
  image: string;
  popular?: boolean;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  notes?: string;
  customization?: {
    chile?: string;
    tortillas?: string;
  };
}

export interface OrderDetails {
  orderType: 'domicilio' | 'llevar';
  customerName: string;
  phone: string;
  address: string;
  references?: string;
  paymentMethod: 'efectivo' | 'transferencia' | 'tarjeta';
  notes?: string;
}

export interface CustomerReview {
  id: string;
  author: string;
  badge: string;
  rating: number;
  date: string;
  content: string;
  avatarUrl?: string;
}
