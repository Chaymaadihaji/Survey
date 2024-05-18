import React from 'react';
import { FaTrashCan } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";



function Question({ question, choix, handleQuestionChange, handleChoiceChange, ajouterChoix, supprimerquestion, supprimerChoix }) {
    return (
        <div className="flex flex-col w-full p-4 bg-gray-200 rounded-lg mt-4">
    {/* Input for the question */}
    <input
        type="text"
        placeholder="Question"
        value={question}
        onChange={(e) => handleQuestionChange(e.target.value)}
        className="input-field text-xl bg-white block w-full rounded-lg px-4 py-2"
        required
    />

    {/* Loop through the choices and render inputs for each */}
    {choix.map((choice, index) => (
        <div key={index} className="flex items-center justify-center flex-col-2 mb-2 mt-2 gap-2 pl-1">
            <FaTrashCan color="red" onClick={() => supprimerChoix(index)}  />
            <input
                type="text"
                placeholder={`Choice ${index + 1}`}
                value={choice}
                onChange={(e) => handleChoiceChange(index, e.target.value)}
                className="input-field bg-white block w-full  rounded-lg px-4 py-2"
                required
            />
                    
        </div>
    ))}

    {/* Button to add a new choice */}
    <div className='flex justify-between'>
    <FaPlus
        className='text-black mr-8 text-4xl ml-10 hover:text-blue-600'
        onClick={ajouterChoix}
    />
    <button
            onClick={supprimerquestion} // Correction ici
         className="px-4 py-2 hover:bg-red-600  bg-black text-white rounded-md"
    >
        Supprimer question
    </button>
    </div>
</div>
    );
}

export default Question;
