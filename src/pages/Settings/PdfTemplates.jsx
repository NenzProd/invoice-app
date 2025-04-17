import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEdit, faDownload, faPlus, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const PdfTemplates = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('invoice')
  const [formData, setFormData] = useState({
    paperSize: 'a4',
    includeLogo: true,
    includeFooter: true
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

  const templates = [
    { id: 1, name: 'Standard', type: 'Invoice', isDefault: true },
    { id: 2, name: 'Professional', type: 'Invoice', isDefault: false },
    { id: 3, name: 'Minimalist', type: 'Invoice', isDefault: false },
    { id: 4, name: 'Standard', type: 'Quote', isDefault: true },
    { id: 5, name: 'Detailed', type: 'Receipt', isDefault: true }
  ]

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  const getFilteredTemplates = () => {
    let type = 'Invoice'
    if (activeTab === 'quote') type = 'Quote'
    if (activeTab === 'receipt') type = 'Receipt'
    return templates.filter(t => t.type === type)
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
        <h3>PDF Templates</h3>
      </div>
      <div className="d-flex align-items-center justify-content-center py-2">
        <form className="col-12 col-sm-10 col-md-9" onSubmit={handleSubmit}>
          <div className="text-center">
            <h4 className="mb-5">Document Templates</h4>
          </div>

          <ul className="nav nav-tabs mb-4">
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'invoice' ? 'active' : ''}`}
                type="button"
                onClick={() => handleTabChange('invoice')}
              >
                Invoice Templates
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'quote' ? 'active' : ''}`}
                type="button"
                onClick={() => handleTabChange('quote')}
              >
                Quote Templates
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'receipt' ? 'active' : ''}`}
                type="button"
                onClick={() => handleTabChange('receipt')}
              >
                Receipt Templates
              </button>
            </li>
          </ul>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mb-4">
            {getFilteredTemplates().map(template => (
              <div className="col" key={template.id}>
                <div className="card h-100">
                  <div className="card-img-top bg-light p-5 text-center">
                    <span className="text-muted">Template Preview</span>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title d-flex justify-content-between">
                      {template.name}
                      {template.isDefault && <span className="badge bg-primary">Default</span>}
                    </h5>
                    <p className="card-text">Type: {template.type}</p>
                    <div className="d-flex flex-wrap gap-2">
                      <button type="button" className="btn btn-sm btn-outline-primary">
                        <FontAwesomeIcon icon={faEye} className="me-1" />
                        Preview
                      </button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">
                        <FontAwesomeIcon icon={faEdit} className="me-1" />
                        Edit
                      </button>
                      <button type="button" className="btn btn-sm btn-outline-success">
                        <FontAwesomeIcon icon={faDownload} className="me-1" />
                        Export
                      </button>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="form-check">
                      <input 
                        className="form-check-input" 
                        type="radio" 
                        name={`default${template.type}Template`} 
                        id={`template${template.id}`} 
                        checked={template.isDefault}
                        readOnly
                      />
                      <label className="form-check-label" htmlFor={`template${template.id}`}>
                        Set as default
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="col">
              <div className="card h-100 border-dashed">
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <h5 className="card-title">Create New Template</h5>
                  <p className="card-text text-muted">Upload or create a new one</p>
                  <button type="button" className="btn btn-outline-primary mt-auto">
                    <FontAwesomeIcon icon={faPlus} className="me-2" />
                    Create Template
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h5 className="mb-3">Template Settings</h5>
            <div className="mb-3">
              <label htmlFor="paperSize" className="form-label">Paper Size</label>
              <select 
                className="form-select" 
                id="paperSize"
                name="paperSize"
                value={formData.paperSize}
                onChange={handleChange}
              >
                <option value="a4">A4</option>
                <option value="letter">Letter</option>
                <option value="legal">Legal</option>
              </select>
            </div>

            <div className="form-check mb-3">
              <input 
                className="form-check-input" 
                type="checkbox" 
                id="includeLogo"
                name="includeLogo"
                checked={formData.includeLogo}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="includeLogo">
                Include company logo in PDF documents
              </label>
            </div>

            <div className="form-check mb-3">
              <input 
                className="form-check-input" 
                type="checkbox" 
                id="includeFooter"
                name="includeFooter"
                checked={formData.includeFooter}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="includeFooter">
                Include footer with page numbers
              </label>
            </div>
          </div>

          <div className="mt-5 mb-2 row">
            <div className="col-6 col-md-3">
              <button type="submit" className="btn btn-primary w-100">Save</button>
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

export default PdfTemplates 