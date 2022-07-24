import React from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import CompareList from './CompareList';
import PomodoroClock from './PomodoroClock';

const Header = () => {
    return (
        <header>
            <nav>

            <NavLink to={'/'}>List Compare</NavLink>
            <NavLink to={'/clock'}>Promodo Clock</NavLink>
            </nav>

            <Routes>
                <Route path='/' element={<CompareList></CompareList>}></Route>
                <Route path='/clock' element={<PomodoroClock></PomodoroClock>}></Route>
            </Routes>

        </header>
    );
};

export default Header;