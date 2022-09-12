//react import
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import './Footer.css';
import { MdListAlt, MdPersonOutline } from 'react-icons/md';
import { BiHome } from 'react-icons/bi';

const FeedIcon = styled(MdListAlt)`
  color: ${(props) => props.color};
  transition: all 0.5s;
`;

const HomeIcon = styled(BiHome)`
  color: ${(props) => props.color};
  transition: all 0.5s;
`;

const MyPageIcon = styled(MdPersonOutline)`
  color: ${(props) => props.color};
  transition: all 0.5s;
`;

export function Footer() {
  const navigate = useNavigate();
  const [page, setPage] = useState('Mission');
  return (
    <>
      <div className="footer-dummy-div"></div>

      <div className="footer-box">
        <div className="wrap-footer-icons">
          <div
            className="footer-icon-1"
            onClick={() => {
              setPage('Feed');
              navigate('/Feed');
            }}
          >
            <FeedIcon color={page === 'Feed' ? '#DAF2D5' : 'black'} />
          </div>

          <div
            className="footer-icon-2"
            onClick={() => {
              setPage('Mission');
              navigate('/Mission');
            }}
          >
            <HomeIcon color={page === 'Mission' ? '#DAF2D5' : 'black'} />
          </div>

          <div
            className="footer-icon-3"
            onClick={() => {
              setPage('MyPage');
              navigate('/MyPage');
            }}
          >
            <MyPageIcon color={page === 'MyPage' ? '#DAF2D5' : 'black'} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
