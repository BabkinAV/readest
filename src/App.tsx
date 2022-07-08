import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import SingleBookPage from './components/layout/SingleBookPage';
import './App.css';
import MainPage from './components/layout/MainPage';
import AddBookPage from './components/layout/AddBookPage';
import TopNavigation from './components/layout/TopNavigation/TopNavigation';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="logo">Readest</h1>
        <TopNavigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/add" element={<AddBookPage />} />
          <Route path="/book/:bookId" element={<SingleBookPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
