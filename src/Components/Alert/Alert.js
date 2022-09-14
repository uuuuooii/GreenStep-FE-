import React, { useEffect, useState } from 'react';
import { NativeEventSource, EventSourcePolyfill } from 'event-source-polyfill';

const EventSource = NativeEventSource || EventSourcePolyfill;
const Alert = () => {
  const [listening, setListening] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState(null);

  const [meventSource, msetEventSource] = useState(undefined);

  let eventSource = undefined;

  useEffect(() => {
    console.log('매번 실행되는지');
    console.log('listening', listening);

    if (!listening) {
      eventSource = new EventSource('http://localhost:8080/sse');
      msetEventSource(eventSource);

         eventSource.addEventListener("Progress", (event) => {
        const result = JSON.parse(event.data);
        console.log("received:", result);
        setData(result)
      });

      console.log("eventSource", eventSource);
    }
  });

  return <>Alert</>;
};

export default Alert