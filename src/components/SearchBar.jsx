import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar = ({ value, onChange, placeholder = 'Search...' }) => {
  return (
    <div style={{ width: '100%', padding: '8px' }}>
      <div style={{ position: 'relative', width: '100%' }}>
        <FontAwesomeIcon 
          icon={faSearch} 
          style={{ 
            position: 'absolute',
            left: '8px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#9ca3af',
            fontSize: '14px'
          }}
        />
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          style={{
            width: '100%',
            height: '35px',
            paddingLeft: '32px',
            paddingRight: '12px',
            border: '1px solid #e5e7eb',
            borderRadius: '2px',
            outline: 'none',
            boxShadow: 'none',
            fontSize: '14px'
          }}
        />
      </div>
    </div>
  )
}

export default SearchBar
