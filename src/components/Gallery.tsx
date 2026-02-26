import { useReveal } from '../hooks/useReveal'

const Gallery = () => {
  const { ref: titleRef, isVisible: titleVisible } = useReveal()
  const { ref: galleryRef, isVisible: galleryVisible } = useReveal()

  const images = [
     "/images/g3.jpg",
    "/images/g1.jpg",
    "/images/g2.jpg",
    "/images/g6.jpg",
    "/images/g5.jpg",
    "/images/g4.jpg"
  ]

  return (
    <section id="gallery" className="py-20 bg-retreat-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-retreat-green mb-4">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-retreat-accent mx-auto"></div>
        </div>
        
        <div 
          ref={galleryRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-200 ${
            galleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            >
              <img 
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
