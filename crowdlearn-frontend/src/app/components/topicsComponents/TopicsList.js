import React, {Component} from 'react'
import {Card} from 'semantic-ui-react'
import TopicCard from './TopicCard'


const TopicsList = ({topics}) => {
  const topicsList = topics.map(t => <TopicCard topic={t} key={`topic-${t._id}`} />)
  return (
    <Card.Group>
      {topicsList}
    </Card.Group>
  )
}

export default TopicsList
