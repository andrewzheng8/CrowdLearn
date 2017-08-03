import React, {Component} from 'react'
import {Form, Input, Button, Icon} from 'semantic-ui-react'
import {voteForLocation} from '../actions/voteActions'
// import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import axios from 'axios'

class UpdateVoteForm extends Component {
  state = {
    ...this.props.viewerVote
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    this.props.toggleVoteForm()
    this.props.updateVote(this.state)
  }

  handleCancel = event => {
    event.preventDefault()
    this.props.toggleVoteForm()
  }


  render () {
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <Form.Field>
          <label>contribution</label>
          <input type='number' name='contribution' onChange={this.handleChange} value={this.state.contribution}/>
        </Form.Field>
        <Form.Field >
          <div className='ui center aligned segment'>
            <Button.Group>
              <Button color='blue' basic onClick={this.handleFormSubmit} >
                <Icon name='file text outline' />
                Update
              </Button>
              <Button basic color='red' onClick={this.handleCancel}>
                <Icon name='remove' />
                Cancel
              </Button>
            </Button.Group>
          </div>
        </Form.Field>
      </Form>
    )
  }
}

export default UpdateVoteForm
