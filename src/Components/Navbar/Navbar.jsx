import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {

    const [theme, setTheme] = useState('dim');

    useEffect(() => {
        const getTheme = localStorage.getItem('theme');
        // console.log(getTheme);
        document.documentElement.setAttribute('data-theme', getTheme);
        setTheme(getTheme)
    },[])




    const handleToggle = () => {
        // console.log('Hello theme');
        const newTheme = theme === 'dim' ? 'retro' : 'dim';
        localStorage.setItem('theme', newTheme)
        document.documentElement.setAttribute('data-theme', newTheme);
        setTheme(newTheme)
        
    }



    const links = (
        <div className='space-x-2'>

            <NavLink to={'/'} className={({ isActive }) => isActive ? 'underline  font-semibold font-saira hover:text-primary':'hover:text-primary'}>Home</NavLink>
            <NavLink to={'/quiz'} className={({ isActive }) => isActive ? 'underline font-semibold font-saira hover:text-primary':'hover:text-primary'}>Quiz</NavLink>
        </div>
    )

    return (
        <div>
            <div className={`navbar px-3 ${theme === "black" ?'shadow shadow-gray-600':'shadow'}
            `}>
                <div className=' navbar-start '>
                    <h1 className='text-2xl font-bold'><span className='font-saira italic'>Brain</span><span>Spark</span></h1>

                </div>
                <div className='navbar-center  lg:flex'>
                    {links}

                </div>
                <div className='navbar-end'>
                    <input type="checkbox"  className="toggle theme-controller" onChange={handleToggle} checked={theme === 'dim'} />
                </div>

            </div>
        </div>
    );
};

export default Navbar;