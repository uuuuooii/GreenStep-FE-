//react import
import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
//styled import
import './Header.css';
import { BiBell } from 'react-icons/bi';
import HeaderLogo from '../../static/components/HeaderLogo';
//component import
import { pathArr, hideArr } from '../../static/path/Path';
import instance from '../../Redux/modules/instance';

const Header = () => {

  const navigate = useNavigate();
  const [unread, setUnread] = useState(0);
  const [y, setY] = useState(document.scrollingElement.scrollHeight);
  const [hide, setHide] = useState(false);
  const { pathname } = useLocation();
  useEffect(()=>{
    instance.get('/notifications/count').then((res)=>setUnread(res.data.count));
    if(!localStorage.getItem('Authorization')&&!pathname==='/users/kakao/callback'){
      navigate('/')
    }
  },[pathname])

  const handleNavigation = useCallback(
    (e) => {
      if (y > window.scrollY) {
        setHide(false);
      } else if (window.scrollY > 100) {
        setHide(true);
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    window.addEventListener('scroll', handleNavigation);

    return () => {
      window.removeEventListener('scroll', handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <>
      {pathArr.includes(pathname) ? (
        <>
          {!hideArr.includes(pathname) ? (
            <div className="header-dummy-div" />
          ) : null}

          {!hide && !hideArr.includes(pathname) ? (
            <div className="wrap-header">
              <div className="header-relative">
                <div
                  className="header-title"
                  onClick={() => navigate('/mission')}
                >
                  Green Step
                </div>
                <div className="header-icon-left" onClick={()=>navigate('/mission')}>
                  <HeaderLogo />
                </div>
                <div
                  className="header-icon-right"
                  onClick={() => navigate('alarmlist')}
                >
                  {unread && unread > 0 ? (
                    <div className="header-new-list-div">
                      <div className="header-new-list">{unread}</div>
                    </div>
                  ) : null}
                  <BiBell className="header-icon-bell" />
                </div>
              </div>
            </div>
          ) : null}
        </>
      ) : null}
    </>
  );
};

export default Header;
