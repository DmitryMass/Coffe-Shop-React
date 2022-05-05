import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//
import App from './App';
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
        <Route path="/ourcoffe" element={<OurCoffe />} />
        <Route path="/yourpleasure" element={<MyPleasure />} />
      </Routes>
    </BrowserRouter>
  );
});
