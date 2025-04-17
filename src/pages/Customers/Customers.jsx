import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../../components/SearchBar';

const Customer = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('active');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample customer data
  const customers = [
    {
      id: 'CUS-28',
      name: 'AK Foundation India',
      email: 'geethaaI417@gmail.com',
      receivables: 6000.00,
      unusedCredits: 0.00,
      initials: 'AK',
      color: '#4aa3df',
      hasUnpaid: true
    },
    {
      id: 'CUS-18',
      name: 'ESPeople',
      email: 'link2md@gmail.com',
      receivables: 0.00,
      unusedCredits: 0.00,
      initials: 'ES',
      color: '#2ecc71',
      hasUnpaid: false
    },
    {
      id: 'CUS-22',
      name: 'Glacier Cars Care & Detailing',
      email: '',
      receivables: 0.00,
      unusedCredits: 0.00,
      initials: 'GL',
      color: '#f39c12',
      hasUnpaid: false
    },
    {
      id: 'CUS-25',
      name: 'GLACIER CARS CARE & DETAILING',
      email: 'glaciercarcare@gmail.com',
      receivables: 15000.00,
      unusedCredits: 0.00,
      initials: 'GL',
      color: '#e74c3c',
      hasUnpaid: true
    },
    {
      id: 'CUS-26',
      name: 'Hari Hara Prabhu R',
      email: 'hivefivemedia@gmail.com',
      receivables: 0.00,
      unusedCredits: 0.00,
      initials: 'HA',
      color: '#9b59b6',
      hasUnpaid: false
    },
    {
      id: 'CUS-30',
      name: 'Jungle Star, Valamuru',
      email: '',
      receivables: 0.00,
      unusedCredits: 0.00,
      initials: 'JU',
      color: '#3498db',
      hasUnpaid: false
    }
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const filteredCustomers = () => {
    let filtered = customers;
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(customer => 
        customer.name.toLowerCase().includes(query) ||
        customer.email.toLowerCase().includes(query) ||
        customer.id.toLowerCase().includes(query)
      );
    }
    switch (activeTab) {
      case 'active':
        return filtered.filter(customer => customer.receivables > 0);
      case 'unpaid':
        return filtered.filter(customer => customer.hasUnpaid);
      case 'all':
        return filtered;
      default:
        return [];
    }
  };

  const CustomerAvatar = ({ initials, color }) => (
    <div 
      className="customer-avatar rounded-circle d-flex align-items-center justify-content-center text-white fw-bold"
      style={{ 
        backgroundColor: color, 
        width: '40px', 
        height: '40px', 
        fontSize: '14px'
      }}
    >
      {initials}
    </div>
  );

  const CustomerCard = ({ customer }) => (
    <div className="customer-card d-flex p-3 border-bottom">
      <div className="me-3">
        <CustomerAvatar initials={customer.initials} color={customer.color} />
      </div>
      <div className="flex-grow-1">
        <div className="fw-bold">{customer.name}</div>
        {customer.email && <div className="text-muted small">{customer.email}</div>}
        <div className="text-muted small">Customer ID: {customer.id}</div>
        
        <div className="d-flex mt-1">
          <div className="me-4">
            <div className="small text-muted">Receivables</div>
            <div>₹{customer.receivables.toFixed(2)}</div>
          </div>
          <div>
            <div className="small text-muted">Unused Credits</div>
            <div>₹{customer.unusedCredits.toFixed(2)}</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="dashBoardNavContent">
      <section>
        <div>
          <SearchBar 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search customers by name, email, or ID..."
          />
          <ul className="list-unstyled d-flex align-items-center justify-content-center pt-3 mb-0">
            <li className={`col-4 text-center dash-child-tabs ${activeTab === 'active' ? 'active' : ''}`}>
              <button className="px-2 pb-2 navTabsBtn" onClick={() => handleTabClick('active')}>Active</button>
            </li>
            <li className={`col-4 text-center dash-child-tabs ${activeTab === 'unpaid' ? 'active' : ''}`}>
              <button className="px-2 pb-2 navTabsBtn" onClick={() => handleTabClick('unpaid')}>Unpaid</button>
            </li>
            <li className={`col-4 text-center dash-child-tabs ${activeTab === 'all' ? 'active' : ''}`}>
              <button className="px-2 pb-2 navTabsBtn" onClick={() => handleTabClick('all')}>All</button>
            </li>
          </ul>
          
          <div className="bg-white">
            {filteredCustomers().length > 0 ? (
              <div className="customer-list">
                {filteredCustomers().map(customer => (
                  <CustomerCard key={customer.id} customer={customer} />
                ))}
              </div>
            ) : (
              <div className="d-flex justify-content-center align-items-center py-5">
                <div className="text-center my-5 py-5">
                  <FontAwesomeIcon icon={faUser} className="navTab-icons" />
                  <p>There are no {activeTab === 'all' ? '' : activeTab} customers</p>
                  <button 
                    className="btn bg-dark text-white btn-create" 
                    onClick={() => navigate('/dashboard/createCustomer')}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                    <span> New Customer</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      <button 
        className="btn btn-primary rounded-circle position-fixed"
        style={{ 
          bottom: '20px', 
          right: '20px', 
          width: '50px', 
          height: '50px',
          fontSize: '20px'
        }}
        onClick={() => navigate('/dashboard/createCustomer')}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default Customer;
