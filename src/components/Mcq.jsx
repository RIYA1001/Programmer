import { useState, useContext } from 'react';
import { ScoreContext } from '../Context/ScoreContext';

const questions = [
    {
        question: 'What is Java?',
        options: ['A programming language', 'A fruit', 'A country', 'A car'],
        answer: 'A programming language'
    },
    {
        question: '2 What is Java?',
        options: ['A programming language', 'A fruit', 'A country', 'A car'],
        answer: 'A programming language'
    },
    {
        question: '3 What is Java?',
        options: ['A programming language', 'A fruit', 'A country', 'A car'],
        answer: 'A programming language'
    },
    {
        question: '4 What is Java?',
        options: ['A fruit', 'A country', 'A programming language', 'A car'],
        answer: 'A programming language'
    },
    // Add more questions here...
];

function Mcq() {
    const [answers, setAnswers] = useState(new Array(questions.length).fill(''));
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const { setGuessingEnabled } = useContext(ScoreContext);

    const handleOptionChange = (index, selectedOption) => {
        const newAnswers = [...answers];
        newAnswers[index] = selectedOption;
        setAnswers(newAnswers);
    };

    const handleSubmit = () => {
        const newScore = calculateScore();
        setScore(newScore);
        setShowScore(true);
    
        // Enable guessing section if score is 80 or above
        if (newScore >= 80) {
          setGuessingEnabled(true);
        } else {
          setGuessingEnabled(false);
        }
      };

    const calculateScore = () => {
        let correctAnswers = 0;
        questions.forEach((question, index) => {
            if (question.answer === answers[index]) {
                correctAnswers++;
            }
        });
        return (correctAnswers / questions.length) * 100;
    };

    const renderScore = () => {
        return (
            <div>
                <h2>Your score: {score}%</h2>
            </div>
        );
    };

    return (
        <div className="text-center container mx-auto mt-28 mb-10 p-2">
            <h1>Java Mcq Test</h1>
            {questions.map((question, index) => (
                <div key={index} className="mb-4">
                    <h2>{question.question}</h2>
                    {question.options.map((option, optionIndex) => (
                        <div key={optionIndex} className="mb-2">
                            <input
                                type="radio"
                                id={`option${optionIndex}`}
                                name={`question${index}`}
                                value={option}
                                onChange={() => handleOptionChange(index, option)}
                                checked={answers[index] === option}
                            />
                            <label htmlFor={`option${optionIndex}`} className="ml-2">{option}</label>
                        </div>
                    ))}
                </div>
            ))}
            <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Submit
            </button>
            {showScore && renderScore()}
        </div>
    );
}

export default Mcq;