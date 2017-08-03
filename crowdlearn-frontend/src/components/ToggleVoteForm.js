import React, {Component} from 'react'
import CreateLocationForm from './CreateLocationForm'
import {Button, Icon} from 'semantic-ui-react'
import VoteForm from './VoteForm'

class ToggleVoteForm extends Component {
  state = {
    showForm: false
  }

  toggleVoteForm = () => {
    console.log('in toggle form')
    this.setState({
      showForm: !this.state.showForm
    })
  }

  render () {
    console.log('render toggle vote form')
    if (!this.state.showForm && this.props.viewerVote) {
      return(
        <div>
          <h4>You contributed: {this.props.viewerVote.contribution}</h4>
          <Button.Group>
            <Button onClick={this.toggleVoteForm} color='blue' basic >
              <Icon name='file text outline' />
              Edit
            </Button>
            <Button basic color='red'>
              <Icon name='remove' />
              Remove
            </Button>
          </Button.Group>
        </div>
      )
    } else if (!this.state.showForm && !this.props.viewerVote) {
      return(
        <div>
          <h4>You have not voted</h4>
          <Button onClick={this.toggleVoteForm} basic >
            <Icon name='file text outline'/>
            Vote and Contribute
          </Button>
        </div>
      )
    } else if (this.state.showForm && !this.props.viewerVote) {
        return (
          <CreateVoteForm
            toggleVoteForm={this.toggleVoteForm}
            viewerVote={this.props.viewerVote}
            location={this.props.location}
          />
        )
    } else {
        return (
          <UpdateVoteForm
            toggleVoteForm={this.toggleVoteForm}
            viewerVote={this.props.viewerVote}
            location={this.props.location}
          />
        )
    }
  }
}

export default ToggleVoteForm
