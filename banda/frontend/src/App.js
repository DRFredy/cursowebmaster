import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import DiscographyPage from './pages/DiscographyPage';
import ToursPage from './pages/ToursPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/discography" element={<DiscographyPage />} />
          <Route path="/tours" element={<ToursPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={< ContactPage/>} />


        </Routes>
      </BrowserRouter>

      <Footer/>
    </div>
  );
}

export default App;
