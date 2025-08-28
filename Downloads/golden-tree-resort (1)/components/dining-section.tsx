import { Card, CardContent } from "@/components/ui/card"

export default function DiningSection() {
  const diningOptions = [
    {
      name: "The Golden Terrace",
      cuisine: "Fine Dining",
      image: "/elegant-fine-dining-restaurant-with-golden-lightin.png",
      description: "Exquisite cuisine with panoramic ocean views",
    },
    {
      name: "Bamboo Bar",
      cuisine: "Cocktails & Light Bites",
      image: "/tropical-bamboo-bar-with-craft-cocktails-and-sunse.png",
      description: "Craft cocktails and tropical ambiance",
    },
    {
      name: "Spice Garden",
      cuisine: "Asian Fusion",
      image: "/asian-fusion-restaurant-with-garden-setting-and-mo.png",
      description: "Authentic flavors in a garden setting",
    },
  ]

  return (
    <section id="dining" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair text-gradient-gold mb-6">Culinary Excellence</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Embark on a gastronomic journey that celebrates both local traditions and international cuisine. Our
                award-winning chefs create memorable dining experiences using the finest ingredients.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From intimate dinners under the stars to vibrant social gatherings, every meal at Goldtree Club is
                crafted to delight your senses.
              </p>
            </div>

            {/* Dining Options */}
            <div className="space-y-4">
              {diningOptions.map((option, index) => (
                <Card key={index} className="glass-morphism hover:golden-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <img
                        src={option.image || "/placeholder.svg"}
                        alt={option.name}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div>
                        <h3 className="text-xl font-playfair text-gradient-gold mb-1">{option.name}</h3>
                        <p className="text-sm text-primary font-medium mb-2">{option.cuisine}</p>
                        <p className="text-sm text-muted-foreground">{option.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right: Gallery */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/gourmet-dish-presentation-with-artistic-plating.png"
                alt="Gourmet Cuisine"
                className="rounded-lg object-cover h-48 w-full golden-glow"
              />
              <img
                src="/craft-cocktail-with-tropical-garnish-at-sunset.png"
                alt="Craft Cocktails"
                className="rounded-lg object-cover h-48 w-full golden-glow"
              />
              <img
                src="/elegant-dining-room-with-candlelight-and-ocean-vie.png"
                alt="Dining Ambiance"
                className="rounded-lg object-cover h-48 w-full golden-glow col-span-2"
              />
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(8)].map((_, i) => (
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
        </div>
      </div>
    </section>
  )
}
