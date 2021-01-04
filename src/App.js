import React from 'react'
import './App.css';
import Home from './containers/Home/Index';
import Header from './components/Header/Index'
import Hero from './components/Hero/Index';



function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Home />
    </div>
  );
}

export default App;
