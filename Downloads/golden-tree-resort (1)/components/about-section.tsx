import { Card } from "@/components/ui/card"
import { Space as Spa, Home, UtensilsCrossed, Calendar } from "lucide-react"

export default function AboutSection() {
  const features = [
    {
      icon: <Spa className="h-8 w-8" />,
      title: "Luxury Spa",
      description: "Rejuvenate your senses",
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Premium Villas",
      description: "Exclusive accommodations",
    },
    {
      icon: <UtensilsCrossed className="h-8 w-8" />,
      title: "Fine Dining",
      description: "Culinary excellence",
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Events",
      description: "Memorable celebrations",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden golden-glow">
              <img
                src="/luxury-resort-villa-with-infinity-pool-overlooking.png"
                alt="Goldtree Club Villa"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating particles around image */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="floating-particles"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 6}s`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair text-gradient-gold mb-6">Discover Paradise</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Nestled in a pristine natural setting, Goldtree Club offers an unparalleled luxury experience where
                every detail is crafted to perfection. Our commitment to excellence and personalized service creates
                unforgettable moments for our guests.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From our award-winning spa treatments to our world-class dining experiences, every aspect of your stay
                is designed to exceed expectations and create lasting memories.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="glass-morphism p-6 hover:golden-glow transition-all duration-300">
                  <div className="text-primary mb-3">{feature.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
