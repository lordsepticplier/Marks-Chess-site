import './Contact_Mark.css';
import Header from './Header';
import Footer from './Footer';
import MarkForm from './MarkForm';
import ContactUs from './ContactUs';

function ContactMark() {

  return (
    <main>
        <Header />
          <div id="ContactMark">
            <div id="MarkForm">
                <MarkForm />
                <div> 
                    <ContactUs />
                </div>
            </div>
          </div>  
        <Footer />
    </main>
  );
}
export default ContactMark;
