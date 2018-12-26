import React, {Component} from 'react'
import {connect} from 'react-redux'
import Card from './card.jsx'

class Table extends Component {

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
        <Card card={this.props.table.leftCard}/>
        <Card card={this.props.table.rightCard}/>
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

const mapStateToProps = ({table}) => {
  return {table:table}
}

export default connect(mapStateToProps)(Table)
