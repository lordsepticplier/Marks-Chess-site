import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './Home';
import Tournament from './Tournament';
import OneOnOne from './OneOnOne';
import ContactMark from './ContactMark';
import FAQ from './FAQ';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    < BrowserRouter >
      <Routes>
        <Route path="/"  element={<Home />}  />
        <Route path="/tournament"  element={<Tournament />}  />
        <Route path="/OneOnOne"  element={<OneOnOne />}  />
        <Route path="/contactMark"  element={<ContactMark />}  />
        <Route path="/FAQ"  element={<FAQ />}  />
      </ Routes >
    </ BrowserRouter > 
  );
}

export default App;
