import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {Menu} from 'semantic-ui-react'

class Header extends Component {
  renderLinks () {
    if (this.props.authenticated) {
      // show a link to sign out
      return [
        <Link to='/topics' key={3}>
          <Menu.Item >
            <div>Topics</div>
          </Menu.Item>
        </Link>,
        <Menu.Menu position='right'key={4}>
          <Link to='/my_profile'>
            <Menu.Item >
              <div>My Profile</div>
            </Menu.Item>
          </Link>
          <Link to='/signout'>
            <Menu.Item >
              <div>Sign Out</div>
            </Menu.Item>
          </Link>
        </Menu.Menu>
      ]
    } else {
      // show a link to sign in or sign up
      return [
        <Link to='/signin' key={1}>
          <Menu.Item >
            <div>Sign In</div>
          </Menu.Item>
        </Link>,
        <Link to='/signup' key={2}>
          <Menu.Item >
            <div>Sign Up</div>
          </Menu.Item>
        </Link>
      ]
    }
  }

  render () {
    return (
      <Menu color='blue' inverted>
        <Menu.Item>
          <Link to='/'>CrowdLearn</Link>
        </Menu.Item>
        {this.renderLinks()}
      </Menu>
    )
  }
}

function mapStateToProps (state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(Header)
