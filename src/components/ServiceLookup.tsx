
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ServiceLookup = () => {
  const [zipCode, setZipCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert(`Servicio disponible en el código postal ${zipCode}. ¡Contacte con nosotros!`);
    }, 1500);
  };
  
  return (
    <section className="py-16 bg-digital-gold">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-digital-black mb-4">
            Verifique Disponibilidad en su Área
          </h2>
          <p className="text-lg text-digital-black max-w-2xl mx-auto">
            Introduzca su código postal para verificar si ofrecemos servicios en su zona.
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            <Input
              type="text"
              placeholder="Ingrese su código postal"
              className="w-full md:flex-1 bg-white border-none focus-visible:ring-digital-black"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
            <Button 
              type="submit"
              className="bg-digital-black text-white hover:bg-digital-gray"
              disabled={isSubmitting || !zipCode}
            >
              {isSubmitting ? 'Verificando...' : 'Verificar'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ServiceLookup;
