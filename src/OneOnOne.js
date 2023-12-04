import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Info from './Info';
import One_On_One_1 from './images/One_On_One_1.jpg'
import One_On_One_2 from './images/One_On_One_2.jpg'
import One_On_One_Main from './images/One_On_One_Main.jpg'

const infomation = [
    { id: 1, name: "what 1 on 1 seasons entail ", image: <img src={One_On_One_1} width="500px" height="auto" alt="logo" />, desc: "Mark will come to your house and teach you chess from beginning to more complex lessons." },
    { id: 2, name: "price per hour", image: <img src={One_On_One_2} width="500px" height="auto" alt="logo" />, desc: "$50" },
  ];
function OneOnOne() {

  return (
    <main>  
        <Header />
        <div className='box'>
          <img src={One_On_One_Main} className='main_image' width="100%" height="auto" alt="logo" />
        </div>
          {infomation.map(item => (
            <Info key={Info.id} item={item} />
          ))}
        <Footer />
    </main>  
  );
}

export default OneOnOne;