//react import
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
//styled import
import styled from 'styled-components';
import './Footer.css';
import FeedIcon from '../../static/components/Footer/FeedIcon';
import MyPageIcon from '../../static/components/Footer/MyPageIcon';
import HomeIcon from '../../static/components/Footer/HomeIcon';

const FooterIcon1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  font-size: 28px;
  margin: 0 10px;
  background-color: ${(props) =>
    props.background ? props.background : 'none'};
  border-radius: 20px;
  transition: all 0.5s;
  padding: 2.5px;
`;
const FooterIcon2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  font-size: 26px;
  background-color: ${(props) =>
    props.background ? props.background : 'none'};
  border-radius: 20px;
  transition: all 0.5s;
  padding: 2.5px;
`;
const FooterIcon3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  font-size: 30px;
  margin: 0 10px;
  background-color: ${(props) =>
    props.background ? props.background : 'none'};
  border-radius: 20px;
  transition: all 0.5s;
  padding: 2.5px;
`;

export function Footer() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [click, setClick] = useState('');
  const [page, setPage] = useState('');
  useEffect(() => {
    setPage(pathname);
    setClick(pathname);
  }, [pathname]);
//0.5초 동안 영역 색 변경
  useEffect(() => {
    setTimeout(() => {
      setClick('');
    }, 500);
  }, [click]);
  return (
    <>
      <div className="footer-dummy-div"></div>

      <div className="footer-box">
        <div className="wrap-footer-icons">
          {/* 클릭 시 해당 아이콘 페이지일시 영역 색 변경 (0.5초) */}
          <FooterIcon1
            onClick={() => navigate('/mission')}
            background={click === '/mission' ? '#F3F3F3' : null}
          >
            {/* 아이콘 페이지에 머물경우 아이콘 색 변경 */}
            <HomeIcon color={page === '/mission' ? '#84CA79' : '#50674C'} />
          </FooterIcon1>

          <FooterIcon2
            onClick={() => navigate('/feed')}
            background={click === '/feed' ? '#F3F3F3' : null}
          >
            <FeedIcon color={page === '/feed' ? '#84CA79' : '#50674C'} />
          </FooterIcon2>
          <FooterIcon3
            onClick={() => navigate('/mypage')}
            background={click === '/mypage' ? '#F3F3F3' : null}
          >
            <MyPageIcon color={page === '/mypage' ? '#84CA79' : '#50674C'} />
          </FooterIcon3>
        </div>
      </div>
    </>
  );
}

export default Footer;
