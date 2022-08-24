import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import TopNavigation from './components/layout/TopNavigation/TopNavigation';
import { Container } from './App.styles';
import Gallery from './components/Gallery/Gallery';
import AddBook from './components/AddBook/AddBook';
import SingleBook from './components/SingleBook/SingleBook';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="logo">Readest</h1>
        <TopNavigation />
      </header>
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="/add" element={<AddBook />} />
            <Route path="/book/:bookId" element={<SingleBook />} />
          </Routes>
        </Container>
      </main>
    </div>
  );
}

export default App;
