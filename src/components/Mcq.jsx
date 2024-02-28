import { useState, useContext } from 'react';
import { ScoreContext } from '../Context/ScoreContext';

const questions = [
    {
        question: 'Q.1 What is Java?',
        options: ['A programming language', 'A fruit', 'A country', 'A car'],
        answer: 'A programming language'
    },
    {
        question: 'Q.2 What is the correct syntax to declare a variable in Java?',
        options: ['variableName = value;', 'int variableName = value;', 'variableName := value;', 'declare variableName = value;'],
        answer: 'int variableName = value;'
    },
    {
        question: 'Q.3 What is the correct way to create an object of a class in Java?',
        options: ['MyClass.createObject();', 'new Object(MyClass);', 'new MyClass();', 'create Object(MyClass);'],
        answer: 'new MyClass();'
    },
    {
        question: 'Q.4 What is the default value of an instance variable in Java?',
        options: ['0', '1', 'null', 'Depends on the data type'],
        answer: 'null'
    },
    {
        question: 'Q.5 Which keyword is used to exit a loop in Java?',
        options: ['break', 'exit', 'continue', 'stop'],
        answer: 'break'
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
        <div className="container mx-auto my-28 p-2">
            <h1 className="text-center font-bold text-3xl">Java Mcq Test</h1>
            {questions.map((question, index) => (
                <div key={index} className="bg-yellow-400 text-gray-900 my-6 p-6 rounded-lg shadow-md">
                    <h2>{question.question}</h2>
                    <br/>
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
            <br />
            {showScore && renderScore()}

        </div>
    );
}

export default Mcq;