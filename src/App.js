import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import Home from './home';
import Dashboard from './dashboard';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/dashboard" element={<Dashboard />} />

      </Routes>
    </Router>

  );
}

export default App;
