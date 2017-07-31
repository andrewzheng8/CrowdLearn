import React, { Component } from 'react'
import { Input, Menu, Icon } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {setActiveItem} from '../../actions/topicsMenuActions'

class TopicsMenu extends Component {

  handleItemClick = (e, {name}) => this.props.setActiveItem(name)

  render () {
    return (
      <Menu secondary>
        <Menu.Item name='all' active={this.props.topicsMenu.activeItem === 'all'} onClick={this.handleItemClick} />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item name='add_topic' active={this.props.topicsMenu.activeItem === 'add_topic'} onClick={this.handleItemClick} >
            <Icon name='plus' />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setActiveItem: setActiveItem
  }, dispatch)
}

const mapStateToProps = state => {
  return {
    topicsMenu: state.topicsMenu
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicsMenu)
