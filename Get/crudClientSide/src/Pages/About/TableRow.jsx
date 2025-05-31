import React from "react";

const TableRow = ({ rowsData }) => {

    // console.log(rowsData)


    const {_id, name, collage, school, eduction,result,email} = rowsData


    const handleUpdate=()=>{
        console.log('clicked')
    }

    const handleDelete=(id)=>{
        console.log('deleted id ', id);

        fetch(`http://localhost:3000/about/${id}`, {
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=> {
            console.log(`deleted data ${data}`);
        })
    }

  return (
    <tr>
      <th>{_id}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{eduction}</td>
      <td>{school}</td>
      <td>{collage}</td>
      <td>{result}</td>
      <td>
        <div>
            <button onClick={()=>handleDelete(_id)} className="btn p-2 text-red-500">X</button>
        </div>
        <div onClick={()=>handleUpdate()} className="btn p-2 text-green-500">
            Update
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
