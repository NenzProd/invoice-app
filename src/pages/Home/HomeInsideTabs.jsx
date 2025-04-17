import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'; // Keep only the used icon
import '@/components/layout/sidebarStyle.css';
import { useNavigate } from 'react-router-dom';

const Tabs = () => {
  const navigate = useNavigate();
  const handleCreateInvoice = () => {
    navigate('/dashboard/createInvoice');
  }

  const [activeTab, setActiveTab] = useState('invoices');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'invoices':
        return (
          <div className='text-center my-5'>
            <h6>View Your Receivables Summary</h6>
            <p>Keep an eye on current and overdue amounts your customers owe you.</p>
            <button className="btn bg-dark text-white" onClick={handleCreateInvoice}>
              <FontAwesomeIcon icon={faPlus} />
              <span> Create Invoice</span>
            </button>
          </div>
        );
      case 'quotes':
        return (
          <div className='text-center my-5'>
            <h6>Create a Quote</h6>
            <p>Send quotes to your customer, which they can either accept or decline.</p>
            <button className="btn bg-dark text-white">
              <FontAwesomeIcon icon={faPlus} />
              <span> Create Quote</span>
            </button>
          </div>
        );
      case 'expenses':
        return (
          <div className='text-center my-5'>
            <h6>Record Expenses</h6>
            <p>Record mileage expenses, track expenses across categories, and invoice billable expenses.</p>
            <button className="btn bg-dark text-white">
              <FontAwesomeIcon icon={faPlus} />
              <span> Create Expense</span>
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="tabs-container">
      <ul className="nav-tabs d-flex justify-content-around list-unstyled border-0">
        <li className={`nav-tab ${activeTab === 'invoices' ? 'active' : ''}`} onClick={() => handleTabClick('invoices')}>
          <button className="py-1 px-2 tabs-btn">Invoices</button>
        </li>
        <li className={`nav-tab ${activeTab === 'quotes' ? 'active' : ''}`} onClick={() => handleTabClick('quotes')}>
          <button className="py-1 px-2 tabs-btn">Quotes</button>
        </li>
        <li className={`nav-tab ${activeTab === 'expenses' ? 'active' : ''}`} onClick={() => handleTabClick('expenses')}>
          <button className="py-1 px-2 tabs-btn">Expenses</button>
        </li>
      </ul>
      <section className="tab-content bg-white mx-2 py-3 my-4">
        {renderContent()}
      </section>
    </div>
  );
};

export default Tabs;
