import React from 'react';
import Header from './Header';
import Footer from './Footer';
import QNA from './QNA';

const QandA = [
    { id: 1, Question: "can we pay with card", Answer: "- answer: yes you can" },
    { id: 2, Question: "can we leave are kids at the tournament", Answer: "- answer: you can if they know how the knight moves" },
    { id: 3, Question: "can we book earlier", Answer: "- answer: yes just email or text me" },
    { id: 4, Question: "what is the age range for tournaments", Answer: "- answer: 4-18 years old" },
  ];
function FandQ() {

  return (
    <main>  
        <Header />
          {QandA.map(item => (
            <QNA key={QNA.id} item={item} />
          ))}
        <Footer />
    </main>  
  );
}

export default FandQ;