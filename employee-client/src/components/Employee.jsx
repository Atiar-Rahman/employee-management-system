import React from 'react';
import { Link } from 'react-router-dom';

const Employee = ({em}) => {
    console.log(em);
    const {id,empName,empFatherName,empMotherName} = em;
    return (
        <div>
            <h1>{empName}</h1>
            <Link to={`/admin/${id}`}><button>delete</button></Link>
        </div>
    );
};

export default Employee;