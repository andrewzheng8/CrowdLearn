import React, {Component} from 'react'
import {Form, Input, Button} from 'semantic-ui-react'
import {addCourse, setCourses} from '../../../actions/coursesActions'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class CourseForm extends Component {
  state = {
    title: '',
    curriculum: '',
    price: 0,
    teacher: this.props.viewer._id,
    topic: this.context.router.route.match.params.topicId
  }

  static contextTypes = {
    router: PropTypes.object
  }


  handleFormSubmit = event => {
    event.preventDefault()
    // console.log(this.props, 'at form submit');
    // Call action creator to add course
    this.props.addCourse(this.state)
  }



  handleChange = event => {
    if (event.target.name === 'price' && event.target.value < 0) {
      this.setState({
        price: 0
      })
    } else {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

  }

  render () {
    console.log(this.context)
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <Form.Field>
          <label>title</label>
          <input type='text' name='title' onChange={this.handleChange} value={this.state.title}/>
        </Form.Field>
        <Form.Field >
          <label>curriculum</label>
          <textarea name='curriculum' onChange={this.handleChange} value={this.state.curriculum}/>
        </Form.Field>
        <Form.Field >
          <label>Price in Dollars</label>
          <input type='number' name='price' onChange={this.handleChange} value={this.state.price}/>
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

const mapStateToProps = state => {
  return {
    viewer: state.viewer,
    topic: state.topic
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addCourse: addCourse,
    setCourses: setCourses
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseForm)
