import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'
import { IoAdd } from "react-icons/io5";
import { FaCircleInfo } from "react-icons/fa6";
import { MdDelete, MdModeEditOutline } from "react-icons/md";

const Home = () => {
    const [movies, setmovies] = useState([]);
    const [loading, setloading] = useState(false);

    useEffect(() => {
        setloading(true);
        axios.get('http://localhost:4000/movie/read')
            .then((response) => {
                setmovies(response.data);
                setloading(false);
            })
            .catch((error) => {
                console.error('Error fetching movies', error);
                setloading(true);
            })
    }, [])

    return (
        <div className='p-4'>
            <div className='flex justify-between items-center'>
                <h1 className="text-5xl my-8 font-bold tracking-tight">Movie List</h1>
                <Link to='/movie/create' className='w-5 h-5 rounded-full border-black border-2'><IoAdd /></Link>
            </div>
            {
                loading ? <Spinner /> : movies.map((movie) => (
                    <div key={movie._id} className='flex justify-between items-center p-2 border-b-2 m-4 border-gray-200'>
                        <div>
                            <h2 className='text-xl font-bold'>{movie.movie}</h2>
                            <p>Director: {movie.director}</p>
                            <p>Release Year: {movie.releaseYear}</p>
                        </div>
                        <div className='flex space-x-4'>
                            <Link to={`/movie/update/${movie._id}`}><MdModeEditOutline /></Link>
                            <Link to={`/movie/delete/${movie._id}`}><MdDelete /></Link>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Home