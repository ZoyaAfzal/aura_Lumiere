import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ShoppingBag, ArrowLeft, Trash2, Plus, Minus, CreditCard, ShieldCheck, Truck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import p1 from "@/assets/product1.jpg";
import p2 from "@/assets/product2.jpg";

export const Route = createFileRoute("/cart")({
  component: CartPage,
});

interface CartItem {
  id: number;
  name: string;
  price: number;
  img: string;
  quantity: number;
}

function CartPage() {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Radiant Reverie Serum",
      price: 84,
      img: p1,
      quantity: 1,
    },
    {
      id: 2,
      name: "Celestial Serenade Cream",
      price: 96,
      img: p2,
      quantity: 1,
    },
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <main className="bg-cream min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <div className="flex-1 pt-32 pb-24">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-deep-plum/60 hover:text-rose-gold transition-colors mb-12 group"
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              <span className="text-sm font-medium tracking-wide uppercase">Back to Sanctuary</span>
            </Link>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="rose-rule mb-4">Your Selection</span>
              <h1 className="font-display text-6xl md:text-7xl italic text-deep-plum leading-tight">
                Shopping Cart
              </h1>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-deep-plum/60 font-medium tracking-widest uppercase text-xs"
            >
              {totalItems} {totalItems === 1 ? 'Item' : 'Items'} Curated
            </motion.p>
          </div>

          {items.length > 0 ? (
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-8 space-y-10">
                <AnimatePresence mode="popLayout">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                      className="group relative flex flex-col sm:flex-row gap-8 pb-10 border-b border-deep-plum/10 items-center sm:items-stretch text-center sm:text-left"
                    >
                      <div className="relative w-40 h-52 bg-blush/20 rounded-[2rem] overflow-hidden shrink-0 shadow-sm transition-transform duration-500 group-hover:scale-[1.02]">
                        <img src={item.img} alt={item.name} className="size-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-deep-plum/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      
                      <div className="flex-1 flex flex-col justify-between py-2 w-full">
                        <div className="space-y-2">
                          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4">
                            <h3 className="font-display text-3xl text-deep-plum tracking-tight">{item.name}</h3>
                            <button 
                              onClick={() => removeItem(item.id)}
                              className="p-2 text-deep-plum/30 hover:text-rose-gold hover:bg-rose-gold/5 rounded-full transition-all"
                              aria-label="Remove item"
                            >
                              <Trash2 className="size-5" />
                            </button>
                          </div>
                          <p className="text-rose-gold font-medium text-xl">${item.price.toFixed(2)}</p>
                          <p className="text-deep-plum/40 text-sm italic font-light">Available in stock • Shipped from Paris</p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-8">
                          <div className="flex items-center bg-white/50 border border-deep-plum/5 rounded-full p-1 shadow-sm">
                            <button 
                              onClick={() => updateQuantity(item.id, -1)}
                              className="size-10 flex items-center justify-center hover:text-rose-gold hover:bg-rose-gold/5 rounded-full transition-all"
                            >
                              <Minus className="size-4" />
                            </button>
                            <span className="w-12 text-center text-lg font-medium text-deep-plum leading-none">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, 1)}
                              className="size-10 flex items-center justify-center hover:text-rose-gold hover:bg-rose-gold/5 rounded-full transition-all"
                            >
                              <Plus className="size-4" />
                            </button>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-deep-plum/40 uppercase tracking-widest mb-1">Total</p>
                            <p className="text-2xl font-display text-deep-plum italic">${(item.price * item.quantity).toFixed(2)}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="lg:col-span-4 sticky top-32">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/40 backdrop-blur-xl p-10 rounded-[3rem] border border-white/60 shadow-2xl shadow-deep-plum/5 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-rose-gold/5 rounded-full -mr-16 -mt-16 blur-3xl" />
                  
                  <h2 className="font-display text-3xl text-deep-plum mb-8 italic">Order Summary</h2>
                  
                  <div className="space-y-5 text-sm font-medium mb-10">
                    <div className="flex justify-between text-deep-plum/60 items-center">
                      <span className="font-light tracking-wide">Subtotal</span>
                      <span className="text-base font-semibold text-deep-plum">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-deep-plum/60 items-center">
                      <span className="font-light tracking-wide">Estimated Shipping</span>
                      <span className="text-rose-gold uppercase text-[10px] font-bold tracking-widest">Complimentary</span>
                    </div>
                    <div className="pt-6 border-t border-deep-plum/10 flex justify-between items-end">
                      <div className="flex flex-col">
                        <span className="text-xs text-deep-plum/40 uppercase tracking-[0.2em] mb-1">Total Amount</span>
                        <span className="text-4xl font-display italic text-deep-plum leading-none">${subtotal.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <button className="group relative w-full py-5 bg-deep-plum text-cream text-[10px] font-bold uppercase tracking-[0.3em] rounded-full hover:bg-rose-gold transition-all duration-500 shadow-xl shadow-deep-plum/20 flex items-center justify-center gap-3 overflow-hidden">
                    <span className="relative z-10">Proceed to Checkout</span>
                    <CreditCard className="size-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                  </button>

                  <div className="mt-8 space-y-4 pt-8 border-t border-deep-plum/5">
                    <div className="flex items-center gap-4 text-[10px] text-deep-plum/50 uppercase tracking-widest">
                      <Truck className="size-4 text-rose-gold" />
                      <span>Free Express Shipping</span>
                    </div>
                    <div className="flex items-center gap-4 text-[10px] text-deep-plum/50 uppercase tracking-widest">
                      <ShieldCheck className="size-4 text-rose-gold" />
                      <span>Secure Payment Guaranteed</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-32 flex flex-col items-center text-center"
            >
              <div className="size-24 rounded-full bg-blush/30 flex items-center justify-center mb-8 relative">
                <ShoppingBag className="size-8 text-rose-gold" strokeWidth={1.5} />
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 bg-rose-gold/20 rounded-full blur-xl"
                />
              </div>
              <h2 className="font-display text-4xl text-deep-plum mb-4 italic">Your sanctuary is empty</h2>
              <p className="text-deep-plum/60 max-w-sm mb-12 font-light leading-relaxed">
                It seems you haven't selected any beauty essentials yet. Explore our curated collection to find your radiance.
              </p>
              <Link
                to="/"
                className="px-10 py-4 bg-rose-gold text-cream text-xs uppercase tracking-[0.25em] rounded-full hover:bg-deep-plum transition-all duration-500 shadow-lg shadow-rose-gold/20"
              >
                Start Exploring
              </Link>
            </motion.div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
