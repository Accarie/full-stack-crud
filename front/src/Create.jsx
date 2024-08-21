import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Create() {
  const [values, SetValues] = useState({
    name: '',
    email: ''
  })
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post("http://localhost:8081/student", values)
    .then(res => {
      console.log(res);
      navigate('/')
    })
    .catch(err => console.log(err))
  }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleSubmit}>
          <div className='mb-2'>
          <label htmlFor="name">Name</label>
          <input type='text' placeholder='Enter a name' onChange={e => SetValues({...values, name:e.target.value})}className='form-control'/>
          </div>
          <div className='mb-2'>
          <label htmlFor="email">Email</label>
          <input type='email' placeholder='Enter Email' onChange={e => SetValues({...values, email:e.target.value})} className='form-control'/>
          </div>
          <button className='btn btn-success '>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Create


