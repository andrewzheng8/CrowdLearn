import React, {Component} from 'react'
import {Form, Input, Button} from 'semantic-ui-react'
import {addLocation} from '../actions/coursesActions'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import axios from 'axios'

class LocationForm extends Component {
  state = {
    address: '',
    time: '',
    course: this.props.course._id
  }




  handleFormSubmit = event => {
    event.preventDefault()
    // Call action creator to add course
    // this.props.addLocation(this.state)
    // this.props.setCourses()
    // this.setState({
    //   address: '',
    //   time: ''
    // })
    // this.props.toggleForm()
    this.props.addLocation(this.state)
    this.setState({
      address: '',
      time: ''
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
        <Form.Field>
          <label>address</label>
          <input type='text' name='address' onChange={this.handleChange} value={this.state.address}/>
        </Form.Field>
        <Form.Field >
          <label>time</label>
          <input type='text' name='time' onChange={this.handleChange} value={this.state.time}/>
        </Form.Field>
        <Form.Field >
          <div className='ui center aligned segment'>
            <Button type='submit'>Create Location</Button>
          </div>
        </Form.Field>
      </Form>
    )
  }
}

const mapStateToProps = state => {
  return {course: state.course}
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addLocation: addLocation
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(LocationForm)
