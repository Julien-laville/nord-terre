export const CARD_STATUS_VISIBLE = 'c_vis'

export const CARD_TYPES = [
  'Duchess',
  'assassin',
  'contessa',
  'captain',
  'ambassador'
]

export default class Card {
  constructor(type) {
    this.type = type
    this.status = CARD_STATUS_VISIBLE
  }
}