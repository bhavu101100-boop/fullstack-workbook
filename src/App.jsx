import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Attendance from "./pages/Attendance";
import Assignments from "./pages/Assignments";

function Events() {
  return (
    <div className="page">
      <div className="page-heading">
        <span className="section-label">CAMPUS ACTIVITIES</span>
        <h1>College Events</h1>
        <p>
          Discover workshops, seminars, competitions and campus activities.
        </p>
      </div>

      <div className="cards-grid">

        <div className="feature-card">
          <div className="feature-icon blue-bg">💻</div>
          <span className="event-tag">WORKSHOP</span>
          <h2>Web Development Workshop</h2>
          <p>
            Learn modern web development technologies and build real projects.
          </p>
          <div className="card-info">📅 24 September 2026</div>
          <div className="card-info">📍 University Auditorium</div>
        </div>

        <div className="feature-card">
          <div className="feature-icon coral-bg">🤖</div>
          <span className="event-tag coral-tag">TECH EVENT</span>
          <h2>AI & Innovation Summit</h2>
          <p>
            Explore artificial intelligence, innovation and emerging technologies.
          </p>
          <div className="card-info">📅 30 September 2026</div>
          <div className="card-info">📍 Seminar Hall</div>
        </div>

        <div className="feature-card">
          <div className="feature-icon green-bg">🏆</div>
          <span className="event-tag green-tag">COMPETITION</span>
          <h2>Code Challenge 2026</h2>
          <p>
            Test your programming skills and compete with fellow students.
          </p>
          <div className="card-info">📅 05 October 2026</div>
          <div className="card-info">📍 Computer Lab</div>
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
        <p>
          Build, track and improve the skills that shape your career.
        </p>
      </div>

      <div className="skills-grid">

        <div className="skill-card">
          <div className="skill-top">
            <h3>JavaScript</h3>
            <strong>80%</strong>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: '80%' }}
            ></div>
          </div>

          <span>Advanced Beginner</span>
        </div>


        <div className="skill-card">
          <div className="skill-top">
            <h3>React</h3>
            <strong>70%</strong>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill career"
              style={{ width: '70%' }}
            ></div>
          </div>

          <span>Intermediate</span>
        </div>


        <div className="skill-card">
          <div className="skill-top">
            <h3>Python</h3>
            <strong>75%</strong>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill skill"
              style={{ width: '75%' }}
            ></div>
          </div>

          <span>Intermediate</span>
        </div>


        <div className="skill-card">
          <div className="skill-top">
            <h3>UI / UX</h3>
            <strong>65%</strong>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: '65%' }}
            ></div>
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
        <p>
          Manage your student information and personal achievements.
        </p>
      </div>

      <div className="profile-card">

        <div className="profile-avatar">
          BV
        </div>

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
              <strong>Semester 6</strong>
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

        {/* ================= SIDEBAR ================= */}

        <aside className="sidebar">

          <div className="brand">

            <div className="brand-logo">
              C
            </div>

            <div>
              <h2>CampusPulse</h2>
              <span>Student Hub</span>
            </div>

          </div>


          <div className="nav-section">

            <p className="nav-title">
              MAIN MENU
            </p>


            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              <span>⌂</span>
              <span>Home</span>
            </NavLink>


            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              <span>▦</span>
              <span>Dashboard</span>
            </NavLink>


            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              <span>◫</span>
              <span>Events</span>
            </NavLink>


            <NavLink
              to="/attendance"
              className={({ isActive }) =>
                isActive
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              <span>✓</span>
              <span>Attendance</span>
            </NavLink>


            <NavLink
              to="/assignments"
              className={({ isActive }) =>
                isActive
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              <span>☑</span>
              <span>Assignments</span>
            </NavLink>


            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              <span>◇</span>
              <span>Skills & Career</span>
            </NavLink>


            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              <span>○</span>
              <span>Profile</span>
            </NavLink>

          </div>


          {/* Sidebar Bottom */}

          <div className="sidebar-bottom">

            <div className="mini-card">

              <div className="mini-icon">
                ✦
              </div>

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


        {/* ================= MAIN AREA ================= */}

        <div className="main-area">


          {/* Topbar */}

          <header className="topbar">

            <div>

              <span className="topbar-label">
                STUDENT PORTAL
              </span>

              <h3>
                Good evening 👋
              </h3>

            </div>


            <div className="topbar-profile">

              <div className="notification">
                ♢
              </div>

              <div className="user-avatar">
                BV
              </div>

              <div className="user-text">

                <strong>
                  Student
                </strong>

                <span>
                  BCA • Semester 6
                </span>

              </div>

            </div>

          </header>


          {/* Page Content */}

          <main className="main-content">

            <Routes>

              <Route
                path="/"
                element={<Home />}
              />

              <Route
                path="/dashboard"
                element={<Dashboard />}
              />

              <Route
                path="/events"
                element={<Events />}
              />

              <Route
                path="/attendance"
                element={<Attendance />}
              />

              <Route
                path="/assignments"
                element={<Assignments />}
              />

              <Route
                path="/skills"
                element={<Skills />}
              />

              <Route
                path="/profile"
                element={<Profile />}
              />

            </Routes>

          </main>


          {/* Footer */}

          <footer className="footer">

            <span>
              © 2026 CampusPulse
            </span>

            <span>
              Smart Student Life & Career Hub
            </span>

          </footer>

        </div>

      </div>

    </BrowserRouter>
  )
}

export default App

