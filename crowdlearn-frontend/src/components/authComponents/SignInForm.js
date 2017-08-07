import React, {Component} from 'react'
import {Form, Input, Button} from 'semantic-ui-react'
import {signinUser} from '../../actions/authActions'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'


class SignInForm extends Component {
  state = {
    email: '',
    password: ''
  }

  static contextTypes = {
    router: PropTypes.object
  }
  componentWillUpdate(nextProps) {
    // console.log("updating signin", nextProps, this.context)
    if (nextProps.authenticated) {
      this.context.router.history.push('/')
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    this.props.signinUser(this.state)
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field width={4}>
          <label>email</label>
          <input name='email' onChange={this.handleChange} value={this.state.email}/>
        </Form.Field>
        <Form.Field width={4}>
          <label>password</label>
          <input type='password' name='password' onChange={this.handleChange} value={this.state.password}/>
        </Form.Field>
        <Form.Field width={4}>
          <div className='ui center aligned segment'>
            <Button type='submit'>Sign In</Button>
          </div>
        </Form.Field>

      </Form>
    )
  }
}

const mapStateToProps = state => {
  return { errorMessage: state.auth.error, authenticated: state.auth.authenticated }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    signinUser: signinUser
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm)
