//react impoty
import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//modules import
import { userThunk } from '../../Redux/modules/user';
//component import
import LoadingBar from '../../Components/LoadingBar/LoadingBar';
import instance from '../../Redux/modules/instance';


const Test = () => {
  const url = process.env.REACT_APP_URL;
  const code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('test1');
    axios
      .get(`https://greenstepserver.link/users/kakao/callback`, {
        params: { code },
      })
      .then((res) => console.log(res));
  }, []);
  useEffect(() => {
    console.log('test1');
    axios
      .get(`https://greenstepserver.link/users/kakao/callback`, {
        params: { code },
      })
      .then((res) => {
        console.log('test2');
        // console.log(res)
        const token = res.headers.authorization;
        const refresh_token = res.headers.refresh_token;
        localStorage.setItem("Authorization", token);
        sessionStorage.setItem("refresh-Token", refresh_token);
        dispatch(userThunk(res.data.data));
        res.data.data.newComer ? navigate('/modal') : navigate('/mission');
      });
  }, []);

  return <LoadingBar />;
};

export default Test;
