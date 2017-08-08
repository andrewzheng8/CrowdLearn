import React from 'react'
import TeacherApprovalButton from './TeacherApprovalButton'
// import ToggleVoteForm from './ToggleVoteForm'
import VoteFormContainer from './VoteFormContainer'
import ShowVotersModal from './ShowVotersModal'
import {Grid, Divider} from 'semantic-ui-react'

const LocationVotingSegment = ({location, viewerIsTeacher, viewerVote, course}) => {
  // console.log('in voting segment')
  const funded = location.funding >= course.price
  if (viewerIsTeacher) {
    return (
      <Grid>
        <Grid.Row>
          <TeacherApprovalButton location={location} />
        </Grid.Row>
        <Divider />
        <Grid.Row>
          {funded && location.teacherVoted ? <ShowVotersModal location={location} /> : null }
        </Grid.Row>
      </Grid>

    )
  } else {
    return (
      <VoteFormContainer location={location} viewerVote={viewerVote} />
    )
  }
}

export default LocationVotingSegment
