const express = require('express')
const app = express()

app.get('/users/:itsc', (req, res) => {
  // Use this for query
  const itsc = req.params.itsc
  // Do stuff here

  // Send results back
  return res.status(200).json({
    // Put content here, or replace the brackets with your own variable
  })
})

// Send request to http://127.0.0.1:8080/users/${itsc} for testing
app.listen(8080)
