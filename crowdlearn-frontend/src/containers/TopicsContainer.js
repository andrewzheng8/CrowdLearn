import React, {Component} from 'react'
// import {COURSES} from '../data'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {setTopics} from '../actions/topicsActions'
import {setTopic} from '../actions/topicActions'
import TopicsList from '../components/topicsComponents/TopicsList'
import TopicsForm from '../components/topicsComponents/CreateTopicForm'
import TopicsMenu from '../components/topicsComponents/TopicsMenu'
// import CourseShow from '../components/courseComponents/CourseShow'
import {Grid, Button, Icon} from 'semantic-ui-react'

class TopicsContainer extends Component {

  componentWillMount () {
    this.props.setTopics()
  }

  render () {
    // return class list and class show component, class list should change the store state of what
    // is in class show, this component should fetch the appropriate classes

    switch (this.props.topicsMenu.activeItem) {
      case 'all':
        return <TopicsList topics={this.props.topics} />
      case 'add_topic':
        return <TopicsForm />
      default:
        return <TopicsList topics={this.props.topics} />
    }
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setTopics: setTopics
  }, dispatch)
}

const mapStateToProps = state => {
  return {
    topics: state.topics,
    topicsMenu: state.topicsMenu
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicsContainer)
