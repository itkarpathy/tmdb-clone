import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header'
import HomePage from './components/HomePage'
import DetailsPage from './components/pages/DetailsPage'
import NotFoundPage from './components/NotFoundPage'
import StatsPage from './components/pages/StatsPage'


export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/stats" element={<StatsPage />} />
          <Route path="/movie/:id" element={<DetailsPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

