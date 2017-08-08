import React, {Component} from 'react'
import {Grid} from 'semantic-ui-react'
import ProfileMenu from './ProfileMenu'
import {connect} from 'react-redux'
import ProfilePageContainer from './ProfilePageContainer'

class MyProfilePage extends Component {
  state = {
    activeItem: 'profile'
  }

  setActiveItem = (name) => {
    this.setState({
      activeItem: name
    })
  }

  render () {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
              <ProfileMenu setActiveItem={this.setActiveItem} profileMenu={this.state} />
          </Grid.Column>

        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <ProfilePageContainer profileMenu={this.state} />
          </Grid.Column>

        </Grid.Row>
      </Grid>
    )
  }
}
export default MyProfilePage
//
// const mapStateToProps = state => {
//   return {
//     viewer: state.viewer
//   }
// }
//
// export default connect(mapStateToProps)(MyProfile)
