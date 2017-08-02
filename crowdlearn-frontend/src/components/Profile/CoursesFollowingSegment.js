import React, {Component} from 'react'
import {Segment} from 'semantic-ui-react'
import CourseFollowCard from './CourseFollowCard'

class CoursesFollowingSegment extends Component {
  render () {
    const courseCards = this.props.courses.map(c => <CourseFollowCard course={c} />)
    return (
      <Segment>
        {courseCards}
      </Segment>
    )
  }
}

export default CoursesFollowingSegment
