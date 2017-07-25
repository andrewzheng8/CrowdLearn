import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Container, Header} from 'semantic-ui-react'
import CreateCourseForm from './CreateCourseForm'

export default class CourseShow extends Component {

  render () {
    if (!this.props.course.form) {
      return (
        <Container text>
          <Header as='h2'>{this.props.course.title}</Header>
          <p>{this.props.course.curriculum}</p>
          <p>{this.props.course.teacher ? this.props.course.teacher.email : null}</p>
        </Container>
      )
    } else {
      return (
        <CreateCourseForm />
      )
    }
  }
}
