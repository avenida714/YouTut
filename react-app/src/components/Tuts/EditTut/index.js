import React, { useState } from 'react'
import EditTutForm from './EditTutForm'

function EditTut({tut, tutId, oldTitle, oldDescription}) {

  const [showForm, setShowForm] = useState(false)

  const buttonClick = () => {
    if (!showForm) {
      setShowForm(true)
    } else {
      setShowForm(false)
    }
  }

  return (
    <div>

      <button onClick={buttonClick}>EditTut</button>
      {showForm && (
        <EditTutForm tut={tut} tutId={tutId} oldTitle={oldTitle} oldDescription={oldDescription} />
      )}
    </div>

  )
}

export default EditTut
