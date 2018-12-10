import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getPartiesMiddle} from "./middlewares";

import {JOIN_PARTY} from './home_component.jsx'
class Parties extends Component {


  join(id) {
    this.props.dispatch({type : JOIN_PARTY, payload : id})
  }

  refresh() {
    getPartiesMiddle(this.props.dispatch)
  }

  render() {
    return(
      <div>
        {this.props.parties && this.props.parties.map((party) => {
          return (
            <h3>
              {party.id} - {party.count}
              <button onClick={() => this.join(party.id)}>join</button>
            </h3>
          )
        })
        }
      <button onClick={() => this.refresh()}>refresh</button>
      </div>
    )
  }
}

const mapStateToProps = ({root}) => {
  return {parties : root.parties}
}

export default connect(mapStateToProps)(Parties)
