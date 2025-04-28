import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileInvoice, faUser, faBox } from '@fortawesome/free-solid-svg-icons';
import '@/components/layout/sidebarStyle.css';
import { useNavigate } from 'react-router-dom';

// Mock data for recent invoices
const recentInvoices = [
  { id: 'INV-001', customer: 'John Doe', amount: '₹5,000', date: '2024-03-15', status: 'Paid' },
  { id: 'INV-002', customer: 'Jane Smith', amount: '₹3,500', date: '2024-03-14', status: 'Pending' },
  { id: 'INV-003', customer: 'Acme Corp', amount: '₹12,000', date: '2024-03-13', status: 'Paid' },
  { id: 'INV-004', customer: 'XYZ Ltd', amount: '₹7,800', date: '2024-03-12', status: 'Pending' },
];

// Mock data for recent customers
const recentCustomers = [
  { id: 'CUST-001', name: 'John Doe', email: 'john@example.com', phone: '+91 9876543210', joined: '2024-03-15' },
  { id: 'CUST-002', name: 'Jane Smith', email: 'jane@example.com', phone: '+91 9876543211', joined: '2024-03-14' },
  { id: 'CUST-003', name: 'Acme Corp', email: 'contact@acme.com', phone: '+91 9876543212', joined: '2024-03-13' },
  { id: 'CUST-004', name: 'XYZ Ltd', email: 'info@xyz.com', phone: '+91 9876543213', joined: '2024-03-12' },
];

// Mock data for recent items
const recentItems = [
  { id: 'ITM-001', name: 'Web Development', type: 'Service', price: '₹5,000', tax: '18%', created: '2024-03-15' },
  { id: 'ITM-002', name: 'Logo Design', type: 'Service', price: '₹3,500', tax: '18%', created: '2024-03-14' },
  { id: 'ITM-003', name: 'Web Hosting (Basic)', type: 'Product', price: '₹1,200', tax: '18%', created: '2024-03-13' },
  { id: 'ITM-004', name: 'SSL Certificate', type: 'Product', price: '₹800', tax: '18%', created: '2024-03-12' },
];

const Tabs = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('invoices');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'invoices':
        return (
          <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h6 className="m-0">Recently Created Invoices</h6>
              <button 
                className="btn btn-outline-primary btn-sm"
                onClick={() => navigate('/dashboard/invoices')}
              >
                View All
              </button>
            </div>
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Invoice ID</th>
                    <th>Customer</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentInvoices.map((invoice) => (
                    <tr key={invoice.id} style={{ cursor: 'pointer' }} onClick={() => navigate(`/dashboard/invoices/${invoice.id}`)}>
                      <td className="fw-medium">{invoice.id}</td>
                      <td>{invoice.customer}</td>
                      <td>{invoice.amount}</td>
                      <td>{new Date(invoice.date).toLocaleDateString()}</td>
                      <td>
                        <span className={`badge ${invoice.status === 'Paid' ? 'bg-success' : 'bg-warning'}`}>
                          {invoice.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'customers':
        return (
          <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h6 className="m-0">Recently Added Customers</h6>
              <button 
                className="btn btn-outline-primary btn-sm"
                onClick={() => navigate('/dashboard/customers')}
              >
                View All
              </button>
            </div>
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Customer ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Joined</th>
                  </tr>
                </thead>
                <tbody>
                  {recentCustomers.map((customer) => (
                    <tr key={customer.id} style={{ cursor: 'pointer' }} onClick={() => navigate(`/dashboard/customers/${customer.id}`)}>
                      <td className="fw-medium">{customer.id}</td>
                      <td>{customer.name}</td>
                      <td>{customer.email}</td>
                      <td>{customer.phone}</td>
                      <td>{new Date(customer.joined).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'items':
        return (
          <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h6 className="m-0">Recently Added Items</h6>
              <button 
                className="btn btn-outline-primary btn-sm"
                onClick={() => navigate('/dashboard/items')}
              >
                View All
              </button>
            </div>
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Item ID</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Price</th>
                    <th>Tax Rate</th>
                    <th>Created</th>
                  </tr>
                </thead>
                <tbody>
                  {recentItems.map((item) => (
                    <tr key={item.id} style={{ cursor: 'pointer' }} onClick={() => navigate(`/dashboard/items/${item.id}`)}>
                      <td className="fw-medium">{item.id}</td>
                      <td>{item.name}</td>
                      <td>
                        <span className={`badge ${item.type === 'Service' ? 'bg-info' : 'bg-secondary'}`}>
                          {item.type}
                        </span>
                      </td>
                      <td>{item.price}</td>
                      <td>{item.tax}</td>
                      <td>{new Date(item.created).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="tabs-container">
      <ul className="nav-tabs d-flex justify-content-around list-unstyled border-0 mb-4">
        <li className={`nav-tab ${activeTab === 'invoices' ? 'active' : ''}`} onClick={() => handleTabClick('invoices')}>
          <button className="py-2 px-4 tabs-btn">
            <FontAwesomeIcon icon={faFileInvoice} className="me-2" />
            Invoices
          </button>
        </li>
        <li className={`nav-tab ${activeTab === 'customers' ? 'active' : ''}`} onClick={() => handleTabClick('customers')}>
          <button className="py-2 px-4 tabs-btn">
            <FontAwesomeIcon icon={faUser} className="me-2" />
            Customers
          </button>
        </li>
        <li className={`nav-tab ${activeTab === 'items' ? 'active' : ''}`} onClick={() => handleTabClick('items')}>
          <button className="py-2 px-4 tabs-btn">
            <FontAwesomeIcon icon={faBox} className="me-2" />
            Items
          </button>
        </li>
      </ul>
      <section className="tab-content bg-white mx-2 py-4 px-4">
        {renderContent()}
      </section>
    </div>
  );
};

export default Tabs;
