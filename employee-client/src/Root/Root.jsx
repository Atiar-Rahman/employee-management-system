import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Employees from '../components/Employees';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Employees></Employees>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;