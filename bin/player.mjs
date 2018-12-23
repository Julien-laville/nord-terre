export const PLAYER_TURN = 'p_turn'
export const PLAYER_WAIT = 'p_wait'

export default class Player {
  constructor(name) {
    this.name = name
    this.status = PLAYER_WAIT
  }

  setCards(cards) {
    this.cards = cards
  }
}