import './App.css';
import './custom.css';
import Hero from './Components/Hero';
import Coffee from './Components/Coffee';
import Expresso from './Components/Expresso';
import Tea from './Components/Tea';
import Bakery from './Components/Bakery';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route path="/Coffee" element={<Coffee />} />
        <Route path="/Expresso" element={<Expresso />} />
        <Route path="/Tea" element={<Tea />} />
        <Route path="/Bakery" element={<Bakery />} />
      </Routes>
    </Router>
  );
}

export default App;
