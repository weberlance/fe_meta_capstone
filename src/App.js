import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import BookingPage from './pages/Booking';
import BookingConfirmationPage from 'pages/BookingConfirmation';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.scss';

function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="app-wrapper">
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/booking-confirmation" element={<BookingConfirmationPage />} />
          </Routes>
        </Main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
