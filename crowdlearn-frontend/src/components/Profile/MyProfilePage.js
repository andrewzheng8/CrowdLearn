import React, {Component} from 'react'
import {Grid} from 'semantic-ui-react'
import ProfileMenu from './ProfileMenu'

class MyProfile extends Component {
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
          <ProfileMenu setActiveItem={this.setActiveItem} profileMenu={this.state} />
        </Grid.Row>
        <Grid.Row>
            My Profile Page Container (has state for any met funding)
        </Grid.Row>
      </Grid>
    )
  }
}

export default MyProfile
