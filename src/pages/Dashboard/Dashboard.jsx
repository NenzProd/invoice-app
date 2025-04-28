import React, { useState, useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [navText, setNavText] = useState('Home');
  const location = useLocation();
  const sidebarRef = useRef(null);
  const prevPathRef = useRef(location.pathname);

  const toggleSidebar = () => {
    setSidebarOpen(prevState => !prevState);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    // Update navText based on current route
    const path = location.pathname;
    
    // Handle settings routes
    if (path.includes('/dashboard/settings')) {
      // Extract the specific settings page from the path
      const settingsPath = path.split('/dashboard/settings/')[1];
      
      if (!settingsPath) {
        setNavText('Settings - Organization Profile');
      } else {
        switch (settingsPath) {
          case 'organizationProfile':
            setNavText('Settings - Organization Profile');
            break;
          case 'users':
            setNavText('Settings - Users');
            break;
          case 'preferences':
            setNavText('Settings - Preferences');
            break;
          case 'taxes':
            setNavText('Settings - Taxes');
            break;
          case 'pdfTemplates':
            setNavText('Settings - PDF Templates');
            break;
          case 'paymentGateways':
            setNavText('Settings - Payment Gateways');
            break;
          case 'privacy':
            setNavText('Settings - Privacy & Security');
            break;
          case 'feedback':
            setNavText('Settings - Feedback');
            break;
          case 'share':
            setNavText('Settings - Share');
            break;
          case 'about':
            setNavText('Settings - About');
            break;
          default:
            setNavText('Settings');
        }
      }
    } else {
      // Handle other main routes
      switch (path) {
        case '/dashboard':
          setNavText('Home');
          break;
        case '/dashboard/customers':
          setNavText('Customers');
          break;
        case '/dashboard/createCustomer':
          setNavText('Create Customer');
          break;
        case '/dashboard/items':
          setNavText('Items');
          break;
        case '/dashboard/createItem':
          setNavText('Create Item');
          break;
        case '/dashboard/quotes':
          setNavText('Quotes');
          break;
        case '/dashboard/invoice':
          setNavText('Invoice');
          break;
        case '/dashboard/createInvoice':
          setNavText('Create Invoice');
          break;
        case '/dashboard/payment-received':
          setNavText('Payment Received');
          break;
        case '/dashboard/expenses':
          setNavText('Expenses');
          break;
        case '/dashboard/salesreports':
          setNavText('Sales Reports');
          break;
        default:
          setNavText('Dashboard');
      }
    }
    
    // Close sidebar when route changes on mobile
    if (window.innerWidth < 992 && prevPathRef.current !== location.pathname) {
      closeSidebar();
      prevPathRef.current = location.pathname;
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSidebarOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        const isNavbarHamburgerClicked = event.target.closest('.toggle-icon');
        if (!isNavbarHamburgerClicked) {
          closeSidebar();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className="dashboard-layout">
      <div className={`sidebar-overlay ${isSidebarOpen ? 'open' : 'closed'}`} ref={sidebarRef}>
        <Sidebar onClose={closeSidebar} isOpen={isSidebarOpen} />
      </div>
      <div className="content-container">
        <Navbar onMenuClick={toggleSidebar} text={navText} />
        <main className="dashboard-body">
          <div className="px-0 px-lg-4">
            <div className="lg-row">
              <div className="col-12 col-lg-9">
                <Outlet />
              </div>
              <div className="col-lg-3 d-none d-lg-block">
                {/* This space is intentionally left empty */}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
