import React from 'react'

const StudentVoteDetail = ({viewerVoted}) => {
  return (
    <div>
      <h3>{'Your contribution'}</h3>
      <h3>{viewerVoted ? viewerVoted.contribution : 0}</h3>
    </div>
  )
}

export default StudentVoteDetail
