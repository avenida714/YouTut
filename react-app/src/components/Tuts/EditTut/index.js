import React, { useState } from 'react'
import EditTutForm from './EditTutForm'

function EditTut({tutId, oldTitle, oldDescription}) {

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
        <EditTutForm tutId={tutId} oldTitle={oldTitle} oldDescription={oldDescription} />
      )}
    </div>

  )
}

export default EditTut
