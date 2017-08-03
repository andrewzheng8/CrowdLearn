import React, {Component} from 'react'
// import {COURSES} from '../data'
import {connect} from 'react-redux'
import {setCourses} from '../actions/coursesActions'
import {setCourse} from '../actions/courseActions'
import CourseList from '../components/courseComponents/CourseList'
import CourseShow from '../components/courseComponents/CourseShow'
import {Grid, Button, Icon} from 'semantic-ui-react'
import PropTypes from 'prop-types'

class TeachingCoursesContainer extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount () {
    console.log('filter thing in teaching courses container', this.props.filter)
    this.props.setCourses(this.props.filter)
    this.props.setCourse({})
  }

  setCourseShowForm = () => {
    this.props.setCourse({form: true})
  }

  render () {
    // return class list and class show component, class list should change the store state of what
    // is in class show, this component should fetch the appropriate classes

    return (
      <Grid centered divided>
        <Grid.Row style={{'height': '700px'}}>

          <Grid.Column width={5}>
            <Grid.Row style={{'height': '700px'}}>
              <CourseList courses={this.props.courses} />
            </Grid.Row>
          </Grid.Column>

          <Grid.Column width={11}>
            <CourseShow course={this.props.course} />
          </Grid.Column>
        </Grid.Row>

      </Grid>

    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCourses: filter => dispatch(setCourses(filter)),
    setCourse: course => dispatch(setCourse(course))

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

export default connect(mapStateToProps, mapDispatchToProps)(TeachingCoursesContainer)
