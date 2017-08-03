import React, {Component} from 'react'
import {Image} from 'semantic-ui-react'
import {connect} from 'react-redux'
import EditProfileModal from './EditProfileModal'

class MyProfile extends Component {
  render () {
    return (
      <div>
        <h3>{this.props.viewer.email}</h3>
        <Image src={this.props.viewer.img_url} size='large' />
        <EditProfileModal />
      </div>

    )
  }
}

const mapStateToProps = state => {
  return {
    viewer: state.viewer
  }
}

export default connect(mapStateToProps)(MyProfile)
