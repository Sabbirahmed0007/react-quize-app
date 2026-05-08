import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';
import Answer from './Answer';

const Quiz = () => {

    const quizes = useLoaderData();
    const [selected, setSelected] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [inCorrect, setIncorrect] = useState(0);
    const [screen, setScreen] = useState("")
    // console.log(quizes);
    const nevigate = useNavigate();

    const currentQuestion = quizes[currentIndex];
    const totalQuizes = quizes.length;
    // console.log(currentQuestion);


    const handleNext = () => {

        const isCorrect = selected === currentQuestion.correctAnswer;

        if (isCorrect === true) {
            
            setScore(score + 1);
        } else {
            setIncorrect(inCorrect + 1);
        }

        setUserAnswers([...userAnswers, selected]);

        if (currentIndex === totalQuizes - 1) {

            // nevigate('/answer')
            setScreen("result");

        } else {

            setCurrentIndex(currentIndex + 1);
        }


        setSelected("")
    }

    useEffect(() => {

        console.log(selected, score);
    }, [score, selected])

    // console.log(currentIndex);


    const playAgain = () => {
        setScore(0);
        setCurrentIndex(0);
        setUserAnswers(0);
        setIncorrect(0);
        setScreen('quiz');
        setSelected('');
        setUserAnswers([]);
            
        
    }




    return (
        <div className=' w-105 mx-auto h-auto my-10 rounded-md shadow-blue-300 shadow-xl bg-transparent  p-5'>


            {
                screen !=="result"? < div >
            {/* Quiz Screen */}

                <div>
                    {/* progress and questions index */}
                    <div className='flex items-center justify-between my-4'>
                        <div>Question {currentIndex+1}   of {totalQuizes}</div>
                        <div className='outline inline px-2 py-1 rounded-md text-xs'>
                            {Math.round(((currentIndex + 1) / totalQuizes) * 100)}%
                        </div>
                    </div>

                    <progress className="progress progress-info w-96" value={currentIndex + 1} max={totalQuizes}></progress>
                </div>


                {/* Quiz part */}


                {
                    <div >

                        <h1 className='text-lg mt-5'><span>{currentIndex+1}</span> {currentQuestion.title}</h1>
                        <div>{currentQuestion.options.map((option, index) => <div key={index} className={`w-full  my-3 p-2 rounded cursor-pointer hover:bg-base-300 ${selected === option ? "bg-base-300 outline-1 outline-base-300 text-blue-500" : "outline-1"}`} onClick={() => setSelected(option)} >{option}</div>)}

                        </div>
                        <div className=' my-8 space-y-3'>
                            <button onClick={() => setCurrentIndex(currentIndex - 1)} disabled={currentIndex === 0 ? true : false} className='btn  w-full  '>Previous</button>
                            <button className='btn  w-full ' onClick={handleNext}
                                disabled={!selected}
                            >{currentIndex + 1 == totalQuizes ? "Finish Quiz" : "Next"}</button>
                        </div>
                    </div>
                }
                </div> : <div>
                        {/* Result Screen */}<Answer score={score} totalQuizes={totalQuizes} inCorrect={inCorrect} quizes={quizes} userAnswers={userAnswers} playAgain={playAgain}></Answer>
                    </div>
            }

           








        </div>
    );
};

export default Quiz; 