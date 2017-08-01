import React, {Component} from 'react'
// import {COURSES} from '../data'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import MyProfile from './MyProfile'
import Following from './Following'
import CoursesTeaching from './CoursesTeaching'
// import CourseShow from '../components/courseComponents/CourseShow'
import {Grid, Button, Icon} from 'semantic-ui-react'

class MyProfileContainer extends Component {

  componentWillMount () {
    this.props.setTopics()
  }

  render () {
    switch (this.props.profileMenu.activeItem) {
      case 'my_profile':
        return <MyProfile />
      case 'following':
        return <Following />
      case 'teaching':
        return <CoursesTeaching />
      default:
        return <TopicsList topics={this.props.topics} />
    }
  }
}
