import React, { useEffect, useState } from 'react';
import { NativeEventSource, EventSourcePolyfill } from 'event-source-polyfill';
import { useQueryClient } from 'react-query';
import styled from 'styled-components';
import instance from '../../Redux/modules/instance';

var EventSource = EventSourcePolyfill;
//EventSource = NativeEventSource || EventSourcePolyfill;
const Alert = () => {
  const [listening, setListening] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState(null);
  const [newAlert, setNewAlert] = useState([]);
  const token = localStorage.getItem('Authorization');

  const [meventSource, msetEventSource] = useState(undefined);
  // let eventSource = undefined;
// console.log(newAlert)
  // console.log(eventSource);
  useEffect(
    () => {
   instance.get('/notifications').then((res) => console.log(res));

      //구독하기

      const eventSource = new EventSource(
        'http://13.209.16.253:8080/subscribe',
        {
          headers: {
            // 'Authorization': token
            Authorization: token,
          },
        }
      );
      eventSource.addEventListener('message', (e) => {
        if (e.type === 'message' && e.data.startsWith('{')) {
          setNewAlert((prev) => [JSON.parse(e.data)]);

          // queryClient.invalidateQueries('alertList');
        }
      });

    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return <>Alert</>;
};

export default Alert;

// (HttpServletRequest request,
//   @RequestHeader(value = "Last-Event-ID", required = false, defaultValue = "")
