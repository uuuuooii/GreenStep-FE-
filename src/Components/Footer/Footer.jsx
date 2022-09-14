//react import
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
//styled import
import styled from 'styled-components';
import './Footer.css';
import FeedIcon from '../../static/components/Footer/FeedIcon'
import MyPageIcon from '../../static/components/Footer/MyPageIcon'
import HomeIcon from '../../static/components/Footer/HomeIcon'
import { MdListAlt, MdPersonOutline } from 'react-icons/md';
import { BiHome } from 'react-icons/bi';

// const FeedIcon = styled(MdListAlt)`
//   color: ${(props) => props.color};
//   transition: all 0.25s;
// `;

// const HomeIcon = styled(BiHome)`
//   color: ${(props) => props.color};
//   transition: all 0.25s;
// `;

// const MyPageIcon = styled(MdPersonOutline)`
//   color: ${(props) => props.color};
//   transition: all 0.25s;
// `;
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
          <FooterIcon1
            onClick={() => 
              navigate('/mission')
            }
            background={click === '/mission' ? '#F3F3F3' : null}
          >
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
