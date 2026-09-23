import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import './App.css'

function Home() {
  return (
    <div className="page">

      {/* Welcome Section */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="welcome-badge">STUDENT OVERVIEW</span>

          <h1>
            Welcome back, <span>Student!</span> 👋
          </h1>

          <p>
            Stay organized, track your academic progress, discover campus
            opportunities and build your career journey — all in one place.
          </p>

          <div className="hero-actions">
            <NavLink to="/dashboard" className="primary-button">
              View Dashboard →
            </NavLink>

            <NavLink to="/events" className="secondary-button">
              Explore Events
            </NavLink>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-circle">
            <div className="hero-icon">✦</div>
          </div>

          <div className="floating-card floating-card-one">
            <strong>87%</strong>
            <span>Attendance</span>
          </div>

          <div className="floating-card floating-card-two">
            <strong>78%</strong>
            <span>Academic Progress</span>
          </div>
        </div>
      </section>


      {/* Statistics */}
      <section className="home-section">

        <div className="section-heading">
          <div>
            <span className="section-label">YOUR PROGRESS</span>
            <h2>Academic Snapshot</h2>
          </div>

          <span className="updated-text">
            Updated today
          </span>
        </div>

        <div className="stats-grid">

          <div className="stat-card">
            <div className="stat-icon blue">📚</div>

            <div>
              <h3>12</h3>
              <p>Active Courses</p>
              <small className="positive-text">+2 this semester</small>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon green">✓</div>

            <div>
              <h3>87%</h3>
              <p>Attendance</p>
              <small className="positive-text">Good standing</small>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon coral">📝</div>

            <div>
              <h3>05</h3>
              <p>Pending Tasks</p>
              <small className="warning-text">2 due this week</small>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon orange">🏆</div>

            <div>
              <h3>14</h3>
              <p>Achievements</p>
              <small className="positive-text">Keep growing</small>
            </div>
          </div>

        </div>
      </section>


      {/* Main Home Content */}
      <div className="home-content-grid">

        {/* Academic Progress */}
        <section className="content-card">

          <div className="card-header">
            <div>
              <span className="section-label">PERFORMANCE</span>
              <h2>My Progress</h2>
              <p>Track your academic and career development.</p>
            </div>

            <span className="progress-score">78%</span>
          </div>

          <div className="progress-item">
            <div className="progress-label">
              <span>Academic Progress</span>
              <strong>78%</strong>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: '78%' }}
              ></div>
            </div>
          </div>

          <div className="progress-item">
            <div className="progress-label">
              <span>Career Development</span>
              <strong>64%</strong>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill career"
                style={{ width: '64%' }}
              ></div>
            </div>
          </div>

          <div className="progress-item">
            <div className="progress-label">
              <span>Skill Development</span>
              <strong>72%</strong>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill skill"
                style={{ width: '72%' }}
              ></div>
            </div>
          </div>

        </section>


        {/* Upcoming Events */}
        <section className="content-card">

          <div className="card-header">
            <div>
              <span className="section-label">CAMPUS LIFE</span>
              <h2>Upcoming Events</h2>
              <p>What's happening around campus?</p>
            </div>

            <NavLink to="/events" className="view-link">
              View all →
            </NavLink>
          </div>

          <div className="event-item">
            <div className="event-date">
              <strong>24</strong>
              <span>SEP</span>
            </div>

            <div>
              <h4>Technology Workshop</h4>
              <p>10:00 AM • University Auditorium</p>
            </div>
          </div>

          <div className="event-item">
            <div className="event-date coral-date">
              <strong>27</strong>
              <span>SEP</span>
            </div>

            <div>
              <h4>Project Submission</h4>
              <p>Full Stack Development-I</p>
            </div>
          </div>

          <div className="event-item">
            <div className="event-date green-date">
              <strong>30</strong>
              <span>SEP</span>
            </div>

            <div>
              <h4>AI & Innovation Summit</h4>
              <p>11:00 AM • Seminar Hall</p>
            </div>
          </div>

        </section>

      </div>


      {/* Quick Access */}
      <section className="home-section">

        <div className="section-heading">
          <div>
            <span className="section-label">QUICK ACCESS</span>
            <h2>What would you like to do?</h2>
          </div>
        </div>

        <div className="quick-actions">

          <NavLink to="/assignments" className="quick-card">
            <div className="quick-icon blue-bg">📝</div>
            <div>
              <h3>Manage Tasks</h3>
              <p>View your assignments</p>
            </div>
            <span>→</span>
          </NavLink>

          <NavLink to="/attendance" className="quick-card">
            <div className="quick-icon green-bg">✓</div>
            <div>
              <h3>Check Attendance</h3>
              <p>View subject attendance</p>
            </div>
            <span>→</span>
          </NavLink>

          <NavLink to="/skills" className="quick-card">
            <div className="quick-icon coral-bg">🎯</div>
            <div>
              <h3>Build Skills</h3>
              <p>Track career progress</p>
            </div>
            <span>→</span>
          </NavLink>

        </div>

      </section>

    </div>
  )
}


