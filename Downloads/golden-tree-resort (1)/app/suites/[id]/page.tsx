"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Users, Bed, Bath, Wifi, Car, Coffee, Waves, Star, Calendar, MapPin } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function SuiteDetailsPage() {
  const params = useParams()
  const [suite, setSuite] = useState<any>(null)

  const suites = {
    "ocean-villa": {
      id: "ocean-villa",
      name: "Ocean Villa",
      image: "/luxury-ocean-view-villa-with-private-pool.png",
      gallery: [
        "/luxury-ocean-view-villa-with-private-pool.png",
        "/luxury-villa-bedroom-with-ocean-view.png",
        "/private-pool-with-ocean-backdrop.png",
        "/elegant-bathroom-with-marble-finishes.png",
      ],
      price: 899,
      guests: 4,
      bedrooms: 2,
      bathrooms: 2,
      size: "1,200 sq ft",
      features: ["Private Pool", "Ocean View", "Butler Service"],
      amenities: [
        { icon: Wifi, name: "High-Speed WiFi" },
        { icon: Car, name: "Valet Parking" },
        { icon: Coffee, name: "24/7 Room Service" },
        { icon: Waves, name: "Private Beach Access" },
      ],
      description:
        "Indulge in the ultimate luxury experience with our Ocean Villa, featuring breathtaking panoramic ocean views and a private infinity pool. This spacious two-bedroom sanctuary offers the perfect blend of elegance and comfort, with dedicated butler service ensuring every need is met.",
      highlights: [
        "180-degree ocean views from every room",
        "Private infinity pool with ocean backdrop",
        "Dedicated butler and concierge service",
        "Premium marble bathrooms with soaking tubs",
        "Private terrace with outdoor dining area",
        "Direct beach access via private pathway",
      ],
      rating: 4.9,
      reviews: 127,
    },
    "garden-suite": {
      id: "garden-suite",
      name: "Garden Suite",
      image: "/elegant-garden-suite-with-tropical-landscaping.png",
      gallery: [
        "/elegant-garden-suite-with-tropical-landscaping.png",
        "/tropical-garden-suite-bedroom.png",
        "/private-garden-terrace-with-seating.png",
        "/spa-bathroom-with-garden-views.png",
      ],
      price: 599,
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      size: "800 sq ft",
      features: ["Garden View", "Spa Access", "Breakfast Included"],
      amenities: [
        { icon: Wifi, name: "High-Speed WiFi" },
        { icon: Coffee, name: "Daily Breakfast" },
        { icon: Waves, name: "Spa Access" },
        { icon: Car, name: "Complimentary Parking" },
      ],
      description:
        "Escape to tranquility in our Garden Suite, surrounded by lush tropical landscaping and serene garden views. This intimate retreat offers a perfect balance of luxury and nature, with complimentary spa access and daily breakfast included.",
      highlights: [
        "Private garden terrace with tropical views",
        "Complimentary daily breakfast service",
        "Full access to resort spa facilities",
        "Rain shower with garden views",
        "Handcrafted furnishings and local artwork",
        "Peaceful location away from main resort activity",
      ],
      rating: 4.7,
      reviews: 89,
    },
    "presidential-villa": {
      id: "presidential-villa",
      name: "Presidential Villa",
      image: "/presidential-villa-with-panoramic-views-and-luxury.png",
      gallery: [
        "/presidential-villa-with-panoramic-views-and-luxury.png",
        "/presidential-villa-master-bedroom-with-panoramic-v.png",
        "/private-chef-kitchen-in-luxury-villa.png",
        "/helicopter-landing-pad-at-luxury-resort.png",
      ],
      price: 1499,
      guests: 8,
      bedrooms: 4,
      bathrooms: 4,
      size: "3,500 sq ft",
      features: ["Panoramic Views", "Private Chef", "Helicopter Pad"],
      amenities: [
        { icon: Wifi, name: "High-Speed WiFi" },
        { icon: Car, name: "Private Transportation" },
        { icon: Coffee, name: "Private Chef Service" },
        { icon: Waves, name: "Helicopter Access" },
      ],
      description:
        "Experience the pinnacle of luxury in our Presidential Villa, featuring panoramic views, private chef service, and exclusive helicopter access. This expansive four-bedroom estate offers unparalleled privacy and world-class amenities for the most discerning guests.",
      highlights: [
        "360-degree panoramic views of ocean and mountains",
        "Private helicopter landing pad for exclusive arrivals",
        "Dedicated private chef and full kitchen facilities",
        "Four master bedrooms each with ensuite bathrooms",
        "Private infinity pool and entertainment area",
        "24/7 personal concierge and security service",
      ],
      rating: 5.0,
      reviews: 43,
    },
    "treetop-retreat": {
      id: "treetop-retreat",
      name: "Treetop Retreat",
      image: "/elevated-treetop-suite-with-canopy-views.png",
      gallery: [
        "/elevated-treetop-suite-with-canopy-views.png",
        "/treetop-bedroom-with-canopy-views.png",
        "/stargazing-deck-in-forest-canopy.png",
        "/eco-luxury-bathroom-with-natural-materials.png",
      ],
      price: 799,
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      size: "900 sq ft",
      features: ["Canopy Views", "Eco-Luxury", "Stargazing Deck"],
      amenities: [
        { icon: Wifi, name: "High-Speed WiFi" },
        { icon: Coffee, name: "Organic Minibar" },
        { icon: Waves, name: "Nature Spa Treatments" },
        { icon: Star, name: "Stargazing Equipment" },
      ],
      description:
        "Elevate your stay in our unique Treetop Retreat, suspended among the forest canopy with breathtaking views and eco-luxury amenities. This one-bedroom sanctuary features a private stargazing deck and sustainable luxury throughout.",
      highlights: [
        "Elevated position 30 feet above ground level",
        "Private stargazing deck with telescope",
        "Sustainable eco-luxury design and materials",
        "Floor-to-ceiling windows with canopy views",
        "Organic spa treatments using local ingredients",
        "Unique architectural design blending with nature",
      ],
      rating: 4.8,
      reviews: 76,
    },
    "beachfront-bungalow": {
      id: "beachfront-bungalow",
      name: "Beachfront Bungalow",
      image: "/beachfront-bungalow-with-direct-beach-access.png",
      gallery: [
        "/beachfront-bungalow-with-direct-beach-access.png",
        "/beachfront-bungalow-bedroom-with-ocean-breeze.png",
        "/private-beach-area-with-water-sports-equipment.png",
        "/sunset-terrace-overlooking-the-ocean.png",
      ],
      price: 699,
      guests: 3,
      bedrooms: 1,
      bathrooms: 1,
      size: "750 sq ft",
      features: ["Beach Access", "Water Sports", "Sunset Views"],
      amenities: [
        { icon: Wifi, name: "High-Speed WiFi" },
        { icon: Waves, name: "Water Sports Equipment" },
        { icon: Coffee, name: "Beachside Service" },
        { icon: Car, name: "Beach Buggy Access" },
      ],
      description:
        "Step directly onto pristine white sand from your private Beachfront Bungalow, featuring direct beach access and complimentary water sports equipment. This charming retreat offers the perfect blend of relaxation and adventure.",
      highlights: [
        "Direct access to private beach section",
        "Complimentary kayaks, snorkeling gear, and paddleboards",
        "Private sunset viewing terrace",
        "Outdoor shower with ocean views",
        "Beachside dining and cocktail service",
        "Traditional island architecture with modern amenities",
      ],
      rating: 4.6,
      reviews: 112,
    },
    "spa-sanctuary": {
      id: "spa-sanctuary",
      name: "Spa Sanctuary",
      image: "/spa-sanctuary-suite-with-wellness-amenities.png",
      gallery: [
        "/spa-sanctuary-suite-with-wellness-amenities.png",
        "/private-spa-treatment-room-with-meditation-garden.png",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      price: 999,
      guests: 2,
      bedrooms: 1,
      bathrooms: 2,
      size: "1,100 sq ft",
      features: ["Private Spa", "Meditation Garden", "Wellness Concierge"],
      amenities: [
        { icon: Wifi, name: "High-Speed WiFi" },
        { icon: Waves, name: "Private Spa Treatments" },
        { icon: Coffee, name: "Wellness Cuisine" },
        { icon: Star, name: "Meditation Sessions" },
      ],
      description:
        "Rejuvenate your mind, body, and soul in our Spa Sanctuary, featuring a private spa treatment room, meditation garden, and dedicated wellness concierge. This holistic retreat is designed for ultimate relaxation and renewal.",
      highlights: [
        "Private in-suite spa treatment room",
        "Dedicated meditation garden with water features",
        "Personal wellness concierge and daily consultations",
        "Organic wellness cuisine and detox programs",
        "Yoga and meditation equipment provided",
        "Aromatherapy and sound healing amenities",
      ],
      rating: 4.9,
      reviews: 68,
    },
  }

  useEffect(() => {
    const suiteData = suites[params.id as keyof typeof suites]
    setSuite(suiteData || null)
  }, [params.id])

  if (!suite) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-playfair text-gradient-gold mb-4">Suite Not Found</h1>
          <Link href="/">
            <Button className="golden-glow">Return Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10">
      {/* Navigation */}
      <nav className="glass-morphism sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <h1 className="text-2xl font-playfair text-gradient-gold">Goldtree Club</h1>
            <Link href="/book-now">
              <Button className="golden-glow">Book Now</Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-playfair text-gradient-gold mb-2">{suite.name}</h1>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{suite.rating}</span>
                  <span>({suite.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{suite.size}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-gradient-gold">${suite.price}</div>
              <div className="text-sm text-muted-foreground">per night</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 md:col-span-1">
                <img
                  src={suite.image || "/placeholder.svg"}
                  alt={suite.name}
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {suite.gallery.slice(1, 4).map((image: string, index: number) => (
                  <img
                    key={index}
                    src={image || "/placeholder.svg"}
                    alt={`${suite.name} view ${index + 2}`}
                    className="w-full h-36 object-cover rounded-lg"
                  />
                ))}
                {suite.gallery.length > 4 && (
                  <div className="relative">
                    <img
                      src={suite.gallery[4] || "/placeholder.svg"}
                      alt="More photos"
                      className="w-full h-36 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                      <span className="text-white font-medium">+{suite.gallery.length - 4} more</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Suite Details */}
            <div className="grid md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">{suite.guests} Guests</div>
                  <div className="text-sm text-muted-foreground">Maximum occupancy</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Bed className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">
                    {suite.bedrooms} Bedroom{suite.bedrooms > 1 ? "s" : ""}
                  </div>
                  <div className="text-sm text-muted-foreground">Luxury accommodations</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">
                    {suite.bathrooms} Bathroom{suite.bathrooms > 1 ? "s" : ""}
                  </div>
                  <div className="text-sm text-muted-foreground">Premium fixtures</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">{suite.size}</div>
                  <div className="text-sm text-muted-foreground">Living space</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-playfair text-gradient-gold mb-4">About This Suite</h2>
              <p className="text-muted-foreground leading-relaxed">{suite.description}</p>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="text-2xl font-playfair text-gradient-gold mb-4">Suite Highlights</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {suite.highlights.map((highlight: string, index: number) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h2 className="text-2xl font-playfair text-gradient-gold mb-4">Amenities & Services</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {suite.amenities.map((amenity: any, index: number) => (
                  <div key={index} className="flex items-center gap-3">
                    <amenity.icon className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="glass-morphism sticky top-24">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gradient-gold">${suite.price}</div>
                  <div className="text-sm text-muted-foreground">per night</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex flex-wrap gap-2">
                    {suite.features.map((feature: string, index: number) => (
                      <Badge key={index} variant="secondary" className="bg-accent/20">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <Link href="/book-now">
                    <Button className="w-full golden-glow hover:scale-105 transition-all duration-200">
                      <Calendar className="mr-2 h-4 w-4" />
                      Book This Suite
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full bg-transparent">
                    Check Availability
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <div className="text-sm text-muted-foreground space-y-2">
                    <div className="flex justify-between">
                      <span>Free cancellation</span>
                      <span className="text-green-600">✓</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Best price guarantee</span>
                      <span className="text-green-600">✓</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Instant confirmation</span>
                      <span className="text-green-600">✓</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
