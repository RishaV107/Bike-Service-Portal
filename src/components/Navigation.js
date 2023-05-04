 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../css/Navigation.css'
function Navigation() {
  return (
    <Router>
    <nav className="Navigation">
      <div className="container" id="switch">
        <div className="Navigation-left">
            <Link to="/" className="Link">Home</Link>
            <Link to="/Contact" className="Link">Contact</Link>
            <Link to="/services"className="Link">Services</Link>
            <Link to ="/work" className="Link">How It Works</Link>
        </div>
      </div>
      <div className="container Navigation-container">
        <div className="Navigation-right">
          <div className="icon">
            <div className="button-icon Navigation-right-search-icon"></div>
          </div>
          <div className="shopping-cart icon">
            <div className="shopping-cart-indicator">2</div>
            <div className="button-icon Navigation-right-shopping-icon"></div>
          </div>
        </div>
      </div>
      </nav>
      </Router>
  );
}

export default Navigation;
