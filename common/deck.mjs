import Card,{CARD_TYPES} from './card.mjs'


export default class Deck {


  constructor(players = 3) {
    this.cards = []
    // insert
    for(let i = 0; i < players; i += 1) {
      CARD_TYPES.forEach((cardType) => {
        this.cards.push(new Card(cardType))
      })
    }
    // shuffle
    this.cards.forEach((card, i) => {
      this.cards[i] = this.cards[(i+1) % this.cards.length]
    })
  }
}