import { useState, useCallback } from 'react';
import { ToastsStore } from 'react-toasts';

const useToast = (initialState) => {
  const [toastNum, setToastNum] = useState(initialState);
  const onClickToast = useCallback((text, num) => {
    if (num == undefined) {
      setToastNum(0);
      ToastsStore.success(text);
    } else {
      setToastNum(num);
      ToastsStore.success(text);
    }
  }, []);
  return [toastNum, onClickToast];
};

export default useToast;
