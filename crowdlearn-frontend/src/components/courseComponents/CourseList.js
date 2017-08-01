import React, {Component} from 'react'
import CourseCard from './CourseCard'
import {connect} from 'react-redux'
import {Menu, Button} from 'semantic-ui-react'

class CourseList extends Component {

  render () {
    const courseList = this.props.courses.map(
      c => {
        return (
          <CourseCard key={`course-${c._id}`} course={c} />
        )
      }
    )
    return (
      <Menu fluid vertical style={{'overflow': 'scroll', 'height': '100%'}}>
        <Menu.Header>
          <h2> {this.props.isTopicPage ? this.props.topic.name : null} Courses {this.props.isTopicPage ? <Button>Follow</Button> : null}</h2>

        </Menu.Header>
        {courseList}
      </Menu>

    )
  }
}

export default CourseList
