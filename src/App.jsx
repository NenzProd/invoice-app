import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginForm from './pages/Auth/LoginForm';
import SignUpForm from './pages/Auth/SignUpForm';
import Index from './pages/Index';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import Customers from './pages/Customers/Customers';
import CustomerDetails from './pages/Customers/CustomerDetails';
import CreateCustomer from './pages/Customers/CreateCustomer';
import Address from './pages/Customers/Address';
import Items from './pages/Items/Items';
import CreateItem from './pages/Items/CreateItem';
import Invoices from './pages/Invoices/Invoices'
import InvoiceDetails from './pages/Invoices/InvoiceDetails';
import CreateInvoice from './pages/Invoices/CreateInvoice';
import SalesReports from './pages/SalesReports/SalesReports';
import Settings from './pages/Settings/Settings';

// Settings Pages
import OrganizationProfile from './pages/Settings/OrganizationProfile';
import Users from './pages/Settings/Users';
import Preferences from './pages/Settings/Preferences';
import Taxes from './pages/Settings/Taxes';
import PdfTemplates from './pages/Settings/PdfTemplates';
import PaymentGateways from './pages/Settings/PaymentGateways';
import Privacy from './pages/Settings/Privacy';
import Feedback from './pages/Settings/Feedback';
import Share from './pages/Settings/Share';
import About from './pages/Settings/About';
import LineItem from './pages/Invoices/LineItem';

// New Settings Pages (placeholders until implemented)
import SwitchOrganization from './pages/Settings/SwitchOrganization';
import UsageStats from './pages/Settings/UsageStats';
import OpeningScreen from './pages/Settings/OpeningScreen';
import ImageUpload from './pages/Settings/ImageUpload';
import RateApp from './pages/Settings/RateApp';
import InviteUser from './pages/Settings/InviteUser';
import Expenses from './pages/Expenses/Expenses';
import RecordExpense from './pages/Expenses/RecordExpense';
;

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/signup' element={<SignUpForm />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="customers" element={<Customers />} />
          <Route path="customers/:id" element={<CustomerDetails />} />
          <Route path="createCustomer" element={<CreateCustomer />} />
          <Route path="createCustomer/address" element={<Address />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="invoices/:id" element={<InvoiceDetails />} />
          <Route path="createInvoice" element={<CreateInvoice />} />
          <Route path="lineItem" element={<LineItem />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="recordExpense" element={<RecordExpense />} />
          <Route path="items" element={<Items />} />
          <Route path="createItem" element={<CreateItem />} />
          <Route path="salesReports" element={<SalesReports />} />
          <Route path="reports" element={<SalesReports />} />
         
          
          {/* Settings Routes */}
          <Route path="settings" element={<Settings />} />
          <Route path="settings/organization-profile" element={<OrganizationProfile />} />
          <Route path="settings/switch-organization" element={<SwitchOrganization />} />
          <Route path="settings/usage-stats" element={<UsageStats />} />
          <Route path="settings/users" element={<Users />} />
          <Route path="settings/users/invite" element={<InviteUser />} />
          <Route path="settings/preferences" element={<Preferences />} />
          <Route path="settings/taxes" element={<Taxes />} />
          <Route path="settings/pdf-templates" element={<PdfTemplates />} />
          <Route path="settings/payment-gateways" element={<PaymentGateways />} />
          <Route path="settings/opening-screen" element={<OpeningScreen />} />
          <Route path="settings/image-upload" element={<ImageUpload />} />
          <Route path="settings/privacy" element={<Privacy />} />
          <Route path="settings/feedback" element={<Feedback />} />
          <Route path="settings/share" element={<Share />} />
          <Route path="settings/rate" element={<RateApp />} />
          <Route path="settings/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
