import React from 'react'
import Header from './Header'
import Footer from './Footer'
import "./App.css"
import Student from './Student'
import students from "./students.json"
import Movie from './Moviee'
import movies from "./movie.json"
import Moviee from './Moviee'

const MovieClone = () => {
    return (
      <div>
      <Header/>
      <div className='main'>
      {
           movies.map((m)=>{
            return(
              <Moviee
              img={m.Poster}
              title={m.Title}
              year={m.Year}
            />
              )
          })
          }
      </div>
      <Footer/>
      </div>
    )
  }
  
  export default MovieClone