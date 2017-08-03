import React, {Component} from 'react'
import {Form, Input, Button} from 'semantic-ui-react'
import {updateUser} from '../../actions/viewerActions'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class UpdateUserForm extends Component {
  state = {
    img_url: this.props.viewer.img_url
  }


  handleFormSubmit = event => {
    event.preventDefault()
    console.log(this.props);
    // Call action creator to sign up the user
    this.props.updateUser(this.props.viewer._id, this.state)
    this.props.closeModal(event)
  }



  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render () {
    return (
      <Form onSubmit={this.handleFormSubmit}>
        {/* <Form.Field width={4}>
          <label>username</label>
          <input name='username' onChange={this.handleChange} value={this.state.username}/>
        </Form.Field> */}

        <Form.Field width={4}>
          <label>email</label>
          <input type='text' name='img_url' onChange={this.handleChange} value={this.state.img_url}/>
        </Form.Field>
        <Form.Field width={4}>
          <div className='ui center aligned segment'>
            <Button type='submit'>Update User Info</Button>
          </div>
        </Form.Field>

      </Form>
    )
  }
}

const mapStateToProps = state => {
  return  { viewer: state.viewer }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    updateUser: updateUser
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUserForm)
