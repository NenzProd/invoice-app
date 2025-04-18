import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faArrowLeft, 
  faEdit, 
  
  faEnvelope, 
  faFileAlt, 
  faEllipsisV,
  faChevronDown 
} from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useParams } from 'react-router-dom'
import { faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'

const InvoiceDetails = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('details')

  // In a real app, we would fetch the invoice data using the id
  console.log(`Fetching invoice with ID: ${id}`)
  
  // Mock data for the invoice
  const invoice = {
    id: id || 'INV-000001',
    customer: 'tensketch',
    status: 'PAID',
    balanceDue: 0.00,
    date: '12/04/2025',
    terms: 'Due end of the month',
    dueDate: '30/04/2025',
    billingAddress: {
      street: 'No.77, comet street, VGN Windsor park, Phase 4,',
      city: 'chennai',
      state: 'Tamil Nadu',
      country: 'India',
      zip: '600077'
    },
    items: [
      {
        name: 'Website design & development',
        quantity: 1,
        rate: 2000.00,
        amount: 2000.00
      },
      {
        name: 'Hosting (Shared)',
        quantity: 1,
        rate: 1000.00,
        amount: 1000.00
      },
      {
        name: 'Development tools/licenses',
        quantity: 1,
        rate: 2000.00,
        amount: 2000.00
      }
    ],
    subTotal: 5000.00,
    total: 5000.00,
    paymentMade: 5000.00,
    balanceDueTotal: 0.00,
    template: 'Standard Template',
    notes: 'Thank you for choosing us for your website development needs. We appreciate your business and look forward to supporting your online efforts. For any support or queries, feel free to contact us.',
    termsConditions: 'No refunds will be provided once the project has been delivered and accepted.'
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
        <h6 className="mb-0">Invoice</h6>
        <div className="ms-auto d-flex">
          <FontAwesomeIcon 
            icon={faEdit} 
            className="ms-3 text-secondary" 
            style={{ cursor: 'pointer' }} 
          />
          <FontAwesomeIcon 
            icon={faWhatsappSquare} 
            className="ms-3 text-secondary" 
            style={{ cursor: 'pointer' }} 
          />
          <FontAwesomeIcon 
            icon={faEnvelope} 
            className="ms-3 text-secondary" 
            style={{ cursor: 'pointer' }} 
          />
          <FontAwesomeIcon 
            icon={faFileAlt} 
            className="ms-3 text-secondary" 
            style={{ cursor: 'pointer' }} 
          />
          <FontAwesomeIcon 
            icon={faEllipsisV} 
            className="ms-3 text-secondary" 
            style={{ cursor: 'pointer' }} 
          />
        </div>
      </div>

      {/* Invoice Summary */}
      <div className="bg-white p-3 border-bottom">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div>
            <div className="text-primary fw-bold">{invoice.id}</div>
            <div className="text-secondary">{invoice.customer}</div>
          </div>
          <div className="text-success fw-bold">{invoice.status}</div>
        </div>
        <div>
          <div className="text-secondary small">Balance Due</div>
          <div className="fw-bold">₹{invoice.balanceDue.toFixed(2)}</div>
        </div>
        <div className="position-relative">
          <div className="position-absolute" style={{ top: '-15px', right: '0' }}>
            <span className="badge rounded-pill bg-danger">1</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-bottom">
        <div className="d-flex text-center">
          <div 
            className={`flex-grow-1 py-3 ${activeTab === 'details' ? 'border-bottom border-primary text-primary' : ''}`}
            onClick={() => handleTabChange('details')}
            style={{ cursor: 'pointer' }}
          >
            DETAILS
          </div>
          <div 
            className={`flex-grow-1 py-3 ${activeTab === 'payments' ? 'border-bottom border-primary text-primary' : ''}`}
            onClick={() => handleTabChange('payments')}
            style={{ cursor: 'pointer' }}
          >
            PAYMENTS (1)
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

      {/* Invoice Details */}
      {activeTab === 'details' && (
        <div>
          {/* Invoice Dates Section */}
          <div className="bg-white border-bottom">
            <div className="d-flex justify-content-between p-3 border-bottom">
              <div className="text-secondary">Invoice Date</div>
              <div>{invoice.date}</div>
            </div>
            <div className="d-flex justify-content-between p-3 border-bottom">
              <div className="text-secondary">Terms</div>
              <div>{invoice.terms}</div>
            </div>
            <div className="d-flex justify-content-between p-3">
              <div className="text-secondary">Due Date</div>
              <div>{invoice.dueDate}</div>
            </div>
          </div>

          {/* Billing & Shipping Address */}
          <div className="bg-white border-bottom mt-2">
            <div className="d-flex justify-content-between p-3 align-items-center">
              <div>Billing & Shipping Address</div>
              <FontAwesomeIcon icon={faChevronDown} className="text-secondary" />
            </div>
          </div>

          {/* Line Items */}
          <div className="bg-white border-bottom mt-2">
            <div className="d-flex justify-content-between p-3 border-bottom">
              <div className="text-secondary">Items</div>
              <div className="text-secondary">Amount</div>
            </div>

            {invoice.items.map((item, index) => (
              <div key={index} className="p-3 border-bottom">
                <div className="fw-bold mb-1">{item.name}</div>
                <div className="small text-secondary mb-2">
                  {item.quantity} x ₹{item.rate.toFixed(2)}
                </div>
                <div className="text-end">₹{item.amount.toFixed(2)}</div>
              </div>
            ))}

            {/* Totals */}
            <div className="d-flex justify-content-between p-3 border-bottom">
              <div>Sub Total</div>
              <div>₹{invoice.subTotal.toFixed(2)}</div>
            </div>
            <div className="d-flex justify-content-between p-3 border-bottom">
              <div>Total</div>
              <div>₹{invoice.total.toFixed(2)}</div>
            </div>
            <div className="d-flex justify-content-between p-3 border-bottom">
              <div>Payment Made</div>
              <div className="text-danger">(-) ₹{invoice.paymentMade.toFixed(2)}</div>
            </div>
            <div className="d-flex justify-content-between p-3">
              <div>Balance Due</div>
              <div>₹{invoice.balanceDueTotal.toFixed(2)}</div>
            </div>
          </div>

          {/* Template */}
          <div className="bg-white border-bottom mt-2">
            <div className="d-flex justify-content-between p-3">
              <div>Template</div>
              <div className="d-flex align-items-center">
                <span className="me-2">"Standard Template"</span>
                <span className="text-primary" style={{ cursor: 'pointer' }}>Change</span>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="bg-white border-bottom mt-2 p-3">
            <div className="mb-2">Notes</div>
            <p className="small">{invoice.notes}</p>
          </div>

          {/* Terms & Conditions */}
          <div className="bg-white mt-2 mb-4 p-3">
            <div className="mb-2">Terms & Conditions</div>
            <p className="small">{invoice.termsConditions}</p>
          </div>
        </div>
      )}

      {/* Payments Tab Content */}
      {activeTab === 'payments' && (
        <div className="p-3 text-center">
          <p>Payment details would be displayed here.</p>
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

export default InvoiceDetails