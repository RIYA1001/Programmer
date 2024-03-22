import { useState } from "react";

const questions = [
  {
    question: "Which of the following tags is used to create a hyperlink in HTML?",
    options: ["<link>", "<href>", "<a>", "<hyperlink>"],
    answer: "<a>",
  },
  {
    question: "Which of the following tags is used to define the header of a table in HTML?",
    options: [
      "<table-header>",
      "<thead>",
      "<header>",
      "<th>",
    ],
    answer: "<thead>",
  },
  {
    question: "Which of the following tags is used to create a horizontal line in HTML?",
    options: [
      "<line>",
      "<hr>",
      "<hl>",
      "<horizontal>",
    ],
    answer: "<hr>",
  },
  {
    question: "What is the correct way to comment out multiple lines in HTML?",
    options: ["<!-- This is a comment and only used for single lines-->", "<# This is a comment #>", "<!-- This is a comment and it spans multiple lines -->", "--Depends on the number of lines--"],
    answer: "<!-- This is a comment and it spans multiple lines -->",
  },
  {
    question: "What is the correct HTML for inserting an image?",
    options: ['<img alt="MyImage">image.jpg</img>', '<image src="image.jpg" alt="MyImage">', '<img href="image.jpg" alt="MyImage">', '<img src="image.jpg" alt="MyImage">'],
    answer: '<img src="image.jpg" alt="MyImage">',
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Transfer Markup Language",
      "Hyper Text Makeup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Text Markup Language",
    ],
    answer:
      "Hyper Text Markup Language",
  },
  {
    question: "What is the correct HTML tag for inserting a line break?",
    options: [
      "<br>",
      "<lb>",
      "<break>",
      "<linebreak>",
    ],
    answer: "<br>",
  },
  {
    question: "Which of the following is not a valid HTML element?",
    options: ["<div>", "<span>", "<section>", "<paragraph>"],
    answer: "<paragraph>",
  },
  {
    question:
      "What is the correct HTML for adding a background color to a webpage?",
    options: ["<bgcolor>", "<background>", "<color>", '<body style="background-color:">'],
    answer: '<body style="background-color:">',
  },
  {
    question:
      "Which tag is used to define the metadata about an HTML document, such as its title, character set, and author?",
    options: [
      "<head>",
      "<body>",
      "<title>",
      "<meta>",
    ],
    answer: "<meta>",
  },
  {
    question:
      "What does the <DOCTYPE> declaration in HTML do?",
    options: ["Defines the document type and version of HTML", "Specifies the type of browser to use", "Declares a new HTML element", "None of the above"],
    answer: "Defines the document type and version of HTML",
  },
  // Add more questions here...
];

function HTML() {
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
      <h1 className="text-center font-bold text-3xl">HTML Mcq Test</h1>
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

export default HTML;
