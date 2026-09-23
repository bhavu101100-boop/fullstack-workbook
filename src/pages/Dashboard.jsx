import { useMemo } from 'react'
function Dashboard() {
    const skillScores = [80, 85, 65, 70]

  const overallSkillProgress = useMemo(() => {
    const total = skillScores.reduce((sum, score) => sum + score, 0)
    return Math.round(total / skillScores.length)
  }, [])
  return (
    <div className="dashboard-page">

      {/* Header */}
      <div className="page-header">
        <div>
          <span className="page-label">STUDENT DASHBOARD</span>
          <h1>Good Morning, Bhavika 👋</h1>
          <p>
            Here's an overview of your academic journey and progress.
          </p>
        </div>

        <div className="header-date">
          <span>Today</span>
          <strong>23 September 2026</strong>
        </div>
      </div>

      {/* Statistics */}
      <div className="stats-grid">

        <div className="stat-card blue-stat">
          <div className="stat-icon">📚</div>
          <div>
            <span>Active Courses</span>
            <strong>06</strong>
            <small>Current semester</small>
          </div>
        </div>

        <div className="stat-card coral-stat">
          <div className="stat-icon">✓</div>
          <div>
            <span>Pending Tasks</span>
            <strong>08</strong>
            <small>3 due this week</small>
          </div>
        </div>

        <div className="stat-card teal-stat">
          <div className="stat-icon">%</div>
          <div>
            <span>Attendance</span>
            <strong>87%</strong>
            <small>Good standing</small>
          </div>
        </div>

        <div className="stat-card yellow-stat">
          <div className="stat-icon">🎯</div>
          <div>
            <span>Skill Progress</span>
            <strong>72%</strong>
            <small>+8% this month</small>
          </div>
        </div>

      </div>

      {/* Main Content */}
      <div className="dashboard-grid">
        <div className="card-header">
            <div>
                <h2>My Skill Progress</h2>
                <p>Track your technical growth.</p>
            </div>

            <div className="overall-skill">
                <span>Overall</span>
                <strong>{overallSkillProgress}%</strong>
            </div>
        </div>

          <div className="dashboard-task">
            <div className="check completed">✓</div>

            <div>
              <strong>Project Documentation</strong>
              <span>Full Stack Development</span>
            </div>

            <small>Completed</small>
          </div>

          <div className="dashboard-task">
            <div className="check"></div>

            <div>
              <strong>React Assignment</strong>
              <span>Full Stack Development</span>
            </div>

            <small>Today</small>
          </div>

          <div className="dashboard-task">
            <div className="check"></div>

            <div>
              <strong>Python Lab Manual</strong>
              <span>Python Programming</span>
            </div>

            <small>Tomorrow</small>
          </div>

          <div className="dashboard-task">
            <div className="check"></div>

            <div>
              <strong>Cyber Security Report</strong>
              <span>Cyber Security</span>
            </div>

            <small>28 Sep</small>
          </div>

        </section>

        {/* Upcoming Events */}
        <section className="dashboard-card">

          <div className="card-header">
            <div>
              <h2>Upcoming Events</h2>
              <p>What's happening on campus.</p>
            </div>

            <button>View All</button>
          </div>

          <div className="event-item">

            <div className="event-date">
              <strong>25</strong>
              <span>SEP</span>
            </div>

            <div>
              <strong>TECHFEST 2026</strong>
              <p>Technology • AI • Innovation</p>
            </div>

          </div>

          <div className="event-item">

            <div className="event-date coral-date">
              <strong>30</strong>
              <span>SEP</span>
            </div>

            <div>
              <strong>Project Demo</strong>
              <p>University Auditorium</p>
            </div>

          </div>

          <div className="event-item">

            <div className="event-date teal-date">
              <strong>04</strong>
              <span>OCT</span>
            </div>

            <div>
              <strong>Career Workshop</strong>
              <p>Placement Cell</p>
            </div>

          </div>

        </section>

      </div>

      {/* Skill Progress */}
      <section className="dashboard-card progress-section">

        <div className="card-header">
            <div>
                <h2>My Skill Progress</h2>
                <p>Track your technical growth.</p>
            </div>

            <div className="overall-skill">
                <span>Overall</span>
                <strong>{overallSkillProgress}%</strong>
            </div>
            </div>

        <div className="skills-row">

          <div className="skill-item">
            <div>
              <span>React</span>
              <strong>80%</strong>
            </div>

            <div className="skill-bar">
              <div className="skill-fill react-fill"></div>
            </div>
          </div>

          <div className="skill-item">
            <div>
              <span>Python</span>
              <strong>85%</strong>
            </div>

            <div className="skill-bar">
              <div className="skill-fill python-fill"></div>
            </div>
          </div>

          <div className="skill-item">
            <div>
              <span>Java</span>
              <strong>65%</strong>
            </div>

            <div className="skill-bar">
              <div className="skill-fill java-fill"></div>
            </div>
          </div>

          <div className="skill-item">
            <div>
              <span>Cyber Security</span>
              <strong>70%</strong>
            </div>

            <div className="skill-bar">
              <div className="skill-fill cyber-fill"></div>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Dashboard;