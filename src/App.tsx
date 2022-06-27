import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleBookPage from './components/layout/SingleBookPage';
import './App.css';
import MainPage from './components/layout/MainPage';
import TopNavigation from './components/layout/TopNavigation/TopNavigation';

function App() {
  return (
    <div className="App">
        <main>
          <h1 className="logo">Readest</h1>
          <TopNavigation />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/book/:bookId" element={<SingleBookPage />} />

          </Routes>
        </main>
    </div>
  );
}

export default App;
