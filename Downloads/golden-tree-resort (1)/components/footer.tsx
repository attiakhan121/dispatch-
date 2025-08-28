export default function Footer() {
  return (
    <footer className="bg-card/50 py-12 relative overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="floating-particles"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-playfair text-gradient-gold mb-4">Goldtree Club</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Where luxury meets nature, and every moment becomes a cherished memory. Experience the pinnacle of
              hospitality at Goldtree Club Resort.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#home" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#suites" className="hover:text-primary transition-colors">
                  Suites
                </a>
              </li>
              <li>
                <a href="#dining" className="hover:text-primary transition-colors">
                  Dining
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Spa & Wellness
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Fine Dining
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Water Sports
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Event Planning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Concierge
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Goldtree Club Resort. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
}
