import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./App.scss"
import Header from './components/Layouts/Header';
import Footer from './components/Layouts/Footer';

import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogDetail from "./pages/Blog/[slug]";
import AdminBlog from "./pages/AdminBlog";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-wrapper">
          <CartProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />
              <Route path="/admin/blog" element={<AdminBlog />} />
            </Routes>
            <Footer />
            <ToastContainer />
          </CartProvider>
        </div>  
      </div>
    </Router>
  );
}

export default App;
