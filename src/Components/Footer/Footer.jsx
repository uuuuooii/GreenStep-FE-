//react import
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
//styled import
import styled from 'styled-components';
import './Footer.css';
import { MdListAlt, MdPersonOutline } from 'react-icons/md';
import { BiHome } from 'react-icons/bi';

const FeedIcon = styled(MdListAlt)`
  color: ${(props) => props.color};
  transition: all 0.25s;
`;

const HomeIcon = styled(BiHome)`
  color: ${(props) => props.color};
  transition: all 0.25s;
`;

const MyPageIcon = styled(MdPersonOutline)`
  color: ${(props) => props.color};
  transition: all 0.25s;
`;
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
  const [page, setPage] = useState('/Mission');
  const SetFeed = () => {
    navigate('/feed');
  };
  const SetMission = () => {
    navigate('/mission');
  };
  const SetMyPage = () => {
    navigate('/mypage');
  };
  useEffect(() => {
    setPage(pathname);
    setClick(pathname);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => {
      setClick('');
    }, 500);
  }, [click]);
  console.log(click);
  return (
    <>
      <div className="footer-dummy-div"></div>

      <div className="footer-box">
        <div className="wrap-footer-icons">
          <FooterIcon1
            onClick={() => {
              SetMission();
            }}
            background={click === '/mission' ? '#F3F3F3' : null}
          >
            <HomeIcon color={page === '/mission' ? '#84CA79' : 'black'} />
          </FooterIcon1>

          <FooterIcon2
            onClick={() => SetFeed()}
            background={click === '/feed' ? '#F3F3F3' : null}
          >
            <FeedIcon color={page === '/feed' ? '#84CA79' : 'black'} />
          </FooterIcon2>
          <FooterIcon3
            onClick={() => SetMyPage()}
            background={click === '/mypage' ? '#F3F3F3' : null}
          >
            <MyPageIcon color={page === '/mypage' ? '#84CA79' : 'black'} />
          </FooterIcon3>
        </div>
      </div>
    </>
  );
}

export default Footer;
