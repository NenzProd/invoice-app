import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFileInvoice, 
  faUser, 
  faArrowUp, 
  faArrowDown, 
  faMoneyBill, 
  faCreditCard,
  faShoppingBag,
  faUsers
} from '@fortawesome/free-solid-svg-icons';
import Tabs from './HomeInsideTabs';
import sparkleImg from '@/assets/img/sparkle.webp';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { useState } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const IconCard = ({ icon, label, path }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (path) {
      navigate(path);
    }
  };
  
  return (
    <div 
      className="col-4 text-center" 
      onClick={handleClick}
      style={{ cursor: path ? 'pointer' : 'default' }}
    >
      <div className="d-flex justify-content-center mb-1">
        <div className="bg-circle d-flex align-items-center justify-content-center">
          <FontAwesomeIcon icon={icon} />
        </div>
      </div>
      <p className="text-center small m-0">{label}</p>
    </div>
  );
};

IconCard.propTypes = {
  icon: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  path: PropTypes.string
};

const MetricCard = ({ title, value, change, isUp, isIncrease, icon, path }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (path) {
      navigate(path);
    }
  };
  
  return (
    <div 
      className="col-md-3 col-6 mb-3" 
      onClick={handleClick}
      style={{ cursor: path ? 'pointer' : 'default' }}
    >
      <div className="bg-white p-3 rounded d-flex align-items-center shadow-sm h-100">
        <div className="bg-light rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', minWidth: '40px' }}>
          <FontAwesomeIcon icon={icon} className="text-primary" size="sm" />
        </div>
        <div className="ms-3">
          <div className="text-muted small" style={{ fontSize: '0.8rem' }}>{title}</div>
          <div className="d-flex align-items-center flex-wrap">
            <span className="h5 mb-0 me-1">{value}</span>
            <span className={`small ${isUp ? 'text-success' : isIncrease ? 'text-danger' : 'text-success'}`} style={{ fontSize: '0.7rem' }}>
              <FontAwesomeIcon icon={isUp ? faArrowUp : faArrowDown} className="me-1" size="xs" />
              {change}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

MetricCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.node.isRequired,
  change: PropTypes.string.isRequired,
  isUp: PropTypes.bool,
  isIncrease: PropTypes.bool,
  icon: PropTypes.object.isRequired,
  path: PropTypes.string
};

const RevenueGraph = () => {
  const [timeframe, setTimeframe] = useState('weekly');

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `₹${context.parsed.y}`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return '₹' + value;
          }
        }
      }
    }
  };

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [3500, 2900, 4200, 3800, 5600, 4800],
        backgroundColor: '#4F46E5',
        borderRadius: 6,
        barThickness: 40,
      }
    ]
  };

  return (
    <div className="bg-white rounded p-4 mb-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="m-0">Revenue Overview</h5>
        <div className="btn-group">
          <button 
            className={`btn btn-sm ${timeframe === 'weekly' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setTimeframe('weekly')}
          >
            Weekly
          </button>
          <button 
            className={`btn btn-sm ${timeframe === 'monthly' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setTimeframe('monthly')}
          >
            Monthly
          </button>
        </div>
      </div>
      <div style={{ height: '300px', position: 'relative' }}>
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <main className='home-bg-color'>
      <div className="dashBoardNavContent">
        <section className="container-fluid py-4 mb-3">
          <div className="row align-items-center">
            <div className="col-auto">
              <img src={sparkleImg} alt="Sparkle" width="32" />
            </div>
            <div className="col">
              <h4 className="mb-1">Welcome TenSketch</h4>
              <p className="text-muted m-0">Here&apos;s your organization overview</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded mx-2 py-3 mb-3 py-md-4 px-md-5">
          <div className="row justify-content-center">
            <IconCard 
              icon={faFileInvoice} 
              label="New Invoice" 
              path="/dashboard/createInvoice" 
            />
            <IconCard 
              icon={faUser} 
              label="New Customer" 
              path="/dashboard/createCustomer" 
            />
            <IconCard 
              icon={faShoppingBag} 
              label="New Item" 
              path="/dashboard/createItem" 
            />
          </div>
        </section>

        <section className="mx-2 mb-4">
          <div className="row gx-3">
            <MetricCard 
              title="Total Revenue" 
              value="₹24,970" 
              isUp={true}
              change="4% increase" 
              icon={faMoneyBill}
              path="/dashboard/salesreports" 
            />
            
            <MetricCard 
              title="Pending Payments" 
              value="₹3,350" 
              change="4% increase" 
              isUp={false}
              isIncrease={true}
              icon={faCreditCard}
              path="/dashboard/reports/payments-received" 
            />
            
            <MetricCard 
              title="Invoices Created" 
              value="43" 
              change="8% from last month" 
              isUp={true}
              icon={faFileInvoice}
              path="/dashboard/invoice" 
            />

            <MetricCard 
              title="Active Customers" 
              value="156" 
              change="12% from last month" 
              isUp={true}
              icon={faUsers}
              path="/dashboard/customers" 
            />
          </div>
        </section>

        <section className="mx-2 mb-4">
          <RevenueGraph />
        </section>

        <section className="bg-white rounded mx-2 py-4 mb-3 px-md-5">
          <Tabs />
        </section>
      </div>
    </main>
  );
};

export default Home;
