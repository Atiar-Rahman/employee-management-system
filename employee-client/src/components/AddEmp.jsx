import React from 'react';

const AddEmp = () => {
    const handleAddInfo = e =>{
        e.preventDefault();

        const empName = e.target.name.value;
        const empFatherName = e.target.fatherName.value;
        const empMotherName = e.target.motherName.value;
        
        const empInfo = {
            empName,
            empFatherName,
            empMotherName
        }

        // console.log(empInfo);

        fetch('http://localhost:5000/admin/add-emp', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(empInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })


    }
    return (
        <div>
            <h1 className='text-center my-10 font-semibold text-2xl'>Please add Employee Information</h1>
           <form onSubmit={handleAddInfo} className='w-[50%] mx-auto' >
            <input className='w-full p-3 bg-green-300 text-black rounded-lg mb-2' type="text" name='name'/>
                <input className='w-full p-3 bg-green-300 text-black rounded-lg mb-2' type="text" name='fatherName' />
                <input className='w-full p-3 bg-green-300 text-black rounded-lg mb-2' type="text" name='motherName' /> 
                <input className='btn w-full p-3 bg-green-300 text-black rounded-lg mb-2' type="submit" value="Add Info" />
           </form>
        </div>
    );
};

export default AddEmp;