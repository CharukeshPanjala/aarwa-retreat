const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-retreat-green text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="font-display text-2xl font-bold mb-4">
            Aarwa Retreat
          </h3>
          <p className="font-body text-sm opacity-80 mb-6">
            Your sanctuary in nature's embrace
          </p>
          <div className="flex justify-center space-x-8 mb-8">
            <a href="#home" className="hover:text-retreat-accentSoft transition-colors duration-300">Home</a>
            <a href="#about" className="hover:text-retreat-accentSoft transition-colors duration-300">About</a>
            <a href="#services" className="hover:text-retreat-accentSoft transition-colors duration-300">Services</a>
            <a href="#pricing" className="hover:text-retreat-accentSoft transition-colors duration-300">Pricing</a>
            <a href="#contact" className="hover:text-retreat-accentSoft transition-colors duration-300">Contact</a>
          </div>
          <div className="border-t border-retreat-greenSoft pt-6 mt-6">
            <p className="font-body text-sm opacity-70">
              © Aarwa Retreat. Established in 2026.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
