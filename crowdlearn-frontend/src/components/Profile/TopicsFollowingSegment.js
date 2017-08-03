import React, {Component} from 'react'
import {Segment, Card} from 'semantic-ui-react'
import TopicFollowCard from './TopicFollowCard'

class TopicsFollowingSegment extends Component {
  render () {
    const topicCards = this.props.topics.map(t => <TopicFollowCard topic={t} />)
    return (
      <Card.Group>
        {topicCards}
      </Card.Group>
    )
  }
}

export default TopicsFollowingSegment
