
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Instalación de Cerraduras Digitales",
    description: "Instalamos todo tipo de cerraduras digitales con huella dactilar, código o tarjeta para brindarle la máxima seguridad.",
    icon: "🔒"
  },
  {
    title: "Reparación de Sistemas",
    description: "Servicio técnico especializado para la reparación de cualquier tipo de cerradura digital o sistema de acceso.",
    icon: "🔧"
  },
  {
    title: "Control de Acceso",
    description: "Implementamos sistemas completos de control de acceso para empresas y residencias con múltiples usuarios.",
    icon: "🚪"
  },
  {
    title: "Configuración de Aplicaciones",
    description: "Configuramos aplicaciones móviles para el control remoto de sus cerraduras y sistemas de seguridad.",
    icon: "📱"
  },
  {
    title: "Mantenimiento Preventivo",
    description: "Servicio de mantenimiento programado para garantizar el funcionamiento óptimo de sus sistemas.",
    icon: "⚙️"
  },
  {
    title: "Asesoría Técnica",
    description: "Consultoría especializada para elegir el mejor sistema de seguridad según sus necesidades.",
    icon: "💡"
  }
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 bg-digital-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <div className="w-24 h-1 bg-digital-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones completas para la seguridad digital de sus puertas y sistemas de acceso.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-200 hover:border-digital-gold transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
