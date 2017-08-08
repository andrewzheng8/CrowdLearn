import React, {Component} from 'react'
import {Card} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {setTopic} from '../../../actions/topicActions'
import PropTypes from 'prop-types'

class CourseFollowCard extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  goToCourse = () => {
    this.context.router.history.replace(`courses/${this.props.course._id}`)
  }


  render () {

    return (
      <Card onClick={this.goToCourse}>
        <Card.Content>
          <Card.Header>
            {this.props.course.title}
          </Card.Header>
          <Card.Meta>
              {/*this.props.course.teacher*/}
            </Card.Meta>
        </Card.Content>

      </Card>

    )
  }

}

export default CourseFollowCard

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({
//     setTopic: setTopic
//   }, dispatch)
// }
//
// export default connect(null, mapDispatchToProps)(TopicCard)
