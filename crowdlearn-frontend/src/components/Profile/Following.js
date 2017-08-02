import React, {Component} from 'react'
import {Container} from 'semantic-ui-react'
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
        <Container>
          <TopicsFollowingSegment topics={this.props.viewer.topics_following} />
          <CoursesFollowingSegment courses={this.props.viewer.courses_following} />
        </Container>
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
