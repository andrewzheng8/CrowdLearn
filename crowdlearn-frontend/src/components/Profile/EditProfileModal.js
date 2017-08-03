import React, {Component} from 'react'
import UserInfoForm from './UserInfoForm'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

export default class EditProfileModal extends Component {
  state = { modalOpen: false }

  handleOpen = (e) => this.setState({
    modalOpen: true,
  })

  handleClose = (e) => this.setState({
    modalOpen: false,
  })

  render() {
    return (
      <Modal
        trigger={<Button onClick={this.handleOpen}>Edit User Info</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Header icon='browser' content='Cookies policy' />
        <Modal.Content>
          <UserInfoForm closeModal={this.handleClose} />
        </Modal.Content>
      </Modal>
    )
  }
}
