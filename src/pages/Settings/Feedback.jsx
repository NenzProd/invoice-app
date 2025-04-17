import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faThumbsUp, faThumbsDown, faComments, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Feedback = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    feedbackType: '',
    message: '',
    contactConsent: false
  })
  const [error, setError] = useState('')

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!formData.feedbackType) {
      setError('Please select a feedback type')
      return
    }
    if (!formData.message) {
      setError('Please enter your feedback message')
      return
    }
    setError('')
    console.log(formData)
  }

  const handleBackClick = () => {
    navigate(-1) // Navigate back to the previous page
  }

  return (
    <section className="m-3">
      <div className="d-flex align-items-center mb-4">
        <FontAwesomeIcon 
          icon={faArrowLeft} 
          onClick={handleBackClick} 
          className="me-3" 
          style={{ cursor: 'pointer' }}
        />
        <h3>Feedback</h3>
      </div>
      <div className="d-flex align-items-center justify-content-center py-2">
        <form className="col-12 col-sm-10 col-md-8 col-lg-6" onSubmit={handleSubmit}>
          <div className="text-center">
            <h4 className="mb-5">Share Your Feedback</h4>
          </div>
          
          {error && <p style={{ color: 'red' }}>{error}</p>}
          
          <div className="mb-4">
            <label htmlFor="feedbackType" className="form-label">Feedback Type</label>
            <select 
              className="form-select" 
              id="feedbackType"
              name="feedbackType"
              value={formData.feedbackType}
              onChange={handleChange}
            >
              <option value="" disabled>Select feedback type</option>
              <option value="suggestion">Suggestion</option>
              <option value="bug">Bug Report</option>
              <option value="feature">Feature Request</option>
              <option value="compliment">Compliment</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label htmlFor="message" className="form-label">Your Message</label>
            <textarea 
              className="form-control" 
              id="message" 
              name="message"
              rows="5" 
              placeholder="Please describe your feedback in detail..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          
          <div className="mb-4">
            <div className="form-check">
              <input 
                className="form-check-input" 
                type="checkbox" 
                id="contactConsent" 
                name="contactConsent"
                checked={formData.contactConsent}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="contactConsent">
                I consent to being contacted about my feedback
              </label>
            </div>
          </div>
          
          <div className="my-3 row">
            <div className="col-12 col-md-6 mb-3 mb-md-0">
              <h5>Rate Your Experience</h5>
              <div className="d-flex flex-wrap gap-2">
                <button type="button" className="btn btn-outline-success">
                  <FontAwesomeIcon icon={faThumbsUp} className="me-2" />
                  Excellent
                </button>
                <button type="button" className="btn btn-outline-primary">
                  <FontAwesomeIcon icon={faThumbsUp} className="me-2" />
                  Good
                </button>
                <button type="button" className="btn btn-outline-warning">
                  <FontAwesomeIcon icon={faThumbsDown} className="me-2" />
                  Fair
                </button>
                <button type="button" className="btn btn-outline-danger">
                  <FontAwesomeIcon icon={faThumbsDown} className="me-2" />
                  Poor
                </button>
              </div>
            </div>
            
            <div className="col-12 col-md-6">
              <h5>Support Channels</h5>
              <div className="d-flex flex-wrap gap-2">
                <button type="button" className="btn btn-outline-primary">
                  <FontAwesomeIcon icon={faComments} className="me-2" />
                  Live Chat
                </button>
                <button type="button" className="btn btn-outline-secondary">
                  <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
                  Email
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-5 mb-2 row">
            <div className="col-6 col-md-3">
              <button type="submit" className="btn btn-primary w-100">
                <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
                Submit
              </button>
            </div>
            <div className="col-6 col-md-3">
              <button type="button" className="btn btn-secondary w-100">Reset</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Feedback 