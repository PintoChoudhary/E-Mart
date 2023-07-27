import HomePage from "./pages/HomePage";

import { BrowserRouter , Route , Routes} from 'react-router-dom';
import ProductDetailPage from "./pages/ProductDetailPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import Cart from "./components/Cart";
import ProductPage from "./pages/ProductPage";
import FavoritePage from "./pages/FavouritePage";

function App() {
  return (
    
      <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/products/detail/:id" element={<ProtectedRoute Component ={ProductDetailPage}/>}/>
      <Route path="/products" element={<ProtectedRoute Component={ProductPage}/>}/>
      <Route path="/about" element={<ProtectedRoute Component={AboutPage}/>}/>
      <Route path="/contact" element={<ProtectedRoute Component={ContactPage}/>}/>
      <Route path="/cart" element={<ProtectedRoute Component={Cart}/>}/>
      <Route path="/favorites" element={<ProtectedRoute Component={FavoritePage}/>}/>
      <Route path="*" element={<ErrorPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      </Routes>
      </BrowserRouter>
     
      </>
    
  );
}

export default App;
