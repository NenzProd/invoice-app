import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard, faMoneyBill, faEdit, faPlus, faSave, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const PaymentGateways = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    emailNotifications: true,
    customerNotifications: true,
    bankTransfer: true,
    bankDetails: 'Bank: ABC Bank\nAccount Number: 12345678\nIFSC: ABCX0012345',
    check: true,
    checkDetails: 'Make checks payable to: Your Company Name',
    cash: false,
    other: false,
    otherDetails: ''
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

  const gateways = [
    { id: 1, name: 'Stripe', status: 'Connected', type: 'Credit Card', fee: '2.9% + $0.30' },
    { id: 2, name: 'PayPal', status: 'Disconnected', type: 'Online Payment', fee: '3.5% + $0.30' },
    { id: 3, name: 'Square', status: 'Disconnected', type: 'Credit Card', fee: '2.6% + $0.10' },
    { id: 4, name: 'Razorpay', status: 'Disconnected', type: 'Online Payment', fee: '2.0% + ₹3' }
  ]

  return (
    <section className="m-3">
      <div className="d-flex align-items-center mb-4">
        <FontAwesomeIcon 
          icon={faArrowLeft} 
          onClick={handleBackClick} 
          className="me-3" 
          style={{ cursor: 'pointer' }}
        />
        <h3>Payment Gateways</h3>
      </div>
      <div className="d-flex align-items-center justify-content-center py-2">
        <form className="col-12 col-sm-10 col-md-8 col-lg-6" onSubmit={handleSubmit}>
          <div className="text-center">
            <h4 className="mb-5">Payment Settings</h4>
          </div>
          
          <div className="mb-4">
            <h5 className="mb-3">Connected Payment Methods</h5>
            <p className="text-muted mb-3">
              Connect payment gateways to accept online payments directly through your invoices.
            </p>
            
            <div className="list-group mb-3">
              {gateways.map(gateway => (
                <div key={gateway.id} className="list-group-item list-group-item-action d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-2">
                  <div className="d-flex align-items-center">
                    <div className="me-3">
                      <FontAwesomeIcon 
                        icon={gateway.type === 'Credit Card' ? faCreditCard : faMoneyBill} 
                        size="lg" 
                      />
                    </div>
                    <div>
                      <h6 className="mb-0">{gateway.name}</h6>
                      <span className="text-muted small">{gateway.type} | Fee: {gateway.fee}</span>
                    </div>
                  </div>
                  <div className="mt-2 mt-md-0">
                    {gateway.status === 'Connected' ? (
                      <>
                        <span className="badge bg-success me-2">Connected</span>
                        <button type="button" className="btn btn-outline-secondary btn-sm">
                          <FontAwesomeIcon icon={faEdit} className="me-1" />
                          Settings
                        </button>
                      </>
                    ) : (
                      <button type="button" className="btn btn-primary btn-sm">Connect</button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <button type="button" className="btn btn-outline-primary btn-sm">
              <FontAwesomeIcon icon={faPlus} className="me-2" />
              Add Payment Method
            </button>
          </div>
          
          <div className="mb-4">
            <h5 className="mb-3">Offline Payment Options</h5>
            
            <div className="form-check mb-3">
              <input 
                className="form-check-input" 
                type="checkbox" 
                id="bankTransfer" 
                name="bankTransfer"
                checked={formData.bankTransfer}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="bankTransfer">
                Bank Transfer
              </label>
              {formData.bankTransfer && (
                <div className="mt-2 ms-4">
                  <textarea 
                    className="form-control form-control-sm" 
                    placeholder="Bank account details"
                    rows="3"
                    name="bankDetails"
                    value={formData.bankDetails}
                    onChange={handleChange}
                  ></textarea>
                </div>
              )}
            </div>
            
            <div className="form-check mb-3">
              <input 
                className="form-check-input" 
                type="checkbox" 
                id="check" 
                name="check"
                checked={formData.check}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="check">
                Check / Cheque
              </label>
              {formData.check && (
                <div className="mt-2 ms-4">
                  <textarea 
                    className="form-control form-control-sm" 
                    placeholder="Check payment instructions"
                    rows="2"
                    name="checkDetails"
                    value={formData.checkDetails}
                    onChange={handleChange}
                  ></textarea>
                </div>
              )}
            </div>
            
            <div className="form-check mb-3">
              <input 
                className="form-check-input" 
                type="checkbox" 
                id="cash"
                name="cash"
                checked={formData.cash}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="cash">
                Cash
              </label>
            </div>
            
            <div className="form-check mb-3">
              <input 
                className="form-check-input" 
                type="checkbox" 
                id="other"
                name="other"
                checked={formData.other}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="other">
                Other
              </label>
              {formData.other && (
                <div className="mt-2 ms-4">
                  <textarea 
                    className="form-control form-control-sm" 
                    placeholder="Other payment instructions"
                    rows="2"
                    name="otherDetails"
                    value={formData.otherDetails}
                    onChange={handleChange}
                  ></textarea>
                </div>
              )}
            </div>
          </div>
          
          <div className="mb-4">
            <h5 className="mb-3">Payment Notifications</h5>
            
            <div className="form-check mb-3">
              <input 
                className="form-check-input" 
                type="checkbox" 
                id="emailNotifications" 
                name="emailNotifications"
                checked={formData.emailNotifications}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="emailNotifications">
                Receive email notification when payment is received
              </label>
            </div>
            
            <div className="form-check mb-3">
              <input 
                className="form-check-input" 
                type="checkbox" 
                id="customerNotifications" 
                name="customerNotifications"
                checked={formData.customerNotifications}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="customerNotifications">
                Send email receipt to customer when payment is received
              </label>
            </div>
          </div>
          
          <div className="mt-5 mb-2 row">
            <div className="col-6 col-md-3">
              <button type="submit" className="btn btn-primary w-100">
                <FontAwesomeIcon icon={faSave} className="me-2" />
                Save
              </button>
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

export default PaymentGateways 