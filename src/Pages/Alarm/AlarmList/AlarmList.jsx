//react import
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { NativeEventSource, EventSourcePolyfill } from 'event-source-polyfill';

import {
  useDeleteAlert,
  useDeleteAlertAll,
  useGetMessageAlert,
  useGetUnreadAlert,
  usePostReadAlert,
} from '../../../hooks/useNotification';
import { useQueryClient } from 'react-query';
import { useRef } from 'react';
import './AlarmList.css';
import { IoIosArrowBack } from 'react-icons/io';
import instance from '../../../Redux/modules/instance';
const EventSource = EventSourcePolyfill || NativeEventSource;
const AlarmList = ({ onClickToast }) => {
  const [newAlert, setNewAlert] = useState([]);
  const [alertOpen, setAlertOpen] = useState(false);
  const [unread, setUnread] = useState();
  const queryClient = useQueryClient();
  const { data: alertList } = useGetMessageAlert();
  const { data: alertUnreadList } = useGetUnreadAlert();
  const token = localStorage.getItem('Authorization');
  const ref = useRef();
  const allList = alertList?.data;
  const unreadList = alertUnreadList?.data.count;
  const navigate = useNavigate();
  console.log(allList)
  useEffect(() => {
    //구독하기
    if (token) {
      const sse = new EventSource('https://greenstepserver.link/subscribe', {
        headers: {
          Authorization: token,
        },
        heartbeatTimeout: 180 * 1000,
      });

      sse.addEventListener('message', (e) => {
        queryClient.invalidateQueries('alertList');
      });
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      setNewAlert(allList);
      setUnread(unreadList);

      queryClient.invalidateQueries('unreadList');
    }
  }, [allList, unreadList]);
  const openAlert = () => {
    setAlertOpen((prev) => !prev);
  };

  const clickOutSide = (e) => {
    if (alertOpen && !ref.current.contains(e.target)) {
      setAlertOpen(false);
    }
  };

  useEffect(() => {
    if (alertOpen) document.addEventListener('mousedown', clickOutSide);
    return () => {
      document.removeEventListener('mousedown', clickOutSide);
    };
  });

  return (
    <>
      <div className="alarmlist-back-arrow-area">
        <IoIosArrowBack
          className="alarmlist-back-arrow-icon"
          onClick={() => navigate(-1)}
        />
        <div className="alarmlist-title-text">알림</div>
        <div
          className="alarmlist-check-button"
          onClick={() => {
            instance.delete('/notifications/delete');
            setNewAlert([]);
            onClickToast('전체읽음 처리되었습니다.');
          }}
        >
          {' '}
          전체읽음{' '}
        </div>
      </div>
      <div className="alarmlist-dummy-div"></div>
      <div className="alarmlist-box">
        {newAlert
          ? newAlert.map((item) => (
              <div
                className="alarmlist-contents-div"
                onClick={() => {
                  instance.delete(`/notifications/delete/${item.id}`);
                  navigate(item.url);
                }}
              >
                {' '}
                <div className="alarmlist-contents-and-time">
                  <div className="alarmlist-box-contents">
                    {item.notificationContent}
                  </div>
                  <div className="alarmlist-box-time">
                    {item.createAt.split('T')[0].split('-')[1][0] === '0'
                      ? item.createAt.split('T')[0].split('-')[1][1]
                      : item.createAt.split('T')[0].split('-')[1]}
                    월{item.createAt.split('T')[0].split('-')[2]}일{' '}
                    {item.createAt.split('T')[1].split(':')[0]}:
                    {item.createAt.split('T')[1].split(':')[1]}
                  </div>
                </div>
                <div className="alarmlist-box-img-area">
                  <img
                    className="alarmlist-box-img"
                    src={
                      item.imgUrl === 'nullImg'
                        ? '/images/WaitingLeaf.png'
                        : item.imgUrl
                    }
                  />
                </div>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default AlarmList;
