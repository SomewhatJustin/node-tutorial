const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to the home page!')
  }
  else if (req.url === '/about') {
    res.end('This is about page!')
  }
  else {
    res.end(`<h1>OOPS!!</h1>
          <p>Can't find that page.</p>
          <a href="/">Go home budddy</a>`)
  }
})

server.listen(3000)