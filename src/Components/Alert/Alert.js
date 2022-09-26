import React, { useEffect, useState } from 'react';
import { NativeEventSource, EventSourcePolyfill } from 'event-source-polyfill';
import styled from 'styled-components';
import instance from '../../Redux/modules/instance';
import {
  useDeleteAlert,
  useDeleteAlertAll,
  useGetMessageAlert,
  useGetUnreadAlert,
  usePostReadAlert,
} from '../../hooks/useNotification';
import { useQueryClient } from 'react-query';
import { useRef } from 'react';

const EventSource = EventSourcePolyfill || NativeEventSource;
//EventSource = NativeEventSource || EventSourcePolyfill;
const Alert = () => {
  const [listening, setListening] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState(null);
  const [newAlert, setNewAlert] = useState([]);
  const [alertOpen, setAlertOpen] = useState(false);
  const [unread, setUnread] = useState();
  const queryClient = useQueryClient();
  const { data: alertList } = useGetMessageAlert();
  const { data: alertUnreadList } = useGetUnreadAlert();
  const { mutateAsync: removeAlert } = useDeleteAlert();
  const { mutateAsync: removeAllAlert } = useDeleteAlertAll();
  const { mutateAsync: readAlert } = usePostReadAlert();
  const token = localStorage.getItem('Authorization');
  const ref = useRef();
  const [meventSource, msetEventSource] = useState(undefined);
  const allList = alertList?.data;
  const unreadList = alertUnreadList?.data.count;

  useEffect(() => {


    //구독하기
    if (token) {
      const sse = new EventSource('http://13.209.16.253:8080/subscribe', {
        headers: {
          Authorization: token,
        },
      });
      console.log(sse)

      sse.addEventListener('message', (e) => {
        console.log(e);
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
  return <div ref={ref}>Alert</div>;
};

export default Alert;

// (HttpServletRequest request,
//   @RequestHeader(value = "Last-Event-ID", required = false, defaultValue = "")
