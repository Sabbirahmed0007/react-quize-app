import React from 'react';
import { createBrowserRouter } from "react-router"
import Layout from '../Pages/Layout/Layout';
import Home from '../Pages/Home/Home';
import Quiz from '../Pages/Quiz/Quiz';

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
                element:<Quiz></Quiz>
            }
        ]
    }
])

export default Rotuer;