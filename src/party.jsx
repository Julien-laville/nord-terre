import React, {Component} from 'react'
import {connect} from 'react-redux'
import {CREATE_PARTY, JOIN_PARTY} from './home_component.jsx'
import {getPartyInfo} from './middlewares'

class Party extends Component{

  start() {
    console.log('start')
    console.log(this.props)
  }

  update() {
    getPartyInfo(this.props.dispatch)
  }

  render() {
    return(
      <div>
        {this.props.display === CREATE_PARTY && (
          <p>
            You host
            <button onClick={this.start}>Start</button>
          </p>
        )}
      <ul>
        {this.props.party && (

          <div>
            {this.props.party.status}<br/>
            Players:
            <ul>
              {this.props.party.players.map((player) => {

                <li>{player}</li>

              })
              }

            </ul>
          </div>

          )}
      </ul>
        <button onClick={() => this.update()}>update party info</button>
      </div>
    )
  }
}

const mapStateToProps = ({root, party}) => {
  return {party : party, root : root}
}

export default connect(mapStateToProps)(Party)