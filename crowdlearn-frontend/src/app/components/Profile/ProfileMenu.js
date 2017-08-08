import React, { Component } from 'react'
import { Input, Menu, Icon } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {setActiveItem} from '../../../actions/topicsMenuActions'

export default class ProfileMenu extends Component {

  handleItemClick = (e, {name}) => this.props.setActiveItem(name)

  render () {
    return (
      <Menu >
        <Menu.Item name='profile' active={this.props.profileMenu.activeItem === 'profile'} onClick={this.handleItemClick} />
        <Menu.Item name='following' active={this.props.profileMenu.activeItem === 'following'} onClick={this.handleItemClick} />
        <Menu.Item name='teaching' active={this.props.profileMenu.activeItem === 'teaching'} onClick={this.handleItemClick} />
      </Menu>
    )
  }
}
//
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({
//     setActiveItem: setActiveItem
//   }, dispatch)
// }
//
// const mapStateToProps = state => {
//   return {
//     topicsMenu: state.topicsMenu
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(TopicsMenu)
