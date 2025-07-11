import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBell, 
  faBars, 
  faUser, 
  faSignOutAlt, 
  faBuilding,
  faPlus,
  faFileInvoice,
  faUserPlus,
  faBox
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ onMenuClick, text }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Implement sign out logic here
    console.log('Signing out...');
    navigate('/login');
  };

  const handleOrganizationClick = () => {
    navigate('/dashboard/settings/organization-profile');
  };

  const handleCreateClick = (type) => {
    switch (type) {
      case 'invoice':
        navigate('/dashboard/createInvoice');
        break;
      case 'customer':
        navigate('/dashboard/createCustomer');
        break;
      case 'item':
        navigate('/dashboard/createItem');
        break;
      default:
        break;
    }
  };

  return (
    <header className='sticky-top'>
      <nav className="d-flex justify-content-between p-3 align-items-center bg-dark text-white">
        <div className="d-flex gap-3 align-items-center">
          <FontAwesomeIcon 
            icon={faBars} 
            onClick={onMenuClick} 
            style={{ cursor: 'pointer' }} 
            className="toggle-icon d-lg-none"
          />
          <h5 className="m-0">{text}</h5>
        </div>
        <div className="d-flex align-items-center gap-3">
          <div className="d-none d-md-block">
            <span className="fw-medium">Tensketch</span>
          </div>
          <div className="dropdown">
            <button
              className="btn btn-success d-flex align-items-center gap-2"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FontAwesomeIcon icon={faPlus} />
            
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <button 
                  className="dropdown-item d-flex align-items-center" 
                  onClick={() => handleCreateClick('invoice')}
                >
                  <FontAwesomeIcon icon={faFileInvoice} className="me-2" />
                  Create Invoice
                </button>
              </li>
              <li>
                <button 
                  className="dropdown-item d-flex align-items-center" 
                  onClick={() => handleCreateClick('customer')}
                >
                  <FontAwesomeIcon icon={faUserPlus} className="me-2" />
                  Create Customer
                </button>
              </li>
              <li>
                <button 
                  className="dropdown-item d-flex align-items-center" 
                  onClick={() => handleCreateClick('item')}
                >
                  <FontAwesomeIcon icon={faBox} className="me-2" />
                  Create Item
                </button>
              </li>
            </ul>
          </div>

          <div className="dropdown">
            <button
              className="btn btn-link text-white p-0 border-0"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FontAwesomeIcon 
                icon={faUser} 
                style={{ 
                  cursor: 'pointer',
                }} 
              />
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <div className="dropdown-header border-bottom">
                  <div className="d-flex align-items-center px-3 py-2">
                    <span style={{ fontSize: '20px', marginRight: '8px' }}>👋</span>
                    <div className="fw-bold">Tensketch</div>
                  </div>
                </div>
              </li>
              <li>
                <button 
                  className="dropdown-item d-flex align-items-center" 
                  onClick={handleOrganizationClick}
                >
                  <FontAwesomeIcon icon={faBuilding} className="me-2" />
                  My Organization
                </button>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li>
                <button 
                  className="dropdown-item text-danger d-flex align-items-center" 
                  onClick={handleSignOut}
                >
                  <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
          <FontAwesomeIcon icon={faBell} style={{ cursor: 'pointer' }} />
        </div>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  onMenuClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Navbar;
