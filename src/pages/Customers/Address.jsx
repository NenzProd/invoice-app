import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useLocation } from 'react-router-dom'

const Address = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const type = location.state?.type || 'billing'
  
  // Initialize form data
  const [billingAddress, setBillingAddress] = useState({
    attention: '',
    street1: '',
    street2: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    fax: '',
    phone: ''
  })
  
  const [shippingAddress, setShippingAddress] = useState({
    attention: '',
    street1: '',
    street2: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    fax: '',
    phone: ''
  })
  
  const [copyBillingAddress, setCopyBillingAddress] = useState(false)
  
  // Load existing address data if in edit mode
  useEffect(() => {
    if (location.state) {
      if (location.state.billingAddress) {
        setBillingAddress(location.state.billingAddress)
      }
      
      if (location.state.shippingAddress) {
        setShippingAddress(location.state.shippingAddress)
      }
    }
  }, [location.state])
  
  const handleBack = () => {
    navigate(-1)
  }
  
  const handleSave = () => {
    // Determine what data to return based on the address type
    let addressData = null
    let addressType = type
    
    if (type === 'billing') {
      addressData = billingAddress
    } else if (type === 'shipping') {
      addressData = shippingAddress
    } else if (type === 'both' || type === 'contact') {
      addressType = 'both'
      addressData = {
        billing: billingAddress,
        shipping: copyBillingAddress ? billingAddress : shippingAddress
      }
    }
    
    // Navigate back with the address data
    navigate('/dashboard/createCustomer', { 
      state: { 
        addressData,
        addressType
      } 
    })
  }
  
  const handleBillingChange = (e) => {
    const { name, value } = e.target
    setBillingAddress(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleShippingChange = (e) => {
    const { name, value } = e.target
    setShippingAddress(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleCopyBillingAddress = (e) => {
    setCopyBillingAddress(e.target.checked)
    if (e.target.checked) {
      setShippingAddress(billingAddress)
    }
  }

  return (
    <div className='min-vh-100 bg-light' style={{ marginTop: '60px' }}>
      {/* Header */}
      <div 
                className='d-flex align-items-center justify-content-between py-3 px-4 bg-white border-bottom'
                style={{
                    position: 'fixed',
                    top: '56px',
                    left: 0,
                    right: 0,
                    zIndex: 999,
                    height: '60px'
                }}
            >
                <div className='d-flex align-items-center'>
                    <FontAwesomeIcon 
                        icon={faArrowLeft} 
                        onClick={handleBack} 
                        style={{ cursor: 'pointer' }} 
                        className="text-secondary"
                    />
                    <h6 className='mx-3 mb-0' style={{ fontSize: '16px', fontWeight: 500 }}>New Customer</h6>
                </div>
                <div className='d-flex align-items-center'>
                    <FontAwesomeIcon icon={faAddressBook} className='mx-3 text-secondary' />
                    <span onClick={handleSave} style={{ fontSize: '14px' }}>Save</span>
                </div>
            </div>

      <div className='p-3'>
        <div className="accordion" id="addressAccordion">
          {/* Billing Address Accordion */}
          <div className="accordion-item mb-3">
            <h2 className="accordion-header">
              <button 
                className="accordion-button" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#billingCollapse" 
                aria-expanded="true"
              >
                <strong>Billing Address</strong>
              </button>
            </h2>
            <div 
              id="billingCollapse" 
              className="accordion-collapse collapse show" 
              data-bs-parent="#addressAccordion"
            >
              <div className="accordion-body bg-white">
                {/* Billing Address Fields */}
                <div className='mb-3'>
                  <label className='form-label text-primary'>Attention</label>
                  <input
                    type='text'
                    className='form-control border-0 border-bottom rounded-0'
                    placeholder='Attention'
                    name='attention'
                    value={billingAddress.attention}
                    onChange={handleBillingChange}
                  />
                </div>
                
                <div className='mb-3'>
                  <label className='form-label text-primary'>Street 1</label>
                  <input
                    type='text'
                    className='form-control border-0 border-bottom rounded-0'
                    placeholder='Street 1'
                    name='street1'
                    value={billingAddress.street1}
                    onChange={handleBillingChange}
                  />
                </div>
                
                <div className='mb-3'>
                  <label className='form-label text-primary'>Street 2</label>
                  <input
                    type='text'
                    className='form-control border-0 border-bottom rounded-0'
                    placeholder='Street 2'
                    name='street2'
                    value={billingAddress.street2}
                    onChange={handleBillingChange}
                  />
                </div>
                
                <div className='mb-3'>
                  <label className='form-label text-primary'>City</label>
                  <input
                    type='text'
                    className='form-control border-0 border-bottom rounded-0'
                    placeholder='City'
                    name='city'
                    value={billingAddress.city}
                    onChange={handleBillingChange}
                  />
                </div>
                
                <div className='mb-3'>
                  <label className='form-label text-primary'>State</label>
                  <input
                    type='text'
                    className='form-control border-0 border-bottom rounded-0'
                    placeholder='State'
                    name='state'
                    value={billingAddress.state}
                    onChange={handleBillingChange}
                  />
                </div>
                
                <div className='mb-3'>
                  <label className='form-label text-primary'>ZIP Code</label>
                  <input
                    type='text'
                    className='form-control border-0 border-bottom rounded-0'
                    placeholder='ZIP Code'
                    name='zipCode'
                    value={billingAddress.zipCode}
                    onChange={handleBillingChange}
                  />
                </div>
                
                <div className='mb-3'>
                  <label className='form-label text-primary'>Country/Region</label>
                  <input
                    type='text'
                    className='form-control border-0 border-bottom rounded-0'
                    placeholder='Country/Region'
                    name='country'
                    value={billingAddress.country}
                    onChange={handleBillingChange}
                  />
                </div>
                
                <div className='mb-3'>
                  <label className='form-label text-primary'>Phone</label>
                  <input
                    type='text'
                    className='form-control border-0 border-bottom rounded-0'
                    placeholder='Phone'
                    name='phone'
                    value={billingAddress.phone}
                    onChange={handleBillingChange}
                  />
                </div>
                
                <div className='mb-3'>
                  <label className='form-label text-primary'>Fax</label>
                  <input
                    type='text'
                    className='form-control border-0 border-bottom rounded-0'
                    placeholder='Fax'
                    name='fax'
                    value={billingAddress.fax}
                    onChange={handleBillingChange}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Shipping Address Accordion */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button 
                className="accordion-button" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#shippingCollapse" 
                aria-expanded="true"
              >
                <div className="d-flex justify-content-between align-items-center w-100">
                  <strong>Shipping Address</strong>
                  <div className="form-check form-switch ms-3" onClick={(e) => e.stopPropagation()}>
                    <label className="form-check-label text-primary me-2" style={{ fontSize: '0.9rem' }}>
                      Copy Billing Address
                    </label>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      style={{ 
                        width: '3em', 
                        height: '1.5em',
                        cursor: 'pointer'
                      }}
                      checked={copyBillingAddress}
                      onChange={handleCopyBillingAddress}
                    />
                  </div>
                </div>
              </button>
            </h2>
            <div 
              id="shippingCollapse" 
              className="accordion-collapse collapse show" 
              data-bs-parent="#addressAccordion"
            >
              <div className="accordion-body bg-white">
                {/* Shipping Address Fields */}
                <div className='mb-3'>
                  <label className='form-label text-primary'>Attention</label>
                  <input
                    type='text'
                    className='form-control border-0 border-bottom rounded-0'
                    placeholder='Attention'
                    name='attention'
                    value={copyBillingAddress ? billingAddress.attention : shippingAddress.attention}
                    onChange={handleShippingChange}
                    disabled={copyBillingAddress}
                  />
                </div>
                
                <div className='mb-3'>
                  <label className='form-label text-primary'>Street 1</label>
                  <input
                    type='text'
                    className='form-control border-0 border-bottom rounded-0'
                    placeholder='Street 1'
                    name='street1'
                    value={copyBillingAddress ? billingAddress.street1 : shippingAddress.street1}
                    onChange={handleShippingChange}
                    disabled={copyBillingAddress}
                  />
                </div>
                
                <div className='mb-3'>
                  <label className='form-label text-primary'>Street 2</label>
                  <input
                    type='text'
                    className='form-control border-0 border-bottom rounded-0'
                    placeholder='Street 2'
                    name='street2'
                    value={copyBillingAddress ? billingAddress.street2 : shippingAddress.street2}
                    onChange={handleShippingChange}
                    disabled={copyBillingAddress}
                  />
                </div>
                
                <div className='mb-3'>
                  <label className='form-label text-primary'>City</label>
                  <input
                    type='text'
                    className='form-control border-0 border-bottom rounded-0'
                    placeholder='City'
                    name='city'
                    value={copyBillingAddress ? billingAddress.city : shippingAddress.city}
                    onChange={handleShippingChange}
                    disabled={copyBillingAddress}
                  />
                </div>
                
                <div className='mb-3'>
                  <label className='form-label text-primary'>State</label>
                  <input
                    type='text'
                    className='form-control border-0 border-bottom rounded-0'
                    placeholder='State'
                    name='state'
                    value={copyBillingAddress ? billingAddress.state : shippingAddress.state}
                    onChange={handleShippingChange}
                    disabled={copyBillingAddress}
                  />
                </div>
                
                <div className='mb-3'>
                  <label className='form-label text-primary'>ZIP Code</label>
                  <input
                    type='text'
                    className='form-control border-0 border-bottom rounded-0'
                    placeholder='ZIP Code'
                    name='zipCode'
                    value={copyBillingAddress ? billingAddress.zipCode : shippingAddress.zipCode}
                    onChange={handleShippingChange}
                    disabled={copyBillingAddress}
                  />
                </div>
                
                <div className='mb-3'>
                  <label className='form-label text-primary'>Country/Region</label>
                  <input
                    type='text'
                    className='form-control border-0 border-bottom rounded-0'
                    placeholder='Country/Region'
                    name='country'
                    value={copyBillingAddress ? billingAddress.country : shippingAddress.country}
                    onChange={handleShippingChange}
                    disabled={copyBillingAddress}
                  />
                </div>
                
                <div className='mb-3'>
                  <label className='form-label text-primary'>Phone</label>
                  <input
                    type='text'
                    className='form-control border-0 border-bottom rounded-0'
                    placeholder='Phone'
                    name='phone'
                    value={copyBillingAddress ? billingAddress.phone : shippingAddress.phone}
                    onChange={handleShippingChange}
                    disabled={copyBillingAddress}
                  />
                </div>
                
                <div className='mb-3'>
                  <label className='form-label text-primary'>Fax</label>
                  <input
                    type='text'
                    className='form-control border-0 border-bottom rounded-0'
                    placeholder='Fax'
                    name='fax'
                    value={copyBillingAddress ? billingAddress.fax : shippingAddress.fax}
                    onChange={handleShippingChange}
                    disabled={copyBillingAddress}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Address 