import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  Bike, 
  Store, 
  Phone, 
  MapPin, 
  CreditCard, 
  Banknote, 
  Send, 
  ArrowRight,
  Sparkles,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { CartItem, OrderDetails } from '../types';
import { RESTAURANT_INFO } from '../data/menuData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (itemId: string, newQuantity: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  if (!isOpen) return null;

  const [orderType, setOrderType] = useState<'domicilio' | 'llevar'>('domicilio');
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [references, setReferences] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'efectivo' | 'transferencia' | 'tarjeta'>('efectivo');
  const [notes, setNotes] = useState('');
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [validationError, setValidationError] = useState('');

  // Calculations
  const subtotal = cart.reduce((sum, item) => sum + item.menuItem.price * item.quantity, 0);
  const deliveryFee = orderType === 'domicilio' 
    ? (subtotal >= RESTAURANT_INFO.freeDeliveryThreshold ? 0 : RESTAURANT_INFO.deliveryBaseFee)
    : 0;
  const total = subtotal + deliveryFee;

  const generateWhatsAppMessage = () => {
    let msg = `🍲 *NUEVO PEDIDO - LOS CALDITOS*\n`;
    msg += `------------------------------------\n`;
    msg += `📍 *Modalidad:* ${orderType === 'domicilio' ? '🛵 Entrega a Domicilio' : '🥡 Para Llevar / Retirar'}\n`;
    msg += `👤 *Cliente:* ${customerName || 'Cliente'}\n`;
    msg += `📱 *Teléfono:* ${phone || 'Sin especificar'}\n`;

    if (orderType === 'domicilio') {
      msg += `🏠 *Dirección:* ${address || 'Campeche'}\n`;
      if (references) msg += `📌 *Referencias:* ${references}\n`;
    } else {
      msg += `🏬 *Retiro en sucursal:* C. 10-B 100, Barrio de San Francisco\n`;
    }

    msg += `💳 *Método de Pago:* ${
      paymentMethod === 'efectivo' 
        ? '💵 Efectivo al recibir' 
        : paymentMethod === 'transferencia' 
          ? '📱 Transferencia SPEI' 
          : '💳 Tarjeta contra entrega'
    }\n`;

    msg += `\n📋 *DETALLE DEL PEDIDO:*\n`;
    cart.forEach((item, index) => {
      msg += `${index + 1}. *${item.quantity}x* ${item.menuItem.name} ($${(item.menuItem.price * item.quantity).toFixed(2)} MXN)\n`;
      if (item.customization?.chile) {
        msg += `   • Picante: ${item.customization.chile.replace('_', ' ')}\n`;
      }
      if (item.customization?.tortillas) {
        msg += `   • Acompañamiento: ${item.customization.tortillas.replace('_', ' ')}\n`;
      }
      if (item.notes) {
        msg += `   • Nota: "${item.notes}"\n`;
      }
    });

    msg += `------------------------------------\n`;
    msg += `💵 *Subtotal:* $${subtotal.toFixed(2)} MXN\n`;
    if (orderType === 'domicilio') {
      msg += `🛵 *Costo de envío:* ${deliveryFee === 0 ? '¡GRATIS!' : `$${deliveryFee.toFixed(2)} MXN`}\n`;
    }
    msg += `💰 *TOTAL A PAGAR:* $${total.toFixed(2)} MXN\n`;

    if (notes) {
      msg += `\n📝 *Instrucciones generales:* ${notes}\n`;
    }

    msg += `\n_¡Muchas gracias por su preferencia!_`;
    return encodeURIComponent(msg);
  };

  const handleSendWhatsApp = () => {
    if (cart.length === 0) return;

    if (!customerName.trim()) {
      setValidationError('Por favor ingresa tu nombre.');
      return;
    }

    if (orderType === 'domicilio' && !address.trim()) {
      setValidationError('Por favor indica tu dirección de entrega en Campeche.');
      return;
    }

    setValidationError('');
    const encoded = generateWhatsAppMessage();
    const url = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encoded}`;
    
    // Trigger WhatsApp
    window.open(url, '_blank');
    setOrderSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-stone-950/60 backdrop-blur-xs flex justify-end animate-fade-in">
      <div 
        className="w-full max-w-md bg-white h-full flex flex-col shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 bg-amber-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-amber-300" />
            <div>
              <h2 className="text-lg font-bold font-serif-display leading-tight">
                Mi Pedido
              </h2>
              <span className="text-xs text-amber-200">
                {cart.length} {cart.length === 1 ? 'platillo' : 'platillos'} seleccionados
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-amber-800/80 hover:bg-amber-800 text-amber-100 transition-colors"
            aria-label="Cerrar carrito"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5">
          {orderSuccess ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-xl font-bold font-serif-display text-stone-900">
                ¡Pedido Enviado por WhatsApp!
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed px-4">
                Tu solicitud ha sido generada y transferida al chat de <strong>Los Calditos</strong> (+52 981 107 6384). Te confirmarán el tiempo de preparación inmediatamente.
              </p>
              <div className="pt-4 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setOrderSuccess(false);
                    onClearCart();
                    onClose();
                  }}
                  className="w-full py-2.5 bg-stone-900 text-white font-semibold rounded-xl text-sm hover:bg-stone-800 transition-colors"
                >
                  Cerrar y nuevo pedido
                </button>
                <a
                  href={`tel:${RESTAURANT_INFO.phone.replace(/\s/g, '')}`}
                  className="w-full py-2.5 bg-stone-100 text-stone-700 font-semibold rounded-xl text-sm flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-600" />
                  Llamar a sucursal
                </a>
              </div>
            </div>
          ) : cart.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto text-stone-400">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="text-base font-bold text-stone-800">
                Tu carrito está vacío
              </h3>
              <p className="text-xs text-stone-500 max-w-xs mx-auto">
                Explora nuestras sopas, caldos tradicionales, especialidades y bebidas para agregarlos a tu pedido.
              </p>
              <button
                onClick={onClose}
                className="mt-3 px-5 py-2.5 bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
              >
                Ver Platillos
              </button>
            </div>
          ) : (
            <>
              {/* Order Mode Switch: Domicilio vs Llevar */}
              <div className="bg-stone-100 p-1 rounded-xl grid grid-cols-2 gap-1 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setOrderType('domicilio')}
                  className={`py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                    orderType === 'domicilio'
                      ? 'bg-white text-stone-900 shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  <Bike className="w-4 h-4 text-amber-700" />
                  <span>A Domicilio</span>
                </button>
                <button
                  type="button"
                  onClick={() => setOrderType('llevar')}
                  className={`py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                    orderType === 'llevar'
                      ? 'bg-white text-stone-900 shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  <Store className="w-4 h-4 text-amber-700" />
                  <span>Para Llevar / Retiro</span>
                </button>
              </div>

              {/* Items List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-stone-500">
                  <span>Platillos a preparar:</span>
                  <button
                    onClick={onClearCart}
                    className="text-stone-400 hover:text-red-600 flex items-center gap-1 font-medium transition-colors"
                  >
                    <Trash2 className="w-3 h-3" />
                    Vaciar todo
                  </button>
                </div>

                <div className="divide-y divide-stone-100 border-y border-stone-200/80">
                  {cart.map((item) => (
                    <div key={item.menuItem.id} className="py-3 flex gap-3 items-center">
                      <img
                        src={item.menuItem.image}
                        alt={item.menuItem.name}
                        referrerPolicy="no-referrer"
                        className="w-14 h-14 rounded-lg object-cover shrink-0 bg-stone-100"
                      />

                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs sm:text-sm font-bold text-stone-900 truncate">
                          {item.menuItem.name}
                        </h4>
                        <span className="text-xs font-semibold text-amber-900 block">
                          ${(item.menuItem.price * item.quantity).toFixed(2)} MXN
                        </span>
                        {item.customization && (
                          <div className="text-[10px] text-stone-500 truncate">
                            {item.customization.chile === 'sin_chile' && '• Sin chile '}
                            {item.customization.chile === 'con_chile' && '• Bien picante '}
                            {item.customization.chile === 'chile_aparte' && '• Chile aparte '}
                            {item.customization.tortillas === 'totopos_crujientes' && '• Tostadas '}
                            {item.notes && `• "${item.notes}"`}
                          </div>
                        )}
                      </div>

                      {/* Quantity buttons */}
                      <div className="flex items-center border border-stone-200 rounded-lg bg-stone-50 p-0.5 shrink-0">
                        <button
                          onClick={() => onUpdateQuantity(item.menuItem.id, item.quantity - 1)}
                          className="p-1 text-stone-600 hover:text-stone-900"
                          aria-label="Menos"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-5 text-center text-xs font-bold text-stone-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.menuItem.id, item.quantity + 1)}
                          className="p-1 text-stone-600 hover:text-stone-900"
                          aria-label="Más"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.menuItem.id)}
                        className="p-1 text-stone-300 hover:text-red-500 transition-colors"
                        aria-label="Eliminar"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Customer Information Form */}
              <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/80 space-y-3">
                <span className="text-xs font-bold text-stone-800 block">
                  Datos de entrega y contacto:
                </span>

                <div className="space-y-2 text-xs">
                  <div>
                    <label className="text-[11px] font-medium text-stone-600 block mb-0.5">
                      Tu Nombre *
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Ej: Laura Gómez"
                      className="w-full px-3 py-2 rounded-lg bg-white border border-stone-200 text-stone-900 text-xs focus:outline-hidden focus:border-amber-600"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-medium text-stone-600 block mb-0.5">
                      Teléfono de contacto (10 dígitos)
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Ej: 981 123 4567"
                      className="w-full px-3 py-2 rounded-lg bg-white border border-stone-200 text-stone-900 text-xs focus:outline-hidden focus:border-amber-600"
                    />
                  </div>

                  {orderType === 'domicilio' ? (
                    <>
                      <div>
                        <label className="text-[11px] font-medium text-stone-600 block mb-0.5">
                          Dirección en San Francisco de Campeche *
                        </label>
                        <input
                          type="text"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="Calle, número, cruzamientos y colonia"
                          className="w-full px-3 py-2 rounded-lg bg-white border border-stone-200 text-stone-900 text-xs focus:outline-hidden focus:border-amber-600"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-medium text-stone-600 block mb-0.5">
                          Referencias de entrega (opcional)
                        </label>
                        <input
                          type="text"
                          value={references}
                          onChange={(e) => setReferences(e.target.value)}
                          placeholder="Color de casa, portón, frente a parque..."
                          className="w-full px-3 py-2 rounded-lg bg-white border border-stone-200 text-stone-900 text-xs focus:outline-hidden focus:border-amber-600"
                        />
                      </div>
                    </>
                  ) : (
                    <div className="p-2.5 bg-amber-50 rounded-lg text-[11px] text-amber-900 border border-amber-200 flex items-start gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                      <span>
                        Retirarás tu pedido en: <strong>C. 10-B 100, Barrio de San Francisco, 24010 San Francisco de Campeche</strong>.
                      </span>
                    </div>
                  )}

                  {/* Payment Method */}
                  <div>
                    <label className="text-[11px] font-medium text-stone-600 block mb-1">
                      Método de Pago:
                    </label>
                    <div className="grid grid-cols-3 gap-1.5">
                      {[
                        { id: 'efectivo', label: 'Efectivo', icon: Banknote },
                        { id: 'transferencia', label: 'SPEI', icon: ArrowRight },
                        { id: 'tarjeta', label: 'Tarjeta', icon: CreditCard }
                      ].map((m) => (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => setPaymentMethod(m.id as any)}
                          className={`py-1.5 px-2 rounded-lg border text-[11px] font-medium flex items-center justify-center gap-1 transition-colors ${
                            paymentMethod === m.id
                              ? 'bg-amber-800 text-white border-amber-900 font-bold'
                              : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-100'
                          }`}
                        >
                          <m.icon className="w-3 h-3" />
                          <span>{m.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-medium text-stone-600 block mb-0.5">
                      Notas para el repartidor o restaurante (opcional):
                    </label>
                    <input
                      type="text"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Ej: Pago con billete de $500, tocar timbre..."
                      className="w-full px-3 py-2 rounded-lg bg-white border border-stone-200 text-stone-900 text-xs focus:outline-hidden focus:border-amber-600"
                    />
                  </div>
                </div>
              </div>

              {/* Validation error notice */}
              {validationError && (
                <div className="p-2.5 bg-red-50 text-red-700 text-xs rounded-lg border border-red-200 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{validationError}</span>
                </div>
              )}

              {/* Order Calculations */}
              <div className="bg-stone-100/80 rounded-xl p-3.5 space-y-2 text-xs">
                <div className="flex justify-between text-stone-600">
                  <span>Subtotal platillos:</span>
                  <span className="font-semibold">${subtotal.toFixed(2)} MXN</span>
                </div>

                {orderType === 'domicilio' && (
                  <div className="flex justify-between text-stone-600">
                    <span className="flex items-center gap-1">
                      <span>Envío local:</span>
                      {deliveryFee === 0 && (
                        <span className="text-[10px] text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded font-bold">
                          Gratis (pedido &gt; $350)
                        </span>
                      )}
                    </span>
                    <span className="font-semibold">
                      {deliveryFee === 0 ? '$0.00 MXN' : `$${deliveryFee.toFixed(2)} MXN`}
                    </span>
                  </div>
                )}

                <div className="pt-2 border-t border-stone-200 flex justify-between text-sm font-bold text-stone-900">
                  <span>Total Estimado:</span>
                  <span className="text-base text-amber-900">${total.toFixed(2)} MXN</span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer Actions */}
        {!orderSuccess && cart.length > 0 && (
          <div className="p-4 border-t border-stone-200 bg-white space-y-2">
            <button
              onClick={handleSendWhatsApp}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition-all active:scale-95 text-sm"
            >
              <Send className="w-4 h-4" />
              <span>Pedir por WhatsApp (${total.toFixed(2)} MXN)</span>
            </button>

            <p className="text-[11px] text-stone-400 text-center">
              Se abrirá WhatsApp con el formato del pedido listo para enviar al <strong>981 107 6384</strong>.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};
