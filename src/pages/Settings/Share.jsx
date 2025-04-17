import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faFacebook, 
  faTwitter, 
  faLinkedin, 
  faWhatsapp 
} from '@fortawesome/free-brands-svg-icons'
import { 
  faEnvelope, 
  faCopy, 
  faQrcode, 
  faLink,
  faPaperPlane,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Share = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    inviteEmails: '',
    inviteMessage: '',
    enablePublicProfile: false,
    customUrl: ''
  })

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
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
        <h3>Share</h3>
      </div>
      <div className="d-flex align-items-center justify-content-center py-2">
        <form className="col-12 col-sm-10 col-md-8 col-lg-6" onSubmit={handleSubmit}>
          <div className="text-center">
            <h4 className="mb-5">Share & Invite</h4>
          </div>
          
          <div className="mb-4">
            <h5 className="mb-3">Share Invoice App</h5>
            <p className="text-muted mb-3">
              Invite your colleagues, clients, or friends to try our invoice app.
            </p>
            
            <div className="mb-4">
              <label htmlFor="shareLink" className="form-label">Share Link</label>
              <div className="input-group">
                <input 
                  type="text" 
                  className="form-control" 
                  id="shareLink" 
                  value="https://invoice.example.com/r/YOUR_REFERRAL_CODE" 
                  readOnly 
                />
                <button className="btn btn-outline-secondary" type="button">
                  <FontAwesomeIcon icon={faCopy} />
                </button>
              </div>
              <small className="form-text text-muted">
                You'll receive a free month of premium service for each new user who signs up with your link.
              </small>
            </div>
            
            <div className="mb-4">
              <label className="form-label">Share via Social Media</label>
              <div className="d-flex flex-wrap gap-2">
                <button type="button" className="btn btn-outline-primary">
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                </button>
                <button type="button" className="btn btn-outline-info">
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </button>
                <button type="button" className="btn btn-outline-primary">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </button>
                <button type="button" className="btn btn-outline-success">
                  <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                </button>
                <button type="button" className="btn btn-outline-secondary">
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </button>
              </div>
            </div>
            
            <div className="mb-4 text-center">
              <button type="button" className="btn btn-outline-dark">
                <FontAwesomeIcon icon={faQrcode} className="me-2" />
                Show QR Code
              </button>
            </div>
          </div>
          
          <div className="mb-4">
            <h5 className="mb-3">Invite via Email</h5>
            <div className="mb-3">
              <label htmlFor="inviteEmails" className="form-label">Email Addresses</label>
              <textarea 
                className="form-control" 
                id="inviteEmails" 
                name="inviteEmails"
                rows="3" 
                placeholder="Enter email addresses separated by commas"
                value={formData.inviteEmails}
                onChange={handleChange}
              ></textarea>
            </div>
            
            <div className="mb-3">
              <label htmlFor="inviteMessage" className="form-label">Personal Message (Optional)</label>
              <textarea 
                className="form-control" 
                id="inviteMessage" 
                name="inviteMessage"
                rows="3" 
                placeholder="Add a personal message to your invitation"
                value={formData.inviteMessage}
                onChange={handleChange}
              ></textarea>
            </div>
            
            <button type="button" className="btn btn-primary">
              <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
              Send Invitations
            </button>
          </div>
          
          <div className="mb-4">
            <h5 className="mb-3">Public Profile Link</h5>
            <p className="text-muted mb-3">
              Share your public profile with clients to make it easy for them to access your invoices and services.
            </p>
            
            <div className="form-check form-switch mb-3">
              <input 
                className="form-check-input" 
                type="checkbox" 
                id="enablePublicProfile"
                name="enablePublicProfile"
                checked={formData.enablePublicProfile}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="enablePublicProfile">
                Enable public profile
              </label>
            </div>
            
            <div className="mb-3">
              <label htmlFor="customUrl" className="form-label">Custom URL</label>
              <div className="input-group">
                <span className="input-group-text">invoice.example.com/</span>
                <input 
                  type="text" 
                  className="form-control" 
                  id="customUrl"
                  name="customUrl"
                  placeholder="your-business-name"
                  value={formData.customUrl}
                  onChange={handleChange}
                  disabled={!formData.enablePublicProfile}
                />
                <button 
                  className="btn btn-outline-secondary" 
                  type="button"
                  disabled={!formData.enablePublicProfile}
                >
                  <FontAwesomeIcon icon={faLink} />
                </button>
              </div>
              <small className="form-text text-muted">
                Choose a custom URL for your public profile
              </small>
            </div>
          </div>
          
          <div className="mt-5 mb-2 row">
            <div className="col-6 col-md-3">
              <button type="submit" className="btn btn-primary w-100">Save</button>
            </div>
            <div className="col-6 col-md-3">
              <button type="button" className="btn btn-secondary w-100">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Share 