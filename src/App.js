import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import BookingPage from './pages/Booking';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.scss';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Main>
        <Router
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/booking" element={<BookingPage />} />
          </Routes>
        </Router>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
