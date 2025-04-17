import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faAddressBook, faChevronDown, faCirclePlus, faTimes, faPencil } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';

const CreateCustomer = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [showSocialInputs, setShowSocialInputs] = useState(false);
    const [billingAddress, setBillingAddress] = useState(null);
    const [shippingAddress, setShippingAddress] = useState(null);
    
    // Check if returning from address page with data
    useEffect(() => {
        if (location.state && location.state.addressData) {
            if (location.state.addressType === 'billing') {
                setBillingAddress(location.state.addressData);
            } else if (location.state.addressType === 'shipping') {
                setShippingAddress(location.state.addressData);
            } else if (location.state.addressType === 'both') {
                setBillingAddress(location.state.addressData.billing);
                setShippingAddress(location.state.addressData.shipping);
            }
        }
    }, [location.state]);
    
    const invoiceTerms = [
        "Due on receipt",
        "Net 15",
        "Net 30",
        "Net 45",
        "Net 60",
        "Due end of the month",
        "Due end of the next month",
        "Custom"
    ];

    const currencyOptions = [
        "USD - United States Dollar",
        "EUR - Euro",
        "GBP - British Pound",
        "INR - Indian Rupee",
        "JPY - Japanese Yen",
        "CNY - Chinese Yuan",
        "AUD - Australian Dollar",
        "CAD - Canadian Dollar"
    ];



    const handleBackClick = () => {
        navigate(-1); // Navigate back to the previous page
    };
    
    const handleAddressClick = (type) => {
        // Navigate to the address page
        navigate('/dashboard/createCustomer/address', { 
            state: { 
                type, 
                billingAddress,
                shippingAddress
            } 
        });
    };
    
    const handleEditAddress = (type) => {
        // Navigate to edit the existing address
        navigate('/dashboard/createCustomer/address', { 
            state: { 
                type, 
                billingAddress,
                shippingAddress,
                isEdit: true
            } 
        });
    };
    
    const toggleSocialInputs = () => {
        setShowSocialInputs(!showSocialInputs);
    };

    // Render an address summary card
    const renderAddressSummary = (address, type) => {
        if (!address) return null;
        
        return (
            <div className="border rounded p-3 mb-3 position-relative">
                <h6 className="mb-2">{type === 'billing' ? 'Billing Address' : 'Shipping Address'}</h6>
                <div>
                    {address.street1 && <p className="mb-1">{address.street1}</p>}
                    {address.street2 && <p className="mb-1">{address.street2}</p>}
                    <p className="mb-1">
                        {[address.city, address.state].filter(Boolean).join(', ')}
                        {address.zipCode && ` ${address.zipCode}`}
                    </p>
                    {address.country && <p className="mb-1">{address.country}</p>}
                </div>
                <div 
                    className="position-absolute top-0 end-0 p-2" 
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleEditAddress(type)}
                >
                    <FontAwesomeIcon icon={faPencil} className="text-primary" />
                </div>
            </div>
        );
    };

    return (
        <div className='newInvoice-body pb-2' style={{ marginTop: '60px' }}>
            <div 
                className='d-flex align-items-center justify-content-between py-3 px-4 bg-white border-bottom'
                style={{
                    position: 'fixed',
                    top: '56px',
                    left: 0,
                    right: 0,
                    zIndex: 999,
                    height: '60px'
                }}
            >
                <div className='d-flex align-items-center'>
                    <FontAwesomeIcon 
                        icon={faArrowLeft} 
                        onClick={handleBackClick} 
                        style={{ cursor: 'pointer' }} 
                        className="text-secondary"
                    />
                    <h6 className='mx-3 mb-0' style={{ fontSize: '16px', fontWeight: 500 }}>New Customer</h6>
                </div>
                <div className='d-flex align-items-center'>
                    <FontAwesomeIcon icon={faAddressBook} className='mx-3 text-secondary' />
                    <span style={{ fontSize: '14px' }}>Save</span>
                </div>
            </div>

            <div style={{ marginTop: '60px' }}>
                <div className='bg-white m-2 border rounded px-3 py-2'>
                    <h5 className='font-size'>Customer Information</h5>
                    <div className='d-flex flex-column my-2 mb-3 '>
                        <label className='label-clr-size required'>Customer Type</label>
                        <div className='d-flex align-item-center justify-content-start my-2'>
                            <label className='w-50'>
                                <div className='d-flex align-item-center justify-content-start'>
                                    <input type='radio' value="Business" />
                                    <span className='font-size mx-2'>Business</span>
                                </div>
                            </label>
                            <label className='w-50'>
                                <div className='d-flex align-item-center justify-content-start'>
                                    <input type='radio' value="Individual" />
                                    <span className='font-size mx-2'>Individual</span>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div className='w-25'>
                            <div className='d-flex flex-column my-2 mb-3 '>
                                <label className='label-clr-size required'>Salutation</label>
                                <input
                                    type="text"
                                    className="font-size input-border border-top-0 border-start-0 border-end-0"
                                    id="Salutation"
                                    name="Salutation"
                                />
                            </div>
                        </div>
                        <div className='w-75'>
                            <div className='d-flex flex-column my-2 mb-3 ms-3'>
                                <label className='label-clr-size required'>First Name</label>
                                <input
                                    type="text"
                                    className="font-size input-border border-top-0 border-start-0 border-end-0"
                                    id="FirstName"
                                    name="FirstName"
                                />
                            </div>
                        </div>

                    </div>

                    <div className='d-flex flex-column my-2 mb-3 '>
                        <label className='label-clr-size required'>Last Name</label>
                        <input
                            type="text"
                            className="font-size input-border border-top-0 border-start-0 border-end-0"
                            id="LastName"
                            name="LastName"
                        />
                    </div>

                    <div className='d-flex flex-column my-2 mb-3 '>
                        <label className='label-clr-size required'>Company  Name</label>
                        <input
                            type="text"
                            className="font-size input-border border-top-0 border-start-0 border-end-0"
                            id="CustomerName"
                            name="CustomerName"
                        />
                    </div>

                    <div className='d-flex flex-column my-2 mb-3 '>
                        <label className='label-clr-size required'>Customer Display Name <span className="text-danger">*</span></label>
                        <input
                            type="text"
                            className="font-size input-border border-top-0 border-start-0 border-end-0"
                            id="CustomerDisplayName"
                            name="CustomerDisplayName"
                        />
                    </div>

                    <div className='d-flex flex-column my-2 mb-3 '>
                        <label className='label-clr-size required'>Email</label>
                        <input
                            type="text"
                            className="font-size input-border border-top-0 border-start-0 border-end-0"
                            id="Email"
                            name="Email"
                        />
                    </div>

                    <div className='d-flex gap-3'>
                        <div className='w-50'>
                            <div className='d-flex flex-column my-2 mb-3 '>
                                <label className='label-clr-size required'>Phone</label>
                                <input
                                    type="phone"
                                    className="font-size input-border border-top-0 border-start-0 border-end-0"
                                    id="Phone"
                                    name="Phone"
                                />
                            </div>
                        </div>
                        <div className='w-50'>
                            <div className='d-flex flex-column my-2 mb-3 '>
                                <label className='label-clr-size required'>Mobile</label>
                                <input
                                    type="phone"
                                    className="font-size input-border border-top-0 border-start-0 border-end-0"
                                    id="Mobile"
                                    name="Mobile"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-white m-2 border rounded px-3 py-2'>
                    <h5 className='font-size'>Other Details</h5>

                    <div className="d-flex flex-column my-2 mb-3">
                        <label htmlFor="currencyOptions" className="label-clr-size required">Currency<span className="text-danger">*</span></label>
                        <div className="input-with-icon position-relative">
                            <input
                                list="currencyOptionsList"
                                id="currencyOptions"
                                name="currencyOptions"
                                className="font-size input-border border-top-0 border-start-0 border-end-0 w-100"
                            />
                            <FontAwesomeIcon icon={faChevronDown} className="icon-right font-size" />
                        </div>
                        <datalist id="currencyOptionsList">
                            {currencyOptions.map((term, index) => (
                                <option key={index} value={term} />
                            ))}
                        </datalist>
                    </div>

                    <div className="d-flex flex-column my-2 mb-3">
                        <label htmlFor="invoiceTerms" className="label-clr-size required">Payment Terms <span className="text-danger">*</span></label>
                        <div className="input-with-icon position-relative">
                            <input
                                list="invoiceTermsList"
                                id="invoiceTerms"
                                name="invoiceTerms"
                                className="font-size input-border border-top-0 border-start-0 border-end-0 w-100"
                            />
                            <FontAwesomeIcon icon={faChevronDown} className="icon-right font-size" />
                        </div>
                        <datalist id="invoiceTermsList">
                            {invoiceTerms.map((term, index) => (
                                <option key={index} value={term} />
                            ))}
                        </datalist>
                    </div>
      
                    <div 
                        className='clr-blue fs-13 d-flex align-items-center' 
                        style={{ cursor: 'pointer' }}
                        onClick={toggleSocialInputs}
                    >
                        {showSocialInputs ? (
                            <FontAwesomeIcon icon={faTimes} className='me-2' />
                        ) : (
                            <FontAwesomeIcon icon={faCirclePlus} className='me-2' />
                        )}
                        <p className='mb-0'>Add Websites & Social</p>
                    </div>
                    
                    {showSocialInputs && (
                        <div className='mt-3'>
                            <div className='d-flex flex-column my-2 mb-3'>
                                <label className='label-clr-size'>Website</label>
                                <input
                                    type="url"
                                    className="font-size input-border border-top-0 border-start-0 border-end-0"
                                    id="website"
                                    name="website"
                                    placeholder="https://"
                                />
                            </div>
                            
                            <div className='d-flex flex-column my-2 mb-3'>
                                <label className='label-clr-size'>Facebook</label>
                                <input
                                    type="url"
                                    className="font-size input-border border-top-0 border-start-0 border-end-0"
                                    id="facebook"
                                    name="facebook"
                                    placeholder="https://facebook.com/"
                                />
                            </div>
                            
                            <div className='d-flex flex-column my-2 mb-3'>
                                <label className='label-clr-size'>Twitter</label>
                                <input
                                    type="url"
                                    className="font-size input-border border-top-0 border-start-0 border-end-0"
                                    id="twitter"
                                    name="twitter"
                                    placeholder="https://twitter.com/"
                                />
                            </div>
                        </div>
                    )}

                </div>

                {/* Address Section */}
                <div className='bg-white m-2 border rounded px-3 py-3'>
                    <h5 className='font-size mb-3'>Address Information</h5>
                    
                    {/* Render the billing address if it exists */}
                    {billingAddress ? (
                        renderAddressSummary(billingAddress, 'billing')
                    ) : (
                        <div 
                            className='d-flex align-items-center clr-blue mb-3' 
                            style={{ cursor: 'pointer' }}
                            onClick={() => handleAddressClick('billing')}
                        >
                            <FontAwesomeIcon icon={faCirclePlus} />
                            <span className='font-size mx-2'>Add Billing Address</span>
                        </div>
                    )}
                    
                    {/* Render the shipping address if it exists */}
                    {shippingAddress ? (
                        renderAddressSummary(shippingAddress, 'shipping')
                    ) : (
                        <div 
                            className='d-flex align-items-center clr-blue' 
                            style={{ cursor: 'pointer' }}
                            onClick={() => handleAddressClick('shipping')}
                        >
                            <FontAwesomeIcon icon={faCirclePlus} />
                            <span className='font-size mx-2'>Add Shipping Address</span>
                        </div>
                    )}
                </div>

              

                <div className='bg-white mx-2 mt-2 border rounded px-3 py-2'>
                    <div className='d-flex flex-column my-2 mb-3'>
                        <label className='label-clr-size required'>Remarks (For Internal Use)</label>
                        <textarea
                            type="text"
                            className="font-size input-border border-top-0 border-start-0 border-end-0"
                            id="Terms & Condition"
                            name="Terms & Condition"
                            rows={3}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateCustomer
