
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return <section id="inicio" className="bg-digital-black py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl font-bold text-white mb-6 text-center md:text-5xl">
              ABRIENDO LAS PUERTAS DEL <span className="text-digital-gold">FUTURO</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
          </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-digital-gold text-digital-black hover:bg-white text-lg py-6 px-8">
                Solicitar Servicio
              </Button>
              <Button variant="outline" className="border-digital-gold text-digital-gold hover:bg-digital-gray text-lg py-6 px-8">
                Contactar
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center items-center px-0">
            <div className="flex items-center justify-center p-4">
              <img src="/lovable-uploads/226b30b8-7ecb-4d24-ab19-fb909908968d.png" alt="Digital Doors Logo" className="w-[500px] h-[500px] object-contain mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
