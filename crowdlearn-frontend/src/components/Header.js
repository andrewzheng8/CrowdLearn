import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {Menu} from 'semantic-ui-react'

class Header extends Component {
  renderLinks () {
    if (this.props.authenticated) {
      // show a link to sign out
      return [
        <Menu.Item>
          <Link to='/topics'>Topics</Link>
        </Menu.Item>,
        <Menu.Menu position='right'>
          <Menu.Item>
            <Link to='/my_profile'>My Profile</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/signout'>Sign Out</Link>
          </Menu.Item>
        </Menu.Menu>
      ]
    } else {
      // show a link to sign in or sign up
      return [
        <Menu.Item key={1}>
          <Link to='/signin'>Sign In</Link>
        </Menu.Item>,
        <Menu.Item key={2}>
          <Link to='/signup'>Sign Up</Link>
        </Menu.Item>
      ]
    }
  }

  render () {
    return (
      <Menu>
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
