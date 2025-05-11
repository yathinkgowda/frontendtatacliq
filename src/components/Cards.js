import React from 'react';

function Cards() {
  const images = [
    'https://assets.tatacliq.com/medias/sys_master/images/63600370974750.png',
    'https://assets.tatacliq.com/medias/sys_master/images/63600371040286.png',
    'https://assets.tatacliq.com/medias/sys_master/images/63600371105822.png',
    'https://assets.tatacliq.com/medias/sys_master/images/63600371171358.png',
    'https://assets.tatacliq.com/medias/sys_master/images/63600371236894.png',
    'https://assets.tatacliq.com/medias/sys_master/images/63600371302430.png',
    'https://assets.tatacliq.com/medias/sys_master/images/63600371367966.png',
    'https://assets.tatacliq.com/medias/sys_master/images/63600371433502.png',
    'https://assets.tatacliq.com/medias/sys_master/images/63600371499038.png',
    'https://assets.tatacliq.com/medias/sys_master/images/63600371564574.png',
    'https://assets.tatacliq.com/medias/sys_master/images/63600371630110.png',
  ];

  const handleCardClick = (imageUrl, index) => {
    console.log(`Card ${index + 1} clicked: ${imageUrl}`);
    // Example: navigate, open modal, or set selected image state
    // navigate(`/details/${index}`);
  };

  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'nowrap', overflowX: 'auto', padding: '1rem' }}>
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className="hover-card"
            onClick={() => handleCardClick(imageUrl, index)}
            style={{
              width: '180px',
              height: '120px',
              marginRight: '1rem',
              overflow: 'hidden',
              border: 'none',
              borderRadius: '8px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
          >
            <img
              src={imageUrl}
              alt={`Card ${index + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          marginTop: '20px',
        }}
      >
        <div>
          <img
            src="https://assets.tatacliq.com/medias/sys_master/images/64684496584734.jpg"
            alt="Image 1"
            style={{ width: '100%', height: 'auto', maxWidth: '300px' }}
          />
        </div>
        <div>
          <img
            src="https://assets.tatacliq.com/medias/sys_master/images/62309792808990.jpg"
            alt="Image 2"
            style={{ width: '100%', height: 'auto', maxWidth: '300px' }}
          />
        </div>
      </div>

      <div style={{ paddingTop: '30px', paddingBottom: '30px', textAlign: 'center' }}>
        <h1>Best Brands on Offer</h1>
      </div>

      <style>{`
        .hover-card:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          cursor: pointer;
        }
      `}</style>
    </>
  );
}

export default Cards;
