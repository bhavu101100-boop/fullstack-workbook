function Home() {
  return (
    <div className="home-page">

      <section className="home-hero">
        <div className="home-content">

          <span className="home-badge">
            ✦ SMART STUDENT LIFE & CAREER HUB
          </span>

          <h1>
            Plan.
            <span> Learn.</span>
            <br />
            Grow.
          </h1>

          <p>
            CampusPulse brings your academics, assignments, attendance,
            events, skills and career progress together in one smart
            student platform.
          </p>

          <div className="home-buttons">
            <a href="/dashboard" className="primary-button">
              Explore Dashboard →
            </a>

            <a href="#features" className="secondary-button">
              Discover Features
            </a>
          </div>

        </div>

        <div className="home-visual">

          <div className="floating-card card-one">
            <span>📚</span>
            <div>
              <strong>6</strong>
              <small>Courses</small>
            </div>
          </div>

          <div className="home-dashboard-preview">

            <div className="preview-top">
              <div>
                <small>STUDENT DASHBOARD</small>
                <h3>Good Morning, Bhavika 👋</h3>
              </div>

              <div className="preview-avatar">
                BV
              </div>
            </div>

            <div className="preview-stat-row">

              <div>
                <span>Tasks</span>
                <strong>08</strong>
              </div>

              <div>
                <span>Attendance</span>
                <strong>87%</strong>
              </div>

              <div>
                <span>Skills</span>
                <strong>72%</strong>
              </div>

            </div>

            <div className="preview-progress">
              <div>
                <span>Overall Progress</span>
                <strong>82%</strong>
              </div>

              <div className="preview-progress-bar">
                <div></div>
              </div>
            </div>

            <div className="preview-task">
              <span className="done-circle">✓</span>
              <div>
                <strong>Project Documentation</strong>
                <small>Completed</small>
              </div>
            </div>

            <div className="preview-task">
              <span className="empty-circle"></span>
              <div>
                <strong>React Assignment</strong>
                <small>Due Today</small>
              </div>
            </div>

          </div>

          <div className="floating-card card-two">
            <span>🎯</span>
            <div>
              <strong>72%</strong>
              <small>Skill Progress</small>
            </div>
          </div>

        </div>
      </section>

      <section className="home-features" id="features">

        <div className="home-section-heading">
          <span>EVERYTHING IN ONE PLACE</span>

          <h2>
            Your complete student
            <br />
            <span>growth platform.</span>
          </h2>

          <p>
            Manage your college journey with simple tools designed
            around the way students actually work.
          </p>
        </div>

        <div className="home-feature-grid">

          <div className="home-feature-card">
            <div className="home-feature-icon blue-icon">
              📚
            </div>
            <h3>Academic Planning</h3>
            <p>
              Organize courses, assignments and your academic goals.
            </p>
          </div>

          <div className="home-feature-card">
            <div className="home-feature-icon coral-icon">
              ✓
            </div>
            <h3>Assignments</h3>
            <p>
              Track your daily tasks and never miss important deadlines.
            </p>
          </div>

          <div className="home-feature-card">
            <div className="home-feature-icon teal-icon">
              📋
            </div>
            <h3>Attendance</h3>
            <p>
              Monitor your subject-wise attendance and academic status.
            </p>
          </div>

          <div className="home-feature-card">
            <div className="home-feature-icon yellow-icon">
              🎯
            </div>
            <h3>Skills & Career</h3>
            <p>
              Track technical skills and visualize your career growth.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;