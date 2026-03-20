import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from "./pages/homepage/Home.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import About from "./pages/about/About.jsx";
import Product from "./pages/product/Product.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
import Preload from "./components/Preload.jsx";
import "./index.scss";

const AppRouter = () => (
  <Router>
    <Header />
    <Preload />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </Router>
);

export default AppRouter;



 