import React from 'react';
import './CardCarousel.css'; // For custom styles

const cardData = [
  {
    // brand: 'Libas',
    // discount: 'MIN. 50% OFF',
    image: 'https://assets.tatacliq.com/medias/sys_master/images/63588841586718.jpg', // Replace with actual image
  },
  {
    // brand: 'VERO MODA',
    // discount: 'MIN. 30% OFF',
    image: 'https://assets.tatacliq.com/medias/sys_master/images/63588841652254.jpg',
  },
  {
    // brand: "Levi's",
    // discount: 'MIN. 50% OFF',
    image: 'https://assets.tatacliq.com/medias/sys_master/images/63588841717790.jpg',
  },
  {
    brand: 'Adidas',
    discount: 'MIN. 50% OFF',
    image: 'https://assets.tatacliq.com/medias/sys_master/images/63588841848862.jpg',
  },

 
];

const CardCarousel = () => {
  const handleClick = (brand) => {
    console.log(`Card clicked: ${brand}`);
    // You can route or do more here
  };

  return (
    <div className="container py-4">
      <div className="row g-3 justify-content-center">
        {cardData.map((card, index) => (
          <div key={index} className="col-6 col-sm-3">
            <div
              className="brand-card"
              onClick={() => handleClick(card.brand)}
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <div className="overlay">
                <h5>{card.brand}</h5>
                <p>{card.discount}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img style={{ paddingTop: '50px' }} src="//assets.tatacliq.com/medias/sys_master/images/64829260726302.jpg" alt="Banner" />
     
     <div style={{paddingTop:"30px",paddingBottom:"30px"}}>
      <h1>
        The Website Store
      </h1>
     </div>
      </div>

  




  );
};

export default CardCarousel;
