import StudentCard from './StudentCard'
import './App.css'

function App() {
  return (
    <>
      <h1>Components and Props</h1>

      <StudentCard
        name="Bhavika Vachheta"
        course="BCA"
      />

      <StudentCard
        name="Dipal Sharma"
        course="BCA"
      />

      <StudentCard
        name="Tisha Prajapati"
        course="BCA"
      />
    </>
  )
}

export default App