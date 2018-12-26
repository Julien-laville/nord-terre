import React, {Component} from 'react'
import {connect} from 'react-redux'
import Card from './card.jsx'

class Table extends Component {
  constructor() {
    super()
    this.props.isVisible = true
  }
  show() {
    this.props.isVisible = true
  }
  hide() {
    this.props.isVisible = false
  }

  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:8000/table')
    this.socket.addEventListener('open', () => {
      console.log('connection established')
    })
    this.socket.addEventListener('message', (e) => {
      console.log('> ', e)
    })
  }

  componentWillUnmount() {
    this.socket.close()
  }

  render() {
    return(
      <div className="table">
        <Card card={this.props.leftCard}/>
        <Card card={this.props.rightCard}/>
        {this.props.isVisible && (
          <button onClick={() => this.show()}>Show/hide</button>
        )}
        {!this.props.isVisible && (
          <button onClick={() => this.hide()}>Show/hide</button>
        )}
      </div>
    )
  }
}

const mapStateToProps = ({leftCard, rightCard}) => {
  return {leftCard, rightCard}
}

export default connect(mapStateToProps)(Table)
