import React, {Component} from 'react'
// import {COURSES} from '../data'
import {connect} from 'react-redux'
import {setCourses} from '../actions/coursesActions'
import CourseList from '../components/CourseList'
import CourseShow from '../components/CourseShow'
import {Grid} from 'semantic-ui-react'
import CreateCourseForm from '../components/CreateCourseForm'

class CoursesContainer extends Component {

  componentWillMount () {
    this.props.setCourses()
  }

  render () {
    // return class list and class show component, class list should change the store state of what
    // is in class show, this component should fetch the appropriate classes
    return (
      <Grid centered divided>
        <Grid.Row>

          <Grid.Column width={5}>
            <CourseList courses={this.props.courses} />
          </Grid.Column>

          <Grid.Column width={11}>
            <CourseShow course={this.props.course} />
          </Grid.Column>

        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={5}>
            <CreateCourseForm />
          </Grid.Column>
          <Grid.Column width={11} />
        </Grid.Row>

      </Grid>

    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCourses: courses => dispatch(setCourses(courses))
  }
}

const mapStateToProps = state => {
  return {
    courses: state.courses,
    course: state.course
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesContainer)
