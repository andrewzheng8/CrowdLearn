import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {followTopic, unfollowTopic} from '../../actions/followActions'
import {Button} from 'semantic-ui-react'

class FollowTopicContainer extends Component {

  handleFollow = () => {
    //follow the topic. push topic id onto user
    this.props.followTopic(this.props.viewer._id, this.props.topic._id)
  }

  handleUnfollow = () => {
    //remove topic id from user topics array
    this.props.unfollowTopic(this.props.viewer._id, this.props.topic._id)
  }

  render () {
    console.log(this.props, 'viewer')
    const viewerFollowsTopic = this.props.viewer.topics_following ? this.props.viewer.topics_following.find(t => t._id === this.props.topic._id) : null //do i need to check topic id against actual topics
    console.log(viewerFollowsTopic, 'viewerFollowsTopic')
    if (!viewerFollowsTopic) {
      return <Button onClick={this.handleFollow}>Follow</Button>
    } else {
      return <Button onClick={this.handleUnfollow}>Unfollow</Button>
    }
  }

}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    followTopic: followTopic,
    unfollowTopic: unfollowTopic
  }, dispatch)
}

const mapStateToProps = state => {
  return {
    viewer: state.viewer,
    topic: state.topic
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowTopicContainer)
