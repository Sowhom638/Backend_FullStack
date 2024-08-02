import React, { useState } from 'react'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Create = () => {
const [movie, setmovie] = useState("");
const [director, setdirector] = useState("");
const [releaseYear, setreleaseYear] = useState();
const [loading, setloading] = useState(false);
const navigate = useNavigate();

  const handleSubmit = () => {
    
  const data = {
    movie,
    director,
    releaseYear
  };
  setloading(true);
  axios.post('http://localhost:4000/movie/create', data)
  .then(() => {
    setloading(true);
    navigate('/');
  })
  .catch((error) => {
    setloading(false);
    console.error(error);
  });
  };

  return (
    <>
      <Link to="/" className="text-2xl text-blue-400">Back to home</Link>
      <h1 className="text-4xl my-4 font-bold tracking-tight">Create new movie data</h1>
      {loading ? <Spinner /> : <div className="bg-slate-600 w-full m-4 p-4 rounded-2xl">
        <label className='mb-5 text-teal-300'>Movie</label>
        <input type="text" className="rounded-2xl p-2 w-full" placeholder='Movie' value={movie} onChange={(e) => setmovie(e.target.value)} />
        <label className='mb-5 text-teal-300'>Director</label>
        <input type="text" className="rounded-2xl p-2 w-full" placeholder='Director' value={director} onChange={(e) => setdirector(e.target.value)} />
        <label className='mb-5 text-teal-300'>Release Year</label>
        <input type="text" className="rounded-2xl p-2 w-full" placeholder='Release Year' value={releaseYear} onChange={(e) => setreleaseYear(e.target.value)} />
        <button className="rounded-2xl p-2 w-20 h-10 bg-teal-300 mt-4" onClick={handleSubmit}>Create</button>
        </div>}
    </>
  )
}

export default Create