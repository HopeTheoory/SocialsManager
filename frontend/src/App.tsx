import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import store from './store';
import Onboarding from './components/Onboarding';
import AuthForm from './components/AuthForm';

const Dashboard = () => <div className="p-8">Dashboard (Coming soon)</div>;

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const token = useSelector((state: any) => state.user.token);
  return token ? <>{children}</> : <Navigate to="/auth" />;
};

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/auth" element={<AuthForm />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
