import './App.css';
import './custom.css';
import Hero from './Components/Hero';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Hero />} />
      </Routes>
    </Router>
  );
}

export default App;
