import { useReveal } from '../hooks/useReveal'

export default function Pricing() {
  const { ref} = useReveal() 
  return (
    <section id='pricing' className="py-24 px-6 bg-retreat-surface text-center">
    < div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000
          }`}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-retreat-green mb-4">
            Pricing
          </h2>
          <div className="w-24 h-1 bg-retreat-accent mx-auto"></div>
        </div>
      <p className="text-2xl mb-2">
        Starting at just{" "}
        <span className="text-retreat-accent font-medium">
          ₹11,000
        </span>{" "}
        per night
      </p>

      <p className="text-retreat-text/60 mb-8">
        Perfect for stays, celebrations & gatherings
      </p>

      <a
        href="https://wa.me/919392883084?text=Hi%2C%20I%E2%80%99d%20like%20to%20know%20availability%20for%20a%20stay%2Fevent%20at%20Aarwa%20Retreat."
        className="inline-block bg-retreat-green text-white px-6 py-3"
      >
        Check Availability
      </a>
    </section>
  );
}