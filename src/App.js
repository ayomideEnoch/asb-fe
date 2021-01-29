import React from 'react';
import TopNav from './components/TopNav/TopNav'
import DashboardMetric from './components/Dashboard/DashboardMetric'
import DashboardDetails from './components/Dashboard/DashboardDetails'
import './App.css';

function App() {
  return (
    <div className="App">
      <TopNav />
      <DashboardMetric />
      <DashboardDetails />
    </div>
  );
}

export default App;