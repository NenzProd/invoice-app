import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const RateApp = () => {
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
        <h5 className="mb-0">Rate Our App</h5>
      </div>
      
      <div className="bg-light p-5 text-center rounded">
        <h5>How would you rate our app?</h5>
        <div className="d-flex justify-content-center my-4">
          {[1, 2, 3, 4, 5].map(star => (
            <FontAwesomeIcon 
              key={star}
              icon={faStar} 
              className="mx-2"
              style={{ fontSize: '2rem', color: '#ddd', cursor: 'pointer' }}
            />
          ))}
        </div>
        <p>Your feedback helps us improve. Thank you!</p>
      </div>
    </div>
  )
}

export default RateApp 