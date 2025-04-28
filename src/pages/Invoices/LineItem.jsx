import { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faSave } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useLocation } from 'react-router-dom'

const LineItem = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [formData, setFormData] = useState({
    item: '',
    description: '',
    quantity: '1.00',
    rate: ''
  })
  const [showSuggestions, setShowSuggestions] = useState(false)
  const suggestionRef = useRef(null)
  const [saveType, setSaveType] = useState('save') // 'save' or 'saveAndNew'
  
  // Get existing items from location state if available
  const [existingItems, setExistingItems] = useState([])
  
  useEffect(() => {
    if (location.state && location.state.lineItems) {
      setExistingItems(location.state.lineItems)
    }
  }, [location.state])

  // Sample items data - in a real app, this would come from an API
  const itemsDatabase = [
    { 
      id: 1, 
      name: 'Web Development', 
      description: 'Custom web development services', 
      rate: 75, 
      unit: 'hour' 
    },
    { 
      id: 2, 
      name: 'Logo Design', 
      description: 'Professional logo design', 
      rate: 200, 
      unit: 'item' 
    },
    { 
      id: 3, 
      name: 'test', 
      description: 'test', 
      rate: 200, 
      unit: 'kg' 
    },
    { 
      id: 4, 
      name: 'Sugar', 
      description: 'Refined white sugar', 
      rate: 40, 
      unit: 'kg' 
    },
    { 
      id: 5, 
      name: 'Wheat Flour', 
      description: 'Premium quality wheat flour', 
      rate: 35, 
      unit: 'kg' 
    }
  ]

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (suggestionRef.current && !suggestionRef.current.contains(event.target)) {
        setShowSuggestions(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleBack = () => {
    navigate(-1)
  }

  const handleSave = (type = 'save') => {
    if (!formData.item || !formData.rate) {
      alert('Please fill in all required fields')
      return
    }
    
    // Create a new item object with unique id
    const newItem = {
      id: Date.now(), // Simple way to generate unique id
      name: formData.item,
      description: formData.description,
      quantity: parseFloat(formData.quantity),
      rate: parseFloat(formData.rate)
    }
    
    // Combine with existing items
    const updatedItems = [...existingItems, newItem]
    
    if (type === 'save') {
    // Navigate back to CreateInvoice with updated items
    navigate('/dashboard/createInvoice', { 
      state: { 
        lineItems: updatedItems,
        fromLineItem: true
      } 
    })
    } else {
      // Update existing items and reset form for a new entry
      setExistingItems(updatedItems)
    setFormData({
      item: '',
      description: '',
      quantity: '1.00',
        rate: ''
    })
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    if (name === 'item') {
      setShowSuggestions(value.length > 0)
    }
  }

  const handleSuggestionClick = (suggestion) => {
    setFormData({
      item: suggestion.name,
      description: suggestion.description,
      quantity: formData.quantity,
      rate: suggestion.rate.toString()
    })
    setShowSuggestions(false)
  }

  const filteredSuggestions = itemsDatabase.filter(item => 
    item.name.toLowerCase().includes(formData.item.toLowerCase())
  )

  return (
    <div className='bg-light min-vh-100'>
      <div className='d-flex align-items-center justify-content-between p-3 bg-white border-bottom'>
        <div className='d-flex align-items-center'>
        <FontAwesomeIcon 
          icon={faArrowLeft} 
            className='me-3 text-secondary' 
          onClick={handleBack}
          style={{ cursor: 'pointer' }} 
        />
        <h5 className='mb-0'>Add Line Item</h5>
        </div>
        <div className='d-flex align-items-center gap-3'>
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FontAwesomeIcon icon={faSave} className="me-2" />
              Save
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <button 
                  className="dropdown-item"
                  onClick={() => handleSave('save')}
                >
                  Save
                </button>
              </li>
              <li>
                <button 
                  className="dropdown-item"
                  onClick={() => handleSave('saveAndNew')}
                >
                  Save and New
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='p-3'>
        <div className='bg-white rounded p-3'>
          <div className='mb-3 position-relative'>
            <label className='form-label text-primary'>Item</label>
            <input
              type='text'
              className='form-control'
              placeholder='Type item name'
              name='item'
              value={formData.item}
              onChange={handleInputChange}
              onFocus={() => formData.item.length > 0 && setShowSuggestions(true)}
            />
            
            {showSuggestions && (
              <div 
                ref={suggestionRef}
                className='position-absolute bg-white border rounded shadow-sm w-100 mt-1 z-index-dropdown'
                style={{ maxHeight: '200px', overflowY: 'auto', zIndex: 1000 }}
              >
                {filteredSuggestions.map(suggestion => (
                  <div 
                    key={suggestion.id}
                    className='p-2 border-bottom cursor-pointer hover-bg-light'
                    onClick={() => handleSuggestionClick(suggestion)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className='fw-medium'>{suggestion.name}</div>
                    <small className='text-muted'>{suggestion.description}</small>
                  </div>
                ))}
                {filteredSuggestions.length === 0 && (
                  <div className='p-2 text-muted'>No matching items found</div>
                )}
              </div>
            )}
          </div>

          <div className='mb-3'>
            <label className='form-label text-primary'>Description</label>
            <input
              type='text'
              className='form-control'
              placeholder='Enter description'
              name='description'
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>

          <div className='mb-3'>
            <label className='form-label text-primary'>Quantity <span className='text-danger'>*</span></label>
              <input
                type='number'
                className='form-control'
                placeholder='Enter quantity'
                name='quantity'
                value={formData.quantity}
                onChange={handleInputChange}
                required
              />
          </div>

          <div className='mb-3'>
            <label className='form-label text-primary'>Rate <span className='text-danger'>*</span></label>
            <input
              type='number'
              className='form-control'
              placeholder='Enter rate'
              name='rate'
              value={formData.rate}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LineItem