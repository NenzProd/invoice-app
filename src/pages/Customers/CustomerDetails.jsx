import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faArrowLeft, 
  faEdit, 
  faPhone, 
  faEnvelope,
  faMapMarkerAlt,
  faDirections
} from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useParams } from 'react-router-dom'

const CustomerDetails = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('details')

  // Mock data - in a real app this would come from an API call using the id param
  const customer = {
    id: 'CUS-28',
    name: 'tensketch',
    contactPerson: 'Mr. Bharath',
    email: 'bharath@tensketch.com',
    phone: '9176606232',
    receivables: 0.00,
    unusedCredits: 0.00,
    address: '123 Main St, Chennai, Tamil Nadu, 600001',
    transactions: [],
    comments: []
  }

  const handleBack = () => {
    navigate(-1)
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  return (
    <div className="bg-light min-vh-100">
      {/* Header */}
      <div className="d-flex align-items-center p-3 bg-white border-bottom">
        <FontAwesomeIcon 
          icon={faArrowLeft} 
          className="me-3 text-secondary" 
          onClick={handleBack}
          style={{ cursor: 'pointer' }} 
        />
        <h6 className="mb-0">{customer.name}</h6>
        <FontAwesomeIcon 
          icon={faEdit} 
          className="ms-auto text-secondary" 
          onClick={() => navigate(`/dashboard/editCustomer/${id}`)}
          style={{ cursor: 'pointer' }} 
        />
      </div>

      {/* Balance Summary */}
      <div className="d-flex bg-white border-bottom">
        <div className="flex-grow-1 p-3 border-end">
          <div className="text-secondary small">Receivables</div>
          <div className="fw-bold">₹{customer.receivables.toFixed(2)}</div>
        </div>
        <div className="flex-grow-1 p-3">
          <div className="text-secondary small">Unused Credits</div>
          <div className="fw-bold">₹{customer.unusedCredits.toFixed(2)}</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-bottom bg-white">
        <div className="d-flex text-center">
          <div 
            className={`flex-grow-1 py-3 ${activeTab === 'details' ? 'border-bottom border-primary text-primary' : ''}`}
            onClick={() => handleTabChange('details')}
            style={{ cursor: 'pointer' }}
          >
            DETAILS
          </div>
          <div 
            className={`flex-grow-1 py-3 ${activeTab === 'transactions' ? 'border-bottom border-primary text-primary' : ''}`}
            onClick={() => handleTabChange('transactions')}
            style={{ cursor: 'pointer' }}
          >
            TRANSACTIONS
          </div>
          <div 
            className={`flex-grow-1 py-3 ${activeTab === 'comments' ? 'border-bottom border-primary text-primary' : ''}`}
            onClick={() => handleTabChange('comments')}
            style={{ cursor: 'pointer' }}
          >
            COMMENTS & HISTORY
          </div>
        </div>
      </div>

      {/* Details Tab Content */}
      {activeTab === 'details' && (
        <div className="p-0">
          {/* Contact Information */}
          <div className="bg-white mb-2">
            <div className="d-flex align-items-center border-bottom p-3">
              <div className="me-3">
                <div className="bg-primary rounded-circle text-white d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                  <span>IN</span>
                </div>
              </div>
              <div>
                <div className="fw-bold">{customer.contactPerson}</div>
                <div className="text-secondary small">{customer.email}</div>
                <div className="text-secondary small">{customer.phone}</div>
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="d-flex text-center border-bottom">
              <div className="flex-grow-1 p-3 d-flex flex-column align-items-center">
                <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mb-1" style={{ width: '40px', height: '40px' }}>
                  <FontAwesomeIcon icon={faPhone} className="text-primary" />
                </div>
                <span className="small text-primary">Mobile</span>
              </div>
              <div className="flex-grow-1 p-3 d-flex flex-column align-items-center border-start border-end">
                <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mb-1" style={{ width: '40px', height: '40px' }}>
                  <FontAwesomeIcon icon={faPhone} className="text-secondary" />
                </div>
                <span className="small text-secondary">Work Phone</span>
              </div>
              <div className="flex-grow-1 p-3 d-flex flex-column align-items-center">
                <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mb-1" style={{ width: '40px', height: '40px' }}>
                  <FontAwesomeIcon icon={faEnvelope} className="text-primary" />
                </div>
                <span className="small text-primary">Email</span>
              </div>
            </div>
          </div>

          {/* Address Section - Using Bootstrap Accordion */}
          <div className="accordion mb-2" id="addressAccordion">
            <div className="accordion-item border-0">
              <h2 className="accordion-header" id="addressHeading">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#addressCollapse" aria-expanded="true" aria-controls="addressCollapse">
                  Address
                </button>
              </h2>
              <div id="addressCollapse" className="accordion-collapse collapse show" aria-labelledby="addressHeading" data-bs-parent="#addressAccordion">
                <div className="accordion-body">
                  <h6 className="mb-2">Billing Address</h6>
                  <p className="mb-1">No.77, comet street, VGN Windsor park, Phase 4,</p>
                  <p className="mb-1">chennai, Tamil Nadu,</p>
                  <p className="mb-3">India - 600077</p>
                  
                  <div className="d-flex mb-2">
                    <button className="btn btn-sm btn-outline-primary me-2">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="me-1" /> Locate on Map
                    </button>
                    <button className="btn btn-sm btn-outline-primary">
                      <FontAwesomeIcon icon={faDirections} className="me-1" /> Get Directions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* More Information Section - Using Bootstrap Accordion */}
          <div className="accordion mb-2" id="moreInfoAccordion">
            <div className="accordion-item border-0">
              <h2 className="accordion-header" id="moreInfoHeading">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#moreInfoCollapse" aria-expanded="false" aria-controls="moreInfoCollapse">
                  More Information
                </button>
              </h2>
              <div id="moreInfoCollapse" className="accordion-collapse collapse" aria-labelledby="moreInfoHeading" data-bs-parent="#moreInfoAccordion">
                <div className="accordion-body">
                  <div className="mb-3">
                    <p className="mb-1 text-secondary small">Payment Terms</p>
                    <p className="mb-0">Due On Receipt</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
            
        </div>
      )}

      {/* Transactions Tab Content */}
      {activeTab === 'transactions' && (
        <div className="p-3 text-center">
          <p>No transactions found.</p>
        </div>
      )}

      {/* Comments & History Tab Content */}
      {activeTab === 'comments' && (
        <div className="p-3 text-center">
          <p>No comments or history found.</p>
        </div>
      )}
    </div>
  )
}

export default CustomerDetails