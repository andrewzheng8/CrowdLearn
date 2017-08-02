import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCourse} from '../../actions/courseActions'
import {bindActionCreators} from 'redux'
import CourseShow from './CourseShow'
import PropTypes from 'prop-types'

class CoursePage extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    this.props.fetchCourse(this.context.router.route.match.params.courseId)
  }

  render () {
    return (
      <CourseShow course={this.props.course} isPage={true} />
    )
  }
}

const mapStateToProps = state => {
  return {
    course: state.course
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchCourse: fetchCourse
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(CoursePage)
