import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./App.scss"
import Header from './components/Layouts/Header';
import Footer from './components/Layouts/Footer';

import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import About from './pages/About';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-wrapper">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
          <Footer />
        </div>  
      </div>
    </Router>
  );
}

export default App;
