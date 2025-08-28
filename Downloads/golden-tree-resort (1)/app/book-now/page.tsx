"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Users, MapPin, Phone, Mail, CreditCard, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function BookNowPage() {
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    guests: "",
    suite: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: "",
  })

  const suites = [
    { value: "ocean-villa", label: "Ocean Villa - $899/night", price: 899 },
    { value: "garden-suite", label: "Garden Suite - $599/night", price: 599 },
    { value: "presidential-villa", label: "Presidential Villa - $1,499/night", price: 1499 },
    { value: "treetop-retreat", label: "Treetop Retreat - $799/night", price: 799 },
    { value: "beachfront-bungalow", label: "Beachfront Bungalow - $699/night", price: 699 },
    { value: "spa-sanctuary", label: "Spa Sanctuary - $999/night", price: 999 },
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const calculateTotal = () => {
    if (!formData.checkIn || !formData.checkOut || !formData.suite) return 0

    const checkIn = new Date(formData.checkIn)
    const checkOut = new Date(formData.checkOut)
    const nights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))
    const selectedSuite = suites.find((suite) => suite.value === formData.suite)

    return nights > 0 && selectedSuite ? nights * selectedSuite.price : 0
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
            <div className="w-24"></div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair text-gradient-gold mb-6">Reserve Your Stay</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Experience unparalleled luxury at Goldtree Club Resort. Complete your reservation below.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card className="glass-morphism">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-gradient-gold">Booking Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Stay Details */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="checkIn" className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Check-in Date
                    </Label>
                    <Input
                      id="checkIn"
                      type="date"
                      value={formData.checkIn}
                      onChange={(e) => handleInputChange("checkIn", e.target.value)}
                      className="glass-input"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="checkOut" className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Check-out Date
                    </Label>
                    <Input
                      id="checkOut"
                      type="date"
                      value={formData.checkOut}
                      onChange={(e) => handleInputChange("checkOut", e.target.value)}
                      className="glass-input"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="guests" className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Number of Guests
                    </Label>
                    <Select value={formData.guests} onValueChange={(value) => handleInputChange("guests", value)}>
                      <SelectTrigger className="glass-input">
                        <SelectValue placeholder="Select guests" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? "Guest" : "Guests"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="suite" className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Suite Selection
                    </Label>
                    <Select value={formData.suite} onValueChange={(value) => handleInputChange("suite", value)}>
                      <SelectTrigger className="glass-input">
                        <SelectValue placeholder="Choose your suite" />
                      </SelectTrigger>
                      <SelectContent>
                        {suites.map((suite) => (
                          <SelectItem key={suite.value} value={suite.value}>
                            {suite.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Guest Information */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-playfair text-gradient-gold mb-4">Guest Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className="glass-input"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="glass-input"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="glass-input"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="glass-input"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 mt-4">
                    <Label htmlFor="specialRequests">Special Requests</Label>
                    <Textarea
                      id="specialRequests"
                      value={formData.specialRequests}
                      onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                      className="glass-input min-h-[100px]"
                      placeholder="Any special requests or dietary requirements..."
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <Card className="glass-morphism sticky top-24">
              <CardHeader>
                <CardTitle className="text-xl font-playfair text-gradient-gold">Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {formData.suite && (
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Suite:</span>
                      <span className="text-sm font-medium">
                        {suites.find((s) => s.value === formData.suite)?.label.split(" - ")[0]}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Rate per night:</span>
                      <span className="text-sm font-medium">
                        ${suites.find((s) => s.value === formData.suite)?.price}
                      </span>
                    </div>
                  </div>
                )}

                {formData.checkIn && formData.checkOut && (
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Nights:</span>
                    <span className="text-sm font-medium">
                      {Math.ceil(
                        (new Date(formData.checkOut).getTime() - new Date(formData.checkIn).getTime()) /
                          (1000 * 60 * 60 * 24),
                      )}
                    </span>
                  </div>
                )}

                {formData.guests && (
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Guests:</span>
                    <span className="text-sm font-medium">{formData.guests}</span>
                  </div>
                )}

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-playfair text-gradient-gold">Total:</span>
                    <span className="text-2xl font-bold text-gradient-gold">${calculateTotal().toLocaleString()}</span>
                  </div>
                </div>

                <Button className="w-full golden-glow hover:scale-105 transition-all duration-200 mt-6">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Complete Booking
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  By completing this booking, you agree to our terms and conditions. Cancellation policy applies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
