import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Read() {
  const {id} = useParams();
  const [student ,setStudent] = useState([])
  useEffect(()=> {
      axios.get('http://localhost:8081/read/' +id)
      .then(res =>{
        console.log(res)
        setStudent(res.data[0]);
      })
      .catch(err =>console.log(err))

  }, [])
  return (
    <div className='d-flex vh-100 bg-success justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <div className='p-2'>
        <h2>Student Details</h2>
        <h4>{student.id}</h4>
        <h4>{student.Name}</h4>
        <h4>{student.Email}</h4>
        <Link to='/' className='btn btn-success'>Back</Link>
        <Link to={`/edit/${student.id}`}className='btn btn-primary m-2'>Edit</Link>
        </div>
      </div>
    </div>
  )
}

export default Read