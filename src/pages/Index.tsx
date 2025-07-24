import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Zap, 
  TrendingUp, 
  Users, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Sparkles, 
  Bot,
  Globe,
  Camera,
  MessageCircle,
  CreditCard,
  Smartphone,
  Instagram,
  Phone,
  ExternalLink
} from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-hotel.jpg";
import dashboardImage from "@/assets/dashboard-tech.jpg";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollAnimation from "@/components/ScrollAnimation";

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    hotel: '',
    phone: '',
    website: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <SmoothScroll />
      
      {/* Sticky CTA Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          variant="hero"
          size="lg" 
          className="rounded-full px-6 py-3 shadow-lg animate-pulse"
        >
          <Phone className="w-5 h-5 mr-2" />
          Asesoría Gratuita
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImage})`,
            filter: 'brightness(0.4)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-70" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <ScrollAnimation animation="fade-in-up">
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Mosaiko Boost:
              <span className="block text-mostaza">El Impulso Inteligente</span>
              <span className="block text-3xl md:text-4xl font-normal">para tu Hotel</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Agencia creativa 360° que automatiza ventas, marketing, diseño y operaciones hoteleras con IA.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="terracota"
                size="lg" 
                className="px-8 py-4 text-lg font-semibold hover:scale-105"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Quiero vender más
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg transition-all duration-300"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Descubre cómo funciona
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* What is Mosaiko Boost */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-in" className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
              No es una agencia tradicional.
              <span className="block text-terracota">Es tu nuevo equipo digital.</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Mosaiko Boost combina creatividad, estrategia hotelera e inteligencia artificial para transformar hoteles en negocios rentables y automatizados.
              </p>
              <p className="text-lg text-muted-foreground">
                Nuestro enfoque 360° cubre todo el ecosistema de ventas: desde la web y las OTAs hasta el check-in y la facturación.
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: TrendingUp, label: "Ventas" },
              { icon: Globe, label: "SEO" },
              { icon: Camera, label: "Contenido" },
              { icon: MessageCircle, label: "Campañas" },
              { icon: Sparkles, label: "Diseño" },
              { icon: Bot, label: "IA" },
              { icon: CreditCard, label: "Legales" },
              { icon: Smartphone, label: "Check-in" }
            ].map((item, index) => (
              <ScrollAnimation 
                key={index}
                animation="scale-in" 
                delay={index * 100}
                className="text-center hover:scale-110 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-accent rounded-full flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <p className="font-medium text-primary">{item.label}</p>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* What we automate */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-in" className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
              Automatizamos <span className="text-mostaza">TODO</span>
              <span className="block">para que tu hotel funcione sin ti.</span>
            </h2>
          </ScrollAnimation>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Página web profesional y optimizada",
              "SEO orgánico para aparecer en Google",
              "Creación de contenido (foto, video, copy)",
              "Requisitos legales y facturación electrónica",
              "Campañas automatizadas y remarketing",
              "Atención con IA 24/7 (WhatsApp, Instagram)",
              "Ventas inteligentes multicanal",
              "Check-in y check-out digital",
              "Influencers y redes que sí convierten"
            ].map((feature, index) => (
              <ScrollAnimation 
                key={index}
                animation="slide-in"
                delay={index * 100}
              >
                <Card className="p-6 border-0 shadow-editorial hover:shadow-hover transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-verde-seco mt-1 flex-shrink-0" />
                    <p className="text-primary font-medium">{feature}</p>
                  </div>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-in" className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
              Ideal para hoteles independientes,
              <span className="block text-terracota">sostenibles, creativos… como el tuyo.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Si gestionas un hotel boutique, un glamping, un alojamiento artístico o cultural y quieres aumentar ingresos sin perder tu esencia, este servicio es para ti.
            </p>
          </ScrollAnimation>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Hostales con estilo", desc: "Espacios únicos y auténticos" },
              { title: "Hoteles sostenibles", desc: "Comprometidos con el medio ambiente" },
              { title: "Casas creativas", desc: "Experiencias artísticas y culturales" },
              { title: "Glampings modernos", desc: "Naturaleza con comodidad" }
            ].map((type, index) => (
              <ScrollAnimation 
                key={index}
                animation="fade-in"
                delay={index * 200}
              >
                <Card className="p-6 text-center hover:scale-105 transition-all duration-300 shadow-editorial hover:shadow-hover">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-accent rounded-full flex items-center justify-center">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{type.title}</h3>
                  <p className="text-sm text-muted-foreground">{type.desc}</p>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-in" className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Qué puedes lograr con
              <span className="block text-mostaza">Mosaiko Boost?</span>
            </h2>
          </ScrollAnimation>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { metric: "30-50%", label: "Más reservas directas", icon: TrendingUp },
              { metric: "80%", label: "Menos tiempo de gestión", icon: Zap },
              { metric: "24/7", label: "Ventas en piloto automático", icon: Bot },
              { metric: "60 días", label: "Primera página de Google", icon: Globe }
            ].map((result, index) => (
              <ScrollAnimation 
                key={index}
                animation="fade-in-up"
                delay={index * 150}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-accent rounded-full flex items-center justify-center">
                  <result.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-mostaza mb-2">{result.metric}</div>
                <p className="text-white/80 text-lg">{result.label}</p>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-in" className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
              Fácil, rápido,
              <span className="block text-terracota">sin dolores de cabeza.</span>
            </h2>
          </ScrollAnimation>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Diagnóstico inicial gratuito", desc: "Analizamos tu hotel y oportunidades" },
                { step: "2", title: "Activamos automatizaciones", desc: "Implementamos tecnología y diseño" },
                { step: "3", title: "En 30 días vendes mejor", desc: "Tu hotel está optimizado y vendiendo" },
                { step: "4", title: "Monitoreo y escalamiento", desc: "Mejoras continuas y crecimiento" }
              ].map((step, index) => (
                <ScrollAnimation 
                  key={index}
                  animation="scale-in"
                  delay={index * 200}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-accent rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation animation="fade-in">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
                ¿Listo para darle un boost
                <span className="block">a tu hotel?</span>
              </h2>
              <p className="text-xl text-white/90 mb-12">
                Te ayudamos a automatizar tu negocio, aumentar tus ingresos y liberar tu tiempo.
                <span className="block font-semibold">Empieza hoy. Nosotros hacemos el resto.</span>
              </p>
            </ScrollAnimation>
            
            <ScrollAnimation animation="scale-in" delay={300}>
              <Card className="p-8 shadow-editorial max-w-2xl mx-auto">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-primary">Nombre</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="hotel" className="text-sm font-medium text-primary">Hotel</Label>
                      <Input
                        id="hotel"
                        name="hotel"
                        value={formData.hotel}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-primary">WhatsApp</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="website" className="text-sm font-medium text-primary">Sitio web (opcional)</Label>
                      <Input
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="editorial"
                    size="lg" 
                    className="w-full py-4 text-lg font-semibold"
                  >
                    Solicitar asesoría gratuita
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </Card>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-in" delay={500}>
              <div className="mt-8 flex justify-center gap-6">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                  <Instagram className="w-5 h-5 mr-2" />
                  @mosaikostudio
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-serif font-bold text-white">Mosaiko Boost</span>
            </div>
            <p className="text-white/60 mb-4">
              Una unidad del Grupo Mosaiko - Medellín, Colombia
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="ghost" size="sm" className="text-white/60 hover:text-white">
                <ExternalLink className="w-4 h-4 mr-2" />
                Grupo Mosaiko
              </Button>
              <Button variant="ghost" size="sm" className="text-white/60 hover:text-white">
                EN
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
