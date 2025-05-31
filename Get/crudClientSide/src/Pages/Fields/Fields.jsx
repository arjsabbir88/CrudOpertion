import React, { useState } from 'react'

const Fields = () => {


  const [user, setUser] = useState();

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Clicked")
        const form = e.target;
        const formData = new FormData(form);
        const addedData = Object.fromEntries(formData.entries());

        console.log(addedData)


        // create user form the table 

        fetch("http://localhost:3000/about",{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedData)
        })
        .then(res=>res.json())
        .then((data)=>{
          console.log(` data after created in the db ${data}`)
          if(data.insertedId){
            alert("User created successfully");
            e.target.reset();
          }
        })
    }


    fetch('http://localhost:3000/about')
    .then(res => res.json())
    .then(data=>{
      console.log('find data form the database: ');
    })

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name='name' placeholder="Name" className="input input-success" /> <br />
      <input type="text" name='email' placeholder="Email" className="input input-success" /><br />
      <input type="text" name='education' placeholder="Education" className="input input-success" /><br />
      <input type="text" name='school' placeholder="school" className="input input-success" /><br />
      <input type="text" name='collage' placeholder="Collage" className="input input-success" /><br />
      <input type="text" name='result' placeholder="Result" className="input input-success" /><br />

      <button type='submit' className='btn btn-success btn-soft'>Submit</button>
    </form>
  )
}

export default Fields
