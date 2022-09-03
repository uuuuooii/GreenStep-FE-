//react import
import React from 'react';
import styled from 'styled-components';
//components import
import ErrorImage from '../../static/components/ErrorImage';
import { ErrorBody, ErrorText } from './ErrorStyled';

const Error = () => {
  return (
    <ErrorBody>
      <ErrorImage />
      <ErrorText>
        요청하신 페이지를 찾을 수 없습니다. 입력하신 주소가 정확한지 다시 한번
        확인해주세요.
      </ErrorText>
    </ErrorBody>
  );
};
export default Error;
