import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { response } from 'express'

function App() {
  const [jokes,setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })

  return (
    <>
      <h1>full stack Project</h1>
      <p>JOKES:{jokes.length}</p>
      {
        jokes.map((joke,index) => (
          <div key={joke.id}>
            <h3>{joke.punchline}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App