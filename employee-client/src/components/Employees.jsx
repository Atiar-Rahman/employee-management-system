import React, { useEffect, useState } from 'react';
import Employee from './Employee';

const Employees = () => {
    const [emp,setEmp] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/admin/emps')
        .then(res=>res.json())
        .then(data=>{
            setEmp(data)
        })
    },[])
    return (
        <div>
            <h1>{emp.length}</h1>
            {
                emp.map(em=><Employee key={em.id} em={em}></Employee>)
            }
        </div>
    );
};

export default Employees;