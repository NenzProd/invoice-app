import React, { useState } from 'react'

const Preferences = () => {
  const [formData, setFormData] = useState({
    dateFormat: 'MM/DD/YYYY',
    numberFormat: '1,234.56',
    timeZone: 'UTC',
    language: 'en',
    currency: 'USD',
    invoicePrefix: 'INV-',
    defaultTerms: 'due_on_receipt',
    autoSendInvoices: false,
    autoReminders: false
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // Replace with your form submission logic
  };

  return (
    <section className="m-3">
      <div className="d-flex align-items-center justify-content-center py-2">
        <form className="col-12 col-sm-8" onSubmit={handleSubmit}>
          <div className="text-center">
            <h3 className="mb-5">Preferences</h3>
          </div>
          
          {/* Date and Number Format */}
          <div className="mb-4">
            <h5 className="mb-3">Date and Number Format</h5>
            <div className="mb-3">
              <label htmlFor="dateFormat" className="form-label">Date Format</label>
              <select 
                className="form-select"
                id="dateFormat"
                name="dateFormat"
                value={formData.dateFormat}
                onChange={handleChange}
              >
                <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                <option value="YYYY-MM-DD">YYYY-MM-DD</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="numberFormat" className="form-label">Number Format</label>
              <select 
                className="form-select" 
                id="numberFormat"
                name="numberFormat"
                value={formData.numberFormat}
                onChange={handleChange}
              >
                <option value="1,234.56">1,234.56</option>
                <option value="1.234,56">1.234,56</option>
                <option value="1 234.56">1 234.56</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="timeZone" className="form-label">Time Zone</label>
              <select 
                className="form-select" 
                id="timeZone"
                name="timeZone"
                value={formData.timeZone}
                onChange={handleChange}
              >
                <option value="UTC">UTC</option>
                <option value="EST">Eastern Time (EST)</option>
                <option value="CST">Central Time (CST)</option>
                <option value="PST">Pacific Time (PST)</option>
                <option value="IST">India Standard Time (IST)</option>
              </select>
            </div>
          </div>

          {/* Language and Currency */}
          <div className="mb-4">
            <h5 className="mb-3">Language and Currency</h5>
            <div className="my-3 row">
              <div className="col-md-6 mb-3 mb-md-0">
                <label htmlFor="language" className="form-label">Language</label>
                <select 
                  className="form-select" 
                  id="language"
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                  <option value="hi">Hindi</option>
                </select>
              </div>

              <div className="col-md-6">
                <label htmlFor="currency" className="form-label">Currency</label>
                <select 
                  className="form-select" 
                  id="currency"
                  name="currency"
                  value={formData.currency}
                  onChange={handleChange}
                >
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="GBP">GBP (£)</option>
                  <option value="INR">INR (₹)</option>
                  <option value="JPY">JPY (¥)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Invoice Defaults */}
          <div className="mb-4">
            <h5 className="mb-3">Invoice Defaults</h5>
            <div className="mb-3">
              <label htmlFor="invoicePrefix" className="form-label">Invoice Number Prefix</label>
              <input 
                type="text" 
                className="form-control" 
                id="invoicePrefix" 
                name="invoicePrefix"
                placeholder="INV-" 
                value={formData.invoicePrefix}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="defaultTerms" className="form-label">Default Payment Terms</label>
              <select 
                className="form-select" 
                id="defaultTerms"
                name="defaultTerms"
                value={formData.defaultTerms}
                onChange={handleChange}
              >
                <option value="due_on_receipt">Due on Receipt</option>
                <option value="net_15">Net 15</option>
                <option value="net_30">Net 30</option>
                <option value="net_60">Net 60</option>
              </select>
            </div>

            <div className="form-check mb-3">
              <input 
                className="form-check-input" 
                type="checkbox" 
                id="autoSendInvoices"
                name="autoSendInvoices"
                checked={formData.autoSendInvoices}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="autoSendInvoices">
                Automatically send invoices when created
              </label>
            </div>

            <div className="form-check mb-3">
              <input 
                className="form-check-input" 
                type="checkbox" 
                id="autoReminders"
                name="autoReminders"
                checked={formData.autoReminders}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="autoReminders">
                Send automatic payment reminders
              </label>
            </div>
          </div>

          <div className="mt-5 mb-2 row">
            <div className="col-12 col-sm-4">
              <button type="submit" className="btn btn-primary w-100">Save Preferences</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Preferences 