const PARTY_PENDING = 'pending'
const PARTY_RUNNING = 'running'

import Deck from '../common/deck.mjs'
export default class Party {
  constructor(id) {
    this.id = id
    this.players = []
    this.status = PARTY_PENDING
  }

  start() {
    this.status = PARTY_RUNNING
    this.deck = new Deck(this.players.length)
  }


}
