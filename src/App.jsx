import { useState } from 'react'; 

import Card from './components/Card';
import './App.css';

const App = () => {

    const flashCards = [
        {
      id: 1,
      question: "What is supervised learning?",
      answer: "A type of machine learning where the algorithm learns from labeled training data to make predictions on new, unseen data.",
    },
    {
      id: 2,
      question: "What is overfitting?",
      answer: "When a model learns the training data too well, including noise and outliers, resulting in poor performance on new data.",
    },
    {
      id: 3,
      question: "What does CNN stand for?",
      answer: "Convolutional Neural Network - a deep learning architecture particularly effective for image recognition tasks.",
    },
    {
      id: 4,
      question: "What is the purpose of regularization?",
      answer: "To prevent overfitting by adding a penalty term to the loss function, encouraging simpler models.",
    },
    {
      id: 5,
      question: "What is gradient descent?",
      answer: "An optimization algorithm used to minimize the cost function by iteratively moving toward the steepest descent.",
    },
    {
      id: 6,
      question: "What is the difference between precision and recall?",
      answer: "Precision = TP/(TP+FP) measures accuracy of positive predictions. Recall = TP/(TP+FN) measures how many actual positives were found.",
    },
    {
      id: 7,
      question: "What is a Random Forest?",
      answer: "An ensemble learning method that combines multiple decision trees and uses voting to make final predictions.",
    },
    {
      id: 8,
      question: "What is cross-validation?",
      answer: "A technique to assess model performance by splitting data into multiple folds and training/testing on different combinations.",
    },
    {
      id: 9,
      question: "What is the vanishing gradient problem?",
      answer: "When gradients become exponentially small in deep networks, making it difficult to train earlier layers effectively.",
    },
    {
      id: 10,
      question: "What is reinforcement learning?",
      answer: "A type of ML where an agent learns to make decisions by interacting with an environment and receiving rewards or penalties.",
    }
    ];

    const [currCardsIndex, setCurrCardsIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    
    const currentCard = flashCards[currCardsIndex];

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const handleNextCard = () => {
      let newIndex;
      do{
        newIndex = Math.floor(Math.random() * flashCards.length);
      } while (newIndex === currCardsIndex);

      setCurrCardsIndex(newIndex);
      setIsFlipped(false);
    };

    return (
        <div className="app">
          <div className='app-container'>
            <header className='app-header'>
              <h1 className='app-title'>
                Machine learning Flashcards
              </h1>
              <p className='app-description'>
                Practice your knowledge of machine learning concepts with these flashcards. Click on the card to flip it and see the answer.
              </p> 
              <div className='app-stats'>
                <span>Total Cards: {flashCards.length}</span>
                <span>Current: {currCardsIndex + 1} </span>  
              </div> 
            </header>

            <Card
              card={currentCard}
              isFlipped={isFlipped}
              onFlip={handleFlip}
              onNextCard={handleNextCard}
            />

            <div className='navigation-buttons'>
              <button onClick={handleNextCard} className="nav-btn">
                Next 
              </button>
            </div>
           </div>
        </div>
    );
}

export default App;