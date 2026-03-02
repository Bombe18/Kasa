import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from "./pages/homepage/HomePage.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import About from "./pages/about/About.jsx";
import Card from "./pages/card/Card.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
import "./index.scss";

const AppRouter = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/card/:id" element={<Card />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </Router>
);

export default AppRouter;



 