import React, {Component} from 'react'
import {Container, Grid} from 'semantic-ui-react'
import {connect} from 'react-redux'
import CoursesFollowingSegment from './CoursesFollowingSegment'
import TopicsFollowingSegment from './TopicsFollowingSegment'

class Following extends Component {
  render () {
    console.log('render container?')
    const viewerHasLoaded = this.props.viewer
    console.log('viewer', this.props.viewer)
    if (viewerHasLoaded) {
      console.log('render container')
      return (
        <Grid>
          <Grid.Column width={8}>
            <h3>Topics</h3>
            <TopicsFollowingSegment topics={this.props.viewer.topics_following} />
          </Grid.Column>
          <Grid.Column width={8}>
            <h3>Courses</h3>
            <CoursesFollowingSegment courses={this.props.viewer.courses_following} />
          </Grid.Column>
        </Grid>
      )
    } else {
      console.log('render div')
      return <div />
    }
  }
}

const mapStateToProps = state => {
  return {viewer: state.viewer}
}

export default connect(mapStateToProps)(Following)
