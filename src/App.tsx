/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DailySpecials } from './components/DailySpecials';
import { CombosHighlight } from './components/CombosHighlight';
import { MenuSection } from './components/MenuSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { DishModal } from './components/DishModal';
import { CartDrawer } from './components/CartDrawer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MenuItem, CartItem } from './types';

const CART_STORAGE_KEY = 'los_calditos_cart_v1';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  // Sync cart to local storage
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error('Error saving cart to local storage', e);
    }
  }, [cart]);

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCartPrice = cart.reduce(
    (sum, item) => sum + item.menuItem.price * item.quantity,
    0
  );

  const handleAddToCart = (
    menuItem: MenuItem,
    quantity = 1,
    notes?: string,
    customization?: { chile?: string; tortillas?: string }
  ) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (ci) =>
          ci.menuItem.id === menuItem.id &&
          ci.notes === notes &&
          ci.customization?.chile === customization?.chile &&
          ci.customization?.tortillas === customization?.tortillas
      );

      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prevCart, { menuItem, quantity, notes, customization }];
      }
    });
  };

  const handleUpdateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(itemId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((ci) =>
        ci.menuItem.id === itemId ? { ...ci, quantity: newQuantity } : ci
      )
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setCart((prevCart) => prevCart.filter((ci) => ci.menuItem.id !== itemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-stone-800 font-sans flex flex-col">
      {/* Top Navigation */}
      <Navbar
        cartCount={totalCartCount}
        cartTotal={totalCartPrice}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreMenu={() => handleNavigateSection('menu')}
          onOpenDailySpecials={() => handleNavigateSection('especiales-dia')}
          onOpenCart={() => setIsCartOpen(true)}
        />

        {/* Daily Specials (Lunes de frijol con puerco, Chocolomo, etc.) */}
        <DailySpecials
          onAddToCart={handleAddToCart}
          onOpenDishDetail={(item) => setSelectedDish(item)}
        />

        {/* Combo Los Calditos Promo */}
        <CombosHighlight onAddToCart={handleAddToCart} />

        {/* Full Menu Grid with Search & Filters */}
        <MenuSection
          cart={cart}
          onAddToCart={handleAddToCart}
          onOpenDishDetail={(item) => setSelectedDish(item)}
        />

        {/* Real Customer Reviews from Google Maps */}
        <ReviewsSection />

        {/* Location, Google Map & Operating Hours */}
        <LocationContact />
      </main>

      {/* Footer */}
      <Footer onNavigateSection={handleNavigateSection} />

      {/* Floating WhatsApp and Cart Widget */}
      <FloatingWhatsApp
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Dish Detail Modal */}
      <DishModal
        item={selectedDish}
        onClose={() => setSelectedDish(null)}
        onAddToCartWithOptions={handleAddToCart}
      />

      {/* Cart & WhatsApp Ordering Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}

