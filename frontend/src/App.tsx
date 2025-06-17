import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Onboarding from './components/Onboarding';

const Dashboard = () => <div className="p-8">Dashboard (Coming soon)</div>;

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
