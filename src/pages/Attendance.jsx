function Attendance() {
  return (
    <div className="page">

      <div className="page-heading">
        <span className="section-label">ACADEMIC RECORD</span>

        <h1>Attendance</h1>

        <p>
          Track your subject-wise attendance and academic participation.
        </p>
      </div>

      <div className="attendance-summary">

        <div>
          <span>Overall Attendance</span>
          <strong>87%</strong>
        </div>

        <div>
          <span>Total Classes</span>
          <strong>120</strong>
        </div>

        <div>
          <span>Present</span>
          <strong>104</strong>
        </div>

        <div>
          <span>Absent</span>
          <strong>16</strong>
        </div>

      </div>

      <div className="content-card">

        <h2>Subject Attendance</h2>

        <div className="attendance-row">
          <div>
            <strong>Full Stack Development-I</strong>
            <span>32 / 36 classes</span>
          </div>

          <strong>89%</strong>
        </div>

        <div className="attendance-row">
          <div>
            <strong>Android Application Development</strong>
            <span>28 / 32 classes</span>
          </div>

          <strong>88%</strong>
        </div>

        <div className="attendance-row">
          <div>
            <strong>Cyber Security</strong>
            <span>24 / 28 classes</span>
          </div>

          <strong>86%</strong>
        </div>

        <div className="attendance-row">
          <div>
            <strong>Digital Marketing</strong>
            <span>20 / 24 classes</span>
          </div>

          <strong>83%</strong>
        </div>

      </div>

    </div>
  )
}

export default Attendance
