import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

export default function LoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.otpless = (otplessUser) => {
      alert(JSON.stringify(otplessUser));
      navigate('/home');
    };
  }, [navigate]);

  return <div id="otpless-login-page" className='login'></div>;
}
