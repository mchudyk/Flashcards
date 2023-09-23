import './App.css';
import { useState } from 'react'
import France from './photos/France.jpg';
import Italy from './photos/Italy.jpg';
import Ukraine from './photos/Ukraine.jpg';
import Poland from './photos/Poland.jpg';
import Germany from './photos/Germany.jpg';
import US from './photos/US.jpg';
import Argentina from './photos/Argentina.jpg';
import Korea from './photos/Korea.jpg';
import GreatBritain from './photos/GreatBritain.jpg';
import Czech from './photos/Czech.jpg';


const sampleCards = [
  { question: 'What is the capital of France?', answer: 'Paris', image: France },
  { question: 'What is the capital of Italy?', answer: 'Rome', image: Italy },
  { question: 'What is the capital of Ukraine?', answer: 'Kyiv', image: Ukraine },
  { question: 'What is the capital of Poland?', answer: 'Warsaw', image: Poland },
  { question: 'What is the capital of Germany?', answer: 'Berlin', image: Germany },
  { question: 'What is the capital of the US?', answer: 'Washington', image: US },
  { question: 'What is the capital of Argentina?', answer: 'Buenos Aires', image: Argentina },
  { question: 'What is the capital of South Korea?', answer: 'Seoul', image: Korea },
  { question: 'What is the capital of the Great Britain?', answer: 'London', image: GreatBritain },
  { question: 'What is the capital of the Czech Republic?', answer: 'Prague', image: Czech },
];



const App = () => {
  const [cards, setCards] = useState(0);
  const [isFlipped, setIsFlipped] = useState(0);

  const ChangeFlashcard = () => {setCards((cards + 1)%10); setIsFlipped(false);};
  const ChangeFlipped = () => setIsFlipped((isFlipped+1)%2);


  return (
    <>
      <div className="Headline">
        <h1>I Know All Capitals Of The World!</h1>
        <h3>Test your knowledge of how good your are aware of corresponding capitals of the countries</h3>
        <p>Number of cards: 10</p>
      </div>

      <div className ="flashcard_frame" onClick = {ChangeFlipped}>
          <h2>{isFlipped ? sampleCards[cards].answer : sampleCards[cards].question}</h2>
      </div>
      
      <div>
          <button onClick = {ChangeFlashcard}>Next question</button>
      </div>

    

    </>
  )
}

export default App