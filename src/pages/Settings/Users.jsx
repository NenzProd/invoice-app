import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Users = () => {
  const navigate = useNavigate()
  const [activeUser] = useState({
    name: 'Balaji D',
    email: 'balaji01975@gmail.com',
    role: 'Admin',
    status: 'ACTIVE'
  })

  const handleBackClick = () => {
    navigate(-1)
  }

  const handleAddUser = () => {
    navigate('invite')
  }

  return (
    <div className="p-3">
      {/* Header with back button */}
      <div className="mb-3">
        <FontAwesomeIcon 
          icon={faArrowLeft} 
          onClick={handleBackClick} 
          className="me-3" 
          style={{ cursor: 'pointer' }}
        />
      </div>

      {/* Active User Profile Card */}
      <div className="card mb-4">
        <div className="card-body p-3">
          <div className="d-flex">
            <div className="me-3">
              <div className="rounded-circle bg-light d-flex align-items-center justify-content-center" 
                   style={{ width: '50px', height: '50px' }}>
                <span className="text-secondary">
                  {activeUser.name.charAt(0)}
                </span>
              </div>
            </div>
            <div>
              <h5 className="mb-0">{activeUser.name}</h5>
              <p className="text-muted mb-0">{activeUser.email}</p>
              <small>{activeUser.role}</small>
            </div>
            <div className="ms-auto align-self-start">
              <span className="badge bg-success rounded-pill">
                {activeUser.status}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Add User FAB (Floating Action Button) */}
      <div 
        className="position-fixed"
        style={{ 
          bottom: '20px', 
          right: '20px', 
          zIndex: 1000 
        }}
      >
        <button 
          className="btn btn-dark rounded-circle"
          style={{ 
            width: '50px', 
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onClick={handleAddUser}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  )
}

export default Users 