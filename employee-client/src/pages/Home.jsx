import React, { useEffect } from 'react';

const Home = () => {
    const handleAdd = e =>{
        e.preventDefault();

        const employeeName = e.target.selfName.value;
        const fatherName = e.target.fatherName.value;
        const motherName = e.target.motherName.value;
        const address = e.target.address.value;
        const phone = e.target.phone.value;

        const employee = {
            employeeName,
            fatherName,
            motherName,
            address,
            phone
        }

        console.log(employee);

         fetch('http://localhost:5000/employees',{
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(employee)
        })
         .then(res=>res.json())
         .then(data=>{
                console.log(data);
         })
    }
    return (
        <div className='my-10 w-[70%] mx-auto'>
            <h1 className='text-center my-10'>Please insert your information</h1>
            <form onSubmit={handleAdd}>
                <input name='selfName' className='w-full border p-3 mb-3 rounded-lg' type="text" placeholder='your name'  />
                <input name='fatherName' className='w-full border p-3 mb-3 rounded-lg' type="text" placeholder="your father's name"  />
                <input name='motherName' className='w-full border p-3 mb-3 rounded-lg' type="text" placeholder="your mother's name..." />
                <input name='address' className='w-full border p-3 mb-3 rounded-lg' type="text" placeholder='your address...'  />
                <input name='phone' className='w-full border p-3 mb-3 rounded-lg' type="text" placeholder='your phone number'  />
                <input className='btn bg-green-400 w-full p-3 rounded-lg' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Home;