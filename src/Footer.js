import { Link } from 'react-router-dom';
import './Footer.css';
import kingmaster_chess_logo from './images/kingmaster_chess_logo.jpg'
import phone from './images/phone.png'
import mail from './images/mail.png'

function Footer() {
  return (
    <footer>
      <ul>
			<li class="footer_logo">
        		<Link to="/"><img src={kingmaster_chess_logo} width="100%" height="auto" alt="logo"/></Link>{/*changed link to="/" so that it would go to the home page*/}
			</li>
			<div class="footer_phone">027-634-5916<img src={phone} width="25px" height="auto" alt="logo"/></div>
			<div class="footer_email">kingmaster tournaments@ gmail.com<img src={mail} width="25px" height="auto" alt="logo"/></div>
			<li class="footer_contact">
				<Link to="/ContactMark">Contact Mark</Link>
			</li>
		  </ul>
    </footer>
  );
}

export default Footer;
