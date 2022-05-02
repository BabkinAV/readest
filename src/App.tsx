import React from 'react';
import './App.css';
import MainPage from './components/layout/MainPage';
import TopNavigation from './components/layout/TopNavigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function App() {
  return (
    <div className="App">
      <main>
        <h1 className="logo">Readest</h1><FontAwesomeIcon icon={['fas', 'code']} /><FontAwesomeIcon icon={['fas', 'star']} /><FontAwesomeIcon icon={['far', 'star']} />
        <TopNavigation />
        <MainPage />
      </main>
    </div>
  );
}

export default App;
