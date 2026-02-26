import { useReveal } from '../hooks/useReveal'

const Services = () => {
  const { ref: titleRef, isVisible: titleVisible } = useReveal()
  const { ref: servicesRef, isVisible: servicesVisible } = useReveal()

  const services = [
    {
      title: 'Farm Stay Experience',
      description: 'Immerse yourself in authentic farm life with comfortable accommodations',
      icon: '🌾'
    },
    {
      title: 'Private Events',
      description: 'Host gatherings and celebrations at our beautiful venue',
      icon: '🎉'
    },
    {
      title: 'Nature Activities',
      description: 'Explore bird watching, and outdoor adventures',
      icon: '🏞️'
    },
    {
      title: 'Wellness Retreats',
      description: 'Rejuvenate with yoga sessions and meditation spaces',
      icon: '🧘'
    },
    {
      title: 'Organic Dining',
      description: 'Savor farm-to-table meals with fresh, local ingredients',
      icon: '🥘'
    },
    {
      title: 'Photography Tours',
      description: 'Capture stunning landscapes and rural beauty',
      icon: '📷'
    }
  ]

  return (
    <section id="services" className="py-20 bg-retreat-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-retreat-green mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-retreat-accent mx-auto"></div>
        </div>
        
        <div 
          ref={servicesRef}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-200 ${
            servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-retreat-bg rounded-xl p-8 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="font-display text-2xl font-bold text-retreat-green mb-3">
                {service.title}
              </h3>
              <p className="font-body text-retreat-text">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
