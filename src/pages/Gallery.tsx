
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useCart } from "@/context/CartContext";

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Puerta Automatizada Residencial",
    description: "Puerta de entrada automatizada con control remoto y sensor de movimiento.",
    price: 1200000,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Sistema de Acceso Biométrico",
    description: "Sistema de seguridad con reconocimiento facial y huella dactilar.",
    price: 1500000,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Puerta Corrediza Comercial",
    description: "Puerta corrediza automatizada para negocios con sensor de presencia.",
    price: 2300000,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    title: "Sistema de Control de Acceso",
    description: "Control de acceso para empresas con registro y monitoreo en tiempo real.",
    price: 1800000,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    title: "Puerta de Garaje Inteligente",
    description: "Sistema completo para garaje con control desde smartphone.",
    price: 2500000,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    title: "Cerradura Digital",
    description: "Cerradura digital con código, tarjeta y apertura remota.",
    price: 850000,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  }
];

const Gallery = () => {
  const { addItem } = useCart();

  const handleAddToCart = (item: GalleryItem) => {
    addItem({
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-digital-light">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-digital-black">
            Galería de Productos
          </h1>
          
          {/* Featured Product Carousel */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-digital-black">Productos Destacados</h2>
            <Carousel className="w-full">
              <CarouselContent>
                {galleryItems.slice(0, 3).map((item) => (
                  <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-2">
                      <Card className="overflow-hidden h-full">
                        <div className="h-60 overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                          />
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                          <p className="text-gray-600 mb-4">{item.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-digital-black">
                              ${item.price.toLocaleString('es-CO')}
                            </span>
                            <Button 
                              className="bg-digital-gold hover:bg-yellow-500 text-digital-black"
                              onClick={() => handleAddToCart(item)}
                            >
                              Añadir al carrito
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:block">
                <CarouselPrevious className="left-0" />
                <CarouselNext className="right-0" />
              </div>
            </Carousel>
          </div>
          
          {/* All Products Grid */}
          <h2 className="text-2xl font-semibold mb-6 text-digital-black">Todos los Productos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <Card key={item.id} className="overflow-hidden h-full">
                <div className="h-60 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-digital-black">
                      ${item.price.toLocaleString('es-CO')}
                    </span>
                    <Button 
                      className="bg-digital-gold hover:bg-yellow-500 text-digital-black"
                      onClick={() => handleAddToCart(item)}
                    >
                      Añadir al carrito
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
