//react import
import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useInput from '../../../hooks/useInput';
//styled import
import { Area } from './AdminLoginStyled';
const AdminLogin = () => {
  const [id, setid] = useInput('');
  const [pw, setpw] = useInput('');
  const URL = process.env.REACT_APP_URL;
  const loginInfo = {
    email: id,
    password: pw,
  };
  const navigate = useNavigate();

  const Login = () => {
    axios.post(`${URL}/admin/login`, loginInfo).then((res) => {
      const token = res.headers.authorization;
      const refresh_token = res.headers.refresh_token;
      localStorage.setItem('Authorization', token);
      sessionStorage.setItem('refresh-Token', refresh_token);
      navigate('/admin');
    });
  };

  return (
    <Area>
      <div> 관리자 로그인 </div>
      <input onChange={setid} placeholder="email" />
      <input type="password" onChange={setpw} placeholder="password" />
      <button onClick={Login}>로그인</button>
    </Area>
  );
};

export default AdminLogin;
