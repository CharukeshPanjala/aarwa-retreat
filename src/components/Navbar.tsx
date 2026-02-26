import { useNavbarScroll } from '../hooks/useNavbarScroll'

const Navbar = () => {
  const isScrolled = useNavbarScroll()

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' }
  ]
return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-retreat-surface shadow-lg py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className={`font-display text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-retreat-green' : 'text-white'
            }`}>
              Aarwa Retreat
            </h1>
          </div>
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
          <button className="md:hidden">
            <svg className={`w-6 h-6 ${isScrolled ? 'text-retreat-green' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejo
  in="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
