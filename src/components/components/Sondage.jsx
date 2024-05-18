import React, { useState } from 'react';
import QuestionComponent from "./questionComponent";
import img from "../../public/img.png"
import Popup from './popup';
import Report from './Report';

function Sondage({ titre, description, values, q, loading }) {
  const [isPopupDetOpen, setPopupDetOpen] = useState(false);
  const [isPopupResOpen, setPopupResOpen] = useState(false);

  const togglePopupDet = () => {
    setPopupDetOpen(!isPopupDetOpen);
  };
  const togglePopupRes = () => {
    setPopupResOpen(!isPopupResOpen);
  };

  return (
    <>
      <div className="max-w-xl w-96 bg-white shadow-lg p-6 rounded-lg overflow-hidden m-4">
        <img src={img} alt="Survey" className="w-full h-48 object-cover rounded-t-lg mb-4" />
        <h2 className="text-2xl font-bold mb-2">{titre}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className=' flex gap-5'>
        <button onClick={togglePopupDet} className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-[5px] inline-block'>Show Details</button>
        <button onClick={togglePopupRes} className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-[5px] inline-block'>Show Results</button>
        </div>
      </div>
      {isPopupDetOpen && <Popup onClose={togglePopupDet} q={q} titre={titre} description={description} values={values} loading={loading} />}
      {isPopupResOpen && <Report onClose={togglePopupRes} q={q} titre={titre} description={description} values={values} loading={loading} />}
    </>
  );
}

export default Sondage;