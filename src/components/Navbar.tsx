import { useState } from 'react'
import { useNavbarScroll } from '../hooks/useNavbarScroll'

const Navbar = () => {
  const isScrolled = useNavbarScroll()
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-retreat-surface shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <h1
            className={`font-display text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-retreat-green' : 'text-white'
            }`}
          >
            Aarwa Retreat
          </h1>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-body font-medium transition-colors duration-300 hover:text-retreat-accent ${
                  isScrolled ? 'text-retreat-greenSoft' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className={`w-6 h-6 ${
                isScrolled ? 'text-retreat-green' : 'text-white'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 ease-out ${
            isOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <div className="mx-4 mt-3 rounded-2xl bg-retreat-surface/95 shadow-xl border border-retreat-green/10">
            <div className="py-4">
              {navLinks.map((link, index) => (
                <div key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-6 py-4 text-retreat-green text-lg font-medium tracking-wide hover:text-retreat-accent transition-colors duration-300"
                  >
                    {link.label}
                  </a>

                  {/* Divider line (not after last item) */}
                  {index !== navLinks.length - 1 && (
                    <div className="mx-6 h-px bg-retreat-green/10"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar