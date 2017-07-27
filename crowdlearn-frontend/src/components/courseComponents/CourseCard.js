import React, {Component} from 'react'
import {Card, Image, Icon, Menu} from 'semantic-ui-react'
import {setCourse} from '../../actions/courseActions'
import {connect} from 'react-redux'

class CourseCard extends Component {

  setCourseShow = () => {
    this.props.setCourse(this.props.course)
  }

  render () {
    //refactor into two components
    if (!this.props.course.form){
      return (
        <Menu.Item>
          <Card centered onClick={this.setCourseShow}>
            <Card.Content>
              <Image floated='right' size='mini' src='http://img02.deviantart.net/2df7/i/2012/319/5/9/magic_man_by_damiensaelak-d5l15r9.jpg' />
              <Card.Header>
                {this.props.course.title}
              </Card.Header>
              <Card.Meta>
                Taught by blank holder
              </Card.Meta>
              <Card.Description>
                This will probably be a truncated description or location/rate
              </Card.Description>
            </Card.Content>
          </Card>
        </Menu.Item>
      )
    } else {
      return (
        <Menu.Item>
          <Card centered onClick={this.setCourseShow}>
            <Card.Content>
              <Card.Header>
                Add Course
              </Card.Header>
              <Card.Description>
                <Icon name='plus' />
              </Card.Description>
            </Card.Content>
          </Card>
        </Menu.Item>
      )
    }
  }

}

const mapDispatchToProps = dispatch => {
  return {
    setCourse: course => dispatch(setCourse(course))
  }
}

export default connect(null, mapDispatchToProps)(CourseCard)
