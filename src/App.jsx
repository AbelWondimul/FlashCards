import { useState } from 'react'
import './App.css'

function App() {
  var myArray = [
    {'question': 'What is the powerhouse of a cell?', 'answer': 'Mitochondria'},
    {'question': 'What part of the cell is responsible for protein synthesis?', 'answer': 'Ribosome'},
    {'question': 'Which organelle contains enzymes for digesting cellular waste?', 'answer': 'Lysosome'},
    {'question': 'What is the outermost boundary of animal cells called?', 'answer': 'Cell membrane'},
    {'question': 'Which organelle is responsible for storing water and maintaining turgor pressure?', 'answer': 'Vacuole'},
    {'question': 'What organelle is known as the "control center" of the cell?', 'answer': 'Nucleus'},
    {'question': 'Which part of a plant cell captures sunlight for photosynthesis?', 'answer': 'Chloroplast'},
    {'question': 'What is the main function of the endoplasmic reticulum?', 'answer': 'Protein synthesis and lipid metabolism'},
    {'question': 'Which organelle is involved in detoxifying harmful substances in the cell?', 'answer': 'Smooth endoplasmic reticulum (Smooth ER)'},
    {'question': 'What are the small hair-like structures on the surface of some cells that aid in movement?', 'answer': 'Cilia'},
    {'question': 'Which organelle is responsible for modifying, sorting, and packaging proteins?', 'answer': 'Golgi apparatus'},
    {'question': 'What is the function of the cell wall in plant cells?', 'answer': 'Providing structural support and protection'},
    {'question': 'What is the fluid-filled space within a cell that houses various organelles called?', 'answer': 'Cytoplasm'},
    {'question': 'What is the name of the double-layered membrane that surrounds the nucleus?', 'answer': 'Nuclear envelope'},
    {'question': 'Which organelle produces ATP (adenosine triphosphate) for cellular energy?', 'answer': 'Mitochondria'},
    {'question': 'What is the name of the small, round organelles that contain enzymes for breaking down cellular waste?', 'answer': 'Peroxisome'},
    {'question': 'Which organelle is responsible for synthesizing lipids and detoxifying drugs in liver cells?', 'answer': 'Smooth endoplasmic reticulum (Smooth ER)'},
    {'question': 'What is the function of the nucleolus within the nucleus?', 'answer': 'Ribosome production'},
    {'question': 'Which organelle is responsible for maintaining cell shape and aiding in cell division?', 'answer': 'Cytoskeleton'},
    {'question': 'What part of the cell is responsible for regulating the entry and exit of substances into and out of the cell?', 'answer': 'Cell membrane'},
    {'question': 'Which organelle contains digestive enzymes and is involved in recycling cellular materials?', 'answer': 'Lysosome'},
    {'question': 'What is the name of the small structures on the endoplasmic reticulum involved in protein synthesis?', 'answer': 'Ribosomes'},
    {'question': 'What is the primary function of the centrioles in animal cells?', 'answer': 'Aiding in cell division'},
    {'question': 'What is the function of the flagellum in some cells?', 'answer': 'Cellular movement'},
    {'question': 'What organelle is responsible for producing and assembling ribosomal RNA (rRNA)?', 'answer': 'Nucleolus'}
  ];
  
  var question;
  var answer;
  

  const[count, setCount] = useState(0);
  const [ans, showAnswer] = useState(false)
  const [guess, setGuess] = useState({guess: '', correctGues: 0})

  const incCount = () => { 
    if (count < myArray.length - 1){
      // const randomIndex = Math.floor(Math.random() * myArray.length);
      setCount(count + 1);
       
    } else {
      setCount(0);
    }
    showAnswer(false);
    }
    const decCount = () => { 
      if (count > 0){
        
        setCount(count - 1);
         
      } else {
        setCount(myArray.length - 1);
      }
      showAnswer(false);
      }
  
  const flipCard = () => {
    showAnswer(!ans);
  }


  const streak = (e) => { 
    
    setGuess({guess: e.target.value, correctGues: guess.correctGues})
  
  }

  


  question = myArray[count].question;
  answer = myArray[count].answer;
  

  const submitGuess = (e) => {
    
    e.preventDefault();
    
  if(guess.guess.toUpperCase() == answer.toUpperCase()){
    setGuess({guess: guess.guess, correctGues: guess.correctGues + 1});
    
  } else {
    setGuess({guess: guess.guess, correctGues: 0});
  }}

  return (
    <div>
      <div className="bx">
      <h1>Cell organelle Quiz</h1> 
          <p>How much do you know about cells? Test all of your Cell knowledge here! </p>     
          <p>Number of cards: {myArray.length}</p>
          <p>Current Point: {guess.correctGues}</p>
      </div>
      
      <button className="flip-card " onClick={flipCard}>
    <div className={`flip-card-inner box1 ${ans ? 'flip-card-back' : 'flip-card-front'}  `}>
      <div className="flip-card-front">
          <p>{question}</p>
      </div>
      <div className="flip-card-back box1">
        <h1>{answer}</h1>
        
      </div>
    </div>
      </button>
      <div className="input1">
    <form onSubmit={submitGuess}>
    <label>Guess the answer here:
    <input className="color in" value={guess.guess} onChange={streak} placeholder='Place your answer here...'   />
    </label>
    <button type="submit">Submit Guess</button>
    </form>
    </div>
      <div className='btn-box'>
      <button className='btn' value={guess.guess} onClick={decCount}>Previous</button>
      <button className='btn' value={guess.guess} onClick={incCount}>Next</button>
      </div>
    </div>
  )
}

export default App
