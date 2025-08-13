// src/components/ScrollToTopButton.js

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollUp() {
  const [showButton, setShowButton] = useState(false);

  // This function scrolls the window back to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // This function shows/hides the button based on scroll position
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener("scroll", toggleVisibility);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-orange-400 text-[#002147] p-3 rounded-xl shadow-lg hover:bg-orange-500 transition-colors duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
}