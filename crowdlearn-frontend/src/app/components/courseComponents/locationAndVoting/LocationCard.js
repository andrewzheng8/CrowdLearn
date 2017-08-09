import React, {Component} from 'react'
// import {Card, Image, Icon} from 'semantic-ui-react'
// import {setCourse} from '../actions/courseActions'
import {Segment, Grid, Progress} from 'semantic-ui-react'
import {connect} from 'react-redux'
import StudentVoteDetail from './StudentVoteDetail'
import TeacherViewerVoteDetail from './TeacherViewerVoteDetail'
import LocationVotingSegment from './LocationVotingSegment'
import TeacherApprovalCheck from './TeacherApprovalCheck'

class LocationCard extends Component {

  render () {
    // refactor into two components
    const viewerIsTeacher = this.props.viewer._id === this.props.course.teacher._id
    return (
      <Segment>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <h4>Address: {this.props.location.address}</h4>
              <h4>Time: {this.props.location.time}</h4>
              {this.props.course.price === 0 ?
                <Progress percent={100} success>
                  FREE!
                </Progress> :
                <Progress total={this.props.course.price} value={this.props.location.funding} progress='percent' />
              }
            </Grid.Column>
            <Grid.Column width={5}>
              <LocationVotingSegment
                location={this.props.location}
                viewerIsTeacher={viewerIsTeacher}
                course={this.props.course}
              />
            </Grid.Column>
            <Grid.Column width={3}>
              <TeacherApprovalCheck teacherVoted={this.props.location.teacherVoted} />
            </Grid.Column>
          </Grid.Row>

        </Grid>
      </Segment>

    )
  }

}
const mapStateToProps = state => {
  return {viewer: state.viewer}
}

export default connect(mapStateToProps)(LocationCard)
