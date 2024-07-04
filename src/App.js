import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import PreviousEntries from './components/pages/PreviousEntries';
import NewEntry from './components/pages/NewEntry';
import signUpTest from './components/pages/signUpTest';
import ourMission from './components/pages/ourMission';
import scriptureSync from './components/pages/scriptureSync';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/ourmission' exact element={<ourMission/>} />
          <Route path='/previousentries' exact element={<PreviousEntries/>} />
          <Route path='/newentry' exact element={<scriptureSync/>} />
          <Route path='/sign-up' exact element={<signUpTest/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;