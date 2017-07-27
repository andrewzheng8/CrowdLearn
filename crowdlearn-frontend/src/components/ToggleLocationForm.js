import React
import CreateLocationForm from './CreateLocationForm'
import {Button, Icon}

const ToggleLocationForm = {showForm, toggleForm} => {
  if (showForm) {
    return <CreateLocationForm toggleForm={toggleForm} />
  } else {
    return (
      <Button onClick={toggleForm}>
        <Icon name='plus'/>
      </Button>
    )
  }
}
