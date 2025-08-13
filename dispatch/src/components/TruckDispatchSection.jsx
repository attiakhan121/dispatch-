import React, { useState, useEffect, useRef } from 'react';
import { DropdownItem } from './DropdownItem';
import { truckDispatchingData } from '../data/dispatchingData';
import truck1 from '../assets/truck1.svg';
import bgImage from '../assets/bgImage.jpg'; 

export const TruckDispatchingSection = () => {
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
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
        backgroundImage: `url(${bgImage})`,
      }}
    >

      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-90" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
 
          <div className="space-y-8">
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
              
              <div className="relative mt-4">
                <div className={`h-1 bg-orange-400 transition-all duration-1000 ease-out ${
                    isVisible ? 'w-full' : 'w-0'
                  }`} 
                  style={{ transitionDelay: '0.8s' }}
                />
              </div>
            </div>
          </div>

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
