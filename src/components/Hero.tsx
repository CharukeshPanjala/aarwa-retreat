import { useReveal } from '../hooks/useReveal'
const images = [
    "/images/lpm1.jpg",
    "/images/lpm2.jpg",,
    "/images/lpm3.jpg",,
    "/images/lpm4.jpg",,
  ];
const randomImage = images[Math.floor(Math.random() * 4)];

const Hero = () => {
  const { ref, isVisible } = useReveal()
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${randomImage || "/images/lpm3.jpg"})`}}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div 
        ref={ref}
        className={`relative z-10 text-center text-white max-w-4xl mx-auto px-6 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="font-display text-5xl md:text-7xl font-bold mb-6">
          Escape to Nature's Embrace
        </h2>
        <p className="font-body text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Aarwa Retreat is a peaceful getaway for stays, celebrations, and meaningful gatherings, blending open spaces with a calm, natural atmosphere.
        </p>
        <button className="bg-retreat-accent hover:bg-retreat-accentSoft px-8 py-4 rounded-full font-body font-medium text-white transition-colors duration-300">
          Discover Your Retreat
        </button>
      </div>
    </section>
  )
}

export default Hero
