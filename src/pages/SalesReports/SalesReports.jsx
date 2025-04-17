import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileExport, faFilePdf, faFileExcel, faFilter } from '@fortawesome/free-solid-svg-icons'

const SalesReports = () => {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [status, setStatus] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [showFilters, setShowFilters] = useState(false)
  const itemsPerPage = 10

  // Sample data
  const salesData = [
    {
      id: 'INV-000001',
      customer: 'harimidhu organic',
      date: '2025-04-12',
      amount: 5000.00,
      status: 'paid'
    },
    {
      id: 'INV-000002',
      customer: 'Glacier Cars',
      date: '2025-05-15',
      amount: 12000.00,
      status: 'unpaid'
    },
    {
      id: 'INV-000003',
      customer: 'AK Foundation',
      date: '2025-06-20',
      amount: 8500.00,
      status: 'draft'
    },
    {
      id: 'INV-000004',
      customer: 'Tech Solutions Inc',
      date: '2025-04-18',
      amount: 15000.00,
      status: 'paid'
    },
    {
      id: 'INV-000005',
      customer: 'Green Energy Co',
      date: '2025-05-01',
      amount: 7500.00,
      status: 'unpaid'
    },
    {
      id: 'INV-000006',
      customer: 'Digital Marketing Pro',
      date: '2025-05-10',
      amount: 4500.00,
      status: 'paid'
    },
    {
      id: 'INV-000007',
      customer: 'Cloud Services Ltd',
      date: '2025-05-22',
      amount: 22000.00,
      status: 'draft'
    },
    {
      id: 'INV-000008',
      customer: 'Web Design Masters',
      date: '2025-06-01',
      amount: 9500.00,
      status: 'paid'
    },
    {
      id: 'INV-000009',
      customer: 'Content Writers Hub',
      date: '2025-06-05',
      amount: 3500.00,
      status: 'unpaid'
    },
    {
      id: 'INV-000010',
      customer: 'Mobile App Dev Co',
      date: '2025-06-12',
      amount: 18000.00,
      status: 'paid'
    },
    {
      id: 'INV-000011',
      customer: 'Data Analytics Pro',
      date: '2025-06-15',
      amount: 13500.00,
      status: 'draft'
    },
    {
      id: 'INV-000012',
      customer: 'Security Systems Inc',
      date: '2025-06-18',
      amount: 25000.00,
      status: 'paid'
    },
    {
      id: 'INV-000013',
      customer: 'Network Solutions',
      date: '2025-06-22',
      amount: 16500.00,
      status: 'unpaid'
    },
    {
      id: 'INV-000014',
      customer: 'Cloud Storage Plus',
      date: '2025-06-25',
      amount: 8900.00,
      status: 'paid'
    },
    {
      id: 'INV-000015',
      customer: 'AI Research Lab',
      date: '2025-06-28',
      amount: 35000.00,
      status: 'draft'
    },
    {
      id: 'INV-000016',
      customer: 'Blockchain Solutions',
      date: '2025-07-01',
      amount: 28000.00,
      status: 'paid'
    },
    {
      id: 'INV-000017',
      customer: 'IoT Devices Co',
      date: '2025-07-05',
      amount: 19500.00,
      status: 'unpaid'
    },
    {
      id: 'INV-000018',
      customer: 'Smart Home Tech',
      date: '2025-07-08',
      amount: 12500.00,
      status: 'paid'
    },
    {
      id: 'INV-000019',
      customer: 'VR Development',
      date: '2025-07-12',
      amount: 45000.00,
      status: 'draft'
    },
    {
      id: 'INV-000020',
      customer: '3D Printing Services',
      date: '2025-07-15',
      amount: 23000.00,
      status: 'paid'
    }
  ]

  // Filter data based on date range and status
  const filteredData = salesData.filter(item => {
    const itemDate = new Date(item.date)
    const start = startDate ? new Date(startDate) : null
    const end = endDate ? new Date(endDate) : null
    
    const dateInRange = (!start || itemDate >= start) && (!end || itemDate <= end)
    const statusMatch = status === 'all' || item.status === status
    
    return dateInRange && statusMatch
  })

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const handleExport = (type) => {
    // Implement export functionality
    console.log(`Exporting as ${type}...`)
  }

  const handleFilterToggle = () => {
    setShowFilters(!showFilters)
  }

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'paid':
        return 'bg-success'
      case 'unpaid':
        return 'bg-warning text-dark'
      case 'draft':
        return 'bg-secondary'
      default:
        return 'bg-secondary'
    }
  }

  // Enhanced pagination
  const renderPaginationItems = () => {
    const items = []
    const maxVisiblePages = 5 // Show max 5 page numbers at a time
    let startPage = 1
    let endPage = totalPages

    if (totalPages > maxVisiblePages) {
      // Calculate start and end page numbers
      if (currentPage <= Math.floor(maxVisiblePages / 2)) {
        endPage = maxVisiblePages
      } else if (currentPage + Math.floor(maxVisiblePages / 2) >= totalPages) {
        startPage = totalPages - maxVisiblePages + 1
      } else {
        startPage = currentPage - Math.floor(maxVisiblePages / 2)
        endPage = currentPage + Math.floor(maxVisiblePages / 2)
      }
    }

    // Add first page and ellipsis if necessary
    if (startPage > 1) {
      items.push(
        <li key="1" className="page-item">
          <button className="page-link" onClick={() => handlePageChange(1)}>1</button>
        </li>
      )
      if (startPage > 2) {
        items.push(
          <li key="ellipsis1" className="page-item disabled">
            <span className="page-link">...</span>
          </li>
        )
      }
    }

    // Add page numbers
    for (let i = startPage; i <= endPage; i++) {
      items.push(
        <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
          <button className="page-link" onClick={() => handlePageChange(i)}>{i}</button>
        </li>
      )
    }

    // Add last page and ellipsis if necessary
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        items.push(
          <li key="ellipsis2" className="page-item disabled">
            <span className="page-link">...</span>
          </li>
        )
      }
      items.push(
        <li key={totalPages} className="page-item">
          <button className="page-link" onClick={() => handlePageChange(totalPages)}>
            {totalPages}
          </button>
        </li>
      )
    }

    return items
  }

  return (
    <div className="container-fluid px-3 py-3">
      {/* Header and Export Options */}
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
        <h5 className="mb-0">Sales Reports</h5>
        <div className="dropdown">
          <button 
            className="btn btn-outline-secondary dropdown-toggle" 
            type="button" 
            data-bs-toggle="dropdown"
          >
            <FontAwesomeIcon icon={faFileExport} className="me-2" />
            Export
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <button 
                className="dropdown-item" 
                onClick={() => handleExport('pdf')}
              >
                <FontAwesomeIcon icon={faFilePdf} className="me-2" />
                Export as PDF
              </button>
            </li>
            <li>
              <button 
                className="dropdown-item" 
                onClick={() => handleExport('excel')}
              >
                <FontAwesomeIcon icon={faFileExcel} className="me-2" />
                Export as Excel
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-3">
        <button 
          className="btn btn-outline-secondary mb-2 w-100 d-md-none"
          onClick={handleFilterToggle}
        >
          <FontAwesomeIcon icon={faFilter} className="me-2" />
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
        
        <div className={`row g-3 ${showFilters ? 'd-flex' : 'd-none d-md-flex'}`}>
          <div className="col-md-3">
            <label className="form-label">Start Date</label>
            <input
              type="date"
              className="form-control"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">End Date</label>
            <input
              type="date"
              className="form-control"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">Status</label>
            <select
              className="form-select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="all">All</option>
              <option value="paid">Paid</option>
              <option value="unpaid">Unpaid</option>
              <option value="draft">Draft</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Invoice ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Status</th>
              <th className="text-end">Amount</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.customer}</td>
                <td>{new Date(item.date).toLocaleDateString()}</td>
                <td>
                  <span className={`badge ${getStatusBadgeClass(item.status)}`}>
                    {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                  </span>
                </td>
                <td className="text-end">₹{item.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Enhanced Pagination */}
      {totalPages > 1 && (
        <nav className="d-flex justify-content-between align-items-center mt-3 flex-wrap">
          <div className="mb-2 mb-sm-0">
            <small className="text-muted">
              Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredData.length)} of {filteredData.length} entries
            </small>
          </div>
          <ul className="pagination pagination-sm mb-0">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Previous
              </button>
            </li>
            {renderPaginationItems()}
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      )}

      {/* No Data Message */}
      {filteredData.length === 0 && (
        <div className="text-center py-5">
          <p className="text-muted">No sales data found for the selected filters.</p>
        </div>
      )}
    </div>
  )
}

export default SalesReports