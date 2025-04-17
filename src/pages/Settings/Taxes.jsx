import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEdit, faTrash, faSave, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Taxes = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    taxInclusive: false,
    showTaxSummary: false
  })

  const handleChange = (event) => {
    const { name, checked } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
  }

  const handleBackClick = () => {
    navigate(-1) // Navigate back to the previous page
  }

  // Sample tax data
  const taxes = [
    { id: 1, name: 'GST', rate: '18%', isCompound: false, description: 'Goods and Services Tax' },
    { id: 2, name: 'VAT', rate: '15%', isCompound: false, description: 'Value Added Tax' },
    { id: 3, name: 'Service Tax', rate: '10%', isCompound: true, description: 'Tax on services' }
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
        <h3>Taxes</h3>
      </div>
      <div className="d-flex align-items-center justify-content-center py-2">
        <form className="col-12 col-sm-10 col-md-8 col-lg-6" onSubmit={handleSubmit}>
          <div className="text-center">
            <h4 className="mb-5">Tax Management</h4>
          </div>
          
          <div className="d-flex justify-content-end mb-4">
            <button type="button" className="btn btn-primary btn-sm">
              <FontAwesomeIcon icon={faPlus} className="me-2" />
              Add Tax
            </button>
          </div>

          <div className="mb-4">
            <h5 className="mb-3">Tax Settings</h5>
            <div className="form-check mb-3">
              <input 
                className="form-check-input" 
                type="checkbox" 
                id="taxInclusive"
                name="taxInclusive"
                checked={formData.taxInclusive}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="taxInclusive">
                Prices are tax inclusive by default
              </label>
            </div>
            <div className="form-check mb-3">
              <input 
                className="form-check-input" 
                type="checkbox" 
                id="showTaxSummary"
                name="showTaxSummary"
                checked={formData.showTaxSummary}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="showTaxSummary">
                Show tax summary on invoices
              </label>
            </div>
          </div>

          <div className="mb-4">
            <h5 className="mb-3">Tax Rates</h5>
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Rate</th>
                    <th>Compound</th>
                    <th>Description</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {taxes.map(tax => (
                    <tr key={tax.id}>
                      <td>{tax.name}</td>
                      <td>{tax.rate}</td>
                      <td>{tax.isCompound ? 'Yes' : 'No'}</td>
                      <td>{tax.description}</td>
                      <td>
                        <button type="button" className="btn btn-sm btn-outline-primary me-2">
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button type="button" className="btn btn-sm btn-outline-danger">
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-4">
            <h5 className="mb-3">Tax Groups</h5>
            <p className="text-muted mb-3">
              Create tax groups to apply multiple taxes at once.
            </p>
            <button type="button" className="btn btn-outline-primary btn-sm">
              <FontAwesomeIcon icon={faPlus} className="me-2" />
              Create Tax Group
            </button>
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

export default Taxes 