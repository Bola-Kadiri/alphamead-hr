import { NavLink } from 'react-router-dom'; // Import NavLink instead of Link
import alphamead_img from '../assets/amg-logo-1.png';
import './Navbar.css';
import Page_items from '../component/pages-items/Page_items';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = () => {
  return (
    <div className="nav-bar">
      <img src={alphamead_img} alt="alphamead-logo" />
      <div className="nav-links">
        <NavLink
          to="/"
          className="nav-link"
          activeClassName="active"
          exact // Ensures the link is active only when it matches exactly
        >
          Home
        </NavLink>
        <NavLink to="/job-list" className="nav-link" activeClassName="active">
          Job List
        </NavLink>
        <a href='#about-section' className="nav-link" >
          About
        </a>
        <NavLink to="/pages" className="nav-link" activeClassName="active">
          <Page_items/>
          < KeyboardArrowDownIcon/>
        </NavLink>
        <NavLink to="/contact" className="nav-link" activeClassName="active">
          Contact
        </NavLink>
        <button>POST A JOB</button>
      </div>
    </div>
  );
};

export default Navbar;
