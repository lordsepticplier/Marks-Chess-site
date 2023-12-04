import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Info from './Info';
import Tournament_1 from './images/Tournament_1.JPG'
import Tournament_2 from './images/Tournament_2.JPG'
import Tournament_main from './images/Tournament_main.JPG'

const infomation = [
    { id: 1, name: "tournament schedule", image: <img src={Tournament_1} width="500px" height="auto" alt="logo" />, desc: "tournaments happen on every last Sunday of the month at Kelburn Normal School " },
    { id: 2, name: "tournament price", image: <img src={Tournament_2} width="500px" height="auto" alt="logo" />, desc: "$20 per person" },
  ];
function Tournament() {

  return (
    <main>  
        <Header />
        <div className='box'>
          <img src={Tournament_main} className='main_image' width="100%" height="auto" alt="logo" />
        </div>
          {infomation.map(item => (
            <Info key={Info.id} item={item} />
          ))}
        <Footer />
    </main>  
  );
}

export default Tournament;