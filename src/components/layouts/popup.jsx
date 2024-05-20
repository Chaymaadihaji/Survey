import React from "react";
import QuestionComponent from "./questionComponent";


function Popup({ onClose, titre, description, q , id , values, loading }) {
 
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4  " hidden>
        {!loading && values.map(() => (
          <QuestionComponent onClose={onClose} q={q} titre={titre} description={description} id={id} />
        ))}
      </div>
    </>
  );
}
export default Popup