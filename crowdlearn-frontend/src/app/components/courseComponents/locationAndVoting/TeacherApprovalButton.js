import React, {Component} from 'react'
import CreateLocationForm from './CreateLocationForm'
import {Button, Icon} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {toggleApproveLocation} from '../../../../actions/locationsActions'

class TeacherApprovalButton extends Component {

  handleClick = () => {
    this.props.toggleApproval(this.props.location._id, this.props.course._id)
  }

  render () {
    if (!this.props.location.teacherVoted) {
      return(
        <Button onClick={this.handleClick} color='green' basic>
          <Icon name='check circle' />
          Approve this location
        </Button>
      )
    } else {
        return (
          <Button onClick={this.handleClick} color='red' basic>
            <Icon name='remove circle' />
            Revoke approval
          </Button>
        )
    }
  }
}

const mapStateToProps = state => {
  return {course: state.course}
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    toggleApproval: toggleApproveLocation
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherApprovalButton)
