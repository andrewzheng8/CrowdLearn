import React from 'react'

const TeacherViewerVoteDetail = ({teacherVoted}) => {
  if (teacherVoted) {
    return (<h3>{'Your approved this location!'}</h3>)
  } else {
    return (<h3>{'You have not approved this location.'}</h3>)
  }
}

export default TeacherViewerVoteDetail
