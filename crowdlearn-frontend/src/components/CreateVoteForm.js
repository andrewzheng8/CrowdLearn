import React, {Component} from 'react'
import {Form, Input, Button, Icon} from 'semantic-ui-react'
import {voteForLocation} from '../actions/voteActions'
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
    this.props.toggleVoteForm()
    this.props.createVote(this.state)
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
              <Button basic color='red'>
                <Icon name='remove' onClick={this.props.toggleVoteForm} />
                Cancel
              </Button>
            </Button.Group>
          </div>
        </Form.Field>
      </Form>
    )
  }
}

// const mapStateToProps = state => {
//   return {course: state.course,
//           viewer: state.viewer
//   }
// }
//
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({
//     voteForLocation: voteForLocation
//   }, dispatch)
// }


// export default connect(mapStateToProps, mapDispatchToProps)(CreateVoteForm)
export default CreateVoteForm
