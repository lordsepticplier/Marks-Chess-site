import './Home.css';
import Header from './Header';
import Footer from './Footer';
import Slideshow from './Slideshow';
import Info from './Info';
import Home_1 from './images/Home_1.JPG'
import Home_2 from './images/Home_2.JPG'
const infomation = [
    { id: 1, name: "about Mark", image: <img src={Home_1} width="500px" height="auto" alt="logo" />, desc: "Mark is a chess professional that teaches chess to others. he is really good at chess and enjoys teaching others chess and seeing others enjoy chess." },
    { id: 2, name: "what Mark does", image: <img src={Home_2} width="500px" height="auto" alt="logo" />, desc: "Mark teaches chess to school and does a tournament at the end of each month. he also does one on one." },
  ];
function Home() {

  return (
    <main>
      <Header />
      <Slideshow />
          {infomation.map(item => (
              <Info key={Info.id} item={item} />
          ))}
      <Footer />
    </main>
  );
}

export default Home;
