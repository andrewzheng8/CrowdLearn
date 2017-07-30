import React, {Component} from 'react'
import {Form, Input, Button, Icon} from 'semantic-ui-react'
import {voteForLocation, updateVote, removeVote} from '../actions/voteActions'
// import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import axios from 'axios'
import CreateVoteForm from './CreateVoteForm'
import UpdateVoteForm from './UpdateVoteForm'

class VoteFormContainer extends Component {

  state = {
    showForm: false
  }

  toggleVoteForm = () => {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  handleCreateVote = vote => {
    this.props.voteForLocation(vote, this.props.location._id, this.props.course._id)
  }

  handleUpdateVote = vote => {
    console.log(this.props)
    this.props.updateVote(vote, this.props.location._id, this.props.course._id)
  }

  handleDeleteVote = () => {
    this.props.removeVote(this.props.viewerVote, this.props.location._id, this.props.course._id)
  }




  render () {
    if (!this.state.showForm && this.props.viewerVote) {
      return(
        <div>
          <h4>You contributed: {this.props.viewerVote.contribution}</h4>
          <Button.Group>
            <Button onClick={this.toggleVoteForm} color='blue' basic >
              <Icon name='file text outline' />
              Edit
            </Button>
            <Button basic color='red' onClick={this.handleDeleteVote} >
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
          <Button onClick={this.toggleVoteForm} basic color='blue' >
            <Icon name='file text outline'/>
            Vote and Contribute
          </Button>
        </div>
      )
    } else if (this.state.showForm && !this.props.viewerVote) {
      return(
        <CreateVoteForm
          toggleVoteForm={this.toggleVoteForm}
          location={this.props.location}
          createVote={this.handleCreateVote}
          viewer={this.props.viewer}
        />
      )
    } else {
      return (
        <UpdateVoteForm
          toggleVoteForm={this.toggleVoteForm}
          viewerVote={this.props.viewerVote}
          location={this.props.location}
          updateVote={this.handleUpdateVote}
          course={this.props.course}
        />
      )
    }
  }
}

const mapStateToProps = state => {
  return {course: state.course,
          viewer: state.viewer
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    voteForLocation: voteForLocation,
    updateVote: updateVote,
    removeVote: removeVote
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(VoteFormContainer)
