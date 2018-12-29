import React, {Component} from 'react'
import {connect} from 'react-redux'
import Card from './card.jsx'

class Table extends Component {

  constructor() {
    super()
    this.state = {isVisible : true}
  }

  show() {
    this.setState({isVisible : true})
  }
  hide() {
    this.setState({isVisible : false})
  }

  pickCards() {
    this.socket.send({message : 'get cards', playerID : this.props.root.playerId})
  }

  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:8001/table')
    this.socket.addEventListener('open', () => {
      console.log('connection established')
    })
    this.socket.addEventListener('message', (e) => {
      console.log('> ', e)
    })



    this.socket.onopen = function() {
      // pick cards here
      console.log('WS open')
    }

    this.socket.onerror = function(e) {
      // pick cards here
      console.error('WS error', e)
    }
  }

  componentWillUnmount() {
    this.socket.close()
  }

  render() {
    return(
      <div className="table">
        <Card isVisible={this.state.isVisible} card={this.props.table.leftCard}/>
        <Card isVisible={this.state.isVisible} card={this.props.table.rightCard}/>
        {this.state.isVisible && (
          <button onClick={() => this.hide()}>Hide</button>
        )}
        {!this.state.isVisible && (
          <button onClick={() => this.show()}>Show</button>
        )}
        <button onClick={() => this.pickCards()}>Pick</button>
      </div>
    )
  }
}

const mapStateToProps = ({table, root, party}) => {
  return {table, root, party}
}

export default connect(mapStateToProps)(Table)
