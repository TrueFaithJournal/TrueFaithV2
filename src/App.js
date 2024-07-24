import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import PreviousEntries from './components/pages/PreviousEntries';
import NewEntry from './components/pages/NewEntry';
import SignUp from './components/pages/SignUp';
import ApostleCard from './components/ApostleCard';
import OurMission from './components/pages/ourMission';
import TestimonialPage from './components/pages/TestimonialPage';
import ApostleJohn from './components/pages/ApostleJohn';
import ApostleMatthew from './components/pages/ApostleMatthew';
import ApostlePeter from './components/pages/ApostlePeter';
import ApostleJudas from './components/pages/ApostleJudas';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Our-Mission" exact element={<OurMission />} />
          <Route path="testimonials" exact element={<TestimonialPage/>} />
          <Route path="/previous-entries" exact element={<PreviousEntries />} />
          <Route path="/new-entry" exact element={<NewEntry />} />
          <Route path="/ask-an-apostle" exact element={<ApostleCard />} />
          <Route path="/sign-up" exact element={<SignUp />} />
          <Route path="/apostle-john" exact element={<ApostleJohn />} />
          <Route path="apostle-matthew" exact element={<ApostleMatthew />} />
          <Route path="apostle-peter" exact element={<ApostlePeter />} />
          <Route path="apostle-judas" exact element={<ApostleJudas />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
