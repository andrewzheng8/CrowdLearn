import React, {Component} from 'react'
import {connect} from 'react-redux'

class MyProfile extends Component {
  render () {
    return (
      <h3>{this.props.viewer.email}</h3>
    )
  }
}

const mapStateToProps = state => {
  return {
    viewer: state.viewer
  }
}

export default connect(mapStateToProps)(MyProfile)
