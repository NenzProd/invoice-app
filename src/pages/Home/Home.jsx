import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFileInvoice, 
  faUser, 
  faReceipt, 
  faPlus, 
  faArrowUp, 
  faArrowDown, 
  faMoneyBill, 
  faCreditCard
} from '@fortawesome/free-solid-svg-icons';
import Tabs from './HomeInsideTabs';
import sparkleImg from '@/assets/img/sparkle.webp';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

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
      className="col-4" 
      onClick={handleClick}
      style={{ cursor: path ? 'pointer' : 'default' }}
    >
      <div className="bg-white p-2 rounded d-flex align-items-center shadow-sm h-100">
        <div className="bg-light rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '35px', height: '35px', minWidth: '35px' }}>
          <FontAwesomeIcon icon={icon} className="text-primary" size="sm" />
        </div>
        <div className="ms-2">
          <div className="text-muted small" style={{ fontSize: '0.7rem' }}>{title}</div>
          <div className="d-flex align-items-center flex-wrap">
            <span className="h6 mb-0 me-1">{value}</span>
            <span className={`small ${isUp ? 'text-success' : isIncrease ? 'text-danger' : 'text-success'}`} style={{ fontSize: '0.65rem' }}>
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

const Home = () => {
  const navigate = useNavigate();
  const handleCreateInvoice = () => {
    navigate('/dashboard/createInvoice');
  }

  return (
    <main className='home-bg-color'>
      <div className="dashBoardNavContent">
        <section className="d-flex justify-content-center py-4 mb-3 px-md-5">
          <div className="col-1">
            <img src={sparkleImg} alt="Sparkle" width="25" />
          </div>
          <div className="col-10">
            <h4>Welcome TenSketch</h4>
            <p className="m-0">Here&apos;s your organization overview</p>
          </div>
        </section>

        <section className="bg-white rounded mx-2 py-3 mb-3 py-md-4 px-md-5">
          <div className="row justify-content-center">
            <IconCard 
              icon={faFileInvoice} 
              label="New Invoices" 
              path="/dashboard/createInvoice" 
            />
            <IconCard 
              icon={faUser} 
              label="New Customers" 
              path="/dashboard/customers" 
            />
          </div>
        </section>

        <section className="mx-2 mb-3">
          <div className="row gx-2 justify-content-between">
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
          </div>
          
       
        </section>

        <section className="bg-white rounded mx-2 py-4 mb-3 px-md-5 py-md-5">
          <Tabs />
        </section>

       
      </div>
    </main>
  );
};

export default Home;
