import React, {Component} from 'react'
import {Form, Input, Button} from 'semantic-ui-react'
import {addCourse} from '../actions/coursesActions'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class CourseForm extends Component {
  state = {
    title: '',
    curriculum: ''
  }

  // static contextTypes = {
  //   router: PropTypes.object
  // }
  // componentWillUpdate(nextProps) {
  //   console.log("updating signup", nextProps, this.context)
  //   if (nextProps.authenticated) {
  //     this.context.router.history.push('/courses')
  //   }
  // }

  handleFormSubmit = event => {
    event.preventDefault()
    console.log(this.props);
    // Call action creator to sign up the user
    this.props.addCourse(this.state)
    this.setState({
      title: '',
      curriculum: ''
    })
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
        <Form.Field>
          <label>title</label>
          <input type='text' name='title' onChange={this.handleChange} value={this.state.title}/>
        </Form.Field>
        <Form.Field >
          <label>curriculum</label>
          <textarea name='curriculum' onChange={this.handleChange} value={this.state.curriculum}/>
        </Form.Field>
        <Form.Field >
          <div className='ui center aligned segment'>
            <Button type='submit'>Create Course</Button>
          </div>
        </Form.Field>

      </Form>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addCourse: addCourse
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(CourseForm)
