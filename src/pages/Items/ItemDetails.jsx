import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faEdit } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useParams } from 'react-router-dom'

const ItemDetails = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('details')

  // Mock data - in a real app this would come from an API call using the id
  const item = {
    id: 'ITM-001',
    name: 'test',
    description: 'Full-stack web development',
    sellingPrice: 200.00,
    unit: 'kg',
    hsnCode: '123456',
    type: 'product',
    taxRate: {
      intraState: 18,
      interState: 18
    },
    transactions: [],
    history: []
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
        <h6 className="mb-0">{item.name}</h6>
        <FontAwesomeIcon 
          icon={faEdit} 
          className="ms-auto text-secondary" 
          onClick={() => navigate(`/dashboard/items/edit/${id}`)}
          style={{ cursor: 'pointer' }} 
        />
      </div>

      {/* Item Summary */}
      <div className="bg-white p-3 border-bottom">
        <div className="d-flex justify-content-between">
          <div className="text-secondary">Selling Price</div>
          <div className="fw-bold">₹{item.sellingPrice.toFixed(2)} per {item.unit}</div>
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
            className={`flex-grow-1 py-3 ${activeTab === 'history' ? 'border-bottom border-primary text-primary' : ''}`}
            onClick={() => handleTabChange('history')}
            style={{ cursor: 'pointer' }}
          >
            HISTORY
          </div>
        </div>
      </div>

      {/* Details Tab Content */}
      {activeTab === 'details' && (
        <div>
          {/* Sales Information */}
          <div className="bg-white mb-2">
            <div className="p-3 border-bottom">
              <h6 className="mb-0">Sales Information</h6>
            </div>
            <div className="p-3 border-bottom d-flex justify-content-between">
              <div className="text-secondary">Selling Price</div>
              <div>₹{item.sellingPrice.toFixed(2)}</div>
            </div>
            
            <div className="p-3">
              <div className="text-secondary mb-1">Description</div>
              <div>{item.description || 'No description available'}</div>
            </div>
          </div>

          {/* Item Information */}
          <div className="bg-white mb-2">
            <div className="p-3 border-bottom">
              <h6 className="mb-0">Item Information</h6>
            </div>
            <div className="p-3 border-bottom d-flex justify-content-between">
              <div className="text-secondary">Type</div>
              <div>{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</div>
            </div>
            <div className="p-3 border-bottom d-flex justify-content-between">
              <div className="text-secondary">Unit</div>
              <div>{item.unit}</div>
            </div>
            <div className="p-3 d-flex justify-content-between">
              <div className="text-secondary">HSN Code</div>
              <div>{item.hsnCode || 'N/A'}</div>
            </div>
          </div>

          {/* Tax Information */}
          <div className="bg-white mb-4">
            <div className="p-3 border-bottom">
              <h6 className="mb-0">Tax Information</h6>
            </div>
            <div className="p-3 border-bottom d-flex justify-content-between">
              <div className="text-secondary">Intra-state Tax Rate</div>
              <div>{item.taxRate.intraState}%</div>
            </div>
            <div className="p-3 d-flex justify-content-between">
              <div className="text-secondary">Inter-state Tax Rate</div>
              <div>{item.taxRate.interState}%</div>
            </div>
          </div>
        </div>
      )}

      {/* Transactions Tab Content */}
      {activeTab === 'transactions' && (
        <div className="p-3 text-center">
          <p>No transactions found for this item.</p>
        </div>
      )}

      {/* History Tab Content */}
      {activeTab === 'history' && (
        <div className="p-3 text-center">
          <p>No history found for this item.</p>
        </div>
      )}
    </div>
  )
}

export default ItemDetails