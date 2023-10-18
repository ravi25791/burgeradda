import React from "react";
import { BrowserRouter as Router , Routes,Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Section2 from "./pages/home/Section2";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";
import Section3 from "./pages/home/Section3";
import Section5 from "./pages/home/Section5";
import Section4 from "./pages/home/Section4";
import Section1 from "./pages/home/Section1";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Menu from "./pages/Menu/Menu";
import Shop from "./pages/Shop/Shop";
import Contact from "./pages/Contact/Contact";


function App() {
  return (
<Router>
  <Header></Header>
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/menu" element={<Menu />}></Route>
    <Route path="/shop" element={<Shop />}></Route>
    <Route path="/blog" element={<Blog />}></Route>
    <Route path="/contact" element={<Contact />}></Route>
    
  </Routes>
  <Footer />
</Router>
  );
}

export default App;
