import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Container, Header, Button, Image, Segment, Grid} from 'semantic-ui-react'
import CreateCourseForm from './CreateCourseForm'
import CreateLocationForm from '../CreateLocationForm'
import FollowCourseContainer from './FollowCourseContainer'
import LocationCard from '../LocationCard'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'


export default class CourseShow extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  render () {
    if (!this.props.course.form && !!this.props.course.title) {
      // console.log(this.props.course, 'in course show')
      const locationList = this.props.course.locations.map(
        l => {
          return <LocationCard key={`loc-${l._id}`} location={l} course={this.props.course} />
        }
      )
      return (
        <Container style={{'overflow': 'scroll', 'height': '100%'}}>
          <Grid>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h2'>{this.props.course.title}</Header>
                <p>Price: {this.props.course.price}</p>
                <p>Maximum Students: {this.props.course.maximumStudents}</p>
                <FollowCourseContainer />
                {this.props.isPage ? null : <Link to={`/courses/${this.props.course._id}`} replace>Go to Full Course Page</Link> }

                <p>Curriculum: {this.props.course.curriculum}</p>
              </Grid.Column>
              <Grid.Column width={6}>
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
