import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Container, Header, Button, Image, Segment, Grid, Icon} from 'semantic-ui-react'
import CreateCourseForm from './CreateCourseForm'
import CreateLocationForm from './locationAndVoting/CreateLocationForm'
import FollowCourseContainer from './FollowCourseContainer'
import LocationCard from './locationAndVoting/LocationCard'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import './CourseShow.css'
import {removeCourse} from '../../../actions/coursesActions'


export class CourseShow extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  handleDeleteCourse = () => {
    this.props.removeCourse(this.props.course._id)
  }

  isViewer = () => {
    console.log('in isViewer', this.props.course.teacher._id, this.props.viewer._id)
    if(this.props.course.teacher._id === this.props.viewer._id) {
      return (
        <Button color='red' id='delete-course' onClick={this.handleDeleteCourse}>
          <Icon name='trash outline' />
        </Button>
      )
    }
  }

  render () {
    if (!this.props.course.form && !!this.props.course.title) {
      // console.log(this.props.course, 'in course show')
      const locationList = this.props.course.locations.map(
        l => {
          return <LocationCard key={`loc-${l._id}`} location={l} course={this.props.course} />
        }
      )
      const curriculum_pararagraphs = this.props.course.curriculum.split('\n').map((p, index) => <p key={`par-${index}`}>{p}</p>)
      return (
        <Container style={{'overflow': 'scroll', 'height': '100%'}}>
          <Grid>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h2'>{this.props.course.title}</Header>
                <p>Price: {this.props.course.price}</p>
                <FollowCourseContainer />
                {this.props.isPage ? null : <Link to={`/courses/${this.props.course._id}`} replace>Go to Full Course Page</Link> }

                <p>Curriculum: </p>
                {curriculum_pararagraphs}
              </Grid.Column>
              <Grid.Column width={6}>
                {this.isViewer()}
                <p>teacher email :{this.props.course.teacher ? this.props.course.teacher.email : null}</p>
                <Image src={this.props.course.teacher.img_url} size='large'/>

              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={14}>
                {locationList}
                <CreateLocationForm course={this.props.course} />
              </Grid.Column>

            </Grid.Row>
          </Grid>
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

const mapStateToProps = (state) => {
  return {
    viewer: state.viewer
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    removeCourse: removeCourse
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseShow)
