import React from 'react'
import {Bar} from "react-chartjs-2"
function Report({ onClose, titre, description, q  }) {
  
  

    
  return (
    <>
    <div className="fixed inset-20 flex flex-col justifyCenter bg-white shadow-lg p-6 rounded-lg overflow-x-auto">
    <div className="flex flex-col items-center">
      
        <div >
          <div className="text-2xl font-bold mt-auto flex justify-center">{titre}</div>
          <div className="text-gray-600 mb-9 max-w-[700px] text-center">{description}</div>
          
            <div  className='mt-4'>
              <div className="text-black mb-2 text-4xl font-semibold flex justify-center"></div>
              {q.map(question => (
              <div key={question.id}>
                <div className='flex justify-center text-3xl bold'>{question.question}</div>
                <BarChart data={question.choix} className="w-[900px]" />
              </div>
              ))}
   
              
            </div>
          </div>
    </div>
    <div className="flex justify-center gap-5">
    <button onClick={onClose} className="my-4 bg-red-500 text-white font-bold py-2 px-4 rounded">
            Close
          </button>
    </div>
    </div>
    </>
  )
}
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarChart = ({ data }) => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartContainer.current.getContext('2d');
    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map(item => item.name),
        datasets: [{
          label: 'Count',
          data: data.map(item => item.count),
          backgroundColor: 'rgba(59, 130, 246, 0.5)',
          borderColor: 'rgba(59, 130, 246, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartContainer} className='w-[500px]' />;
}
export default Report