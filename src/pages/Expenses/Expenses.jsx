import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faReceipt } from '@fortawesome/free-solid-svg-icons';  
import { useNavigate } from 'react-router-dom'; 

const Expenses = () => {
  const navigate = useNavigate(); 

  const [activeTab, setActiveTab] = useState('all');

  // Sample expense data
  const expenses = [
    {
      id: 'EXP-000001',
      title: 'Contract Assets',
      date: '13 Apr 2025',
      amount: 222.00,
      status: 'unbilled',
      billable: false
    },
    {
      id: 'EXP-000002',
      title: 'Office Supplies',
      date: '15 May 2025',
      amount: 1200.00,
      status: 'invoiced',
      billable: true
    },
    {
      id: 'EXP-000003',
      title: 'Travel Expenses',
      date: '20 Jun 2025',
      amount: 3500.00,
      status: 'reimbursed',
      billable: true
    }
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleRecordExpense = () => {
    navigate('/dashboard/recordExpense');
  };

  const filteredExpenses = () => {
    switch (activeTab) {
      case 'reimbursed':
        return expenses.filter(expense => expense.status === 'reimbursed');
      case 'invoiced':
        return expenses.filter(expense => expense.status === 'invoiced');
      case 'unbilled':
        return expenses.filter(expense => expense.status === 'unbilled');
      case 'all':
        return expenses;
      default:
        return [];
    }
  };

  const ExpenseItem = ({ expense }) => (
    <div className="expense-item border-bottom p-3" onClick={() => navigate(`/dashboard/expense/${expense.id}`)}>
      <div className="d-flex justify-content-between">
        <div>
          <div className="fw-bold">{expense.title}</div>
          <div className="text-muted small">{expense.date}</div>
          <div className="text-muted small text-uppercase">{!expense.billable ? 'NON-BILLABLE' : ''}</div>
        </div>
        <div className="text-end">
          <div className="fw-bold">₹{expense.amount.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="dashBoardNavContent">
      <section>
        <div>
          <ul className="dashBoardNavBox list-unstyled d-flex align-items-center justify-content-center pt-3 mb-0">
            <li className={`col-3 text-center dash-child-tabs ${activeTab === 'all' ? 'active' : ''}`}>
              <button className="px-2 pb-2 navTabsBtn" onClick={() => handleTabClick('all')}>All</button>
            </li>
            <li className={`col-3 text-center dash-child-tabs ${activeTab === 'reimbursed' ? 'active' : ''}`}>
              <button className="px-2 pb-2 navTabsBtn" onClick={() => handleTabClick('reimbursed')}>Reimbursed</button>
            </li>
            <li className={`col-3 text-center dash-child-tabs ${activeTab === 'invoiced' ? 'active' : ''}`}>
              <button className="px-2 pb-2 navTabsBtn" onClick={() => handleTabClick('invoiced')}>Invoiced</button>
            </li>
            <li className={`col-3 text-center dash-child-tabs ${activeTab === 'unbilled' ? 'active' : ''}`}>
              <button className="px-2 pb-2 navTabsBtn" onClick={() => handleTabClick('unbilled')}>Unbilled</button>
            </li>
          </ul>
          
          <div className="bg-white">
            {filteredExpenses().length > 0 ? (
              <div className="expense-list">
                {filteredExpenses().map(expense => (
                  <ExpenseItem key={expense.id} expense={expense} />
                ))}
              </div>
            ) : (
              <div className="d-flex justify-content-center align-items-center py-5">
                <div className="text-center my-5 py-5">
                  <FontAwesomeIcon icon={faReceipt} className="navTab-icons" />
                  <p>There are no {activeTab === 'all' ? 'Expenses' : `${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Expenses`}.</p>
                  <button className="btn bg-dark text-white btn-create" onClick={handleRecordExpense}>
                    <FontAwesomeIcon icon={faPlus} className="icon" /><span> Record Expense</span>
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
          fontSize: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onClick={handleRecordExpense}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default Expenses;