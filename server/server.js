import http from 'http'

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  })

  res.end(
    JSON.stringify({
      success: true,
      message: 'CampusPulse API is running!',
      student: 'Bhavika',
      program: 'BCA',
      semester: 6
    })
  )
})

server.listen(5000, () => {
  console.log('CampusPulse API running on http://localhost:5000')
})