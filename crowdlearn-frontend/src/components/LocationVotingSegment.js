import React from 'react'
import TeacherApprovalButton from './TeacherApprovalButton'
// import ToggleVoteForm from './ToggleVoteForm'
import VoteFormContainer from './VoteFormContainer'

const LocationVotingSegment = ({location, viewerIsTeacher, viewerVote}) => {
  if (viewerIsTeacher) {
    return (
      <TeacherApprovalButton location={location} />
    )
  } else {
    return (
      <VoteFormContainer location={location} viewerVote={viewerVote} />
    )
  }
}

export default LocationVotingSegment
