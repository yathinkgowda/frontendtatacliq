import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import MainNavbar from '../components/MainNavbar';
import Carousel from '../components/Carousel'; 
import Cards from '../components/Cards';
import ProductSection from "../components/ProductSection";
import CardCarousel from '../components/CardCarousel';
import CardCarousel1 from '../components/CardCarousel1';
import CardCarousel2 from '../components/CardCarousel2';







function Home() {
  const [users, setUsers] = useState([]); 
  const [message, setMessage] = useState(''); 
  const [product, setProduct] = useState([]);   // <<-- must be []
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  


console.log(product,'productproductproduct')
useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await axios.get('http://localhost:4500/auth/product');
        
        setProduct(res?.data);
      } catch (err) {
        setMessage(err.response?.data?.message || 'Failed to fetch products');
      }
    }
    fetchProduct();
  }, []);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await axios.get('http://localhost:4500/auth/user');
        setUsers(res.data.users);
      } catch (err) {
        setMessage(err.response?.data?.message || 'Failed to fetch users');
      }
    }
    fetchUsers();
  }, []);

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    filterProducts(query, selectedBrand, selectedCategory);   // pass ALL
  };

  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand);
    filterProducts(searchQuery, brand, selectedCategory);    // pass ALL
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    filterProducts(searchQuery, selectedBrand, category);    // pass ALL
  };

  const filterProducts = (query, brand, category) => {
    const filtered = product?.filter((product) => {
      const matchesSearch =
        product?.name?.toLowerCase()?.includes(query.toLowerCase()) ||
        product.category.toLowerCase()?.includes(query.toLowerCase()) ||
        product?.brand?.toLowerCase()?.includes(query.toLowerCase());

      const matchesBrand = brand ? product?.brand?.toLowerCase() === brand?.toLowerCase() : true;
      const matchesCategory = category ? product?.category?.toLowerCase() === category?.toLowerCase() : true;
     
      return matchesSearch && matchesBrand && matchesCategory;
    });
    setFilteredProducts(filtered);
    console.log(filtered,"www")
  };
  console.log(filteredProducts,"qqqqq")
  useEffect(() => {
    setFilteredProducts(product);
  }, [product]);

  return (
    <div>
      <MainNavbar  
        onSearchChange={handleSearchChange} 
        searchQuery={searchQuery} 
        onBrandSelect={handleBrandSelect} 
        selectedBrand={selectedBrand} 
        onCategorySelect={handleCategorySelect}
      />
      
      {(searchQuery.trim() === '' && selectedBrand.trim() === '' && selectedCategory.trim() === '') && <Carousel />}
      {(searchQuery.trim() === '' && selectedBrand.trim() === '' && selectedCategory.trim() === '') && <Cards />}
      {(searchQuery.trim() === '' && selectedBrand.trim() === '' && selectedCategory.trim() === '') && < CardCarousel/>}
      {(searchQuery.trim() === '' && selectedBrand.trim() === '' && selectedCategory.trim() === '') && < CardCarousel1/>}
      {(searchQuery.trim() === '' && selectedBrand.trim() === '' && selectedCategory.trim() === '') && < CardCarousel2/>}
    
      
      
      <ProductSection Product={filteredProducts}/>

   
  
    </div>
  );
}

export default Home;



// let getproducts = () => {
//   fetch('https://fakestoreapi.com/products')
//   .then(response => response.json())
//   .then(data => setProducts(data))
//  }

//  useEffect(getproducts,[])


// useEffect(() => {
//   async function fetchUsers() {
//     try {
//       const res = await axios.get('http://localhost:4500/auth/user');
//       setUsers(res.data.users);
//     } catch (err) {
//       setMessage(err.response?.data?.message || 'Failed to fetch users');
//     }
//   }
//   fetchUsers();
// }, []); 













// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// import MainNavbar from '../components/MainNavbar';
// import Carousel from '../components/Carousel';
// import Cards from '../components/Cards';
// import CardCarousel from '../components/CardCarousel';
// import CardCarousel1 from '../components/CardCarousel1';
// import CardCarousel2 from '../components/CardCarousel2';
// import ProductSection from "../components/ProductSection";
// import AdminProductList from '../components/AdminProductList';
// import AdminCartView from '../components/AdminCartView';

// function Home() {
//   const [products, setProducts] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [selectedBrand, setSelectedBrand] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('');

//   // ✅ Fetch products
//   const getProducts = () => {
//     fetch('https://fakestoreapi.com/products')
//       .then(response => response.json())
//       .then(data => {
//         console.log("Fetched products:", data);
//         setProducts(data);
//       })
//       .catch(err => console.error("Error fetching products:", err));
//   };

//   useEffect(() => {
//     getProducts();
//   }, []);

//   // ✅ Filter products
//   const filterProducts = (query, brand, category) => {
//     const filtered = products.filter((product) => {
//       const matchesSearch =
//         product.title.toLowerCase().includes(query.toLowerCase()) ||
//         product.category.toLowerCase().includes(query.toLowerCase());

//       const matchesBrand = brand ? product.category.toLowerCase() === brand.toLowerCase() : true;
//       const matchesCategory = category ? product.category.toLowerCase() === category.toLowerCase() : true;

//       return matchesSearch && matchesBrand && matchesCategory;
//     });

//     setFilteredProducts(filtered);
//   };

//   const handleSearchChange = (query) => {
//     setSearchQuery(query);
//     filterProducts(query, selectedBrand, selectedCategory);
//   };

//   const handleBrandSelect = (brand) => {
//     setSelectedBrand(brand);
//     filterProducts(searchQuery, brand, selectedCategory);
//   };

//   const handleCategorySelect = (category) => {
//     setSelectedCategory(category);
//     filterProducts(searchQuery, selectedBrand, category);
//   };

//   useEffect(() => {
//     setFilteredProducts(products);
//   }, [products]);

//   const showCarousels = !searchQuery && !selectedBrand && !selectedCategory;

//   return (
//     <div>
//       <MainNavbar  
//         onSearchChange={handleSearchChange} 
//         searchQuery={searchQuery} 
//         onBrandSelect={handleBrandSelect} 
//         selectedBrand={selectedBrand} 
//         onCategorySelect={handleCategorySelect} 
//       />

//       {showCarousels && <Carousel />}
//       {showCarousels && <Cards />}
//       {showCarousels && <CardCarousel />}
//       {showCarousels && <CardCarousel1 />}
//       {showCarousels && <CardCarousel2 />}
//       <AdminProductList />
//       <hr />
//       <AdminCartView />

//       <ProductSection products={filteredProducts} />
//     </div>
//   );
// }

// export default Home;

