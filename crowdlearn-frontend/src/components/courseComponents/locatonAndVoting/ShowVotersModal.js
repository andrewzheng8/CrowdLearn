import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const ShowVotersModal = ({location}) => {
  const voters = location.votes.map(v => <h3> {v.user.email} contributed {v.contribution}</h3>)

  return (
    <Modal trigger={<Button>Show Voters</Button>}>
      <Modal.Header>These Voters Contributed!</Modal.Header>
      <Modal.Content>
        {voters}
      </Modal.Content>
    </Modal>
  )
}

export default ShowVotersModal
