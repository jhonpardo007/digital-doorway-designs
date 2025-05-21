import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
const ContactSection = () => {
  return <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contáctenos</h2>
          <div className="w-24 h-1 bg-digital-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Estamos disponibles para resolver todas sus dudas y atender sus requerimientos.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Nombre</label>
                  <Input id="name" placeholder="Su nombre" className="w-full" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
                  <Input id="email" type="email" placeholder="Su email" className="w-full" />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">Teléfono</label>
                  <Input id="phone" placeholder="Su teléfono" className="w-full" />
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">Asunto</label>
                  <Input id="subject" placeholder="Asunto del mensaje" className="w-full" />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Mensaje</label>
                <Textarea id="message" placeholder="Su mensaje" className="w-full min-h-[150px]" />
              </div>
              
              <Button className="bg-digital-gold text-digital-black hover:bg-digital-black hover:text-digital-gold w-full py-6">
                Enviar Mensaje
              </Button>
            </form>
          </div>
          
          <div className="lg:w-1/2 bg-digital-black rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-digital-gold">Información de Contacto</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="text-digital-gold mr-4 h-6 w-6 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Teléfono</h4>
                  <p className="text-gray-300">+57 3115705816 - 3118889761</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-digital-gold mr-4 h-6 w-6 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-gray-300">digitaldoors@hotmail.com</p>
                </div>
              </div>
              
              
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-digital-gold">Horario de Atención</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Lunes - Viernes:</span>
                  <span>8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado:</span>
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo:</span>
                  <span>Cerrado</span>
                </div>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;