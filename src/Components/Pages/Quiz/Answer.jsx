import React from 'react';

const Answer = ({ score, inCorrect, totalQuizes, quizes, userAnswers, playAgain }) => {
    return (
        <div>
            <div className='text-center text-3xl font-black font-playwrite'>
                <h1>Quiz Completed!</h1>
            </div>
            {/* Result Stats */}
            <div className='stats shadow my-5 w-full'>
                <div className='stat'>
                    <h1 className='stat-title'>Correct </h1>
                    <p className='stat-value text-info'>{ score}</p>

                </div>
                <div className='stat'>
                    <h1 className='stat-title'>Incorrect</h1>
                    <p className='stat-value text-warning'>{ inCorrect}</p>
                </div>
                <div className='stat'>
                    <h1 className='stat-title'>Percentage</h1>
                    <p className='stat-value'>{ (score/totalQuizes)*100}%</p>
                </div>

            </div>

            {/* Answers */}
            <div>
                <h1 className='my-2 italic'>Feedback: {score>5 ? 'Well Done! You are amazing':'Keep up the hard work. Better luck next time.'}</h1>
                <h1 className='text-2xl font-bold'>Yours Answers</h1>
                <div>
                    {
                        quizes.map((quiz, index) => {

                            const userAnswer = userAnswers[index];

                            const isCorrect = userAnswer === quiz.correctAnswer;

                            return (
                                <div>
                                    <div className='my-3 border-t pt-2'>
                                        <span>{ index+1}</span>, {quiz.title}
                                    </div>
                                    <div className='flex flex-col justify-center gap-3' >
                                        <div className={`${isCorrect? 'badge badge-info':'badge badge-warning'}`}>Your Answer: {userAnswer}</div>
                                    <p className=' badge badge-info '>Correct Answer: {quiz.correctAnswer}</p>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
                <div>
                    <button className='btn btn-success my-3 w-full' onClick={playAgain}>Play Again </button>
                </div>
            </div>
        </div>
    );
};

export default Answer;