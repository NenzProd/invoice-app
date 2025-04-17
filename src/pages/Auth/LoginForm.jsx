// src/components/LoginForm.js
import { Link } from 'react-router-dom';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRightToBracket, faUser, faLock } from "@fortawesome/free-solid-svg-icons";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here (e.g., authentication)
    navigate('/organisation-details');
  };

  return (
    <section className="vh-100 d-flex align-items-center justify-content-center p-2">
      <form className="col-12 col-sm-8 col-md-6 col-lg-4 col-xl-3 border border-1 p-3 rounded shadow-lg" onSubmit={handleSubmit}>
        <div className="text-center m-3 mb-5">
          <FontAwesomeIcon icon={faArrowRightToBracket} size='3x' />
        </div>

        <div className="my-3 border border-2 rounded px-3 py-1 border-dark d-flex align-items-center justify-content-center">
          <div className="d-flex align-items-center justify-content-center">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <input
            type="email"
            className="form-control border-0"
            id="email"
            aria-describedby="emailHelp"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email address"
          />
        </div>

        <div className="mb-3 border border-2 rounded px-3 py-1 border-dark d-flex align-items-center justify-content-center">
          <div className="d-flex align-items-center justify-content-center">
            <FontAwesomeIcon icon={faLock} />
          </div>
          <input
            type="password"
            className="form-control border-0"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder='Password'
          />
        </div>

        <label>
          <input
            type="checkbox"
          // checked={}
          // onChange={}
          />
          <span> I agree to the{" "}</span>
          <a href="/terms-and-conditions" target="_blank" className='text-decoration-none'>
            terms and conditions
          </a>
        </label>

        {/* <div className="text-center mt-4 mb-2">
          <Link to="/dashboard">
            <button type="submit" className="btn btn-primary px-5 login w-100 fw-bold py-2">Login</button>
          </Link>
        </div> */}

        <div className="text-center mt-4 mb-2">
          <button type="submit" className="btn btn-primary px-5 login w-100 fw-bold py-2">Login</button>
        </div>

        <div className='text-center'>
          <p className='fw-bold m-1 mt-4'>Sign in using</p>
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

        <div className='text-center'>
          <span>Don&apos;t have an account ?
            <Link to="/signup" className='text-decoration-none fw-bold'> Sign up</Link>
          </span>
        </div>

      </form>
    </section>
  );
};

export default LoginForm;
