import React, {Component} from 'react'
// import {COURSES} from '../data'
import {connect} from 'react-redux'
import {setCourses} from '../actions/coursesActions'
import CourseList from '../components/courseComponents/CourseList'
import CourseShow from '../components/courseComponents/CourseShow'
import {Grid, Button} from 'semantic-ui-react'

class CoursesContainer extends Component {

  componentWillMount () {
    this.props.setCourses()
  }

  render () {
    // return class list and class show component, class list should change the store state of what
    // is in class show, this component should fetch the appropriate classes
    return (
      <Grid centered divided>
        <Grid.Row style={{'height': '700px'}}>

          <Grid.Column width={5}>
            <Grid.Row style={{'height': '600px'}}>
              <CourseList courses={this.props.courses} />
            </Grid.Row>
            <Grid.Row style={{'height': '100px'}}>
              <Button style={{'height': '100%', 'width': '100%'}} />
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
