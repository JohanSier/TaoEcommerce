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
          
          {/* Página 404 cuando no hay coincidencias */}
          <Route path="*" element={<NotFound />} />
        </Route>

      </Routes>
      </SizeGuideProvider>
    </CartProvider>
  );
}

export default App;