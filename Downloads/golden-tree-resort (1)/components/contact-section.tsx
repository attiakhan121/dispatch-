"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair text-gradient-gold mb-6">Plan Your Escape</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to experience luxury redefined? Contact us to begin planning your unforgettable stay at Goldtree Club
            Resort.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass-morphism">
            <CardContent className="p-8">
              <h3 className="text-2xl font-playfair text-gradient-gold mb-6">Book Your Stay</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="glass-morphism border-border/50 focus:golden-glow"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      className="glass-morphism border-border/50 focus:golden-glow"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Input
                      name="checkIn"
                      type="date"
                      placeholder="Check-in Date"
                      value={formData.checkIn}
                      onChange={handleChange}
                      className="glass-morphism border-border/50 focus:golden-glow"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="checkOut"
                      type="date"
                      placeholder="Check-out Date"
                      value={formData.checkOut}
                      onChange={handleChange}
                      className="glass-morphism border-border/50 focus:golden-glow"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="guests"
                      type="number"
                      placeholder="Guests"
                      min="1"
                      value={formData.guests}
                      onChange={handleChange}
                      className="glass-morphism border-border/50 focus:golden-glow"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Special Requests or Questions"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="glass-morphism border-border/50 focus:golden-glow resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full golden-glow hover:scale-105 transition-all duration-300 text-lg py-6"
                >
                  Submit Booking Request
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="glass-morphism">
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair text-gradient-gold mb-6">Get in Touch</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Location</h4>
                      <p className="text-muted-foreground">
                        123 Paradise Island Drive
                        <br />
                        Golden Bay, Tropical Islands 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-muted-foreground">reservations@goldentree.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="glass-morphism">
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair text-gradient-gold mb-6">Follow Us</h3>

                <div className="flex gap-4">
                  <Button variant="outline" size="icon" className="glass-morphism hover:golden-glow bg-transparent">
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="glass-morphism hover:golden-glow bg-transparent">
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="glass-morphism hover:golden-glow bg-transparent">
                    <Twitter className="h-5 w-5" />
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground mt-4">
                  Stay connected for exclusive offers and behind-the-scenes glimpses of life at Goldtree Club Resort.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
