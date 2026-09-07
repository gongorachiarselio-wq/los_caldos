import { MenuItem, CustomerReview } from '../types';

export const RESTAURANT_INFO = {
  name: 'Los Calditos',
  tagline: 'Sabor y Tradición Campechana desde el Corazón de San Francisco',
  rating: 4.2,
  reviewsCount: 358,
  priceRange: '$100 - $200 MXN',
  phone: '981 107 6384',
  phoneFormatted: '+52 981 107 6384',
  whatsappNumber: '529811076384',
  address: 'C. 10-B 100, Barrio de San Francisco, 24010 San Francisco de Campeche, Camp.',
  plusCode: 'VF2G+R8 San Francisco de Campeche, Campeche',
  openingHour: '1:00 PM',
  closingHour: '7:00 PM',
  openingDays: 'Lunes a Domingo',
  deliveryEstimate: '35 - 50 min',
  deliveryBaseFee: 25,
  freeDeliveryThreshold: 350,
  services: [
    'Consumo en el lugar',
    'Para llevar / Recoger en sucursal',
    'Entrega a domicilio en San Francisco de Campeche'
  ]
};

export const MENU_ITEMS: MenuItem[] = [
  // --- COMBOS ---
  {
    id: 'combo-los-calditos',
    name: 'Combo Los Calditos',
    description: 'Pozole estilo Jalisco (caldo de maíz con carne de puerco, tostadas con chile, limón, chile y orégano molido y romanita con rábano) + Milanesa de Pollo empanizada con arroz, frijol, ensalada fresca y tortillas + Coca Cola Original 600 ml.',
    price: 340,
    category: 'combos',
    complements: ['Tostadas con chile', 'Arroz y frijol', 'Ensalada fresca', 'Tortillas', 'Coca Cola 600ml'],
    badge: 'Combo Estrella ⭐',
    popular: true,
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80'
  },

  // --- CALDOS TRADICIONALES ---
  {
    id: 'pozole-estilo-jalisco',
    name: 'Pozole Estilo Jalisco',
    description: 'Caldo tradicional a base de granos de maíz pozolero con suave carne de puerco cocinada a fuego lento. Se acompaña con tostadas con chile, limón recién cortado, chile y orégano molido, romanita fresca y rábano.',
    price: 143,
    category: 'caldos',
    complements: ['Tostadas con chile', 'Limón', 'Chile y orégano molido', 'Romanita con rábano'],
    badge: 'Especialidad de la Casa',
    popular: true,
    image: 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sopa-de-lima',
    name: 'Sopa De Lima',
    description: 'Caldito de pollo aromático sazonado con auténtica lima regional yucateca y pimientos. Servido con abundante pollo deshebrado, arroz, tostadas doraditas, limón, chile habanero, cebolla y cilantro fresco.',
    price: 135,
    category: 'caldos',
    complements: ['Arroz', 'Tostadas crujientes', 'Limón', 'Chile habanero', 'Cebolla y cilantro'],
    badge: 'Tradición Peninsular',
    popular: true,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'caldo-tlalpeno',
    name: 'Caldo Tlalpeño',
    description: 'Rica base de caldo de pollo con calabaza italiana tierna y zanahoria, con pollo deshebrado. Acompañado con tostadas, limón, queso panela fresco, rebanadas de aguacate y chile chipotle servido aparte.',
    price: 143,
    category: 'caldos',
    complements: ['Tostadas', 'Limón', 'Chile chipotle (aparte)', 'Queso panela', 'Aguacate'],
    popular: true,
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'caldo-de-res-verduras',
    name: 'Caldo De Res Con Verduras',
    description: 'Enjundiosa base de caldo de res con verduras surtidas y carne tierna. Incluye guarnición de arroz, limones jugosos, rábano curtido tradicional, tortillas hechas a mano y chile.',
    price: 130,
    category: 'caldos',
    complements: ['Arroz', 'Limón', 'Rábano curtido', 'Tortillas calientes', 'Chile'],
    popular: true,
    image: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'caldo-de-pollo',
    name: 'Caldo De Pollo',
    description: 'Reconfortante caldo casero de pollo preparado a la antigua con verduras y hierbas de olor, acompañado de sus completas guarniciones.',
    price: 135,
    category: 'caldos',
    complements: ['Arroz', 'Tortillas calientes', 'Limón', 'Cebolla y cilantro'],
    image: 'https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?auto=format&fit=crop&w=800&q=80'
  },

  // --- ESPECIALIDADES POR DÍA (DIARIO) ---
  {
    id: 'frijol-con-puerco',
    name: 'Frijol Con Puerco',
    description: 'Platillo icónico campechano y peninsular. Caldo espeso a base de frijol negro colado con suave carne de puerco. Acompañado de arroz blanco, chiltomate asado, limón, chile habanero, rábano picado, cebolla morada y cilantro.',
    price: 180,
    category: 'diario',
    dayExclusive: 'lunes',
    dayName: 'Lunes',
    badge: 'Exclusivo LUNES',
    popular: true,
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'potaje-de-lentejas',
    name: 'Potaje De Lentejas',
    description: 'Sabor de hogar campechano. Suculento potaje de lentejas con verduras de la estación, carnes frías selectas y tierna carne de puerco en su jugo.',
    price: 180,
    category: 'diario',
    dayExclusive: 'martes',
    dayName: 'Martes',
    badge: 'Exclusivo MARTES',
    popular: true,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pollo-asado-macarrones',
    name: 'Pollo Asado Con Macarrones',
    description: '1/4 de pollo dorado asado al carbón (pierna y muslo jugosos), acompañado con arroz, frijoles negros, ensalada rusa cremosa, macarrones caseros y tortillas de maíz.',
    price: 110,
    category: 'diario',
    dayExclusive: 'jueves',
    dayName: 'Jueves',
    badge: 'Exclusivo JUEVES',
    popular: true,
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'puchero-tres-carnes',
    name: 'Puchero De 3 Carnes',
    description: 'Tradicional puchero peninsular cocinado lentamente con pollo de rancho, res y carne de cerdo en un caldo perfumado con verduras, acompañado de sus salsas y tortillas.',
    price: 215,
    category: 'diario',
    dayExclusive: 'viernes',
    dayName: 'Viernes',
    badge: 'Exclusivo VIERNES',
    popular: true,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'chocolomo',
    name: 'Chocolomo',
    description: 'El legendario manjar de fin de semana campechano. Caldo sustancioso de res en presas selectas con hueso de tuétano. Acompañado de tostadas, pan o tortilla, limón agrio, chile habanero asado, rábano picado, cebolla y cilantro.',
    price: 210,
    category: 'diario',
    dayExclusive: 'sabado_domingo',
    dayName: 'Sábado y Domingo',
    badge: 'Exclusivo FIN DE SEMANA',
    popular: true,
    image: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?auto=format&fit=crop&w=800&q=80'
  },

  // --- PLATILLOS FUERTES Y GUISADOS ---
  {
    id: 'chiles-rellenos',
    name: 'Chiles Rellenos',
    description: 'Chiles poblanos capeados rellenos de carne molida sazonada y queso fundido. Acompañado de tortillas de comal, salsa de tomate frita caliente y arroz.',
    price: 210,
    category: 'fuertes',
    complements: ['Tortillas', 'Salsa de tomate casera', 'Arroz'],
    popular: true,
    image: 'https://images.unsplash.com/photo-1584278860047-22db9ff82bed?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'albondigas',
    name: 'Albóndigas Caseras',
    description: 'Suaves bolitas de carne molida condimentadas a mano con verduras frescas y fideos. Acompañadas de arroz, limón, rábano, chile habanero, tortillas calientes, cebolla y cilantro.',
    price: 180,
    category: 'fuertes',
    complements: ['Arroz', 'Limón', 'Rábano', 'Chile', 'Tortillas', 'Cebolla y cilantro'],
    image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bistec-de-cazuela',
    name: 'Bistec De Cazuela',
    description: 'Filetes de res suaves en caldito sazonado con rodajas tiernas de papa. Acompañado de arroz, frijol negro de la olla, plátanos fritos dulces y tortillas calientes.',
    price: 210,
    category: 'fuertes',
    complements: ['Arroz', 'Frijol', 'Plátanos fritos', 'Tortillas'],
    badge: 'Favorito Familiar',
    popular: true,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pechuga-rellena-jamon-queso',
    name: 'Pechuga Rellena De Jamón Y Queso',
    description: 'Pechugas de pollo rellenas de jamón selecto y queso, empanizadas crujientes. Acompañadas con arroz, frijol, ensalada fresca del huerto, chile licuado, crema de chipotle y tortilla.',
    price: 165,
    category: 'fuertes',
    complements: ['Arroz', 'Frijol', 'Ensalada fresca', 'Chile licuado', 'Crema de chipotle', 'Tortilla'],
    popular: true,
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pechuga-rellena-vegetales',
    name: 'Pechuga Rellena De Vegetales',
    description: 'Filete de pechuga de pollo rellena de calabaza italiana y zanahoria, bañada en sedosa salsa verde de espinaca. Acompañado con arroz, ensalada fresca y tortilla.',
    price: 180,
    category: 'fuertes',
    complements: ['Arroz', 'Ensalada fresca', 'Salsa de espinaca', 'Tortillas'],
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pechuga-pollo-plancha',
    name: 'Pechuga De Pollo A La Plancha',
    description: 'Pechuga de pollo sazonada y cocida a la plancha. Acompañado con arroz, frijol, ensalada fresca, tortillas calientes y verduras salteadas.',
    price: 150,
    category: 'fuertes',
    complements: ['Arroz', 'Frijol', 'Ensalada fresca', 'Tortillas', 'Verduras salteadas'],
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'milanesa-de-pollo',
    name: 'Milanesa De Pollo',
    description: 'Filete de pechuga de pollo empanizada dorada y crujiente. Acompañado de arroz, frijol negro refrito, ensalada fresca y tortillas.',
    price: 150,
    category: 'fuertes',
    complements: ['Arroz', 'Frijol', 'Ensalada fresca', 'Tortillas'],
    popular: true,
    image: 'https://images.unsplash.com/photo-1599921841143-819065a55cc6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'milanesa-de-cerdo',
    name: 'Milanesa De Cerdo',
    description: 'Tierno filete de cerdo empanizado a la perfección dorada. Acompañado de arroz, frijol, ensalada fresca y tortilla de comal.',
    price: 150,
    category: 'fuertes',
    complements: ['Arroz', 'Frijol', 'Ensalada fresca', 'Tortilla'],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tampiquena-cerdo',
    name: 'Tampiqueña De Cerdo',
    description: 'Filete de cerdo cocido a la plancha servido en festín completo: arroz, frijol, ensalada fresca, 2 enchiladas de mole poblano, platanitos fritos, papas a la francesa y tortilla.',
    price: 210,
    category: 'fuertes',
    complements: ['Arroz y frijol', '2 Enchiladas de mole', 'Platanitos fritos', 'Papas a la francesa', 'Tortillas'],
    badge: 'Plato Completo',
    popular: true,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tampiquena-pollo',
    name: 'Tampiqueña De Pollo',
    description: 'Filete de pechuga de pollo a la plancha servido con guarnición completa: arroz, frijol, ensalada fresca, 2 enchiladas de mole tradicional, platanitos fritos dorados, papas a la francesa y tortilla.',
    price: 210,
    category: 'fuertes',
    complements: ['Arroz y frijol', '2 Enchiladas de mole', 'Platanitos fritos', 'Papas a la francesa', 'Tortillas'],
    badge: 'Plato Completo',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pocchuc',
    name: 'Poc Chuc Típico',
    description: 'Filete de carne de cerdo marinado en naranja agria y cocido a la plancha. Acompañado de arroz, frijol negro kabax, ensalada fresca, tomate y cebolla asada al carbón, y tortillas.',
    price: 150,
    category: 'fuertes',
    complements: ['Arroz', 'Frijol', 'Tomate y cebolla asada', 'Tortillas'],
    badge: 'Sello Regional',
    popular: true,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'puntas-albanil-cerdo',
    name: 'Puntas Al Albañil De Cerdo',
    description: 'Filete de cerdo cortado en tiras cocido a la plancha con pimientos frescos y cebolla caramelizada. Acompañado de arroz, frijol, ensalada fresca, tortilla y chile licuado especial.',
    price: 165,
    category: 'fuertes',
    complements: ['Arroz', 'Frijol', 'Ensalada fresca', 'Tortilla', 'Chile licuado'],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fajitas-mixtas',
    name: 'Fajitas Mixtas',
    description: 'Jugosas tiras de pollo y cerdo con pimientos tricolor y cebolla salteada al momento. Acompañados de arroz, frijol, salsa de chile y tortillas.',
    price: 165,
    category: 'fuertes',
    complements: ['Arroz', 'Frijol', 'Chile', 'Tortillas'],
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fajitas-pollo',
    name: 'Fajitas De Pollo',
    description: 'Pechuga de pollo en tiras cocida a la plancha con pimientos y cebolla aromática. Acompañado con arroz, frijol, ensalada fresca y tortillas.',
    price: 165,
    category: 'fuertes',
    complements: ['Arroz', 'Frijol', 'Ensalada fresca', 'Tortillas'],
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'alambre-mixto',
    name: 'Alambre Mixto',
    description: 'Tiras de pollo y cerdo a la plancha salteadas con pimientos, cebolla asada, jamón en cubos y crujiente tocino ahumado. Complementos: arroz, frijol, ensalada fresca, tortillas y chile.',
    price: 180,
    category: 'fuertes',
    complements: ['Pimientos y tocino', 'Arroz', 'Frijol', 'Ensalada fresca', 'Tortillas y chile'],
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'alambre-suizo',
    name: 'Alambre Suizo Con Queso Fundido',
    description: 'Tiras de pollo y cerdo a la plancha con pimientos y cebolla asada, jamón, tocino y una generosa capa de queso derretido dorado. Complementos: arroz, frijol, ensalada fresca, tortillas y chile.',
    price: 220,
    category: 'fuertes',
    complements: ['Queso derretido abundante', 'Arroz', 'Frijol', 'Ensalada fresca', 'Tortillas y chile'],
    badge: 'Favorito Quesoso 🧀',
    popular: true,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'enchiladas-mole',
    name: 'Enchiladas De Mole',
    description: 'Taquitos de maíz rellenos de pollo con cebolla picadita encima y espolvoreados con queso Palmira tradicional. Acompañado de su bolsita de mole casero caliente, crema y chile.',
    price: 150,
    category: 'fuertes',
    complements: ['Mole casero', 'Queso Palmira', 'Crema espesa', 'Cebolla y chile'],
    popular: true,
    image: 'https://images.unsplash.com/photo-1534352956036-cd81e27dd615?auto=format&fit=crop&w=800&q=80'
  },

  // --- MARISCOS ---
  {
    id: 'camarones-al-coco',
    name: 'Camarones Al Coco',
    description: 'Generosos camarones empanizados con ralladura de coco tostado dorado y crujiente, acompañados de salsa dulce y picante de mango, arroz y ensalada fresca.',
    price: 185,
    category: 'mariscos',
    complements: ['Salsa especial de mango', 'Arroz', 'Ensalada fresca'],
    badge: 'Delicia Costera 🥥',
    popular: true,
    image: 'https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pescado-mojo-de-ajo',
    name: 'Pescado Al Mojo De Ajo',
    description: 'Fresco filete de curvina salteado en mantequilla y dorados trozos de ajo crujiente. Acompañado de arroz, frijol, ensalada fresca, tortillas calientes y chile licuado.',
    price: 130,
    category: 'mariscos',
    complements: ['Ajo dorado crujiente', 'Arroz', 'Frijol', 'Ensalada fresca', 'Tortillas y chile licuado'],
    popular: true,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pescado-empanizado',
    name: 'Pescado Empanizado',
    description: 'Filete de curvina fresco empanizado crujiente y dorado al punto. Acompañado de arroz, frijol, ensalada fresca, mayonesa casera, tortillas y chile licuado.',
    price: 180,
    category: 'mariscos',
    complements: ['Mayonesa', 'Arroz', 'Frijol', 'Ensalada fresca', 'Tortillas y chile licuado'],
    image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pescado-al-guajillo',
    name: 'Pescado Al Guajillo',
    description: 'Filete de pescado curvina bañado y sazonado con aros de chile guajillo aromático salteado. Acompañado de arroz, frijol, ensalada fresca, tortillas y chile licuado.',
    price: 130,
    category: 'mariscos',
    complements: ['Chile guajillo salteado', 'Arroz', 'Frijol', 'Ensalada fresca', 'Tortillas y chile licuado'],
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pescado-a-la-plancha',
    name: 'Pescado A La Plancha',
    description: 'Filete de curvina cocido suavemente a la plancha con limón y hierbas. Acompañado de arroz, frijol, ensalada fresca del huerto, mayonesa, tortillas y chile licuado.',
    price: 165,
    category: 'mariscos',
    complements: ['Arroz', 'Frijol', 'Ensalada fresca', 'Mayonesa', 'Tortillas y chile'],
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80'
  },

  // --- PASTAS ---
  {
    id: 'pasta-alfredo',
    name: 'Pasta Alfredo Con Dedos De Pollo',
    description: 'Pasta fettuccine al dente en rica crema sedosa a base de leche y queso crema fundido. Complementado con crujientes dedos de pollo empanizados dorados.',
    price: 165,
    category: 'pastas',
    complements: ['Dedos de pollo empanizados', 'Queso crema'],
    popular: true,
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pasta-al-ajo',
    name: 'Pasta Al Ajo',
    description: 'Pasta fettuccine salteada a base de deliciosa fritura aromática de ajo en aceite de oliva. Complementos: dedos de pechuga de pollo a la plancha y verduras salteadas (zanahoria y calabaza italiana).',
    price: 165,
    category: 'pastas',
    complements: ['Dedos de pollo a la plancha', 'Verduras salteadas', 'Ajo dorado'],
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80'
  },

  // --- ACOMPAÑAMIENTOS Y ANTOJOS ---
  {
    id: 'orden-papas-francesa',
    name: 'Orden De Papas A La Francesa',
    description: 'Papas fritas crujientes y doradas, servidas con cátsup, crema ácida fresca y queso Palmira rallado típico campechano.',
    price: 75,
    category: 'antojos',
    complements: ['Cátsup', 'Crema', 'Queso Palmira'],
    popular: true,
    image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'orden-platanos-fritos',
    name: 'Orden De Plátanos Fritos',
    description: 'Plátano macho frito en rodajas doradas y caramelizadas, acompañado de crema fresca y queso Palmira campechano.',
    price: 75,
    category: 'antojos',
    complements: ['Crema fresca', 'Queso Palmira'],
    badge: 'Favorito Local',
    popular: true,
    image: 'https://images.unsplash.com/photo-1528751014936-863e6e7a319c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bolsa-tostada-con-chile',
    name: 'Bolsa Grande De Tostada Con Chile',
    description: 'Totopo artesanal crujiente sazonado con chile picosito en bolsa grande, ideal para acompañar caldos y pozole.',
    price: 60,
    category: 'antojos',
    complements: ['Chile en polvo especial'],
    image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bolsa-tostada-salada',
    name: 'Bolsa Grande Tostada Salada',
    description: 'Bolsa grande de totopos dorados y crujientes con el punto exacto de sal para acompañar toda la comida.',
    price: 60,
    category: 'antojos',
    image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'orden-tortillas',
    name: 'Orden De Tortillas (6 pzas)',
    description: '6 piezas de tortillas calientes recién salidas del comal.',
    price: 12,
    category: 'antojos',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'orden-frijol',
    name: 'Orden De Frijol (500 ml)',
    description: 'Vaso de 500 ml de frijoles negros sazonados al estilo casero campechano.',
    price: 60,
    category: 'antojos',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'orden-arroz',
    name: 'Orden De Arroz (500 ml)',
    description: 'Vaso de 500 ml de arroz esponjoso preparado al momento con verduras.',
    price: 60,
    category: 'antojos',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80'
  },

  // --- POSTRES Y DULCES TÍPICOS ---
  {
    id: 'gelatina-mosaico',
    name: 'Gelatina Mosaico',
    description: 'Refrescante gelatina de cubos multicolores de sabores en suave base de leche condensada y vainilla.',
    price: 38,
    category: 'postres',
    badge: 'Postre Fresco',
    popular: true,
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'flan-de-vaso',
    name: 'Flan De Vaso Casero',
    description: 'Flan casero tradicional con suave consistencia cremosa y baño de caramelo dorado artesanal en presentación de vaso.',
    price: 38,
    category: 'postres',
    badge: 'Receta de la Abuela',
    popular: true,
    image: 'https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cremita-espanola',
    name: 'Cremita Española',
    description: 'Postre tradicional peninsular cremoso preparado a base de 3 leches perfumado con canela molida fina.',
    price: 38,
    category: 'postres',
    badge: 'Dulce Campechano',
    popular: true,
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tamarindo-dulce',
    name: 'Bola De Tamarindo Dulce',
    description: 'Dulce típico artesanal de pulpa de tamarindo natural con azúcar morena cristalizada.',
    price: 23,
    category: 'postres',
    image: 'https://images.unsplash.com/photo-1582293041079-7814c2f12063?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tamarindo-chamoy',
    name: 'Bola De Tamarindo Chamoy',
    description: 'Auténtica bola de pulpa de tamarindo cubierta con salsa chamoy acidita y dulce.',
    price: 23,
    category: 'postres',
    image: 'https://images.unsplash.com/photo-1582293041079-7814c2f12063?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tamarindo-con-chile',
    name: 'Bola De Tamarindo Con Chile',
    description: 'Tamarindo picante tradicional elaborado con auténtico chile en polvo y toque agridulce.',
    price: 23,
    category: 'postres',
    image: 'https://images.unsplash.com/photo-1582293041079-7814c2f12063?auto=format&fit=crop&w=800&q=80'
  },

  // --- BEBIDAS Y AGUAS FRESCAS ---
  {
    id: 'chaya-con-pina',
    name: 'Agua De Chaya Con Piña (1 Lt)',
    description: 'Bebida natural emblemática de la península a base de jugo de piña fresca y hojas verdes de chaya maya. Muy refrescante y digestiva.',
    price: 45,
    category: 'bebidas',
    badge: '100% Natural Maya',
    popular: true,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'agua-lima',
    name: 'Agua De Lima Natural (1 Lt)',
    description: 'Bebida fresca artesanal a base de jugo de lima regional de Campeche con toque cítrico aromático.',
    price: 45,
    category: 'bebidas',
    popular: true,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'agua-mandarina',
    name: 'Agua De Mandarina (1 Lt)',
    description: 'Bebida refrescante a base de jugo de mandarina fresca de temporada recién exprimida.',
    price: 45,
    category: 'bebidas',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'agua-jamaica',
    name: 'Agua De Jamaica (1 Lt)',
    description: 'Bebida natural a base de flor de jamaica hervida e infusionada, servida bien fría.',
    price: 45,
    category: 'bebidas',
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'casa-reca-jamaica-lt',
    name: 'Casa Reca Jamaica (1 Lt)',
    description: 'Bebida tradicional embotellada de la emblemática marca yucateca Casa Reca sabor jamaica.',
    price: 45,
    category: 'bebidas',
    badge: 'Marca Peninsular',
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'casa-reca-naranja-lt',
    name: 'Casa Reca Naranja (1 Lt)',
    description: 'Bebida embotellada Casa Reca sabor naranja agridulce tradicional.',
    price: 45,
    category: 'bebidas',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'casa-reca-te-negro-lt',
    name: 'Casa Reca Té Negro (1 Lt)',
    description: 'Refrescante té negro frío elaborado por Casa Reca.',
    price: 45,
    category: 'bebidas',
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'casa-reca-te-limon-lt',
    name: 'Casa Reca Té Con Limón (1 Lt)',
    description: 'Bebida de Casa Reca sabor té helado con limón fresco.',
    price: 45,
    category: 'bebidas',
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'coca-cola-original-600',
    name: 'Coca Cola Original 600 ml',
    description: 'Refresco frío embotellado Coca Cola clásico de 600 ml.',
    price: 38,
    category: 'bebidas',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'coca-sin-azucar-600',
    name: 'Coca Cola Sin Azúcar 600 ml',
    description: 'Bebida de Coca Cola sin azúcar de 600 ml bien fría.',
    price: 38,
    category: 'bebidas',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80'
  }
];

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    author: 'David Young',
    badge: 'Local Guide · 128 opiniones',
    rating: 5,
    date: 'Hace 7 años',
    content: 'This little gem is our favourite restaurant in Campeche. The tidy joint serves awesomely delicious soups. The hearty pozole is incredible with extra lime. The camarones al ajo was delicious, too.',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'
  },
  {
    id: 'rev-2',
    author: 'José L Domínguez',
    badge: 'Local Guide · 586 opiniones · 102 fotos',
    rating: 4,
    date: 'Hace 2 años',
    content: 'La comida está buena, me comí un pozole y unos tacos de maciza, el lugar es simple y acondicionado al servicio, los costos están dentro de lo normal... Pozole muy recomendado y excelente atención.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
  },
  {
    id: 'rev-3',
    author: 'José Luis Ramírez López',
    badge: 'Local Guide · 23 opiniones',
    rating: 5,
    date: 'Hace 2 meses',
    content: 'Siempre a tiempo con mi comida, rica, precios accesibles, me ha salvado muchas veces con el servicio a domicilio y la calidez del trato.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80'
  },
  {
    id: 'rev-4',
    author: 'Familia Pech Gómez',
    badge: 'Cliente Frecuente',
    rating: 5,
    date: 'Actualización reciente',
    content: '¡Los mejores caldos que he probado en mi vida! El chocolomo del domingo y el frijol con puerco de los lunes son una auténtica parada obligada en el Barrio de San Francisco.',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80'
  }
];

export const CATEGORY_FILTERS = [
  { id: 'todos', label: 'Todos', icon: 'Sparkles' },
  { id: 'caldos', label: 'Caldos Tradicionales', icon: 'Soup' },
  { id: 'diario', label: 'Especiales del Día', icon: 'Calendar' },
  { id: 'fuertes', label: 'Platillos Fuertes', icon: 'UtensilsCrossed' },
  { id: 'mariscos', label: 'Mariscos', icon: 'Fish' },
  { id: 'pastas', label: 'Pastas', icon: 'CookingPot' },
  { id: 'combos', label: 'Combos Especiales', icon: 'Flame' },
  { id: 'antojos', label: 'Acompañamientos', icon: 'Salad' },
  { id: 'postres', label: 'Postres y Dulces', icon: 'Cake' },
  { id: 'bebidas', label: 'Bebidas y Aguas', icon: 'CupSoda' },
] as const;
