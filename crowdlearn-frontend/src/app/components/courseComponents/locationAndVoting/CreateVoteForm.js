import React, {Component} from 'react'
import {Form, Input, Button, Icon} from 'semantic-ui-react'
import {voteForLocation} from '../../../../actions/voteActions'
// import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import axios from 'axios'

class CreateVoteForm extends Component {
  state = {
    contribution: 0,
    user: this.props.viewer
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    console.log('in handle form submit for create', event)
    this.props.toggleVoteForm()
    this.props.createVote(this.state)
  }

  handleCancel = event => {
    event.preventDefault()
    console.log('in hanle cancel')
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
              <Button color='blue' basic  onClick={this.handleFormSubmit}>
                <Icon name='file text outline' />
                Vote
              </Button>
              <Button basic color='red' onClick={this.handleCancel}>
                <Icon name='remove'  />
                Cancel
              </Button>
            </Button.Group>
          </div>
        </Form.Field>
      </Form>
    )
  }
}

export default CreateVoteForm
