import "./styles/App.css";
import Homepage from "./pages/Homepage";
import ProductsPage from "./pages/ProductsPage"; 
import { Routes, Route } from "react-router";
import RootLayout from "./components/RootLayout"; 
import NotFound from "./pages/NotFound";
import UserPage from "./pages/UserPage";
import SpecificProductTemplate from "./pages/SpecificProductTemplate";
import SizeGuideProvider from "./context/SizeGuideContext";
import { CartProvider } from "./context/CartContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Checkout from "./pages/Checkout";
import PaymentSuccess from "./pages/PaymentSuccess";

function App() {
  return (
    <CartProvider>
      <SizeGuideProvider>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Homepage />} />
            <Route path="products/:category" element={<ProductsPage />}/>
            <Route path="/products/:category/:id" element={<SpecificProductTemplate />} />
            <Route path="log-in" element={<UserPage />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="payment-success" element={<PaymentSuccess />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </SizeGuideProvider>
    </CartProvider>
  );
}

export default App;