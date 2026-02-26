import { useReveal } from '../hooks/useReveal'

const About = () => {
  const { ref: titleRef, isVisible: titleVisible } = useReveal()
  const { ref: contentRef, isVisible: contentVisible } = useReveal()

  return (
    <section id="about" className="py-20 bg-retreat-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-retreat-green mb-4">
            About Aarwa Retreat
          </h2>
          <div className="w-24 h-1 bg-retreat-accent mx-auto"></div>
        </div>
        
        <div 
          ref={contentRef}
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-200 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div>
            <h3 className="font-display text-3xl font-bold text-retreat-green mb-6">
              A Haven of Peace & Tranquility
            </h3>
            <p className="font-body text-lg text-retreat-text mb-6 leading-relaxed">
              Nestled in the serene countryside, Aarwa Retreat offers an escape from the hustle and bustle of city life. Our farmhouse combines peaceful atmosphere with modern amenities, creating the perfect sanctuary for relaxation and rejuvenation.
            </p>
            <p className="font-body text-lg text-retreat-text leading-relaxed">
              Whether you're seeking a peaceful weekend getaway, a venue for gatherings, or simply a place to reconnect with nature, Aarwa Retreat provides an unforgettable experience in a stunning natural setting.
            </p>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="/images/about.jpg" 
              alt="Aarwa Retreat" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
