import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import ProductDetail from './pages/ProductDetail';
import AdminTemplate from './templates/AdminTemplate';
import ClientTemplate from './templates/ClientTemplate';
import ProductManager from './pages/ProductManager';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import Contact from './pages/Contact';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ClientTemplate element={<Home />} />}/>
          <Route path="/contact" element={<ClientTemplate element={<Contact />} />} />
          <Route path="/productDetail/:idProduct" element={<ClientTemplate element={<ProductDetail />} />}/>
          <Route path="/productManager" element={<AdminTemplate element={<ProductManager/>}/>}/>
          <Route path="/addProduct" element={<AdminTemplate element={<AddProduct/>}/>}/>
          <Route path="/addProduct/:idProduct" element={<AdminTemplate element={<EditProduct/>}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
