const PARTY_PENDING = 'pending'
const PARTY_RUNNING = 'running'
const PARTY_ENDED = 'ended'

module.exports = class Party {
  constructor(id) {
    this.id = id
    this.players = []
    this.status = PARTY_PENDING
  }

}
