import { useState, useCallback } from 'react';

const useToast = (initialState) => {
  const [toastNum, setToastNum] = useState(initialState);
  const [display, setDisplay] = useState(0);
  const [text, setText] = useState('');
  const onClickToast = useCallback((text, num) => {
    if (display === 0) {
      setDisplay(display + 1);
    }
    if (num == undefined) {
      setToastNum(0);
      setText(text);
    } else {
      setToastNum(num);
      setText(text);
    }
  }, []);
  return [toastNum, onClickToast, display, setDisplay, text];
};

export default useToast;
