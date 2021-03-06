import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//
import App from './App';
import CoffeItem from './components/About/AboutItem';
import OtherCoffe from './components/second-page/OtherCoffe';
import OurCoffe from './components/second-page/OurCoffe';
import MyPleasure from './components/third-page/MyPleasure';
//
import './index.scss';
//
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.createRoot(document.querySelector('.root')).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path=":bestCoffe" element={<CoffeItem />} />
        <Route path="/ourcoffe" element={<OurCoffe />} />
        <Route path="/ourcoffe/:allCoffe" element={<OtherCoffe />} />
        <Route path="/yourpleasure" element={<MyPleasure />} />
        <Route path="/yourpleasure/:allCoffe" element={<OtherCoffe />} />
      </Routes>
    </BrowserRouter>
  );
});
