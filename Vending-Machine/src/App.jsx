
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './Pages/Welcome';
import Menu from './Pages/Menu';
import './App.css'

function App() {
 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} /> {/* Welcome Page */}
        <Route path="/menu" element={<Menu />} /> {/* Menu Page */}
      </Routes>
    </Router>
  );
}

export default App
