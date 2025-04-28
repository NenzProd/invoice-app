import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../../components/SearchBar';

const Items = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('services');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile screen on mount and when window resizes
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Sample items data
  const items = [
    {
      id: 'ITM-001',
      name: 'Web Development Service',
      description: 'Full-stack web development',
      price: 5000.00,
      type: 'service',
      unit: 'hour',
      taxRate: 18
    },
    {
      id: 'ITM-002',
      name: 'Logo Design',
      description: 'Professional logo design',
      price: 3500.00,
      type: 'service',
      unit: 'project',
      taxRate: 18
    },
    {
      id: 'ITM-003',
      name: 'Web Hosting (Basic)',
      description: '1 GB storage, 10 GB bandwidth',
      price: 1200.00,
      type: 'product',
      unit: 'month',
      taxRate: 18
    },
    {
      id: 'ITM-004',
      name: 'SSL Certificate',
      description: 'Standard SSL security',
      price: 800.00,
      type: 'product',
      unit: 'year',
      taxRate: 18
    }
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleCreateItem = () => {
    navigate('/dashboard/createItem');
  };

  const filteredItems = () => {
    let filtered = items;
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.id.toLowerCase().includes(query)
      );
    }
    switch (activeTab) {
      case 'services':
        return filtered.filter(item => item.type === 'service');
      case 'products':
        return filtered.filter(item => item.type === 'product');
      case 'all':
        return filtered;
      default:
        return [];
    }
  };

  const ItemCard = ({ item }) => (
    <div className="item-card border-bottom p-3" onClick={() => navigate(`/dashboard/items/${item.id}`)}>
      <div className="d-flex justify-content-between">
        <div>
          <div className="fw-bold">{item.name}</div>
          <div className="text-muted small">{item.description}</div>
          <div className="badge bg-info text-white mt-1">{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</div>
        </div>
        <div className="text-end">
          <div className="fw-bold">₹{item.price.toFixed(2)}</div>
          <div className="text-muted small">per {item.unit}</div>
          <div className="text-muted small">Tax: {item.taxRate}%</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="dashBoardNavContent">
      <section>
        <div>
          <div className="d-flex align-items-center justify-content-between">
            <div className="flex-grow-1">
              <SearchBar 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search items by name, description, or ID..."
              />
            </div>
            {!isMobile && (
              <div className="px-3">
                <button 
                  className="btn text-white d-flex align-items-center"
                  style={{ 
                    backgroundColor: '#2ecc71',
                    border: 'none',
                    padding: '8px 16px',
                    fontWeight: '500'
                  }} 
                  onClick={handleCreateItem}
                >
                  <FontAwesomeIcon icon={faPlus} className="me-2" />
                  <span>Add New</span>
                </button>
              </div>
            )}
          </div>
          <ul className="dashBoardNavBox list-unstyled d-flex align-items-center justify-content-center pt-3 mb-0">
            <li className={`col-4 text-center dash-child-tabs ${activeTab === 'services' ? 'active' : ''}`}>
              <button className="px-2 pb-2 navTabsBtn" onClick={() => handleTabClick('services')}>Services</button>
            </li>
            <li className={`col-4 text-center dash-child-tabs ${activeTab === 'products' ? 'active' : ''}`}>
              <button className="px-2 pb-2 navTabsBtn" onClick={() => handleTabClick('products')}>Products</button>
            </li>
            <li className={`col-4 text-center dash-child-tabs ${activeTab === 'all' ? 'active' : ''}`}>
              <button className="px-2 pb-2 navTabsBtn" onClick={() => handleTabClick('all')}>All</button>
            </li>
          </ul>
          
          <div className="bg-white">
            {filteredItems().length > 0 ? (
              <div className="item-list">
                {filteredItems().map(item => (
                  <ItemCard key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="d-flex justify-content-center align-items-center py-5">
                <div className="text-center my-5 py-5">
                  <FontAwesomeIcon icon={faBagShopping} className="navTab-icons" />
                  <p>There are no {activeTab === 'all' ? 'items' : activeTab}</p>
                  <button className="btn bg-dark text-white btn-create" onClick={handleCreateItem}>
                    <FontAwesomeIcon icon={faPlus} className="icon" /><span> New Item</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {isMobile && (
        <button 
          className="btn btn-primary rounded-circle position-fixed"
          style={{ 
            bottom: '20px', 
            right: '20px', 
            width: '50px', 
            height: '50px',
            fontSize: '20px'
          }}
          onClick={handleCreateItem}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      )}
    </div>
  );
};

export default Items;
