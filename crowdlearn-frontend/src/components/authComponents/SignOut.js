import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {signoutUser} from '../../actions/authActions'

class Signout extends Component {
  componentWillMount () {
    this.props.signoutUser()
  }

  render () {
    return <div>Sorry to see you go...</div>
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    signoutUser: signoutUser
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(Signout)
