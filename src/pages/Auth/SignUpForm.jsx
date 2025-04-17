import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUser, faLock, faUserPlus, faBuilding, faGlobe,faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Form data:', formData);
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100">
      <form onSubmit={handleSubmit} className="col-12 col-sm-8 col-md-6 col-lg-4 col-xl-3 my-5 text-center border border-1 rounded shadow-sm p-4">
        <div className="text-center mb-4">
          <FontAwesomeIcon icon={faUserPlus} size="3x" />
        </div>
        <div className="mb-3 border border-1 rounded px-3 py-1 border-dark d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-center">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <input
            type="text"
            className="form-control border-0"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Name"
          />
        </div>
        <div className="mb-3 border border-1 rounded px-3 py-1 border-dark d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-center">
            <FontAwesomeIcon icon={faBuilding} />
          </div>
          <input
            type="text"
            className="form-control border-0"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
            placeholder="Company Name"
          />
        </div>

        <div className="mb-3 border border-1 rounded px-3 py-1 border-dark d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-center">
          <FontAwesomeIcon icon={faGlobe} />
          </div>
          <select
            className="form-control border-0"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          >
            <option value="">Select a State</option>
            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
            {/* Add other states here */}
            <option value="West Bengal">West Bengal</option>
          </select>
        </div>

        <div className="mb-3 border border-1 rounded px-3 py-1 border-dark d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-center">
          <FontAwesomeIcon icon={faPhone} />
          </div>
          <input
            type="tel"
            className="form-control border-0"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            placeholder="Phone Number"
          />
        </div>
        <div className="mb-3 border border-1 rounded px-3 py-1 border-dark d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-center">
          <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <input
            type="email"
            className="form-control border-0"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email Address"
          />
        </div>
        <div className="mb-3 border border-1 rounded px-3 py-1 border-dark d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-center">
            <FontAwesomeIcon icon={faLock} />
          </div>
          <input
            type="password"
            className="form-control border-0"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Password"
          />
        </div>
        <div className="mb-3 border border-1 rounded px-3 py-1 border-dark d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-center">
            <FontAwesomeIcon icon={faLock} />
          </div>
          <input
            type="password"
            className="form-control border-0"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            placeholder="Confirm Password"
          />
        </div>
       
        <div className="text-center mt-4 mb-2">
          <button type="submit" className="btn btn-primary px-4 w-100 py-2 fw-bold">Sign Up</button>
        </div>

        <div className='text-center'>
          <p className='fw-bold m-1 mt-4'>Or sign in using</p>
          <ul className="list-unstyled d-flex gap-2 justify-content-center ">
            <li>
                <FontAwesomeIcon icon={faGoogle} size="2x" />
            </li>
            <li>
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </li>
            <li>
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </li>
          </ul>
        </div>

        <div className="mb-2 text-center">
          <span className="form-text mt-0">
            Already have an account? <Link to="/login" className="fw-bold text-decoration-none">Sign in</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
