import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import PreviousEntries from './components/pages/PreviousEntries';
import NewEntry from './components/pages/NewEntry';
import OurMission from './components/pages/OurMission';
import SignUp from './components/pages/SignUp';
import ApostleCard from './components/ApostleCard';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/OurMission" exact element={<OurMission />} />
          <Route path="/previousentries" exact element={<PreviousEntries />} />
          <Route path="/newentry" exact element={<NewEntry />} />
          <Route path="/askanapostle" exact element={<ApostleCard />} />
          <Route path="/sign-up" exact element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
