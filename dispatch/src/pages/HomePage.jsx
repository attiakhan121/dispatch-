import React, { useState, useEffect } from 'react';
import homepageVideo from '../assets/homepageVideo.mp4';
import {
  ChevronUp,
  ChevronDown,
  Youtube,
  Linkedin,
  Facebook,
} from 'lucide-react';
import { FaqsData } from '../components/FaqsData';
import { FaqsCard } from '../components/FaqsCard';

function HomePage() {
  const [openSection, setOpenSection] = useState(null);
  const [truckPosition, setTruckPosition] = useState(0);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [openFaqId, setOpenFaqId] = useState(null);

  const handleDropdownClick = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const handleFaqToggle = (id) => {
    setOpenFaqId((prevId) => (prevId === id ? null : id));
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 500;
      setTruckPosition(Math.min(scrollY, maxScroll));
      setShowScrollToTop(scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll to next section
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('what-we-do');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Split FAQs into two columns
  const FaqsColumn1 = FaqsData.slice(0, 3);
  const FaqsColumn2 = FaqsData.slice(3, 6);

  return (
    <div className="min-h-screen bg-[#002147] text-white font-sans antialiased">

      {/* Hero Section */}
      <section
        id="hero"
        className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
          src={homepageVideo}
        >
          Video not supported
        </video>
        <div className="absolute inset-0 bg-black opacity-50" />

        <div className="relative z-10 w-full h-full">
          {/* Main Content */}
          <div className="absolute top-1/3 left-4 sm:left-8 md:left-16 lg:left-60 transform -translate-y-1/2 max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 leading-tight">
              Truck Dispatch Services
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-light opacity-90 mb-8 max-w-xl">
              We provide high-quality freight dispatch service for interstate
              carriers and fleet owners in the USA and Canada
            </p>
            <div className="text-center lg:text-left">
              <button className="px-6 sm:px-8 py-3 bg-orange-400 text-white rounded-full text-base sm:text-lg shadow-lg hover:bg-orange-500 transition duration-300 cursor-pointer">
                Start Trucking Dispatch
              </button>
            </div>
          </div>

          <div className="absolute bottom-16 sm:bottom-20 md:bottom-28 left-4 sm:left-8 md:left-16 lg:left-60 hidden lg:block">
            <div className="flex items-center">
              <div className="flex space-x-4 sm:space-x-6 mr-8">
                {[
                  { icon: Youtube, label: 'YouTube' },
                  { icon: Linkedin, label: 'LinkedIn' },
                  { icon: Facebook, label: 'Facebook' },
                ].map(({ icon: Icon, label }, i) => (
                  <a
                    key={i}
                    href="#"
                    className="bg-orange-400 text-black hover:bg-orange-300 transition-colors duration-200 p-2 sm:p-3 rounded"
                    aria-label={label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
              <hr className="border-t border-orange-400 w-32 sm:w-48" />
            </div>
          </div>

          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
            <button
              onClick={scrollToNextSection}
              className="text-white hover:text-orange-400 transition-colors duration-300 animate-bounce"
              aria-label="Scroll to next section"
            >
              <ChevronDown className="w-8 h-8" />
            </button>
          </div>
        </div>
      </section>

      {/* Section 2 - What We Do */}
      <section
        id="what-we-do"
        className="relative h-screen flex items-center justify-center py-20 px-10 overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://resolute-logistics.com/optimized/uploads/main_page/what-we-do-bg_320.jpg')`,
          }}
        />
        <h1 className="relative z-10 text-4xl font-bold text-white">
          What does truck dispatching include
        </h1>
      </section>

      {/* Section 3 - Specialities */}
      <section
        id="specialities"
        className="py-20 px-10 bg-gray-100 text-gray-800 text-center"
      >
        <h2 className="text-4xl font-bold mb-4">Specialities</h2>
      </section>

      {/* Section 4 - Workflow */}
      <section
        id="work-flow"
        className="relative py-20 px-10 flex items-center justify-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://resolute-logistics.com/optimized/uploads/main_page/how_we_work_bg_1200@2x.webp')`,
          }}
        />
        <h2 className="relative z-10 text-4xl font-bold text-white">
          Work Flow
        </h2>
      </section>

      {/* Section 5 - Why Choose Us */}
      <section
        id="why-choose-us"
        className="relative py-20 px-10 flex items-center justify-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://resolute-logistics.com/optimized/uploads/main_page/whyChooseUs-bg_1366@2x.webp')`,
          }}
        />
        <h2 className="relative z-10 text-4xl font-bold text-white">
          Why choose Resolute Logistics
        </h2>
      </section>

      {/* Section 6 - Prices */}
      <section
        id="prices"
        className="py-20 px-10 bg-gray-100 text-gray-800 text-center"
      >
        <h2 className="text-4xl font-bold mb-4">Prices</h2>
      </section>

      {/* Section 7 - Testimonials */}
      <section
        id="testimonials"
        className="py-20 px-10 bg-[#002147] text-white text-center"
      >
        <h2 className="text-4xl font-bold mb-4">Testimonials</h2>
      </section>

      {/* Section 8 - FAQs */}
      <section
        id="faqs"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-[#002140] text-white"
      >
        <div className="w-full max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              FAQs about Trucking Dispatch
            </h1>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-300 leading-relaxed">
              Before you start working with Resolute Logistics, you may be
              interested in some questions about truck dispatch. We have
              collected the most popular ones here:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {[FaqsColumn1, FaqsColumn2].map((column, i) => (
              <div key={i} className="space-y-4">
                {column.map((faq) => (
                  <FaqsCard
                    key={faq.id}
                    faq={faq}
                    isOpen={openFaqId === faq.id}
                    onClick={() => handleFaqToggle(faq.id)}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-orange-400 text-[#002147] p-3 rounded-xl shadow-lg hover:bg-orange-300 transition-colors duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}

export default HomePage;
