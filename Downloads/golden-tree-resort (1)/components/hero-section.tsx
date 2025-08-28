"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/luxury-resort-pool-at-sunset-with-golden-lighting.png"
          alt="Goldtree Club Resort"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="floating-particles"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
      {/* 3D Spline Container
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 w-96 h-96 hidden lg:block">
        <div className="w-full h-full glass-morphism rounded-full flex items-center justify-center">
          <div className="text-6xl text-primary animate-pulse">🌳</div>
        </div>
      </div> */}
      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-playfair text-white mb-6 leading-tight">
          Welcome to{" "}
          <span className="text-gradient-gold block">Goldtree Club</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          A Luxury Resort Experience Where Natural Elegance Meets Modern
          Sophistication
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="golden-glow hover:scale-105 transition-all duration-300 text-lg px-8 py-4"
          >
            Book Your Stay
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="glass-morphism border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4 bg-transparent"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Tour
          </Button>
        </div>
      </div>
    </section>
  );
}
