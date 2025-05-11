import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Register from "./login/Register"
import Login from './login/Login'; 
import ForgotPassword from './login/ForgotPassword'
import ResetPassword from './login/ResetPassword'
import CartDetails from './pages/CartDetails';
import Details from './pages/Details';
import ProductSection from './components/ProductSection';
import CardCarousel from './components/CardCarousel';
import CardCarousel1 from './components/CardCarousel1'
import CardCarousel2 from './components/CardCarousel2'
import WishList from './pages/Wishlist';
import Admin from './pages/Admin';
import AdminMainPage from './Admin/AdminMainBanner';
import trackOrder from './pages/trackOrder'
import PaymentPage from './components/PaymentPage';
import UPIPaymentForm from './components/UPIPaymentForm';
import CardPaymentForm from './components/CardPaymentForm';
import AdminOrders from './pages/AdminOrders';

// Load Stripe with your publishable key
const stripePromise = loadStripe("YOUR_PUBLISHABLE_KEY");

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Wrap only the routes that need Stripe with Elements provider */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/cart" element={<CartDetails/>} />
          <Route path="/ProductSection" element={<ProductSection/>} />
          <Route path="/Details" element={<Details/>} />
          <Route path="/CardCarousel" element={<CardCarousel/>} />
          <Route path="/CardCarousel1" element={<CardCarousel1/>} />
          <Route path="/CardCarousel2" element={<CardCarousel2/>} />
          <Route path="ResetPassword" element={<ResetPassword/>} />
          <Route path="/WishList" element={<WishList />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/AdminMainPage" element={<AdminMainPage />} />
          <Route path="/trackOrder" element={<trackOrder />} />
          <Route path="/AdminOrders" element={<AdminOrders />} />
          
          {/* Wrap payment-related routes with Elements */}
          <Route path="/PaymentPage" element={
            <Elements stripe={stripePromise}>
              <PaymentPage />
            </Elements>
          } />
          
          <Route path="/UPIPaymentForm" element={<UPIPaymentForm />} />
          
          <Route path="/CardPaymentForm" element={
            <Elements stripe={stripePromise}>
              <CardPaymentForm />
            </Elements>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;