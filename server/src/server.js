import express from 'express'

const app = express()

app.get('/test', (req, res) => {
  res.send('Server läuft')
})

app.listen(5000, () => {
  console.log('Server läuft auf Port 5000')
})

app.get('/', (req, res) => {
  res.send('Hello world')
})
