import React from 'react'
import TeacherApprovalButton from './TeacherApprovalButton'
// import ToggleVoteForm from './ToggleVoteForm'
import VoteFormContainer from './VoteFormContainer'
import ShowVotersModal from './ShowVotersModal'
import {Grid} from 'semantic-ui-react'

const LocationVotingSegment = ({location, viewerIsTeacher, viewerVote, course}) => {
  const funded = location.funding >= course.price
  if (viewerIsTeacher) {
    return (
      <Grid>
        <Grid.Row>
          <TeacherApprovalButton location={location} />
        </Grid.Row>
        {funded && location.teacherVoted ? <Grid.Row><ShowVotersModal location={location} /></Grid.Row> : null }
      </Grid>

    )
  } else {
    return (
      <VoteFormContainer location={location} viewerVote={viewerVote} />
    )
  }
}

export default LocationVotingSegment
