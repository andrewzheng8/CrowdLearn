import React, {Component} from 'react'
import {Card} from 'semantic-ui-react'
import TopicCard from './TopicCard'
import './TopicsList.css'

const TopicsList = ({topics}) => {
  const topicsList = topics.map(t => <TopicCard topic={t} key={`topic-${t._id}`} />)
  return (
    <Card.Group className='topic-list'>
      {topicsList}
    </Card.Group>
  )
}

export default TopicsList
