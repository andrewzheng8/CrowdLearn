import React, {Component} from 'react'
// import {COURSES} from '../data'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import MyProfile from './MyProfile'
import Following from './Following'
import CoursesTeaching from '../../containers/TeachingCoursesContainer'
// import CourseShow from '../components/courseComponents/CourseShow'
import {Grid, Button, Icon} from 'semantic-ui-react'

class MyProfileContainer extends Component {

  render () {
    switch (this.props.profileMenu.activeItem) {
      case 'profile':
        return <MyProfile />
      case 'following':
        return <Following />
      case 'teaching':
        return <CoursesTeaching filter={{teacher: this.props.viewer._id}} />
      default:
        return <h3>I am nothing</h3>
    }
  }
}

const mapStateToProps = state => {
  return {
    courses: state.courses,
    course: state.course,
    topic: state.topic,
    viewer: state.viewer
  }
}

export default connect(mapStateToProps)(MyProfileContainer)
