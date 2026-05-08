import React from 'react';
import { createBrowserRouter } from "react-router"
import Layout from '../Pages/Layout/Layout';
import Home from '../Pages/Home/Home';
import Quiz from '../Pages/Quiz/Quiz';
import axios from 'axios';
import Answer from '../Pages/Quiz/Answer';

const Rotuer = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                index:true,
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/quiz',
                loader: async () => {
                    
                    const res = await axios.get('/quiz.json');
                    const data = await res.data;

                    // console.log(data);

                    return data;
                    
                    
                },
                element:<Quiz></Quiz>
            },
            
        ]
    }
])

export default Rotuer;