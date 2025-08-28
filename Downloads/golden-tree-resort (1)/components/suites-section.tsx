import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Bed, Bath } from "lucide-react"
import Link from "next/link"

export default function SuitesSection() {
  const suites = [
    {
      id: "ocean-villa",
      name: "Ocean Villa",
      image: "/luxury-ocean-view-villa-with-private-pool.png",
      price: "$899",
      guests: 4,
      bedrooms: 2,
      bathrooms: 2,
      features: ["Private Pool", "Ocean View", "Butler Service"],
    },
    {
      id: "garden-suite",
      name: "Garden Suite",
      image: "/elegant-garden-suite-with-tropical-landscaping.png",
      price: "$599",
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      features: ["Garden View", "Spa Access", "Breakfast Included"],
    },
    {
      id: "presidential-villa",
      name: "Presidential Villa",
      image: "/presidential-villa-with-panoramic-views-and-luxury.png",
      price: "$1,499",
      guests: 8,
      bedrooms: 4,
      bathrooms: 4,
      features: ["Panoramic Views", "Private Chef", "Helicopter Pad"],
    },
    {
      id: "treetop-retreat",
      name: "Treetop Retreat",
      image: "/elevated-treetop-suite-with-canopy-views.png",
      price: "$799",
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      features: ["Canopy Views", "Eco-Luxury", "Stargazing Deck"],
    },
    {
      id: "beachfront-bungalow",
      name: "Beachfront Bungalow",
      image: "/beachfront-bungalow-with-direct-beach-access.png",
      price: "$699",
      guests: 3,
      bedrooms: 1,
      bathrooms: 1,
      features: ["Beach Access", "Water Sports", "Sunset Views"],
    },
    {
      id: "spa-sanctuary",
      name: "Spa Sanctuary",
      image: "/spa-sanctuary-suite-with-wellness-amenities.png",
      price: "$999",
      guests: 2,
      bedrooms: 1,
      bathrooms: 2,
      features: ["Private Spa", "Meditation Garden", "Wellness Concierge"],
    },
  ]

  return (
    <section id="suites" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair text-gradient-gold mb-6">Luxury Suites & Experiences</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose from our collection of meticulously designed accommodations, each offering a unique perspective on
            luxury and comfort.
          </p>
        </div>

        {/* Horizontal Scrollable Cards */}
        <div className="overflow-x-auto pb-6">
          <div className="flex gap-6 w-max lg:grid lg:grid-cols-3 lg:w-full">
            {suites.map((suite, index) => (
              <Card
                key={index}
                className="glass-morphism hover:golden-glow transition-all duration-300 hover:scale-105 w-80 lg:w-full"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={suite.image || "/placeholder.svg"}
                    alt={suite.name}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full font-semibold">
                    {suite.price}/night
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-2xl font-playfair text-gradient-gold mb-3">{suite.name}</h3>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {suite.guests} guests
                    </div>
                    <div className="flex items-center gap-1">
                      <Bed className="h-4 w-4" />
                      {suite.bedrooms} bed
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="h-4 w-4" />
                      {suite.bathrooms} bath
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {suite.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link href={`/suites/${suite.id}`}>
                    <Button className="w-full golden-glow hover:scale-105 transition-all duration-200">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
