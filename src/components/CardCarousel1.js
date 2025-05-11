import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const cardsData = [
  { title: '', image: 'https://assets.tatacliq.com/medias/sys_master/images/64002753560606.png' },
  { title: '', image: 'https://assets.tatacliq.com/medias/sys_master/images/63588842962974.png' },
  { title: '', image: 'https://assets.tatacliq.com/medias/sys_master/images/63588843028510.png' },
  { title: '', image: 'https://assets.tatacliq.com/medias/sys_master/images/63588843094046.png' },
  { title: '', image: 'https://assets.tatacliq.com/medias/sys_master/images/63588843290654.png' },
  { title: '', image: 'https://assets.tatacliq.com/medias/sys_master/images/63588843225118.png' },
  { title: '', image: 'https://assets.tatacliq.com/medias/sys_master/images/63588843159582.png' },
  { title: '', image: 'https://assets.tatacliq.com/medias/sys_master/images/63588842897438.png' },
];

function CardCarousel1() {
  const carouselRef = useRef(null);

  const handleCardClick = (card) => {
    console.log('Card clicked:', card.title);
  };

  const scroll = (direction) => {
    const container = carouselRef.current;
    const scrollAmount = 220;
    container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className="position-relative">
      {/* Left Arrow */}
      <button
        className="btn btn-light position-absolute top-50 start-0 translate-middle-y z-1 shadow"
        style={{ borderRadius: '50%' }}
        onClick={() => scroll('left')}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      {/* Card Container */}
      <div
        className="d-flex flex-nowrap gap-3 py-4"
        ref={carouselRef}
        style={{
          overflowX: 'hidden',
          scrollBehavior: 'smooth',
          padding: '0 40px',
        }}
      >
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="card text-white position-relative"
            onClick={() => handleCardClick(card)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            style={{
              minWidth: '200px',
              maxWidth: '200px',
              border: 'none',
              borderRadius: '20px',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
          >
            <img
              src={card.image}
              className="card-img"
              alt={card.title}
              style={{
                borderRadius: '20px',
                objectFit: 'cover',
                height: '100%',
              }}
            />
            <div
              className="card-img-overlay d-flex align-items-end"
              style={{
                background: 'linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent)',
                borderRadius: '20px',
              }}
            >
              <h5 className="card-title m-3">{card.title}</h5>
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        className="btn btn-light position-absolute top-50 end-0 translate-middle-y z-1 shadow"
        style={{ borderRadius: '50%' }}
        onClick={() => scroll('right')}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

      {/* Heading */}
      <div>
        <h1 style={{ paddingTop: '30px', paddingBottom: '30px' }}>
          Indianwear Reimagined
        </h1>
      </div>

{/* <div>
    <img src="//assets.tatacliq.com/medias/sys_master/images/63588842831902.png"/>
</div> */}

    </div>
  );
}

export default CardCarousel1;
