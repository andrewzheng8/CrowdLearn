import React, {Component} from 'react'
// import {COURSES} from '../data'
import {connect} from 'react-redux'
import {setTopicCourses} from '../actions/coursesActions'
import {setTopic} from '../actions/topicActions'
import {setCourse} from '../actions/courseActions'
import CourseList from '../components/courseComponents/CourseList'
import CourseShow from '../components/courseComponents/CourseShow'
import {Grid, Button, Icon} from 'semantic-ui-react'
import PropTypes from 'prop-types'

class TopicCoursesContainer extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount () {
    this.props.setTopicCourses(this.context.router.route.match.params.topicId)
    this.props.setTopic(this.context.router.route.match.params.topicId)
    this.props.setCourse({})
  }

  setCourseShowForm = () => {
    this.props.setCourse({form: true})
  }

  followTopic = () => {

  }

  unFollowTopic = () => {

  }

  render () {
    // return class list and class show component, class list should change the store state of what
    // is in class show, this component should fetch the appropriate classes
    const isTopicPage = true
    const topicId = this.props.topic._id
    return (
      <Grid centered divided>
        <Grid.Row style={{'height': '700px'}}>

          <Grid.Column width={5}>
            <Grid.Row style={{'height': '600px'}}>
              <CourseList courses={this.props.courses} isTopicPage={isTopicPage} topic={this.props.topic} />
            </Grid.Row>
            <Grid.Row style={{'height': '100px'}}>
              <Button style={{'height': '100%', 'width': '100%'}}
                color='blue'
                onClick={this.setCourseShowForm}
                >
                <Icon name='plus'/>
                Teach Course
              </Button>
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
    setTopicCourses: courses => dispatch(setTopicCourses(courses)),
    setCourse: course => dispatch(setCourse(course)),
    setTopic: topicId => dispatch(setTopic(topicId))

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

export default connect(mapStateToProps, mapDispatchToProps)(TopicCoursesContainer)
