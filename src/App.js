import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import About from './components/About';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Header from './components/Header';
import Skills from './components/Skills';
import Services from './components/Services';
import Contact from './components/Contact';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <HomePage/>
      <About/>
      <Skills/>
      <Services/>
      <Contact/>
      <Routes>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={About} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
