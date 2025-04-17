import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShield, faLock, faKey, faUserLock, faDownload, faTrash, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Privacy = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    twoFactor: false,
    usageStats: true,
    crashReports: true
  })

  const handleChange = (event) => {
    const { name, checked } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked
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
        <h3>Privacy & Security</h3>
      </div>
      <div className="d-flex align-items-center justify-content-center py-2">
        <form className="col-12 col-sm-10 col-md-8 col-lg-6" onSubmit={handleSubmit}>
          <div className="text-center">
            <h4 className="mb-5">Security Settings</h4>
          </div>
          
          <div className="mb-4">
            <h5 className="d-flex align-items-center mb-3">
              <FontAwesomeIcon icon={faKey} className="me-2" />
              <span>Account Security</span>
            </h5>
            
            <div className="mb-4">
              <h6>Password</h6>
              <p className="text-muted">Last changed: 3 months ago</p>
              <button type="button" className="btn btn-outline-primary">Change Password</button>
            </div>
            
            <div className="mb-4">
              <h6>Two-Factor Authentication</h6>
              <p className="text-muted">Add an extra layer of security to your account</p>
              <div className="form-check form-switch">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  id="twoFactor"
                  name="twoFactor"
                  checked={formData.twoFactor}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="twoFactor">
                  Enable Two-Factor Authentication
                </label>
              </div>
            </div>
            
            <div className="mb-4">
              <h6>Login Sessions</h6>
              <p className="text-muted">You're currently logged in on these devices</p>
              <div className="list-group">
                <div className="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
                  <div>
                    <h6 className="mb-0">Windows PC - Chrome</h6>
                    <small className="text-muted">Current session</small>
                  </div>
                  <span className="badge bg-primary mt-2 mt-md-0">Active Now</span>
                </div>
                <div className="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
                  <div>
                    <h6 className="mb-0">iPhone - Safari</h6>
                    <small className="text-muted">Last active: Yesterday</small>
                  </div>
                  <button type="button" className="btn btn-sm btn-outline-danger mt-2 mt-md-0">Log out</button>
                </div>
              </div>
              <button type="button" className="btn btn-outline-danger mt-3">Log out of all devices</button>
            </div>
          </div>
          
          <div className="mb-4">
            <h5 className="d-flex align-items-center mb-3">
              <FontAwesomeIcon icon={faShield} className="me-2" />
              <span>Data Privacy</span>
            </h5>
            
            <div className="mb-4">
              <h6>Data Usage</h6>
              <div className="form-check mb-2">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  id="usageStats"
                  name="usageStats"
                  checked={formData.usageStats}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="usageStats">
                  Share anonymous usage statistics to help improve our services
                </label>
              </div>
              <div className="form-check mb-2">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  id="crashReports"
                  name="crashReports"
                  checked={formData.crashReports}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="crashReports">
                  Send crash reports automatically
                </label>
              </div>
            </div>
            
            <div className="mb-4">
              <h6>Data Backup</h6>
              <p className="text-muted">Your data is automatically backed up daily</p>
              <button type="button" className="btn btn-outline-primary">
                <FontAwesomeIcon icon={faDownload} className="me-2" />
                Download Backup
              </button>
            </div>
            
            <div className="mb-4">
              <h6>Data Deletion</h6>
              <p className="text-warning">This action is irreversible.</p>
              <button type="button" className="btn btn-outline-danger">
                <FontAwesomeIcon icon={faTrash} className="me-2" />
                Request Data Deletion
              </button>
            </div>
          </div>
          
          <div className="mb-4">
            <h5 className="d-flex align-items-center mb-3">
              <FontAwesomeIcon icon={faUserLock} className="me-2" />
              <span>Privacy Policy & Terms</span>
            </h5>
            
            <p>
              Review our privacy policy and terms of service to understand how we protect your data.
            </p>
            <div className="row g-2">
              <div className="col-6">
                <button type="button" className="btn btn-outline-primary w-100">Privacy Policy</button>
              </div>
              <div className="col-6">
                <button type="button" className="btn btn-outline-primary w-100">Terms of Service</button>
              </div>
            </div>
          </div>
          
          <div className="mt-5 mb-2 row">
            <div className="col-6 col-md-3">
              <button type="submit" className="btn btn-primary w-100">Save Changes</button>
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

export default Privacy 