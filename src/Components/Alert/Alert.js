import React, { useEffect, useState } from 'react';
import { NativeEventSource, EventSourcePolyfill } from 'event-source-polyfill';
import { useQueryClient } from 'react-query';
import styled from 'styled-components';

const EventSource = NativeEventSource || EventSourcePolyfill;
const Alert = () => {
  const [listening, setListening] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState(null);
  const [newAlert, setNewAlert] = useState([]);
  const token = localStorage.getItem('Authorization');

  const [meventSource, msetEventSource] = useState(undefined);
  let eventSource = undefined;
  // console.log(eventSource);
  useEffect(
    () => {
      // const source = new EventSource('http://13.209.16.253:8080/subscribe', {
      //   headers: {
      //     Authorization: token,
      //   },
      // });
      // source.onmessage = (e) => console.log(e.data);

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
        console.log(e);
        setNewAlert((prev) => [JSON.parse(e.data)]);

        // queryClient.invalidateQueries('alertList');
      });

      eventSource.addEventListener('error', (e) => {
        if (e) {
          console.log(e);
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
