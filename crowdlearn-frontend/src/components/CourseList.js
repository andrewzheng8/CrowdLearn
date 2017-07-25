import React, {Component} from 'react'
import CourseCard from './CourseCard'
import {connect} from 'react-redux'
import {Menu} from 'semantic-ui-react'

class CourseList extends Component {

  render () {
    const courseList = this.props.courses.concat({form: true}).map(c => <Menu.Item><CourseCard key={`course-${c._id}`} course={c} /></Menu.Item>)
    return (
      <Menu fluid vertical style={{'overflow': 'scroll', 'height': '100%'}}>
        <Menu.Header>
          <h2>Courses</h2>
        </Menu.Header>
        {courseList}
      </Menu>

    )
  }
}

export default CourseList
