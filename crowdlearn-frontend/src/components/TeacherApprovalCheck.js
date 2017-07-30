import React from 'react'
import {Icon, Container} from 'semantic-ui-react'

const TeacherApprovalCheck = ({teacherVoted}) => {
  if (teacherVoted) {
    return (
      <Container>
        <Icon name='check square' color='green' size='huge' />
        <h4>Teacher Approved!</h4>
      </Container>
    )
  } else {
    return (
      <Container>
        <Icon name='check square' color='grey' size='huge' />
        <h4>Not Approved</h4>
      </Container>

    )
  }
}

export default TeacherApprovalCheck
