import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { 
  faBook, 
  faEnvelope, 
  faInfoCircle, 
  faFileAlt, 
  faGlobe,
  faQuestionCircle,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons'
import invoiceLogo from '@/assets/img/invoice-icon.avif'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()

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
        <h3>About</h3>
      </div>
      <div className="d-flex align-items-center justify-content-center py-2">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <div className="text-center mb-5">
            <img 
              src={invoiceLogo} 
              alt="Invoice App Logo" 
              width="80" 
              height="80"
              className="rounded-circle mb-3" 
            />
            <h4>Invoice App</h4>
            <p className="text-muted">Version 1.0.0</p>
          </div>
          
          <div className="mb-4">
            <h5 className="d-flex align-items-center mb-3">
              <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
              <span>About Invoice App</span>
            </h5>
            <p>
              Invoice App is a comprehensive invoicing solution designed for small businesses and freelancers.
              Our goal is to simplify your financial management with easy-to-use tools for creating invoices,
              tracking payments, and managing your business finances.
            </p>
            
            <div className="row mt-4">
              <div className="col-12 col-md-6 mb-3 mb-md-0">
                <h6>Key Features</h6>
                <ul className="ps-3">
                  <li>Create and manage professional invoices</li>
                  <li>Track payments and expenses</li>
                  <li>Generate financial reports</li>
                  <li>Customize templates to match your brand</li>
                  <li>Secure cloud storage for your data</li>
                </ul>
              </div>
              <div className="col-12 col-md-6">
                <h6>System Requirements</h6>
                <ul className="ps-3">
                  <li>Modern web browser (Chrome, Firefox, Safari, Edge)</li>
                  <li>Internet connection</li>
                  <li>JavaScript enabled</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <h5 className="d-flex align-items-center mb-3">
              <FontAwesomeIcon icon={faBook} className="me-2" />
              <span>Documentation & Resources</span>
            </h5>
            <div className="row g-3">
              <div className="col-6 col-md-6">
                <button type="button" className="btn btn-outline-primary w-100">
                  <FontAwesomeIcon icon={faBook} className="me-2" />
                  User Guide
                </button>
              </div>
              
              <div className="col-6 col-md-6">
                <button type="button" className="btn btn-outline-secondary w-100">
                  <FontAwesomeIcon icon={faYoutube} className="me-2" />
                  Video Tutorials
                </button>
              </div>
              
              <div className="col-6 col-md-6">
                <button type="button" className="btn btn-outline-primary w-100">
                  <FontAwesomeIcon icon={faQuestionCircle} className="me-2" />
                  FAQs
                </button>
              </div>
              
              <div className="col-6 col-md-6">
                <button type="button" className="btn btn-outline-secondary w-100">
                  <FontAwesomeIcon icon={faGithub} className="me-2" />
                  API Docs
                </button>
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <h5 className="d-flex align-items-center mb-3">
              <FontAwesomeIcon icon={faGlobe} className="me-2" />
              <span>Legal Information</span>
            </h5>
            <div className="row g-2">
              <div className="col-6 col-md-6">
                <button type="button" className="btn btn-outline-secondary w-100">
                  <FontAwesomeIcon icon={faFileAlt} className="me-1" />
                  Terms of Service
                </button>
              </div>
              <div className="col-6 col-md-6">
                <button type="button" className="btn btn-outline-secondary w-100">
                  <FontAwesomeIcon icon={faFileAlt} className="me-1" />
                  Privacy Policy
                </button>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-4">
            <button type="button" className="btn btn-primary">
              <FontAwesomeIcon icon={faEnvelope} className="me-2" />
              Contact Support
            </button>
          </div>
          
          <div className="text-center text-muted">
            <p>© 2023 Invoice App. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 