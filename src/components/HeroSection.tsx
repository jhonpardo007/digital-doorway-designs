
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="inicio" className="bg-digital-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Logo centered at the top */}
          <div className="mb-8 md:mb-12">
            <img 
              src="/lovable-uploads/226b30b8-7ecb-4d24-ab19-fb909908968d.png" 
              alt="Digital Doors Logo" 
              className="w-[350px] h-[350px] md:w-[550px] md:h-[550px] object-contain" 
            />
          </div>
          
          {/* Content centered below the logo */}
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-6 md:text-5xl">
              ABRIENDO LAS PUERTAS DEL <span className="text-digital-gold">FUTURO</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-digital-gold text-digital-black hover:bg-white text-lg py-6 px-8">
                Solicitar Servicio
              </Button>
              <Button variant="outline" className="border-digital-gold text-digital-gold hover:bg-digital-gray text-lg py-6 px-8">
                Contactar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
