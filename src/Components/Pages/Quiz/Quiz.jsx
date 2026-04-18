import React, { useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';

const Quiz = () => {

    const quizes = useLoaderData();
    const [selected, setSelected] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(0);
    // console.log(quizes);
    const nevigate = useNavigate();

    const currentQuestion = quizes[currentIndex];
    // console.log(currentQuestion);


    const handleNext = () => {

        const isCorrect = selected === currentQuestion.correctAnswer;

        if (isCorrect===true)
           setScore(score+1);
     
        setUserAnswers([...userAnswers, selected]);

        if (currentIndex === quizes.length - 1) {

            // nevigate('/answer')
            setCurrentIndex(currentIndex)
            
        } else {
            
            setCurrentIndex(currentIndex + 1);
        }

        
        setSelected("")
        console.log(selected, score, isCorrect);
    }

    




    return (
        <div className=' w-105 mx-auto h-auto my-10 rounded-md shadow-blue-300 shadow-xl bg-transparent  p-5'>
            <div>
                <div>
                    <div className='flex items-center justify-between my-4'>
                        <div>Question {currentQuestion.id}   of {quizes.length}</div>
                        <div className='outline inline px-2 py-1 rounded-md text-xs'>
                            { currentIndex*10}%
                        </div>
                    </div>

                    <progress className="progress progress-info w-96" value={currentIndex} max="10"></progress>
                </div>

                <div>
                    {
                        <div >

                            <h1 className='text-lg my-7'><span>{currentQuestion.id}</span> {currentQuestion.title}</h1>
                            <div>{currentQuestion.options.map((option, index) => <div key={index} className={`w-full  my-3 p-2 rounded cursor-pointer hover:bg-base-300 ${selected === option ? "bg-base-300 outline-1 outline-base-300 text-blue-500" : "outline-1"}`} onClick={() => setSelected(option)} >{option}</div>)}
                                
                            </div>
                            <div className=' my-8 space-y-3'>
                                <button onClick={() => setCurrentIndex(currentIndex - 1)} disabled={currentIndex === 0 ? true : false} className='btn  w-full  '>Previous</button>
                                <button className='btn  w-full ' onClick={handleNext}
                                disabled={!selected}
                                >{currentQuestion.id == quizes.length ? "Finish Quiz" : "Next"}</button>
                            </div>
                        </div>
                    }
                </div>



            </div>
        </div>
    );
};

export default Quiz; 