import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';

const MainNavbar = ({ onSearchChange, searchQuery, onBrandSelect, onCategorySelect }) => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showBrandsDropdown, setShowBrandsDropdown] = useState(false);
  const [activeBrandCategory, setActiveBrandCategory] = useState(null);

  // Brand categories data
  const brandCategories = {
    "Men's Wear": ['Utsa', 'W', 'Tommy Hilfiger', 'Puma', 'Levi\'s', 'Jockey'],
    "Women's Wear": ['Biba', 'Forever New', 'Fabindia', 'Vero Moda', 'Ganga Fashion', 'Wunderlove'],
    "Footwear": ['Puma', 'Decathlon', 'Nike', 'Adidas', 'Bata'],
    "Jewellery": ['Tanishq', 'Caratlane', 'Mia by Tanishq', 'Pandora'],
    "Electronics": ['Sony', 'Samsung', 'Bose', 'Apple', 'JBL'],
    "Kids": ['Gini & Jony', 'Allen Solly Junior', 'Pantaloons Kids', 'U.S. Polo Assn. Kids']
  };

  const popularBrands = ['Utsa', 'W', 'Biba', 'Forever New', 'Wardrobe', 'Gia', 'Pantaloons', 'Lifestyle', 'Fabindia', 'Vero Moda', 'Tommy Hilfiger', 'Decathlon', 'Puma', 'Levi\'s', 'Jockey'];
  const featuredBrands = ['Vark', 'Artagai', 'LOV', 'Varanga', 'Aurelia', 'Juniper', 'Yufta', 'Ganga Fashion', 'Cottinfab', 'Aachho', 'Janasya', 'Only', 'Enamor', 'La vie en rose', 'Wunderlove'];

  const handleInputChange = (event) => {
    onSearchChange(event.target.value);
  };

  const handleBrandSelect = (brand) => {
    onBrandSelect(brand);
  };

  const handleCategorySelect = (category) => {
    onCategorySelect(category);
  };

  const handleClickLogin = () => {
    navigate('/login');
  };

  const handleClickAdmin = () => {
    navigate('/AdminMainPage');
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleBrandsDropdown = (show) => {
    setShowBrandsDropdown(show);
    if (!show) {
      setActiveBrandCategory(null);
    }
  };

  return (
    <div className="container-fluid p-0">
      <div className="row g-0" style={{ minHeight: '100px' }}>
        <div className="col-2 d-flex flex-column justify-content-center bg-dark text-white">
          <Navbar expand="lg" variant="dark" className="w-100 p-0">
            <Navbar.Brand href="/" className="d-flex flex-column align-items-center w-100 py-3">
              <div style={{ fontWeight: 'bold', fontSize: '1rem', textAlign: "center" }}>
                TATA<br />CLiQ
              </div>
              <div className="fw-bold" style={{ fontSize: '1.2rem' }}>
                <span style={{ color: '#FF00FF' }}>FASH</span>
                <span style={{ color: '#00BFFF' }}>ION</span>
              </div>
            </Navbar.Brand>
          </Navbar>
        </div>

        <div className="col-10 d-flex flex-column">
          <nav className="navbar navbar-dark bg-dark py-2 w-100">
            <div className="container-fluid d-flex justify-content-between align-items-center">
              <a href="#" className="navbar-brand d-flex align-items-center mb-0 h1">
                <strong>Tata</strong> CLiQ <span style={{ color: '#00bcd4' }}>Luxury</span>
              </a>
              <div className="d-flex align-items-center">
                <a className="nav-link text-white small" href="#">CLiQ Cash</a>
                <a className="nav-link text-white small" href="#">Gift Card</a>
                <a className="nav-link text-white small" href="#">CLiQ Care</a>
                {/* <Link className="nav-link text-white small" Link to="/trackOrder">Track Orders</Link> */}
<li className="nav-link text-white small"><Link className="nav-link text-white small" to="trackOrder">Track Orders</Link></li>

                <div className="position-relative ms-3">
                  <div className="d-flex align-items-center" onClick={toggleDropdown} style={{ cursor: 'pointer' }}>
                    <button className="btn btn-light btn-sm rounded-circle me-2" style={{ width: '30px', height: '30px' }}>
                      <i className="bi bi-person-fill"></i>
                    </button>
                    <span className="text-white small">Sign In / Sign Out</span>
                    <i className="bi bi-caret-down-fill text-white ms-1"></i>
                  </div>
                  {showDropdown && (
                    <div className="dropdown-menu dropdown-menu-end show mt-2" style={{ position: 'absolute', right: 0 }}>
                      <button className="dropdown-item" onClick={handleClickLogin}>Sign In</button>
                      <button className="dropdown-item">Sign Out</button>
                      <button className="dropdown-item" onClick={handleClickAdmin}>Admin</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </nav>

          <nav className="navbar navbar-dark bg-dark py-2 w-100">
            <div className="container-fluid d-flex justify-content-between align-items-center flex-wrap">

              <div className="d-flex align-items-center mb-2 mb-md-0">
                <div className="dropdown me-3">
                  <button className="btn btn-dark dropdown-toggle p-0 small" type="button" data-bs-toggle="dropdown">
                    Categories
                  </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); handleCategorySelect("Men Clothes"); }}>Men</a></li>
                    <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); handleCategorySelect("Women Clothes"); }}>Women</a></li>
                    <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); handleCategorySelect("jewelery"); }}>jewelery</a></li>
                    <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); handleCategorySelect("electronics"); }}>electronics</a></li>
                  </ul>
                </div>

                <div 
                  className="dropdown me-3" 
                  onMouseEnter={() => toggleBrandsDropdown(true)}
                  onMouseLeave={() => toggleBrandsDropdown(false)}
                >
                  <button className="btn btn-dark dropdown-toggle p-0 small" type="button">
                    Brands
                  </button>
                  {showBrandsDropdown && (
                    <div 
                      className="dropdown-menu show p-0" 
                      style={{ 
                        width: '700px',
                        display: 'flex',
                        border: 'none',
                        boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                        animation: 'fadeIn 0.3s ease-out'
                      }}
                    >
                      <div 
                        className="bg-light" 
                        style={{
                          width: '200px',
                          borderRight: '1px solid #eee',
                          padding: '15px 0'
                        }}
                      >
                        {Object.keys(brandCategories).map(category => (
                          <div 
                            key={category}
                            className={`px-3 py-2 ${activeBrandCategory === category ? 'bg-white text-primary' : ''}`}
                            style={{
                              cursor: 'pointer',
                              transition: 'all 0.2s',
                              borderLeft: activeBrandCategory === category ? '3px solid #00bcd4' : '3px solid transparent'
                            }}
                            onMouseEnter={() => setActiveBrandCategory(category)}
                          >
                            {category}
                            <i className="bi bi-chevron-right float-end"></i>
                          </div>
                        ))}
                      </div>
                      <div 
                        className="flex-grow-1 p-3" 
                        style={{
                          minHeight: '300px',
                          backgroundColor: 'white'
                        }}
                      >
                        {activeBrandCategory ? (
                          <>
                            <h6 className="mb-3" style={{ color: '#00bcd4' }}>{activeBrandCategory}</h6>
                            <div className="row">
                              {brandCategories[activeBrandCategory].map(brand => (
                                <div 
                                  key={brand} 
                                  className="col-4 mb-2"
                                  onClick={() => handleBrandSelect(brand)}
                                  style={{
                                    cursor: 'pointer',
                                    transition: 'all 0.2s',
                                    padding: '5px 10px',
                                    borderRadius: '4px'
                                  }}
                                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
                                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                >
                                  {brand}
                                </div>
                              ))}
                            </div>
                          </>
                        ) : (
                          <div className="d-flex h-100 align-items-center justify-content-center">
                            <div className="text-muted">Select a category to view brands</div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex-grow-1 mx-3" style={{ maxWidth: '500px' }}>
                <div className="input-group">
                  <span className="input-group-text bg-dark border-0">
                    <i className="bi bi-search text-muted"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control bg-secondary border-0 text-white"
                    placeholder="Search for Categories"
                    style={{ height: '40px' }}
                    value={searchQuery}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="d-flex align-items-center">
                <Link to="/cart" className="btn btn-outline-light me-2">
                  <i className="fas fa-shopping-bag"></i>
                </Link>
                <Link to="/wishlist" className="btn btn-outline-light">
                  <i className="far fa-heart"></i>
                </Link>
              </div>

            </div>
          </nav>

        </div>
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .dropdown-menu {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default MainNavbar;