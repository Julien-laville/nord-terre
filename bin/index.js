const express = require('express')
const app = express()


const parties = []
const PARTY_PENDING = new Symbol()
const PARTY_RUNNING = new Symbol()
const PARTY_ENDED = new Symbol()

const Party = (id) => {
  this.status = PARTY_PENDING
  this.id = id
  this.players = []
}

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


