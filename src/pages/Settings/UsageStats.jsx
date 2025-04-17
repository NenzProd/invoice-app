import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const UsageStats = () => {
  const navigate = useNavigate()

  return (
    <div className="container p-3">
      <div className="d-flex align-items-center mb-4">
        <FontAwesomeIcon 
          icon={faArrowLeft} 
          className="me-3" 
          style={{ cursor: 'pointer' }} 
          onClick={() => navigate('/dashboard/settings')}
        />
        <h5 className="mb-0">Usage Stats</h5>
      </div>
      
      <div className="bg-light p-5 text-center rounded">
        <p>Usage statistics feature is under development.</p>
      </div>
    </div>
  )
}

export default UsageStats 