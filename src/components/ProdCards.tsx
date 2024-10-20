import { useEffect, useState } from "react";

type TabType = 'essentials' | 'bestsellers' | 'foryou';

interface CarouselImage {
  src: string;
  alt: string;
  category: TabType;
}

const images: CarouselImage[] = [
  { src: "../src/assets/BH1paper.webp", alt: "Restaurant Essentials 1", category: 'essentials' },
  { src: "../src/assets/bento.webp", alt: "Restaurant Essentials 2", category: 'essentials' },
  { src: "../src/assets/bhcompfam.webp", alt: "Restaurant Essentials 3", category: 'essentials' },
  { src: "../src/assets/bento.webp", alt: "Best Sellers 1", category: 'bestsellers' },
  { src: "../src/assets/BH1paper.webp", alt: "Best Sellers 2", category: 'bestsellers' },
  { src: "../src/assets/BH1paper.webp", alt: "For You 1", category: 'foryou' },
  { src: "../src/assets/bhcompfam.webp", alt: "For You 2", category: 'foryou' },
];

const Carousel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('essentials');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const filteredImages = images.filter(img => img.category === activeTab);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === filteredImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? filteredImages.length - 1 : prevIndex - 1
    );
  };

  const TabButton: React.FC<{ tab: TabType; label: string }> = ({ tab, label }) => (
    <button
      onClick={() => {
        setActiveTab(tab);
        setCurrentIndex(0);
      }}
      className={`px-4 py-2 font-semibold ${
        activeTab === tab
          ? 'text-black border-b-2 border-sky-300'
          : 'text-gray-500 hover:text-gray-700'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-center space-x-4 mb-4">
        <TabButton tab="essentials" label="Restaurant Essentials" />
        <TabButton tab="bestsellers" label="Best Sellers" />
        <TabButton tab="foryou" label="For You" />
      </div>
      <div className="relative">
        <div className="overflow-hidden rounded-lg">
          <div className="flex transition-transform duration-300 ease-in-out" 
               style={{ transform: `translateX(-${isMobile ? currentIndex * 100 : Math.floor(currentIndex / 3) * 100}%)` }}>
            {filteredImages.map((image, index) => (
              <div key={index} className={`${isMobile ? 'w-full' : 'w-1/3'} flex-shrink-0 p-2`}>
                <img src={image.src} alt={image.alt} className="w-full h-auto object-cover rounded-lg" />
              </div>
            ))}
          </div>
        </div>
        {isMobile && (
          <>
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Carousel;