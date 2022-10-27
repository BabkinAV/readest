import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import TopNavigation from './components/layout/TopNavigation/TopNavigation';
import { Container } from './App.styles';
import Gallery from './components/Gallery/Gallery';
import AddBook from './components/AddBook/AddBook';
import SearchBook from './components/SearchBook/SearchBook';
import SingleBook from './components/SingleBook/SingleBook';
import Footer from './components/layout/Footer/Footer';

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
            {/* <Route path="/add/:bookInfo" element={<AddBook />} /> */}
            <Route path="/search" element={<SearchBook />} />
            <Route path="/book/:bookId" element={<SingleBook />} />
          </Routes>
        </Container>
      </main>
			<Footer />
    </div>
  );
}

export default App;
