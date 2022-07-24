import React from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import CompareList from './CompareList';
import PomodoroClock from './PomodoroClock';

const Header = () => {
    return (
        <header className='  '>
            <nav className='bg-slate-700 py-6 text-center'>
                <NavLink className={({ isActive }) => isActive ? 'navigation nav-active mr-5 ' : 'navigation nav-deactive mr-5 '} to={'/'}>List Compare</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'navigation nav-active ' : 'navigation nav-deactive '} to={'/clock'}>Promodo Clock</NavLink>
            </nav>

            <Routes>
                <Route path='/' element={<CompareList></CompareList>}></Route>
                <Route path='/clock' element={<PomodoroClock></PomodoroClock>}></Route>
            </Routes>

        </header>
    );
};

export default Header;