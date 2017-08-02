import React, {Component} from 'react'
import {Segment} from 'semantic-ui-react'
import TopicFollowCard from './TopicFollowCard'

class TopicsFollowingSegment extends Component {
  render () {
    const topicCards = this.props.topics.map(t => <TopicFollowCard topic={t} />)
    return (
      <Segment>
        {topicCards}
      </Segment>
    )
  }
}

export default TopicsFollowingSegment
