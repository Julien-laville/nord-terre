import express from 'express'
const app = express()
import ExpressWs from 'express-ws'
import Party from './party.mjs'

const parties = []
ExpressWs(app)

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})


app.get('/', (req, res) => {
  res.status(404)
  res.json({error : 'empty route'})
})

app.get('/parties', (req, res) => {
  res.json(parties)
})

app.post('/new', (req, res) => {
  let id = parties.length
  let party = new Party(id)
  party.players.push('Admin')
  parties.push(party)
  res.json(party)
})

app.get('/join/:id', (req, res) => {
  let id = parseInt(req.params.id)
  let party = parties.find(party => party.id === id)
  let playerId = party.players.length
  party.players.push('Pepe')
  res.json(playerId)
})

app.get('/party/:id', (req, res) => {
  let id = parseInt(req.params.id)
  let party = parties.find(party => party.id === id)
  res.json(party)
})

app.post('/start/:id', (req, res) => {
  let party = parties.find((party) => party.id === req.body.partyId)
  party.start()
  res.json({success : true})
})



app.ws('/table', function(ws, req) {
  ws.on('message', function(message) {
    console.log('> ', message)
  });
});

console.log("listen on http://localhost:8001")
app.listen('8001')