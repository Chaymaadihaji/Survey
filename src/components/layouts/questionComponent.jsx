import React, { useState } from 'react';
import { db } from "../../fireBase/fireBase";
import { doc, setDoc } from "firebase/firestore";

function QuestionComponent({ onClose, titre, description, q, id }) {
  // Initialize state for whether choices have been clicked
  const [clicked, setClicked] = useState(
    q.reduce((acc, question) => {
      acc[question.question] = question.choix.reduce((a, c) => {
        a[c.name] = false;
        return a;
      }, {});
      return acc;
    }, {})
  );

  // Initialize counts state
  const [counts, setCounts] = useState(
    q.reduce((acc, question) => {
      acc[question.question] = question.choix.reduce((a, c) => {
        a[c.name] = c.count;
        return a;
      }, {});
      return acc;
    }, {})
  );

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleClick = (question, choice) => {
    setCounts(prevCounts => {
      const newCounts = { ...prevCounts };
      newCounts[question][choice.name] = clicked[currentQuestion.question][choice.name] ? 0 : 1;
      return newCounts;
      
    });

    setClicked(prevClicked => {
      const newClicked = { ...prevClicked };
      newClicked[question][choice.name] = !prevClicked[question][choice.name];
      return newClicked;
    });
  };
  

  const handleNext = () => {
    setCurrentQuestionIndex(prevIndex => Math.min(prevIndex + 1, q.length - 1));
  };

  const handleBack = () => {
    setCurrentQuestionIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  const currentQuestion = q[currentQuestionIndex];

  const handleSubmit = async () => {
    const updatedQuestions = q.map(question => {
      const updatedChoix = question.choix.map(choice => {
        return {
          ...choice,
          count: counts[question.question][choice.name]
        };
      });
      return {
        ...question,
        choix: updatedChoix
      };
      
    });

    await setDoc(doc(db, "surveys", id), {
      questions: updatedQuestions,
      titre: titre,
      description: description
    });

    alert("Update successfully");
  };

  return (
    <>
      <div className="fixed inset-20 flex flex-col justify-center bg-white shadow-lg p-6 rounded-lg overflow-x-auto">
        <div className="flex flex-col items-center">
          <div className="mt-6">
            <div className="text-2xl font-bold mt-auto flex justify-center">
              {titre}
            </div>
            <div className="text-gray-600 mb-9 max-w-[700px] text-center">
              {description}
            </div>
          </div>
          <div className="flex flex-wrap gap-8 mb-4 rounded w-[1000px] p-4">
            <div className="flex flex-col items-center mb-4 w-full">
              <div className="text-black mb-2 font-semibold">
                {currentQuestion.question}
              </div>
              <ul className="w-full">
                {currentQuestion.choix.map((choice, idx) => (
                  <li key={idx} className="mb-2 w-full">
                    <button
                      className={`relative w-full rounded overflow-hidden ${counts[currentQuestion.question][choice.name] > choice.count ? 'bg-blue-500' : 'bg-gray-200'}`}
                      onClick={() => handleClick(currentQuestion.question, choice)}
                      style={{ height: '40px' }}
                    >
                      <span className="relative z-10 text-black px-4">
                      {choice.name} ({counts[currentQuestion.question][choice.name]})
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <button
            onClick={handleBack}
            disabled={currentQuestionIndex === 0}
            className="my-4 bg-gray-500 text-white font-bold py-2 px-4 w-20 rounded"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            disabled={currentQuestionIndex === q.length - 1}
            className="my-4 bg-blue-500 text-white font-bold py-2 px-4 w-20 rounded"
          >
            Next
          </button>
        </div>
        <div className="flex justify-center gap-5">
          <button onClick={onClose} className="my-4 bg-red-500 text-white font-bold py-2 px-4 rounded">
            Close
          </button>
          <button 
            onClick={handleSubmit}
            className="my-4 bg-green-500 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default QuestionComponent;
