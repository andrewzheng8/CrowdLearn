import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Container, Header} from 'semantic-ui-react'

export default class CourseShow extends Component {

  render () {
    return (
      <Container text>
        <Header as='h2'>{this.props.course.title}</Header>
        <p>{this.props.course.curriculum}</p>
        <p>{this.props.course.teacher}</p>
      </Container>
    )
  }
}

// const mapStateToProps = state => {
//   return {course: state.course}
// }
//
// export default connect(mapStateToProps)(CourseShow)
