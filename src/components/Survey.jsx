import React from 'react'
import Nav from './components/navbar'

import Sondage from './components/Sondage'
import { db } from '../fireBase/fireBase'
import { collection } from 'firebase/firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'

function Survey() {
  const col = collection(db, "surveys")
  const [values, loading, error] = useCollectionData(col)

  return (
    <>
      <div className="bg-gray-100">
        <Nav />
        <div className="flex flex-wrap justify-center" >
          {!loading && values.map(v => (
            <>
              <Sondage titre={v.titre} description={v.description} q={v.questions} values={values} loading={loading} />

            </>
          ))}


        </div>



      </div>
    </>
  )
}

export default Survey