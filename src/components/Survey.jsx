import React from 'react'
import Nav from './layouts/navbar'
import { useState, useEffect } from 'react'
import Sondage from './layouts/Sondage'
import { db } from '../fireBase/fireBase'
import { collection, getDocs } from 'firebase/firestore'


function Survey() {
  const col = collection(db, "surveys")
  const [isLoading, setIsLoading] = useState(true)
  
  const [values, setSurvey] = useState([]);
  useEffect(() => {
    const getSurvey = async () => {
      try {
        const data = await getDocs(col);
        setSurvey(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.error("Error fetching survey:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getSurvey();
  }, []);



  return (
    <>
      <div className="bg-gray-100">
        <Nav />
        
        <div className="flex flex-wrap justify-center" >
          {!isLoading && values.map(v => (
            <>
              <Sondage titre={v.titre} description={v.description} q={v.questions} values={values} id={v.id} loading={isLoading} />
            </>
          ))}


        </div>



      </div>
    </>
  )
}

export default Survey