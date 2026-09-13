function StudentCard({ name, course }) {
  return (
    <div className="student-card">
      <h2>{name}</h2>
      <p>Course: {course}</p>
    </div>
  )
}

export default StudentCard