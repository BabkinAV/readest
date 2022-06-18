import React from 'react';
import './App.css';
import MainPage from './components/layout/MainPage';
import TopNavigation from './components/layout/TopNavigation/TopNavigation';




function App() {
  return (
    <div className="App">
      <main>
        <h1 className="logo">Readest</h1>
        <TopNavigation />
         <MainPage />
      </main>
    </div>
  );
}

export default App;
