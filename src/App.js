import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import GoalSetting from './pages/GoalSetting';
import PerformanceReview from './pages/PerformanceReview';
import Feedback from './pages/Feedback';
import Analytics from './pages/Analytics';
import './styles/App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Initialize app with mock data
    const mockUser = {
      id: 1,
      name: 'John Manager',
      role: 'Manager',
      email: 'john@example.com'
    };
    setCurrentUser(mockUser);

    // Load mock employees
    const mockEmployees = [
      { id: 1, name: 'Alice Johnson', department: 'Sales', status: 'Active' },
      { id: 2, name: 'Bob Smith', department: 'Engineering', status: 'Active' },
      { id: 3, name: 'Carol White', department: 'Marketing', status: 'Active' }
    ];
    setEmployees(mockEmployees);
  }, []);

  return (
    <Router>
      <div className="app">
        <Header user={currentUser} />
        <Navigation />
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Dashboard employees={employees} />} />
            <Route path="/goals" element={<GoalSetting employees={employees} />} />
            <Route path="/reviews" element={<PerformanceReview employees={employees} />} />
            <Route path="/feedback" element={<Feedback employees={employees} />} />
            <Route path="/analytics" element={<Analytics employees={employees} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;