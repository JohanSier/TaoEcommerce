import "./styles/App.css";
import Homepage from "./pages/Homepage";
import ProductsPage from "./pages/ProductsPage"; 
import { Routes, Route } from "react-router";
import RootLayout from "./components/RootLayout"; 
import NotFound from "./pages/NotFound";
import UserPage from "./pages/UserPage";
import SpecificProductTemplate from "./pages/SpecificProductTemplate";
import SizeGuideProvider from "./context/SizeGuideContext";

function App() {
  return (
    <SizeGuideProvider>
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
  );
}

export default App;