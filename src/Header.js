import { Link } from 'react-router-dom';
import './Header.css';
import kingmaster_chess_logo from './images/kingmaster_chess_logo.jpg'

function Header() {
  return (
    <header>
      <Link to="/" id="logo"><img src={kingmaster_chess_logo} width="500px" height="auto" alt="logo" /></Link>{/*changed link to="/" so that it would go to the home page*/}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Tournament">Tournament</Link>
        <Link to="/OneOnOne">One On One</Link>
        <Link to="/ContactMark">Contact Mark</Link>
        <Link to="/FAQ">FAQ</Link>
      </nav>
    </header>
  );
}

export default Header;
