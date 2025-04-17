import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const InviteUser = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Staff (Assigned Customers Only)'
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleBackClick = () => {
    navigate(-1)
  }

  const handleSend = () => {
    console.log('Inviting user:', formData)
    // Here you would send the invitation
    navigate(-1)
  }

  return (
    <div className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <FontAwesomeIcon 
            icon={faArrowLeft} 
            onClick={handleBackClick} 
            className="me-3" 
            style={{ cursor: 'pointer' }}
          />
          <span>Invite User</span>
        </div>
        <button 
          className="btn btn-primary btn-sm"
          onClick={handleSend}
        >
          SEND
        </button>
      </div>

      <div className="mb-4">
        <label htmlFor="name" className="form-label">
          Name <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="form-label">
          Email Address <span className="text-danger">*</span>
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="role" className="form-label">
          Role
        </label>
        <div className="position-relative">
          <select
            className="form-select"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option>Staff (Assigned Customers Only)</option>
            <option>Admin</option>
            <option>Manager</option>
          </select>
        </div>
        <small className="text-muted">
          Access to all modules, transactions and data of assigned customers except banking, reports and settings.
        </small>
      </div>
    </div>
  )
}

export default InviteUser 