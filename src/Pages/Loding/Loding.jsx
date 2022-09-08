//react impoty
import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//modules import
import { userThunk } from '../../Redux/modules/user';
//component import
import { RaceBy } from '@uiball/loaders';
//styled import
import {
  LoadingArea,
  LodingText,
  LodingTextArea,
  LodingBarArea,
} from './LodingStyled';

const Test = () => {
  const url = process.env.REACT_APP_URL;
  const code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`${url}/users/kakao/callback`, { params: { code } })
      .then((res) => {
        const token = res.headers.authorization;
        const refresh_token = res.headers.refresh_token;
        localStorage.setItem('Authorization', token);
        sessionStorage.setItem('refresh-Token', refresh_token);
        dispatch(userThunk(res.data.data));
        // res.data.data.newComer ? navigate('/modal') : navigate('/mission');
      }, []);
  });

  return (
    <LoadingArea>
      <LodingTextArea>
        <LodingText>페이지 로딩중....</LodingText>
      </LodingTextArea>
      <LodingBarArea>
        {' '}
        <RaceBy size={200} lineWeight={20} speed={3} color=" #036a6a" />
      </LodingBarArea>
    </LoadingArea>
  );
};

export default Test;
