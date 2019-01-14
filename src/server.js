import express from 'express';
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import Note from './models/noteModel'
import noteRoutes from './routes/noteRoutes'
import cors from 'cors'

require('dotenv').config()

const app = express()
const port = process.env.PORT || 4000

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb', { useNewUrlParser: true }); 

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api', (req, res, next) => {
  console.info(`${req.method} ${req.originalUrl} with params: ${JSON.stringify(req.params)} and body: ${JSON.stringify(req.body)}`)
  const ip = req.headers['x-forwarded-for'] || 
  req.connection.remoteAddress || 
  req.socket.remoteAddress ||
  (req.connection.socket ? req.connection.socket.remoteAddress : null);
  console.log('ip:', ip)
  next();
});

noteRoutes(app)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` })
})