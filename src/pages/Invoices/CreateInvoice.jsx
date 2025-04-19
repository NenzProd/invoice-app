import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft,  faChevronDown, faPlus, faGear, faCirclePlus, faBars,  faFileInvoice } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom'; 

const CreateInvoice = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [lineItems, setLineItems] = useState([]);
    const [subTotal, setSubTotal] = useState(0);
    
    // New state for discount, adjustment, and tax
    const [discountType, setDiscountType] = useState('percentage'); // 'percentage' or 'amount'
    const [discountValue, setDiscountValue] = useState('');
    const [discountAmount, setDiscountAmount] = useState(0); // Used in calculations
    const [adjustment, setAdjustment] = useState('');
    const [adjustmentAmount, setAdjustmentAmount] = useState(0); // Used in calculations
    const [taxType, setTaxType] = useState('TDS'); // 'TDS' or 'TCS'
    const [taxValue, setTaxValue] = useState('');
    const [taxAmount, setTaxAmount] = useState(0);
    const [total, setTotal] = useState(0);
    
    const [invoiceData, setInvoiceData] = useState({
        customerName: '',
        invoiceNumber: 'INV-00001',
        orderNumber: '',
        invoiceDate: new Date().toISOString().split('T')[0],
        terms: '',
        dueDate: '',
        salesPerson: '',
        subject: '',
        customerNotes: 'Thank you for your business.',
        termsAndConditions: '',
    });

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

    const taxOptions = [
        { value: 'none', label: 'Select a Tax' },
        { value: 'gst', label: 'GST (18%)' },
        { value: 'igst', label: 'IGST (18%)' },
        { value: 'cgst_sgst', label: 'CGST & SGST (9% + 9%)' }
    ];

    // When the component mounts or location state changes, update lineItems
    useEffect(() => {
        if (location.state && location.state.lineItems) {
            setLineItems(location.state.lineItems);
        }
    }, [location.state]);

    // Calculate subtotal, discount, tax, and total whenever values change
    useEffect(() => {
        // Calculate subtotal
        const calculatedSubtotal = lineItems.reduce((sum, item) => {
            return sum + (parseFloat(item.rate) * parseFloat(item.quantity));
        }, 0);
        setSubTotal(calculatedSubtotal);
        
        // Calculate discount
        let discountAmt = 0;
        if (discountValue) {
            if (discountType === 'percentage') {
                discountAmt = (calculatedSubtotal * parseFloat(discountValue)) / 100;
            } else {
                discountAmt = parseFloat(discountValue);
            }
        }
        setDiscountAmount(discountAmt);
        
        // Calculate adjustment
        const adjustmentAmt = adjustment ? parseFloat(adjustment) : 0;
        setAdjustmentAmount(adjustmentAmt);
        
        // Calculate tax
        let taxAmt = 0;
        if (taxValue && taxType) {
            // Simple tax calculation - could be more complex based on specific tax rules
            taxAmt = (calculatedSubtotal - discountAmt) * (parseFloat(taxValue) / 100);
        }
        setTaxAmount(taxAmt);
        
        // Calculate final total
        const finalTotal = calculatedSubtotal - discountAmt + adjustmentAmt + taxAmt;
        setTotal(finalTotal);
    }, [lineItems, discountType, discountValue, adjustment, taxType, taxValue]);

    const handleBackClick = () => {
        navigate(-1); // Navigate back to the previous page
    };

    const handleAddLineItem = () => {
        // Navigate to the LineItem component with current line items
        navigate('/dashboard/lineItem', { state: { lineItems } });
    };

    const handleDiscountTypeChange = (type) => {
        setDiscountType(type);
        // Reset discount value when changing type
        setDiscountValue('');
    };
    
    const handleTaxTypeChange = (type) => {
        setTaxType(type);
        // Reset tax value when changing type
        setTaxValue('');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInvoiceData({
            ...invoiceData,
            [name]: value
        });
    };

    return (
        <div className='newInvoice-body pb-2' style={{ marginTop: '60px' }} >
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
                    <FontAwesomeIcon icon={faFileInvoice} className='mx-3 text-secondary' />
                    <span style={{ fontSize: '14px' }}>Save</span>
                </div>
            </div>


            <div className='bg-white m-2 border rounded px-3 py-2'>
                <div className='d-flex flex-column my-2 mb-3 '>
                    <label className='label-clr-size required'>Customer Name <span className="text-danger">*</span></label>
                    <div className="input-with-icon position-relative">
                        <input
                            type="text"
                            className="font-size input-border border-top-0 border-start-0 border-end-0 w-100"
                            id="customerName"
                            name="customerName"
                            value={invoiceData.customerName}
                            onChange={handleChange}
                            required
                            placeholder='Start typing to select a customer'
                        />
                        <FontAwesomeIcon icon={faPlus} className="icon-right font-size" />
                    </div>
                </div>
                <div className='d-flex flex-column my-2 mb-3'>
                    <label className='label-clr-size required'>Invoice# <span className="text-danger">*</span></label>
                    <div className="input-with-icon position-relative">
                        <input
                            type="text"
                            className="font-size input-border border-top-0 border-start-0 border-end-0 w-100"
                            id="invoiceNumber"
                            name="invoiceNumber"
                            value={invoiceData.invoiceNumber}
                            onChange={handleChange}
                            required
                            placeholder='INV-00001'
                        />
                        <FontAwesomeIcon icon={faGear} className="icon-right font-size" />
                    </div>
                </div>
                <div className='d-flex flex-column my-2 mb-3'>
                    <label className='label-clr-size required'>Order Number</label>
                    <input
                        type="text"
                        className="font-size input-border border-top-0 border-start-0 border-end-0"
                        id="orderNumber"
                        name="orderNumber"
                        value={invoiceData.orderNumber}
                        onChange={handleChange}
                    />
                </div>
                <div className='d-flex flex-column my-2 mb-3'>
                    <label className='label-clr-size required'>Invoice Date <span className="text-danger">*</span></label>
                    <div className="input-group">
                        <input
                            type="date"
                            className="form-control font-size"
                            id="invoiceDate"
                            name="invoiceDate"
                            value={invoiceData.invoiceDate}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="d-flex flex-column my-2 mb-3">
                    <label htmlFor="invoiceTerms" className="label-clr-size required">Terms <span className="text-danger">*</span></label>
                    <div className="input-with-icon position-relative">
                        <input
                            list="invoiceTermsList"
                            id="terms"
                            name="terms"
                            value={invoiceData.terms}
                            onChange={handleChange}
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
                <div className='d-flex flex-column my-2 mb-3'>
                    <label className='label-clr-size required'>Due Date <span className="text-danger">*</span></label>
                    <div className="input-group">
                        <input
                            type="date"
                            className="form-control font-size"
                            id="dueDate"
                            name="dueDate"
                            value={invoiceData.dueDate}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
            </div>

            <div className='bg-white m-2 border rounded px-3 py-2'>
                <div className='d-flex flex-column my-2 mb-3'>
                    <label className='label-clr-size required'>Subject</label>
                    <input
                        type="text"
                        className="font-size input-border border-top-0 border-start-0 border-end-0"
                        id="subject"
                        name="subject"
                        value={invoiceData.subject}
                        onChange={handleChange}
                        required
                        placeholder='What is this Invoice for?'
                    />
                </div>
            </div>

            <div className='bg-white m-2 border rounded px-3 py-4'>
                <div className='d-flex justify-content-between align-items-center mb-3'>
                    <h6 className='mb-0'>Items</h6>
                    {lineItems.length > 0 && (
                        <span 
                            className='text-danger' 
                            style={{ cursor: 'pointer' }}
                            onClick={() => {
                                if (window.confirm('Remove all items?')) {
                                    setLineItems([]);
                                }
                            }}
                        >
                            Remove
                        </span>
                    )}
                </div>

                {lineItems.length > 0 ? (
                    <div className='mb-3'>
                        {lineItems.map((item) => (
                            <div key={item.id} className='border-bottom py-2'>
                                <div className='d-flex align-items-center'>
                                    <div className='me-2'>
                                        <FontAwesomeIcon icon={faBars} className='text-muted' />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <div className='fw-medium'>{item.name}</div>
                                        <div className='small text-muted'>
                                            {item.quantity} {item.unit} x {item.rate.toFixed(1)}
                                        </div>
                                    </div>
                                    <div className='text-end'>
                                        <div>{(item.quantity * item.rate).toFixed(2)}</div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className='pt-3'>
                            {/* Subtotal */}
                            <div className='d-flex justify-content-between py-2'>
                                <div>Sub Total</div>
                                <div>{subTotal.toFixed(2)}</div>
                            </div>
                            
                            {/* Discount */}
                            <div className='d-flex justify-content-between align-items-center py-2'>
                                <div>
                                    <span className='me-2'>Discount</span>
                                    <div className="form-check form-check-inline">
                                        <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            name="discountType" 
                                            id="discountPercentage" 
                                            checked={discountType === 'percentage'} 
                                            onChange={() => handleDiscountTypeChange('percentage')} 
                                        />
                                        <label className="form-check-label small" htmlFor="discountPercentage">%</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            name="discountType" 
                                            id="discountAmount" 
                                            checked={discountType === 'amount'} 
                                            onChange={() => handleDiscountTypeChange('amount')} 
                                        />
                                        <label className="form-check-label small" htmlFor="discountAmount">₹</label>
                                    </div>
                                </div>
                                <input 
                                    type="text" 
                                    className="form-control text-end" 
                                    style={{ width: '80px' }} 
                                    value={discountValue} 
                                    onChange={(e) => setDiscountValue(e.target.value)}
                                    placeholder="0"
                                />
                            </div>
                            
                            {/* Adjustment */}
                            <div className='d-flex justify-content-between align-items-center py-2'>
                                <div>Adjustment</div>
                                <input 
                                    type="text" 
                                    className="form-control text-end" 
                                    style={{ width: '80px' }} 
                                    value={adjustment} 
                                    onChange={(e) => setAdjustment(e.target.value)}
                                    placeholder="0"
                                />
                            </div>
                            
                            {/* Tax */}
                            <div className='d-flex justify-content-between align-items-center py-2'>
                                <div>
                                    <div className="form-check form-check-inline">
                                        <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            name="taxType" 
                                            id="taxTDS" 
                                            checked={taxType === 'TDS'} 
                                            onChange={() => handleTaxTypeChange('TDS')} 
                                        />
                                        <label className="form-check-label small" htmlFor="taxTDS">TDS</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            name="taxType" 
                                            id="taxTCS" 
                                            checked={taxType === 'TCS'} 
                                            onChange={() => handleTaxTypeChange('TCS')} 
                                        />
                                        <label className="form-check-label small" htmlFor="taxTCS">TCS</label>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <select 
                                        className="form-select form-select-sm" 
                                        style={{ width: '140px' }}
                                        value={taxValue}
                                        onChange={(e) => setTaxValue(e.target.value)}
                                    >
                                        {taxOptions.map(option => (
                                            <option key={option.value} value={option.value !== 'none' ? '18' : ''}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                    <div className='ms-2' style={{ minWidth: '80px', textAlign: 'right' }}>
                                        {taxAmount.toFixed(2)}
                                    </div>
                                </div>
                            </div>
                            
                            {/* Total */}
                            <div className='d-flex justify-content-between py-2 border-top mt-2'>
                                <div className='fw-bold'>Total (₹)</div>
                                <div className='fw-bold'>{total.toFixed(2)}</div>
                            </div>
                        </div>
                    </div>
                ) : null}
                
                <div 
                    className='add-line-item rounded text-center py-2' 
                    onClick={handleAddLineItem}
                    style={{ cursor: 'pointer', border: '1px dashed #3498db', backgroundColor: '#f8f9fa' }}
                >
                    <FontAwesomeIcon icon={faCirclePlus} className='text-primary' />
                    <span className='font-size mx-2 text-primary'>Add Line Item</span>
                </div>
            </div>

            <div className='bg-white m-2 border rounded px-3 py-2'>
                <div className='d-flex flex-column my-2 mb-3'>
                    <label className='label-clr-size required'>Customer Notes</label>
                    <input
                        type="text"
                        className="font-size input-border border-top-0 border-start-0 border-end-0"
                        id="customerNotes"
                        name="customerNotes"
                        value={invoiceData.customerNotes}
                        onChange={handleChange}
                    />
                </div>
                <div className='d-flex flex-column my-2 mb-3'>
                    <label className='label-clr-size required'>Terms & Conditions</label>
                    <input
                        type="text"
                        className="font-size input-border border-top-0 border-start-0 border-end-0"
                        id="termsAndConditions"
                        name="termsAndConditions"
                        value={invoiceData.termsAndConditions}
                        onChange={handleChange}
                    />
                </div>
            </div>

          
        </div>
    )
}

export default CreateInvoice
