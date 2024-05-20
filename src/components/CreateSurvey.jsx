import React, { useState } from 'react';
import "../index.css";
import Nav from "./layouts/navbar";

import Question from "./layouts/question";
import { db } from "../fireBase/fireBase"
import { addDoc, collection } from 'firebase/firestore';


function CreateSurvey() {
    const [titre, setTitre] = useState('');
    const [description, setDescription] = useState('');
    const [questions, setQuestions] = useState([]); // Initialize questions array
    const [data, setData] = useState([]); // Initialize questions array

    const col = collection(db, "surveys")
    const clickdon = () => {
        const obj = {
            titre, description, questions
        }
        setData(e => ([...e, obj]))
        addDoc(col, obj);

        setTitre("");
        setDescription("");
        setQuestions([]);
        alert("Survey created successfuly")

    };

    const handleTitreChange = (e) => {
        setTitre(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    // Function to add a new question to the questions array
    const ajouterQuestion = () => {
        const newQuestion = {
            question: '',
            choix: [] // Start with two empty choices
        };
        setQuestions([...questions, newQuestion]);
    };

    // Function to update a specific question in the questions array
    const handleQuestionChange = (index, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].question = value;
        setQuestions(updatedQuestions);
    };

    // Function to update choices for a specific question
    const handleChoiceChange = (questionIndex, choiceIndex, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].choix[choiceIndex] = {...updatedQuestions[questionIndex].choix[choiceIndex],name: value};
        setQuestions(updatedQuestions);
    };

    // Function to add a new choice to a specific question
    const ajouterChoix = (questionIndex) => {
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].choix.push({ count: 0, name: "" }); // Add an empty choice
        setQuestions(updatedQuestions);

    };
    const supprimerChoix = (questionIndex, choixIndex) => {
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].choix.splice(choixIndex, 1);
        setQuestions(updatedQuestions);
    };
    const supprimerquestion = (questionIndex) => {
        const updatedQuestions = [...questions];
        updatedQuestions.splice(questionIndex, 1);
        setQuestions(updatedQuestions);
    };
    

    return (
        <div className="bg-gray-100">
    <Nav />
    <div className="container mx-auto py-10">
        <div className="bg-white rounded-lg p-6 md:p-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Créer un sondage
            </h1>
            <div className="space-y-4">
                <input
                    type="text"
                    placeholder="Title"
                    value={titre}
                    onChange={handleTitreChange}
                    className="input-field bg-gray-200 block w-full rounded-lg px-4 py-2"
                    required
                />
                <textarea
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={handleDescriptionChange}
                    className="input-field bg-gray-200 block w-full rounded-lg px-4 py-2"
                    required
                />
            </div>
           
            <div className="mt-8 space-y-4">
                {questions.map((questionData, index) => (
                    <Question
                        key={index}
                        question={questionData.question}
                        choix={questionData.choix}
                        handleQuestionChange={(value) => handleQuestionChange(index, value)}
                        handleChoiceChange={(choiceIndex, value) => handleChoiceChange(index, choiceIndex, value)}
                        ajouterChoix={() => ajouterChoix(index)}
                        supprimerChoix={(choixIndex) => supprimerChoix(index, choixIndex)}
                        supprimerquestion={() => supprimerquestion(index)}
                    />
                ))}
            </div>
            <div className="mt-8 flex justify-between">
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-[5px] inline-block"
                    onClick={ajouterQuestion}
                >
                    Add question
                </button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-[5px] inline-block" onClick={clickdon}>
                    Done
                </button>
            </div>
        </div>
    </div>
</div>
    
    );
}

export default CreateSurvey;
