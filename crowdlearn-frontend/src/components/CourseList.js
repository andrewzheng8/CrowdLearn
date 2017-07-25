import React from 'react'
import CourseCard from './CourseCard'
import {connect} from 'react-redux'

const CourseList = ({courses}) => {
  const courseList = courses.map(c => <CourseCard course={c} />)
  return (
    <div>
      {courseList}
    </div>

  )
}

export default CourseList
