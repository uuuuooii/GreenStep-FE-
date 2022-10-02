//react import
import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NativeEventSource, EventSourcePolyfill } from 'event-source-polyfill';
import { useQueryClient } from 'react-query';
//styled import
import './Header.css';
import { BiBell } from 'react-icons/bi';
import HeaderLogo from '../../static/components/HeaderLogo';
//component import
import { pathArr, hideArr } from '../../static/path/Path';
import instance from '../../Redux/modules/instance';
import {
  useDeleteAlert,
  useDeleteAlertAll,
  useGetMessageAlert,
  useGetUnreadAlert,
  usePostReadAlert,
} from '../../hooks/useNotification';
const EventSource = EventSourcePolyfill || NativeEventSource;
const Header = () => {
  //주소값
  const { pathname } = useLocation();
  const [path,setPath] = useState('')
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data: alertUnreadList } = useGetUnreadAlert();
  const [unread, setUnread] = useState(0);
  const token = localStorage.getItem('Authorization');
  const [y, setY] = useState(document.scrollingElement.scrollHeight);
  const [hide, setHide] = useState(false);
  const unreadList = alertUnreadList?.data.count;
  console.log(path)
  useEffect(() => {

    //안읽은 알람정보 받아오기
    instance.get('/notifications/count').then((res)=>setUnread(res.data.count))

    //로딩창을 제외한 나머지 페이지에서 토큰값이 없을경우 시작페이지로 보냄
    if (
      pathname !== '/users/kakao/callback' &&
      !localStorage.getItem('Authorization')
    ) {
      navigate('/');
    }
//datailposts 와 upload페이지 예외처리 (동적라우팅의 id값 예외처리)
    if(pathname.includes('detailposts')||pathname.includes('upload')){
      setPath('/'+pathname.split('/')[1])
    }else{
      setPath(pathname)
    }
  }, [pathname]);
  useEffect(() => {
    //구독하기
    if (token) {
      
      const sse = new EventSource('https://greenstepserver.link/subscribe', {
        headers: {
          Authorization: token,
        },
        heartbeatTimeout: 180 * 10000,
      });

      sse.addEventListener('message', (e) => {
        queryClient.invalidateQueries('alertList');
      });
      return ()=>{
        sse.removeEventListener('message', (e) => {
          queryClient.invalidateQueries('alertList');
        });
      }
    }
  }, [token]);
  //실시간으로 안읽은 알림 수 받아오기
  useEffect(() => {
    if (token) {
      setUnread(unreadList);
      queryClient.invalidateQueries('unreadList');
    }

  }, [unreadList]);
  //스크롤 내릴때 헤더 사라지고 올릴때 생기게
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
      {pathArr.includes(path) ? (
        <>
          {!hideArr.includes(path) ? (
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
                <div
                  className="header-icon-left"
                  onClick={() => navigate('/mission')}
                >
                  <HeaderLogo />
                </div>
                <div
                  className="header-icon-right"
                  onClick={() => navigate('alarmlist')}
                >
                  {unread > 0 ? (
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
