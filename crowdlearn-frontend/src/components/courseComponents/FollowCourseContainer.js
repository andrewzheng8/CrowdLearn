import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {followCourse, unfollowCourse} from '../../actions/followActions'
import {Button} from 'semantic-ui-react'

class FollowCourseContainer extends Component {

  handleFollow = () => {
    //follow the topic. push topic id onto user
    this.props.followCourse(this.props.viewer._id, this.props.course._id)
  }

  handleUnfollow = () => {
    //remove topic id from user topics array
    this.props.unfollowCourse(this.props.viewer._id, this.props.coure._id)
  }

  render () {
    console.log(this.props, 'viewer')
    const viewerFollowsTopic = this.props.viewer.courses_following ? this.props.viewer.courses_following.find(c => c._id === this.props.course._id) : null //do i need to check topic id against actual topics
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
    followCourse: followCourse,
    unfollowCourse: unfollowCourse
  }, dispatch)
}

const mapStateToProps = state => {
  return {
    viewer: state.viewer,
    course: state.course
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowCourseContainer)
