import React,{Component} from 'react'

export default class Card extends Component{
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        {this.props.card && (
          <h1>{this.props.card.name}</h1>
        )}
        {this.props.card && (
          <h3>{this.props.card.status}</h3>
        )}
      </div>
    )
  }
}