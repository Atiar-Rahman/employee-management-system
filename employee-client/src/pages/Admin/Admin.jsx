import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Admin = () => {
    return (
        <div className='flex flex-col lg:flex-row container mx-auto lg:h-[100vh]'>
            <div className=' bg-red-100 grid grid-cols-3 p-3'>
                <ul>
                    <NavLink to='/'><li>Home</li></NavLink>
                    <NavLink to='/admin'><li>AdminHome</li></NavLink>
                    <NavLink to='/admin/add-emp'><li>AddEmployee</li></NavLink>
                </ul>
            </div>
            <div className='bg-green-200 w-full py-10'>
               <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Admin;