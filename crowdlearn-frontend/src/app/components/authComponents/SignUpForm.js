import React, {Component} from 'react'
import {Form, Input, Button} from 'semantic-ui-react'
import {signupUser} from '../../../actions/authActions'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class SignUpForm extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    password_confirmation: ''
  }

  static contextTypes = {
    router: PropTypes.object
  }

  componentWillUpdate(nextProps) {
    // console.log("updating signup", nextProps, this.context)
    if (nextProps.authenticated) {
      this.context.router.history.push('/topics')
    }
  }

  handleFormSubmit = event => {
    event.preventDefault()
    console.log(this.props);
    // Call action creator to sign up the user
    this.props.signupUser(this.state)
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
          <input type='email' name='email' onChange={this.handleChange} value={this.state.email}/>
        </Form.Field>
        <Form.Field width={4}>
          <label>password</label>
          <input type='password' name='password' onChange={this.handleChange} value={this.state.password}/>
        </Form.Field>
        <Form.Field width={4}>
          <label>password confirmation</label>
          <input type='password' name='password_confirmation' onChange={this.handleChange} value={this.state.password_confirmation}/>
        </Form.Field>
        <Form.Field width={4}>
          <div className='ui center aligned segment'>
            <Button type='submit'>Sign Up</Button>
          </div>
        </Form.Field>

      </Form>
    )
  }
}

const mapStateToProps = state => {
  return  { errorMessage: state.auth.error, authenticated: state.auth.authenticated }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    signupUser: signupUser
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)
