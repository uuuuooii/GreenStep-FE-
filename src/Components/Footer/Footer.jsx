//react import
import { useState,useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
//styled import
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
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [page, setPage] = useState('/Mission');
  const SetFeed = () => {
    navigate('/feed');
  };
  const SetMission = () => {
    navigate('/mission');
  };
  const SetMyPage = () => {
    navigate('/myPage');
  };
  console.log(pathname);
  useEffect(() => {
    setPage(pathname);
  }, [pathname]);
  return (
    <>
      <div className="footer-dummy-div"></div>

      <div className="footer-box">
        <div className="wrap-footer-icons">
          <div className="footer-icon-1" onClick={() => SetFeed()}>
            <FeedIcon color={page === '/feed' ? '#DAF2D5' : 'black'} />
          </div>

          <div className="footer-icon-2" onClick={() => SetMission()}>
            <HomeIcon color={page === '/mission' ? '#DAF2D5' : 'black'} />
          </div>

          <div className="footer-icon-3" onClick={() => SetMyPage()}>
            <MyPageIcon color={page === '/myPage' ? '#DAF2D5' : 'black'} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
