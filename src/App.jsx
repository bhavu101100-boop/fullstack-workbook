import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Count: ${count}`
  }, [count])

  return (
    <>
      <h1>useEffect & Lifecycle Concepts</h1>

      <p>Counter Value: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </>
  )
}

export default App