function Dashboard() {
  return (
    <div className="page">
      <div className="page-heading">
        <span className="section-label">ACADEMIC OVERVIEW</span>
        <h1>Student Dashboard</h1>
        <p>Monitor your academic performance and daily progress.</p>
      </div>

      <div className="dashboard-banner">
        <div>
          <h2>Keep moving forward! 🚀</h2>
          <p>You are making steady progress toward your academic goals.</p>
        </div>
        <div className="banner-number">78%</div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon blue">📚</div>
          <div><h3>12</h3><p>Total Courses</p></div>
        </div>

        <div className="stat-card">
          <div className="stat-icon green">✓</div>
          <div><h3>87%</h3><p>Attendance</p></div>
        </div>

        <div className="stat-card">
          <div className="stat-icon coral">📝</div>
          <div><h3>05</h3><p>Pending Tasks</p></div>
        </div>

        <div className="stat-card">
          <div className="stat-icon orange">🏆</div>
          <div><h3>14</h3><p>Achievements</p></div>
        </div>
      </div>
    </div>
  )
}

function Events() {
  return (
    <div className="page">
      <div className="page-heading">
        <span className="section-label">CAMPUS ACTIVITIES</span>
        <h1>College Events</h1>
        <p>Discover workshops, seminars, competitions and campus activities.</p>
      </div>

      <div className="cards-grid">
        <div className="feature-card">
          <div className="feature-icon blue-bg">💻</div>
          <span className="event-tag">WORKSHOP</span>
          <h2>Web Development Workshop</h2>
          <p>Learn modern web development technologies and build real projects.</p>
          <div className="card-info">📅 24 September 2026</div>
          <div className="card-info">📍 University Auditorium</div>
        </div>

        <div className="feature-card">
          <div className="feature-icon coral-bg">🤖</div>
          <span className="event-tag coral-tag">TECH EVENT</span>
          <h2>AI & Innovation Summit</h2>
          <p>Explore artificial intelligence, innovation and emerging technologies.</p>
          <div className="card-info">📅 30 September 2026</div>
          <div className="card-info">📍 Seminar Hall</div>
        </div>

        <div className="feature-card">
          <div className="feature-icon green-bg">🏆</div>
          <span className="event-tag green-tag">COMPETITION</span>
          <h2>Code Challenge 2026</h2>
          <p>Test your programming skills and compete with fellow students.</p>
          <div className="card-info">📅 05 October 2026</div>
          <div className="card-info">📍 Computer Lab</div>
        </div>
      </div>
    </div>
  )
}

function Attendance() {
  return (
    <div className="page">
      <div className="page-heading">
        <span className="section-label">ACADEMIC RECORD</span>
        <h1>Attendance</h1>
        <p>Track your subject-wise attendance and academic participation.</p>
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
          <div><strong>Full Stack Development-I</strong><span>32 / 36 classes</span></div>
          <strong>89%</strong>
        </div>

        <div className="attendance-row">
          <div><strong>Android Application Development</strong><span>28 / 32 classes</span></div>
          <strong>88%</strong>
        </div>

        <div className="attendance-row">
          <div><strong>Cyber Security</strong><span>24 / 28 classes</span></div>
          <strong>86%</strong>
        </div>

        <div className="attendance-row">
          <div><strong>Digital Marketing</strong><span>20 / 24 classes</span></div>
          <strong>83%</strong>
        </div>
      </div>
    </div>
  )
}

function Assignments() {
  return (
    <div className="page">
      <div className="page-heading">
        <span className="section-label">ACADEMIC WORK</span>
        <h1>Assignments & Tasks</h1>
        <p>Organize your academic work and stay on top of deadlines.</p>
      </div>

      <div className="task-list">
        <div className="task-card">
          <div className="task-check">✓</div>
          <div className="task-content">
            <h3>React Router Implementation</h3>
            <p>Full Stack Development-I</p>
          </div>
          <span className="status completed">Completed</span>
        </div>

        <div className="task-card">
          <div className="task-check pending">!</div>
          <div className="task-content">
            <h3>Cyber Security Mini Project</h3>
            <p>Secure File Encryption System</p>
          </div>
          <span className="status due">Due Soon</span>
        </div>

        <div className="task-card">
          <div className="task-check pending">!</div>
          <div className="task-content">
            <h3>Android Assignment</h3>
            <p>Smart Campus Navigation</p>
          </div>
          <span className="status due">Pending</span>
        </div>
      </div>
    </div>
  )
}

