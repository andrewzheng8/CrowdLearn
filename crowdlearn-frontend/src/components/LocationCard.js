import React, {Component} from 'react'
// import {Card, Image, Icon} from 'semantic-ui-react'
// import {setCourse} from '../actions/courseActions'
import {Segment, Grid, Progress} from 'semantic-ui-react'
import {connect} from 'react-redux'

class LocationCard extends Component {

  render () {
    // refactor into two components
    const viewerVoteCallback = vote => vote.user === this.props.viewer
    const viewerVoted = !!this.props.location.votes.find(viewerVoteCallback)
    return (
      <Segment disabled={viewerVoted}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={5}>
              <h2>{this.props.location.address}</h2>
              <h3>{this.props.location.time}</h3>
            </Grid.Column>
            <Grid.Column width={5}>
              <h2>{'Your contribution'}</h2>
              <h3>{viewerVoted ? viewerVoted.contribution : 0}</h3>
            </Grid.Column>
            <Grid.Column width={6}>
              <h2>{'a toggleable form'}</h2>
              <h3>{this.props.location.time}</h3>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
              <Progress total={this.props.course.price} value={10} progress='percent' />
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
// const mapDispatchToProps = dispatch => {
//   return {
//     setCourse: course => dispatch(setCourse(course))
//   }
// }
//
export default connect(mapStateToProps)(LocationCard)
