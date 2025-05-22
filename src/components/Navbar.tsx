
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, ShoppingCart } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { itemCount } = useCart();

  return (
    <nav className="bg-digital-black sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="/lovable-uploads/226b30b8-7ecb-4d24-ab19-fb909908968d.png" 
                alt="Digital Doors Logo" 
                className="h-12 mr-3" 
              />
            </a>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-digital-gold hover:text-white transition-colors duration-300">Inicio</a>
            <a href="#servicios" className="text-digital-gold hover:text-white transition-colors duration-300">Servicios</a>
            <a href="#nosotros" className="text-digital-gold hover:text-white transition-colors duration-300">Nosotros</a>
            <a href="#contacto" className="text-digital-gold hover:text-white transition-colors duration-300">Contacto</a>
            <a href="/galeria" className="text-digital-gold hover:text-white transition-colors duration-300">Galería</a>
            <Button className="bg-digital-gold text-digital-black hover:bg-white">
              Solicitar Servicio
            </Button>
            <div className="relative">
              <Button 
                variant="ghost" 
                className="text-digital-gold hover:bg-digital-gray"
                onClick={() => navigate('/carrito')}
              >
                <ShoppingCart className="h-6 w-6" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <div className="relative mr-4">
              <Button 
                variant="ghost" 
                className="text-digital-gold hover:bg-digital-gray"
                onClick={() => navigate('/carrito')}
              >
                <ShoppingCart className="h-6 w-6" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Button>
            </div>
            <Button 
              variant="ghost" 
              className="text-digital-gold hover:bg-digital-gray"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#inicio" className="text-digital-gold hover:text-white transition-colors duration-300">Inicio</a>
              <a href="#servicios" className="text-digital-gold hover:text-white transition-colors duration-300">Servicios</a>
              <a href="#nosotros" className="text-digital-gold hover:text-white transition-colors duration-300">Nosotros</a>
              <a href="#contacto" className="text-digital-gold hover:text-white transition-colors duration-300">Contacto</a>
              <a href="/galeria" className="text-digital-gold hover:text-white transition-colors duration-300">Galería</a>
              <Button className="bg-digital-gold text-digital-black hover:bg-white w-full">
                Solicitar Servicio
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
