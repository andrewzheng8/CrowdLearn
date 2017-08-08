import React, {Component} from 'react'
import {Form, Input, Button, Icon} from 'semantic-ui-react'
import {voteForLocation} from '../../../../actions/voteActions'
// import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import axios from 'axios'

class VoteForm extends Component {
  state = {
    contribution: 0,
    user: this.props.viewer
  }

  componentWillMount () {
    if(this.props.viewerVote) {
      this.setState({
        contribution: this.props.viewerVote.contribution
      })
    }
  }


  handleFormSubmit = event => {
    event.preventDefault()
    this.props.voteForLocation(this.state.contribution, this.props.course._id, this.props.location._id)//add location to props
    this.props.toggleVoteForm()
  }



  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render () {
    if(this.props.viewerVote) {
      return (
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Field>
            <label>contribution</label>
            <input type='number' name='contribution' onChange={this.handleChange} value={this.state.contribution}/>
          </Form.Field>
          <Form.Field >
            <div className='ui center aligned segment'>
              <Button.Group>
                <Button color='blue' basic >
                  <Icon name='file text outline' />
                  Vote
                </Button>
                <Button basic color='red'>
                  <Icon name='remove' />
                  Cancel
                </Button>
              </Button.Group>
            </div>
          </Form.Field>
        </Form>
      )
    } else {
      return (
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Field>
            <label>contribution</label>
            <input type='number' name='contribution' onChange={this.handleChange} value={this.state.contribution}/>
          </Form.Field>
          <Form.Field >
            <div className='ui center aligned segment'>
              <Button.Group>
                <Button color='blue' basic >
                  <Icon name='file text outline' />
                  Vote
                </Button>
                <Button basic color='red'>
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
}

const mapStateToProps = state => {
  return {course: state.course,
          viewer: state.viewer
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    voteForLocation: voteForLocation
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(VoteForm)
