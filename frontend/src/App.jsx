import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import axios from "axios"
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('https://scaling-doodle-p57wgp4w7wrcrpqq-3000.app.github.dev/jokes')
    .then((response) => {
      console.log(response)
      setJokes(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
  })

  return (
    <>
      <h1>This is my Frontend!!!</h1>
      <p>JOKES : {jokes.length}</p>
      {
        jokes.map((joke, index) => (
          <div key={joke.id}>
            <h3>{joke.Content}</h3>
          </div>
        ))
      }
    </>
  )
}

export default App
