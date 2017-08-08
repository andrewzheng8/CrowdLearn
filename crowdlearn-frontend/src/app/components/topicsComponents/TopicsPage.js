import React, {Component} from 'react'
import TopicsContainer from './TopicsContainer'
import TopicsMenu from './TopicsMenu'
import {Grid, Button, Icon} from 'semantic-ui-react'

const TopicsPage = () => {
  return (
    <Grid centered divided>
      <Grid.Row>
        <Grid.Column width={16}>
          <TopicsMenu />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <TopicsContainer />
      </Grid.Row>
    </Grid>
  )
}

export default TopicsPage
