import React,{Component} from 'react'

export default class Card extends Component{
  constructor() {
    super()
    this.card = this.props.card
  }

  render() {
    return (
      <div>
        <h1>{this.props.card.name}</h1>
        <h3>{this.props.card.status}</h3>
      </div>
    )
  }
}