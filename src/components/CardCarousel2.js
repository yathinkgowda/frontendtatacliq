import React, { useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const cardData = [
  {
    
    img: 'https://assets.tatacliq.com/medias/sys_master/images/63588842897438.png',
  },
  {
    
    img: 'https://assets.tatacliq.com/medias/sys_master/images/63588842962974.png',
  },
  {
    
    img: 'https://assets.tatacliq.com/medias/sys_master/images/63588843028510.png',
  },
  {
    
    img: 'https://assets.tatacliq.com/medias/sys_master/images/63588843094046.png',
  },
  {
    
    img: 'https://assets.tatacliq.com/medias/sys_master/images/63588843290654.png',
  },
//   {
//     title: 'ANARKALIS',
//     subtitle: 'UP TO 70% OFF',
//     img: 'https://via.placeholder.com/300x400?text=Anarkalis',
//   },
  {
    title: 'COTTON SUITS',
    subtitle: 'UP TO 70% OFF',
    img: 'https://assets.tatacliq.com/medias/sys_master/images/63588843225118.png',
  },
  {
    title: 'PARTY WEAR',
    subtitle: 'UP TO 70% OFF',
    img: 'https://assets.tatacliq.com/medias/sys_master/images/63588843159582.png',
  },
  {
    title: 'PARTY WEAR',
    subtitle: 'UP TO 70% OFF',
    img: 'https://assets.tatacliq.com/medias/sys_master/images/63588842897438.png',
  },
];

const CardCarousel2 = () => {
  const [startIndex, setStartIndex] = useState(0);
  const cardsToShow = 4;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, cardData.length - cardsToShow));
  };

  const visibleCards = cardData.slice(startIndex, startIndex + cardsToShow);

  return (
    <div className="position-relative px-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Button variant="light" onClick={handlePrev}><FaChevronLeft size={24} /></Button>
        <Button variant="light" onClick={handleNext}><FaChevronRight size={24} /></Button>
      </div>

      <Row className="g-3">
        {visibleCards.map((card, idx) => (
          <Col key={idx} md={3}>
            <Card
              className="text-white border-0 shadow card-hover"
              style={{
                height: '100%',
                cursor: 'pointer',
                borderRadius: '20px',
                overflow: 'hidden',
              }}
              onClick={() => alert(`Clicked: ${card.title}`)}
            >
              <Card.Img
                src={card.img}
                alt={card.title}
                style={{
                  height: '350px',
                  objectFit: 'cover',
                  borderRadius: '20px 20px 0 0',
                }}
              />
              <Card.ImgOverlay className="d-flex flex-column justify-content-end bg-gradient p-3">
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.subtitle}</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>

      <style>{`
        .card-hover {
          transition: transform 0.3s ease;
        }
        .card-hover:hover {
          transform: scale(1.03);
        }
        .bg-gradient {
          background: linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0));
        }
        .card-hover .card-img-overlay {
          border-radius: 0 0 20px 20px;
        }
      `}</style>
    </div>
  );
};

export default CardCarousel2;
