import React from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  ExternalLink, 
  MessageCircle, 
  Check, 
  Store,
  ShieldCheck
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export const LocationContact: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Los Calditos, ' + RESTAURANT_INFO.address
  )}`;

  return (
    <section id="ubicacion" className="py-14 sm:py-20 bg-white border-t border-stone-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-xs font-semibold mb-2">
            <MapPin className="w-3.5 h-3.5 text-amber-600" />
            Visítanos o Pide a Domicilio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif-display text-stone-900 tracking-tight">
            Ubicación, Horarios & Contacto
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            En pleno corazón del tradicional Barrio de San Francisco en la histórica ciudad de San Francisco de Campeche.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Information & Hours Card */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Address Box */}
            <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-700 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-stone-900">
                    Dirección en Campeche
                  </h3>
                  <p className="text-stone-600 text-sm mt-1 leading-relaxed">
                    {RESTAURANT_INFO.address}
                  </p>
                  <span className="inline-block mt-2 text-xs font-mono text-stone-500 bg-stone-200/80 px-2 py-0.5 rounded">
                    Plus Code: {RESTAURANT_INFO.plusCode}
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-200/80 flex flex-wrap gap-2">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-amber-700 hover:bg-amber-800 text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Abrir en Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-amber-200" />
                </a>

                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Hola,%20quisiera%20saber%20cómo%20llegar%20a%20Los%20Calditos`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Pedir ubicación WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Hours & Phone Box */}
            <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-700 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-stone-900">
                      Horario de Servicio
                    </h3>
                    <span className="text-[11px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
                      Abre a la 1:00 PM
                    </span>
                  </div>

                  <div className="mt-3 space-y-2 text-xs">
                    <div className="flex justify-between py-1 border-b border-stone-200">
                      <span className="font-semibold text-stone-800">Lunes a Domingo:</span>
                      <span className="text-stone-600">1:00 PM – 7:00 PM</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-stone-200">
                      <span className="font-semibold text-stone-800">Servicio a Domicilio:</span>
                      <span className="text-emerald-700 font-semibold">1:00 PM – 6:45 PM</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="font-semibold text-stone-800">Para Llevar / Retiro:</span>
                      <span className="text-stone-600">Durante todo el horario</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone direct call */}
              <div className="pt-3 border-t border-stone-200/80 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-stone-500 block">Teléfono de atención:</span>
                  <strong className="text-sm text-stone-900">{RESTAURANT_INFO.phone}</strong>
                </div>
                <a
                  href={`tel:${RESTAURANT_INFO.phone.replace(/\s/g, '')}`}
                  className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  Llamar ahora
                </a>
              </div>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-200/60 flex items-start gap-2 text-amber-950">
                <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span>Empaques térmicos para que tus caldos lleguen hirviendo.</span>
              </div>
              <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-200/60 flex items-start gap-2 text-amber-950">
                <Store className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span>Tortillas calientes y complementos sellados higiénicamente.</span>
              </div>
            </div>

          </div>

          {/* Interactive Map Visual Representation */}
          <div className="lg:col-span-6">
            <div className="bg-stone-100 rounded-2xl border border-stone-200 overflow-hidden shadow-xs relative">
              
              {/* Simulated Map Header */}
              <div className="bg-stone-900 text-white p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-xs font-mono ml-2 text-stone-300">San Francisco de Campeche, Camp.</span>
                </div>
                <span className="text-xs font-bold text-amber-400">VF2G+R8</span>
              </div>

              {/* Map embed iframe */}
              <div className="aspect-[4/3] w-full bg-stone-200 relative">
                <iframe
                  title="Mapa Los Calditos San Francisco de Campeche"
                  src="https://maps.google.com/maps?q=C.+10-B+100,+Barrio+de+San+Francisco,+24010+San+Francisco+de+Campeche,+Camp.&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                {/* Floating Map Pin Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs p-3 rounded-xl shadow-lg border border-stone-200 max-w-xs pointer-events-none">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <strong className="text-xs text-stone-900 font-bold">Los Calditos</strong>
                  </div>
                  <p className="text-[11px] text-stone-500 mt-0.5">
                    C. 10-B 100, Barrio de San Francisco
                  </p>
                </div>
              </div>

              {/* Map footer callout */}
              <div className="p-4 bg-white border-t border-stone-200 flex items-center justify-between text-xs">
                <span className="text-stone-600">
                  ¿Vienes en auto o transporte público?
                </span>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-800 hover:text-amber-900 font-bold flex items-center gap-1"
                >
                  <span>Ver ruta exacta</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
