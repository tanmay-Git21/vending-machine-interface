
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './Pages/Welcome';
import Menu from './Pages/Menu';
import BillingPage  from './Pages/BillingPage';
import './App.css'

function App() {
 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} /> {/* Welcome Page */}
        <Route path="/menu" element={<Menu />} /> {/* Menu Page */}
        <Route path="/billing" element={<BillingPage />}/>
      </Routes>
    </Router>
  );
}

export default App
