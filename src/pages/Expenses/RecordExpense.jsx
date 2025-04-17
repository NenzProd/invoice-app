import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const RecordExpense = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: '13/04/2025',
    expenseAccount: '',
    itemize: false,
    amount: '',
    invoiceNumber: '',
    notes: '',
    customer: '',
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleSave = () => {
    console.log('Saving expense:', formData);
    navigate(-1);
  };

  const handleAddCustomer = () => {
    // Logic to add customer
    console.log('Adding customer');
  };

  return (
    <div className="bg-light min-vh-100">
      {/* Header */}
      <div className="bg-white p-3 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <FontAwesomeIcon 
            icon={faArrowLeft} 
            onClick={handleBackClick} 
            className="me-3" 
            style={{ cursor: 'pointer' }}
          />
          <h6 className="mb-0">Record Expense</h6>
        </div>
        <button 
          className="btn btn-primary btn-sm"
          onClick={handleSave}
        >
          SAVE
        </button>
      </div>

      {/* Date Section */}
      <div className="bg-white mb-2 p-3">
        <div className="mb-3">
          <label htmlFor="date" className="text-muted small mb-2">Date</label>
          <input
            type="text"
            className="form-control border-0 p-0"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
      </div>
      
      {/* Expense Account Section */}
      <div className="bg-white mb-2 p-3">
        <div className="mb-1">
          <label htmlFor="expenseAccount" className="text-danger small mb-2">Expense Account</label>
          <input
            type="text"
            className="form-control border-0 p-0"
            id="expenseAccount"
            name="expenseAccount"
            placeholder="Select Category"
            value={formData.expenseAccount}
            onChange={handleChange}
          />
        </div>
        
        <div className="d-flex justify-content-between align-items-center mt-3">
          <span className="text-muted">Itemize</span>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="itemize"
              name="itemize"
              checked={formData.itemize}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* Amount Section */}
      <div className="bg-white mb-2 p-3">
        <div className="mb-3">
          <label htmlFor="amount" className="text-danger small mb-2">Amount</label>
          <div className="input-group">
            <span className="input-group-text bg-white border-0">INR</span>
            <input
              type="number"
              className="form-control border-0"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* Invoice Number Section */}
      <div className="bg-white mb-2 p-3">
        <div className="mb-3">
          <label htmlFor="invoiceNumber" className="text-muted small mb-2">Invoice#</label>
          <input
            type="text"
            className="form-control border-0 p-0"
            id="invoiceNumber"
            name="invoiceNumber"
            value={formData.invoiceNumber}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Notes Section */}
      <div className="bg-white mb-2 p-3">
        <div className="mb-3">
          <label htmlFor="notes" className="text-muted small mb-2">Notes</label>
          <textarea
            className="form-control border-0 p-0"
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows="2"
          ></textarea>
        </div>
      </div>

      {/* Customer Section */}
      <div className="bg-white mb-2 p-3">
        <div className="d-flex justify-content-between align-items-center">
          <div className="flex-grow-1">
            <label htmlFor="customer" className="text-muted small mb-2">Customer</label>
            <input
              type="text"
              className="form-control border-0 p-0"
              id="customer"
              name="customer"
              placeholder="Start typing to select a Customer"
              value={formData.customer}
              onChange={handleChange}
            />
          </div>
          <button 
            className="btn btn-light rounded-circle" 
            style={{ width: '30px', height: '30px', padding: '0' }}
            onClick={handleAddCustomer}
          >
            <span>+</span>
          </button>
        </div>
      </div>

     
    </div>
  );
};

export default RecordExpense; 