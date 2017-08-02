import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Container, Header, Button} from 'semantic-ui-react'
import CreateCourseForm from './CreateCourseForm'
import CreateLocationForm from '../CreateLocationForm'
import LocationCard from '../LocationCard'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'


export default class CourseShow extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  render () {
    if (!this.props.course.form && !!this.props.course.title) {
      console.log(this.props.course, 'in course show')
      const locationList = this.props.course.locations.map(
        l => {
          return <LocationCard key={`loc-${l._id}`} location={l} course={this.props.course} />
        }
      )
      return (
        <Container style={{'overflow': 'scroll', 'height': '100%'}}>
          <Header as='h2'>{this.props.course.title}</Header>
          <p>Curriculum: {this.props.course.curriculum}</p>
          <p>teacher email :{this.props.course.teacher ? this.props.course.teacher.email : null}</p>
          <p>Price: {this.props.course.price}</p>
          <p>Maximum Students: {this.props.course.maximumStudents}</p>
          {this.props.isPage ? null : <Link to={`/courses/${this.props.course._id}`} replace>Go to Full Course Page</Link> }
          {locationList}
          <CreateLocationForm course={this.props.course} />
        </Container>
      )
    } else if (this.props.course.form) {
      return (
        <CreateCourseForm />
      )
    } else {
      return null
    }
  }
}
