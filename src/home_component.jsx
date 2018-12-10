import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createParty} from './middlewares'
import Parties from './parties.jsx'
import Party from './party.jsx'

export const DISPLAY_PARTIES = 'display_parties'
export const CREATE_PARTY = 'create'
export const JOIN_PARTY = 'join'
export const PLAY_PARTY = 'parties'

class HomeComponent extends Component {

  constructor() {
    super()
  }

  create() {
    createParty(this.props.dispatch)
  }

  render() {
    return(
      <div>
        <h1>Home</h1>
        {this.props.display === DISPLAY_PARTIES && <Parties/>}
        {(this.props.display === CREATE_PARTY || this.props.display === JOIN_PARTY) && <Party/>}
        <button onClick={() => this.create()}>create party</button>
      </div>
    )
  }
}

const mapStateToProps = ({root}) => {
  return {display : root.display}
}

export default connect(mapStateToProps)(HomeComponent)

