import React, { useState, useEffect, useRef } from 'react';
import { DropdownItem } from './DropdownItem';
import { truckDispatchingData } from '../data/dispatchingData';
import truck1 from '../assets/truck1.svg';
import bgImage from '../assets/bgImage.jpg'; // Import the local background image

export const TruckDispatchingSection = () => {
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // This IntersectionObserver will trigger a state change when the section enters the viewport,
    // which in turn adds the 'aos-animate' class for animations.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup function to unobserve the element
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleDropdownClick = (id) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  return (
    <section
      ref={sectionRef}
      id="what-we-do"
      className="relative min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cover bg-center"
      style={{
        // Use the imported local image for the background
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-90" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side - Truck and Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className={`space-y-6 transform transition-all duration-1000 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                What Does Truck Dispatching Include
              </h1>
              
              <p className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-2xl">
                Forget about everything that makes you feel uncomfortable in 
                truck dispatching and dealing with an annoying trucking 
                environment.
              </p>
            </div>

            {/* Truck Illustration with Animation */}
            <div className={`relative max-w-lg transition-all duration-1000 ease-out ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
              }`}
              style={{ transitionDelay: '0.3s' }}
            >
              <img 
                src={truck1} 
                alt="Truck Illustration" 
                className="w-full h-auto filter invert"
              />
              
              {/* Animated Line Under Truck */}
              <div className="relative mt-4">
                <div className={`h-1 bg-orange-400 transition-all duration-1000 ease-out ${
                    isVisible ? 'w-full' : 'w-0'
                  }`} 
                  style={{ transitionDelay: '0.8s' }}
                />
              </div>
            </div>
          </div>

          {/* Right Side - Dropdown List */}
          <div className={`space-y-0 transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
            {truckDispatchingData.map((item) => (
              <DropdownItem
                key={item.id}
                item={item}
                isOpen={openDropdownId === item.id}
                onClick={handleDropdownClick}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};