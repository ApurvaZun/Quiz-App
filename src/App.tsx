import React, { useState } from 'react';
import { fetchQuizQuetions } from './API';
import './App.css';
import QuestionCard from './components/QuestionCard';
import { getShuffledAnswers } from './utils';

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;  
}

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}


const TOTAL_QUESTIONS = 10;

function App() {

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentAnswers, setCurrentAnswers] = useState<string[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startQuizGame = async () => {
    const newQuestions = await fetchQuizQuetions(TOTAL_QUESTIONS);
    setQuestions(newQuestions.results);
    setCurrentAnswers(getShuffledAnswers(newQuestions.results[number]));
    setGameOver(false);
    setScore(0);
    setNumber(0);
    setUserAnswers([]);
  }

  const nextQuestion = () => {

  }

  
  return (
    <div className="App">
      <button onClick={startQuizGame}>Start</button>
      <QuestionCard />
      <button onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
