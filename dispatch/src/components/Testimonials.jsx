import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
// Assuming testimonialsData is a simple JS array of objects
import { testimonialsData } from '../data/testimonialsData';

const Testimonials = () => {
  // State to manage the current testimonial index
  const [currentIndex, setCurrentIndex] = useState(0);
  // State to prevent multiple animations from triggering at once
  const [isAnimating, setIsAnimating] = useState(false);
  // State for touch events to handle mobile swiping
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Function to move to the next testimonial
  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  // Function to move to the previous testimonial
  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  // Touch event handlers for mobile swiping
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextTestimonial();
    } else if (isRightSwipe) {
      prevTestimonial();
    }
  };

  // Effect to reset the animation state after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Auto-play functionality with a 5-second interval
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextTestimonial();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  // Get the current testimonial data based on the index
  const current = testimonialsData[currentIndex];

  // Helper function to render star icons based on a rating
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-6 h-6 transition-all duration-300 ${
          i < rating 
            ? 'fill-orange-400 text-orange-400 drop-shadow-lg' 
            : 'text-gray-400'
        }`}
      />
    ));
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#002147] via-[#002140] to-[#003060]">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.03\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
          }}
        ></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-400/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-orange-400/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* Header with Animation */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full"></div>
            <Quote className="w-8 h-8 text-orange-400 animate-pulse" />
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full"></div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-200 to-orange-400 mb-6 tracking-tight">
            Clients
          </h2>
          <h3 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-300 to-yellow-300 mb-8 tracking-tight">
            Feedback
          </h3>
          
          <p className="text-white/80 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
            Discover the extraordinary experiences our clients have shared with us
          </p>
        </div>

        {/* Main Testimonial Container */}
        <div className="relative max-w-6xl mx-auto">
          <div
            className="relative group cursor-grab active:cursor-grabbing"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Main Card */}
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl md:rounded-[3rem] p-8 md:p-16 shadow-2xl border border-white/20 transition-all duration-700 ease-out transform hover:scale-[1.02] hover:shadow-3xl">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-orange-400/5 rounded-3xl md:rounded-[3rem]"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                  {/* Image Section */}
                  <div className="flex-shrink-0 relative">
                    {/* Decorative Ring */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 via-orange-300 to-yellow-300 rounded-full blur-lg opacity-75"></div>
                    
                    {/* Image Container */}
                    <div className="relative">
                      <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl ring-8 ring-white/20 transition-all duration-700 transform hover:scale-105">
                        <img
                          src={current.image}
                          alt={current.name}
                          className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                      
                      {/* Quote Badge */}
                      <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                        <Quote className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 text-center lg:text-left space-y-8">
                    {/* Quote */}
                    <blockquote className="text-white text-xl md:text-3xl leading-relaxed font-light italic relative">
                      <span className="text-6xl text-orange-400/30 absolute -top-4 -left-4 font-serif">"</span>
                      {current.testimonial}
                      <span className="text-6xl text-orange-400/30 absolute -bottom-8 -right-4 font-serif">"</span>
                    </blockquote>

                    {/* Rating */}
                    <div className="flex justify-center lg:justify-start gap-2 py-4">
                      {renderStars(current.rating)}
                    </div>

                    {/* Author Info */}
                    <div className="space-y-3">
                      <h4 className="text-white font-bold text-2xl md:text-3xl tracking-wide">
                        {current.name}
                      </h4>
                      <div className="space-y-1">
                        <p className="text-orange-400 font-semibold text-lg md:text-xl">
                          {current.title}
                        </p>
                        <p className="text-white/70 text-lg">
                          {current.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 md:-left-20 top-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed group"
              disabled={isAnimating}
            >
              <ChevronLeft className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:scale-110 transition-transform duration-300" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 md:-right-20 top-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed group"
              disabled={isAnimating}
            >
              <ChevronRight className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-4 mt-16">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                  }
                }}
                className={`transition-all duration-500 rounded-full ${
                  index === currentIndex
                    ? 'w-12 h-4 bg-gradient-to-r from-orange-400 to-orange-500 shadow-lg'
                    : 'w-4 h-4 bg-white/30 hover:bg-white/50 hover:scale-125'
                }`}
                disabled={isAnimating}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${((currentIndex + 1) / testimonialsData.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
