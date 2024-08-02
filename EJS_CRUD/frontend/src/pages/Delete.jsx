import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';

const Delete = () => {
  const [loading, setloading] = useState(false);
  const {id} = useParams();
  const navigate  = useNavigate();

  const handleDelete = () => {
    setloading(true);
    axios.delete(`http://localhost:4000/movie/delete/${id}`)
    .then(()=>{
      setloading(false);
      navigate('/');
    })
    .catch(
      (error) => {
        console.error(error);
        setloading(false);
      }
    )
  }
  return (
    <>
      <Link to="/" className="text-2xl text-blue-400">Back to home</Link>
      <h1 className="text-4xl my-4 font-bold tracking-tight">Delete movie data</h1>
      {loading ? <Spinner/> : ""}
      <button className="rounded-2xl text-white p-2 w-full h-10 bg-red-600 my-10" onClick={handleDelete}>Yes, Delete it</button>
    </>
  )
}

export default Delete