function Assignments() {
  return (
    <div className="page">

      {/* ================= HEADER ================= */}

      <div className="page-heading">

        <span className="section-label">
          ACADEMIC WORK
        </span>

        <h1>
          Assignments & Tasks
        </h1>

        <p>
          Organize your academic work and stay on top of deadlines.
        </p>

      </div>


      {/* ================= SUMMARY ================= */}

      <div className="assignment-summary">

        <div className="assignment-summary-card blue-summary">

          <div className="assignment-summary-icon">
            📋
          </div>

          <div>
            <span>Total Tasks</span>
            <strong>08</strong>
          </div>

        </div>


        <div className="assignment-summary-card green-summary">

          <div className="assignment-summary-icon">
            ✓
          </div>

          <div>
            <span>Completed</span>
            <strong>04</strong>
          </div>

        </div>


        <div className="assignment-summary-card orange-summary">

          <div className="assignment-summary-icon">
            !
          </div>

          <div>
            <span>Pending</span>
            <strong>03</strong>
          </div>

        </div>


        <div className="assignment-summary-card coral-summary">

          <div className="assignment-summary-icon">
            ⏰
          </div>

          <div>
            <span>Due Soon</span>
            <strong>01</strong>
          </div>

        </div>

      </div>


      {/* ================= TASK LIST ================= */}

      <div className="assignment-section">

        <div className="assignment-section-header">

          <div>
            <h2>
              My Assignments
            </h2>

            <p>
              Track your academic tasks and deadlines.
            </p>
          </div>

          <button className="assignment-filter">
            All Tasks ▾
          </button>

        </div>


        {/* TASK 1 */}

        <div className="assignment-card completed-assignment">

          <div className="assignment-check completed-check">
            ✓
          </div>

          <div className="assignment-content">

            <h3>
              React Router Implementation
            </h3>

            <p>
              Full Stack Development-I
            </p>

            <span className="assignment-date">
              Completed • 22 September 2026
            </span>

          </div>

          <span className="assignment-status completed-status">
            Completed
          </span>

        </div>


        {/* TASK 2 */}

        <div className="assignment-card">

          <div className="assignment-check pending-check">
            !
          </div>

          <div className="assignment-content">

            <h3>
              Cyber Security Mini Project
            </h3>

            <p>
              Secure File Encryption System
            </p>

            <span className="assignment-date">
              Due • 28 September 2026
            </span>

          </div>

          <span className="assignment-status due-status">
            Due Soon
          </span>

        </div>


        {/* TASK 3 */}

        <div className="assignment-card">

          <div className="assignment-check pending-check">
            !
          </div>

          <div className="assignment-content">

            <h3>
              Android Application Assignment
            </h3>

            <p>
              Smart Campus Navigation
            </p>

            <span className="assignment-date">
              Due • 30 September 2026
            </span>

          </div>

          <span className="assignment-status pending-status">
            Pending
          </span>

        </div>


        {/* TASK 4 */}

        <div className="assignment-card">

          <div className="assignment-check pending-check">
            !
          </div>

          <div className="assignment-content">

            <h3>
              Digital Marketing Report
            </h3>

            <p>
              SEO & Social Media Marketing
            </p>

            <span className="assignment-date">
              Due • 04 October 2026
            </span>

          </div>

          <span className="assignment-status pending-status">
            Pending
          </span>

        </div>


        {/* TASK 5 */}

        <div className="assignment-card">

          <div className="assignment-check completed-check">
            ✓
          </div>

          <div className="assignment-content">

            <h3>
              Power BI Dashboard
            </h3>

            <p>
              Data Visualization & Business Intelligence
            </p>

            <span className="assignment-date">
              Completed • 20 September 2026
            </span>

          </div>

          <span className="assignment-status completed-status">
            Completed
          </span>

        </div>

      </div>

    </div>
  )
}

export default Assignments