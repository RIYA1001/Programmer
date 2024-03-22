import { useState } from "react";

const questions = [
  {
    question: "What is Csharp?",
    options: ["A programming language", "A fruit", "A country", "A car"],
    answer: "A programming language",
  },
  {
    question: "What is the correct syntax to declare a variable?",
    options: [
      "variableName = value;",
      "int variableName = value;",
      "variableName := value;",
      "declare variableName = value;",
    ],
    answer: "int variableName = value;",
  },
  {
    question: "What is the correct way to create an object of a class?",
    options: [
      "MyClass.createObject();",
      "new Object(MyClass);",
      "new MyClass();",
      "create Object(MyClass);",
    ],
    answer: "new MyClass();",
  },
  {
    question: "What is the default value of an instance variable?",
    options: ["0", "1", "null", "Depends on the data type"],
    answer: "null",
  },
  {
    question: "Which keyword is used to exit a loop?",
    options: ["break", "exit", "continue", "stop"],
    answer: "break",
  },
  {
    question: "What does the finalize() method do?",
    options: [
      "It is called by the garbage collector before reclaiming the object's memory",
      "It is called by the programmer to manually free the object's memory",
      "It is used to initialize the object before its use",
      "It is used to handle exceptions during runtime",
    ],
    answer:
      "It is called by the garbage collector before reclaiming the object's memory",
  },
  {
    question: "Which of the following is NOT a valid identifier?",
    options: [
      "_variableName",
      "1variableName",
      "$variableName",
      "variableName",
    ],
    answer: "1variableName",
  },
  {
    question: "In Csharp, what is the superclass of all classes?",
    options: ["Object", "Class", "Main", "Superclass"],
    answer: "Object",
  },
  {
    question:
      "Which of the following operators is used to perform type casting?",
    options: ["*", "->", "::", "()"],
    answer: "()",
  },
  {
    question:
      "Which of the following statements about interfaces in Csharp is false?",
    options: [
      "Interfaces can have methods.",
      "Interfaces can extend other interfaces.",
      "Interfaces cannot contain instance variables.",
      "Interfaces can have constructors.",
    ],
    answer: "Interfaces can have constructors.",
  },
  {
    question:
      "What is the access modifier used for the members of an interface?",
    options: ["private", "protected", "public", "default"],
    answer: "public",
  },
  // Add more questions here...
];

function Csharp() {
  const [answers, setAnswers] = useState(new Array(questions.length).fill(""));
  const [score, setScore] = useState(0);

  const getRandomQuestions = () => {
    const randomIndices = [];
    while (randomIndices.length < 4) {
      const randomIndex = Math.floor(Math.random() * questions.length);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }
    return randomIndices.map((index) => questions[index]);
  };

  const [selectedQuestions, setSelectedQuestions] = useState(
    getRandomQuestions()
  );

  const handleOptionChange = (index, selectedOption) => {
    const newAnswers = [...answers];
    newAnswers[index] = selectedOption;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const newScore = calculateScore();
    setScore(newScore);

    if (newScore >= 80) {
      const playGame = window.confirm(
        `Your score is ${newScore}% \nHurray! You unlocked the game. Would you like to play it?`
      );
      if (playGame) {
        window.location.replace("/slidepuzzle");
      } else {
        setAnswers(new Array(questions.length).fill(""));
        setSelectedQuestions(getRandomQuestions());
      }
    } else {
      alert(`Your score is ${newScore}% \nBetter luck next time!`);
      setAnswers(new Array(questions.length).fill(""));
      setSelectedQuestions(getRandomQuestions());
    }
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    selectedQuestions.forEach((question, index) => {
      if (question.answer === answers[index]) {
        correctAnswers++;
      }
    });
    return (correctAnswers / selectedQuestions.length) * 100;
  };

  return (
    <div className="container mx-auto my-28 p-2">
      <h1 className="text-center font-bold text-3xl">Csharp Mcq Test</h1>
      {selectedQuestions.map((question, index) => (
        <div
          key={index}
          className="bg-yellow-400 text-gray-900 my-6 p-6 rounded-lg shadow-md"
        >
          <h2>{question.question}</h2>
          <br />
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
              <label htmlFor={`option${optionIndex}`} className="ml-2">
                {option}
              </label>
            </div>
          ))}
        </div>
      ))}

      <button
        onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </div>
  );
}

export default Csharp;
