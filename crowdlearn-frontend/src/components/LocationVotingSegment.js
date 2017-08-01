import React from 'react'
import TeacherApprovalButton from './TeacherApprovalButton'
// import ToggleVoteForm from './ToggleVoteForm'
import VoteFormContainer from './VoteFormContainer'
import ShowVotersModal from './ShowVotersModal'

const LocationVotingSegment = ({location, viewerIsTeacher, viewerVote, course}) => {
  const funded = location.funding >= course.price
  if (viewerIsTeacher) {
    return (
      <div>
        <TeacherApprovalButton location={location} />
        {funded ? <ShowVotersModal location={location} /> : null }
      </div>

    )
  } else {
    return (
      <VoteFormContainer location={location} viewerVote={viewerVote} />
    )
  }
}

export default LocationVotingSegment
