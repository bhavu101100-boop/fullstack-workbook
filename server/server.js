import express from 'express'

const app = express()

const PORT = 5000

app.get('/api', (req, res) => {
  res.json({
    success: true,
    message: 'CampusPulse API is running!',
    version: '1.0'
  })
})

app.get('/api/student', (req, res) => {
  res.json({
    name: 'Bhavika',
    program: 'BCA',
    semester: 6,
    academicYear: '2025-26'
  })
})

app.get('/api/events', (req, res) => {
  res.json([
    {
      title: 'TECHFEST 2026',
      date: '25 September 2026',
      category: 'Technology'
    },
    {
      title: 'Project Demo',
      date: '30 September 2026',
      category: 'Academic'
    },
    {
      title: 'Career Workshop',
      date: '04 October 2026',
      category: 'Career'
    }
  ])
})

app.get('/api/assignments', (req, res) => {
  res.json([
    {
      title: 'React Router Implementation',
      status: 'Completed'
    },
    {
      title: 'Cyber Security Mini Project',
      status: 'Due Soon'
    },
    {
      title: 'Android Application Assignment',
      status: 'Pending'
    }
  ])
})

app.listen(PORT, () => {
  console.log(`CampusPulse Express API running on http://localhost:${PORT}`)
})