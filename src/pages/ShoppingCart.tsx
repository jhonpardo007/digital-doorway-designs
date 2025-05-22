
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";

const ShoppingCart = () => {
  const { items, removeItem, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();
  
  const calculateTotal = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCheckout = () => {
    toast.success("¡Gracias por su compra! Procesando su pedido...");
    // In a real application, this would navigate to a checkout page or process payment
    setTimeout(() => {
      clearCart();
      toast("Su pedido ha sido procesado", {
        description: "Recibirá información de seguimiento por correo electrónico."
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-digital-light">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-digital-black">
            Carrito de Compras
          </h1>

          {items.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <ScrollArea className="h-[600px] pr-4">
                  <div className="space-y-6">
                    {items.map((item) => (
                      <Card key={item.id} className="overflow-hidden">
                        <CardContent className="p-0">
                          <div className="flex flex-col sm:flex-row">
                            <div className="w-full sm:w-1/3 h-48">
                              <img 
                                src={item.image} 
                                alt={item.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="w-full sm:w-2/3 p-6">
                              <div className="flex justify-between items-start">
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                                <Button 
                                  variant="ghost" 
                                  size="icon" 
                                  onClick={() => removeItem(item.id)}
                                  className="text-red-500 hover:text-red-700 hover:bg-red-100"
                                >
                                  <Trash2 className="h-5 w-5" />
                                </Button>
                              </div>
                              <p className="text-lg font-bold text-digital-black mt-2">
                                ${item.price.toLocaleString('es-CO')}
                              </p>
                              <div className="flex items-center mt-4">
                                <span className="mr-4">Cantidad:</span>
                                <div className="flex items-center">
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  >
                                    -
                                  </Button>
                                  <span className="mx-4 text-lg">{item.quantity}</span>
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  >
                                    +
                                  </Button>
                                </div>
                              </div>
                              <p className="mt-4 font-semibold">
                                Subtotal: ${(item.price * item.quantity).toLocaleString('es-CO')}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </ScrollArea>
              </div>

              <div className="lg:col-span-1">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold mb-6">Resumen del Pedido</h3>
                    
                    <div className="space-y-4 mb-6">
                      {items.map((item) => (
                        <div key={item.id} className="flex justify-between">
                          <span>{item.title} (x{item.quantity})</span>
                          <span>${(item.price * item.quantity).toLocaleString('es-CO')}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t pt-4 mb-6">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span>${calculateTotal().toLocaleString('es-CO')}</span>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-digital-gold hover:bg-yellow-500 text-digital-black text-lg py-6"
                      onClick={handleCheckout}
                    >
                      Proceder al Pago
                    </Button>
                    
                    <p className="text-sm text-gray-500 mt-4 text-center">
                      ¿Necesita ayuda? Llámenos al +57 3115705816
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl mb-4">Su carrito está vacío</h2>
              <p className="text-gray-600 mb-8">¿Por qué no explora nuestra galería de productos?</p>
              <Button 
                className="bg-digital-gold hover:bg-yellow-500 text-digital-black"
                onClick={() => navigate('/galeria')}
              >
                Ver Galería
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ShoppingCart;
