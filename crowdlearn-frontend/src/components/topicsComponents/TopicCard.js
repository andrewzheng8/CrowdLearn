import React, {Component} from 'react'
import {Card, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {setTopic} from '../../actions/topicActions'
import PropTypes from 'prop-types'

class TopicCard extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  goToTopic = () => {
    this.context.router.history.push(`topics/${this.props.topic._id}`)
  }


  render () {

    return (
      <Card onClick={this.goToTopic}>
        <Image src={this.props.topic.img_url} />
        <Card.Content>
          <Card.Header>
            {this.props.topic.name}
          </Card.Header>
          {/* <Card.Meta>
              some stuff
            </Card.Meta>
          <Card.Description>
              More stuff
            </Card.Description> */}
        </Card.Content>

      </Card>

    )
  }

}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setTopic: setTopic
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(TopicCard)
