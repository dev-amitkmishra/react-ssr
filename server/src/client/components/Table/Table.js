import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Table = () => {
   let students = [
      { id: 1, name: 'amit', age: 21, email: 'amit@email.com' },
      { id: 2, name: 'kumar', age: 19, email: 'kumar@email.com' },
      { id: 3, name: 'mishra', age: 16, email: 'mishra@email.com' },
      { id: 4, name: 'test', age: 25, email: 'test@email.com' }
   ];

   const renderTableHeader = () => {
      let header = Object.keys(students[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }

   const renderTableData = () => {
        return students.map((student, index) => {
        const { id, name, age, email } = student //destructuring
        return (
            <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{age}</td>
                <td>{email}</td>
            </tr>
        )
        })
   }

   return (
      <div>
         <h1>React Dynamic Table</h1>
         <table id='students'>
            <tbody>
               <tr>{renderTableHeader()}</tr>
               {renderTableData()}
            </tbody>
         </table>
      </div>
   )
}

export default Table //exporting a component make it reusable and this is the beauty of react