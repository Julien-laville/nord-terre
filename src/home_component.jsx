import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getParties, partyCreation} from './action'

class HomeComponent extends Component {

  constructor() {
    super()
  }

  join() {

  }

  create() {
    this.props.dispatch(partyCreation)
  }

  refresh() {
    this.props.dispatch(getParties())
  }

  render() {
    return(
      <div>
        <h1>Home</h1>
        {
          this.props.parties && this.props.parties.map((party)=> {
            return (
              <h3>{party}</h3>
            )
          })
        }
        <button onClick={() => this.refresh()}>refresh</button>
        <button onClick={this.create}>create party</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {parties : state.parties}
}

export default connect(mapStateToProps)(HomeComponent)

