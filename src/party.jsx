import React, {Component} from 'react'
import {connect} from 'react-redux'
import {CREATE_PARTY} from './home_component.jsx'
import {getPartyInfo} from './middlewares'

class Party extends Component{

  start() {
    console.log(this.props)
  }

  async update() {
    this.props.root.party = await getPartyInfo(this.props.root.party.id)
  }

  render() {
    return(
      <div>
        <h3>{this.props.root.party.id}</h3>
        {this.props.root.display === CREATE_PARTY && (
          <p>
            You host
            <button onClick={this.start}>Start</button>
          </p>
        )}
      <ul>
        {this.props.root.party && (

          <div>
            {this.props.root.party.status}<br/>
            Players:
            <ul>
              {this.props.root.party.players.map(player =>
                <li>{player}</li>
              )}
            </ul>
          </div>

          )}
      </ul>
        <button onClick={() => this.update()}>Update party info</button>
      </div>
    )
  }
}

const mapStateToProps = ({root, party}) => {
  return {party : party, root : root}
}

export default connect(mapStateToProps)(Party)