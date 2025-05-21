import { Mail, Phone, MapPin } from "lucide-react";
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