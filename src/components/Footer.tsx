
import { Mail, Phone, MapPin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return <footer className="bg-digital-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <img src="/lovable-uploads/226b30b8-7ecb-4d24-ab19-fb909908968d.png" alt="Digital Doors Logo" className="h-16 mb-6" />
            <p className="text-gray-300 mb-6">
              Especialistas en soluciones digitales para puertas y sistemas de acceso inteligente.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-digital-gold p-2 rounded-full text-digital-black hover:bg-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              
              <a href="#" className="bg-digital-gold p-2 rounded-full text-digital-black hover:bg-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z"></path>
                </svg>
              </a>
              
              {/* Instagram Icon */}
              <a href="#" className="bg-digital-gold p-2 rounded-full text-digital-black hover:bg-white transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              
              {/* WhatsApp Icon */}
              <a href="https://wa.me/573115705816" target="_blank" rel="noopener noreferrer" className="bg-digital-gold p-2 rounded-full text-digital-black hover:bg-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"></path>
                  <path d="M13.613 21.662a9.357 9.357 0 0 1-4.726-1.26l-.34-.202-3.517.923.941-3.44-.222-.352a9.38 9.38 0 0 1-1.437-4.99c0-5.184 4.217-9.4 9.4-9.4 2.513 0 4.875.98 6.654 2.76 1.78 1.777 2.758 4.142 2.757 6.65-.002 5.184-4.218 9.4-9.4 9.4-.001 0 0 0 0 0h-.001z"></path>
                </svg>
              </a>
              
              {/* TikTok Icon - Using custom SVG since there's no built-in TikTok icon in lucide-react */}
              <a href="#" className="bg-digital-gold p-2 rounded-full text-digital-black hover:bg-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
                  <path d="M19.5 10.5V10c-1 0-2-.5-2.5-1s-1.5-2-1.5-3c-1 0-2 0-2.5.5"></path>
                  <path d="M12 7.5c.5-1 1.5-2 3.5-2 .5 0 .938-.063 1.25-.125A.563.563 0 0 0 17.5 4M10 17c0-.5.146-.966.5-1.5m4.5.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"></path>
                  <path d="M12 16a3 3 0 0 0 3-3V5.5"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-gray-300 hover:text-digital-gold transition-colors duration-300">Inicio</a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-digital-gold transition-colors duration-300">Servicios</a>
              </li>
              <li>
                <a href="#nosotros" className="text-gray-300 hover:text-digital-gold transition-colors duration-300">Nosotros</a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-300 hover:text-digital-gold transition-colors duration-300">Contacto</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-digital-gold transition-colors duration-300">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-digital-gold transition-colors duration-300">Términos y Condiciones</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-digital-gold transition-colors duration-300">Política de Privacidad</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="text-digital-gold mr-3 h-5 w-5" />
                <span className="text-gray-300">+57 3115705816 - 3118889761</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-digital-gold mr-3 h-5 w-5" />
                <span className="text-gray-300">digitaldoors@hotmail.com</span>
              </div>
              
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Digital Doors Service Center. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;
