import './App.css';
import Home from "./Components/Home"
import Itinerary from "./Components/Itinerary"
import Map from "./Components/Map"
import Budget from "./Components/Budget/Budget"
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

function App() {
  return (
    <div className="App">
          <Router>
          <h1 id="title">Travel Planner</h1>
          <nav>
            <ul className="linkClass">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='itinerary'>Itinerary</Link></li>
              <li><Link to='map'>Map</Link></li>
              <li><Link to='budget'>Budget</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/itinerary' element={ <Itinerary />} />
            <Route path='/map' element={ <Map />} />
            <Route path='/budget' element={ <Budget />} />
          </Routes>
        </Router>

    </div>
  );
}

export default App;
