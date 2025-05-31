import React from 'react'
import { useLoaderData } from 'react-router'
import TableRow from './TableRow';

const About = () => {
    const userData = useLoaderData();
    console.log(userData);

  return (
    <div>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>id</th>
        <th>Name</th>
        <th>email</th>
        <th>education</th>
        <th>school</th>
        <th>Collage</th>
        <th>Result</th>
        <th>Edit</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        userData.map(rowsData => <TableRow key={rowsData._id} rowsData={rowsData}></TableRow>)
      }
      
    </tbody>
  </table>
</div>
    </div>
  )
}

export default About
