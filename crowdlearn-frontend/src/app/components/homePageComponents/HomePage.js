import React from 'react'
import {Container, Divider} from 'semantic-ui-react'
import ExplanationOne from './ExplanationOne'
import ExplanationTwo from './ExplanationTwo'
import ExplanationThree from './ExplanationThree'
import ExplanationFour from './ExplanationFour'

const HomePage = () => {
  return (
    <div>
      <ExplanationOne />
      <Divider />
      <ExplanationTwo />
      <Divider />
      <ExplanationThree />
      <Divider />
      <ExplanationFour />
    </div>
  )
}

export default HomePage
