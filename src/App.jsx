import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Full Stack Development - I</h1>
        <h2>React Setup & GitHub Initialization</h2>

        <p>Welcome to my React project.</p>

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <p>
          This project is created as part of my Full Stack Development-I
          Experiential Learning Workbook.
        </p>
      </div>
    </>
  )
}

export default App