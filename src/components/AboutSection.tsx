import { Button } from "@/components/ui/button";
const AboutSection = () => {
  return <section id="nosotros" className="py-20 bg-digital-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-16">
            <div className="relative">
              <div className="w-full h-96 bg-digital-gold rounded-lg"></div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-digital-black p-4 rounded-lg border-2 border-digital-gold flex items-center justify-center">
                <img src="/lovable-uploads/226b30b8-7ecb-4d24-ab19-fb909908968d.png" alt="Digital Doors Logo" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Sobre Nosotros</h2>
            <div className="w-24 h-1 bg-digital-gold mb-6"></div>
            <p className="text-gray-300 mb-6">En Digital Doors Service Center somos especialistas en soluciones de acceso digital y seguridad para hogares y negocios. Contamos con más de 20 años de experiencia en el sector.</p>
            <p className="text-gray-300 mb-8">
              Nuestro equipo de técnicos certificados está capacitado para instalar, reparar y mantener los sistemas más avanzados del mercado, garantizando siempre la satisfacción de nuestros clientes.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-digital-gray bg-opacity-50 p-4 rounded-lg">
                <div className="text-digital-gold text-3xl font-bold mb-2">20+</div>
                <div className="text-white">Años de experiencia</div>
              </div>
              <div className="bg-digital-gray bg-opacity-50 p-4 rounded-lg">
                <div className="text-digital-gold text-3xl font-bold mb-2">3000+</div>
                <div className="text-white">Clientes satisfechos</div>
              </div>
              
              <div className="bg-digital-gray bg-opacity-50 p-4 rounded-lg">
                <div className="text-digital-gold text-3xl font-bold mb-2">100%</div>
                <div className="text-white">Garantía de calidad</div>
              </div>
            </div>
            <Button className="bg-digital-gold text-digital-black hover:bg-white">
              Conocer Más
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;