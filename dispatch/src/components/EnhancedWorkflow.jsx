import React, { useState, useEffect, useRef } from 'react';
import { workflowData } from '../data/workflowData';
import truck2 from '../assets/truck2.svg';

export const EnhancedWorkflow = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTruck, setShowTruck] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => {
            setShowTruck(true);
          }, 1500);
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

  const WorkflowCard = ({ step, index }) => {
    const delay = index * 200;
    
    return (
      <div 
        className={`transition-all duration-1000 ease-out flex flex-col justify-between ${
          isVisible 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-10'
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <div className="text-center border-2 border-orange-400 border-dotted rounded-lg p-6 h-full flex flex-col justify-between">
          {/* Step Number Circle */}
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-black">
                {step.number}
              </span>
            </div>
          </div>

          {/* Step Title */}
          <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">
            {step.title}
          </h3>

          {/* Step Description */}
          <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      id="work-flow"
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://resolute-logistics.com/optimized/uploads/main_page/how_we_work_bg_1200@2x.webp')`,
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Resolute Logistics Company as the Leading Freight Dispatching Service
          </h2>
        </div>

        {/* Grid Layout for Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {workflowData.map((step, index) => (
            <WorkflowCard key={step.id} step={step} index={index} />
          ))}
        </div>

        {/* Bottom Section with Truck and CTA */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mt-20 pt-16 border-t border-gray-600">
          {/* Animated Truck */}
          <div className={`transition-all duration-1000 ease-out ${
            showTruck 
              ? 'opacity-100 transform translate-x-0' 
              : 'opacity-0 transform -translate-x-20'
          }`}>
            <img 
              src={truck2} 
              alt="Truck Illustration" 
              className="w-48 lg:w-64 h-auto filter brightness-110"
            />
          </div>

          {/* CTA Button */}
          <div className={`transition-all duration-1000 ease-out ${
            showTruck 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-5'
          }`}
          style={{ transitionDelay: '0.3s' }}
          >
            <button className="px-8 lg:px-12 py-4 bg-orange-400 text-black font-bold text-lg lg:text-xl rounded-full hover:bg-orange-500 transition-colors duration-300 shadow-lg whitespace-nowrap">
              Start Trucking Dispatch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
