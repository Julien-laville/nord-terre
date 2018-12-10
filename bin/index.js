const express = require('express')
const app = express()

const Party = require('./party')

const parties = []


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
  parties.push(new Party(id))
  res.json({id : id})
})

app.post('/start/:id', (req, res) => {
  let party = parties.find((party) => party.id === req.body.partyId)
  party.status = PARTY_RUNNING
  res.json({success : true})
})

app.post('/join/:id', (req, res) => {
  let party = parties.find((party) => party.id === req.body.partyId)
  party.players.push(party.players.length)
  res.json({success : true})
})

console.log("listen on http://localhost:8001")
app.listen('8001')