function Skills() {
  return (
    <div className="page">
      <div className="page-heading">
        <span className="section-label">CAREER DEVELOPMENT</span>
        <h1>Skills & Career</h1>
        <p>Build, track and improve the skills that shape your career.</p>
      </div>

      <div className="skills-grid">
        <div className="skill-card">
          <div className="skill-top">
            <h3>JavaScript</h3>
            <strong>80%</strong>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '80%' }}></div>
          </div>
          <span>Advanced Beginner</span>
        </div>

        <div className="skill-card">
          <div className="skill-top">
            <h3>React</h3>
            <strong>70%</strong>
          </div>
          <div className="progress-bar">
            <div className="progress-fill career" style={{ width: '70%' }}></div>
          </div>
          <span>Intermediate</span>
        </div>

        <div className="skill-card">
          <div className="skill-top">
            <h3>Python</h3>
            <strong>75%</strong>
          </div>
          <div className="progress-bar">
            <div className="progress-fill skill" style={{ width: '75%' }}></div>
          </div>
          <span>Intermediate</span>
        </div>

        <div className="skill-card">
          <div className="skill-top">
            <h3>UI / UX</h3>
            <strong>65%</strong>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '65%' }}></div>
          </div>
          <span>Learning</span>
        </div>
      </div>
    </div>
  )
}

function Profile() {
  return (
    <div className="page">
      <div className="page-heading">
        <span className="section-label">STUDENT ACCOUNT</span>
        <h1>My Profile</h1>
        <p>Manage your student information and personal achievements.</p>
      </div>

      <div className="profile-card">
        <div className="profile-avatar">BV</div>

        <div className="profile-info">
          <h2>Student Profile</h2>
          <p>Computer Application Student</p>

          <div className="profile-details">
            <div>
              <span>Program</span>
              <strong>BCA</strong>
            </div>

            <div>
              <span>Semester</span>
              <strong>Semester 7</strong>
            </div>

            <div>
              <span>Academic Year</span>
              <strong>2025–26</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">

        {/* Sidebar */}
        <aside className="sidebar">

          <div className="brand">
            <div className="brand-logo">C</div>
            <div>
              <h2>CampusPulse</h2>
              <span>Student Hub</span>
            </div>
          </div>

          <div className="nav-section">
            <p className="nav-title">MAIN MENU</p>

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
              end
            >
              <span>⌂</span>
              <span>Home</span>
            </NavLink>

            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              <span>▦</span>
              <span>Dashboard</span>
            </NavLink>

            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              <span>◫</span>
              <span>Events</span>
            </NavLink>

            <NavLink
              to="/attendance"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              <span>✓</span>
              <span>Attendance</span>
            </NavLink>

            <NavLink
              to="/assignments"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              <span>☑</span>
              <span>Assignments</span>
            </NavLink>

            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              <span>◇</span>
              <span>Skills & Career</span>
            </NavLink>

            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              <span>○</span>
              <span>Profile</span>
            </NavLink>
          </div>

          <div className="sidebar-bottom">
            <div className="mini-card">
              <div className="mini-icon">✦</div>
              <div>
                <strong>Keep growing!</strong>
                <p>Track your progress</p>
              </div>
            </div>

            <div className="sidebar-footer">
              <span>CampusPulse</span>
              <small>Smart Student Hub</small>
            </div>
          </div>

        </aside>

        {/* Main Content */}
        <div className="main-area">

          <header className="topbar">
            <div>
              <span className="topbar-label">STUDENT PORTAL</span>
              <h3>Good evening 👋</h3>
            </div>

            <div className="topbar-profile">
              <div className="notification">♢</div>
              <div className="user-avatar">BV</div>
              <div className="user-text">
                <strong>Student</strong>
                <span>BCA • Semester 7</span>
              </div>
            </div>
          </header>

          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/events" element={<Events />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/assignments" element={<Assignments />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>

          <footer className="footer">
            <span>© 2026 CampusPulse</span>
            <span>Smart Student Life & Career Hub</span>
          </footer>

        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

