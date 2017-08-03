import React, {Component} from 'react'
import {Segment, Card} from 'semantic-ui-react'
import CourseFollowCard from './CourseFollowCard'

class CoursesFollowingSegment extends Component {
  render () {
    const courseCards = this.props.courses.map(c => <CourseFollowCard course={c} />)
    return (
      <Card.Group>
        {courseCards}
      </Card.Group>
    )
  }
}

export default CoursesFollowingSegment
