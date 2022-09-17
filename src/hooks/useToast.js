import { useState, useCallback } from 'react';
import { ToastsStore } from 'react-toasts';

const useToast = (initialState) => {
  const [toastNum, setToastNum] = useState(initialState);
  const Return = () => {
    setToastNum(initialState)
  }
  const changeToast = useCallback((message, num) => {
    setToastNum(num);
    ToastsStore.success(message);
    Return()
  },[]);
  return [toastNum,setToastNum, changeToast];
};

export default useToast;
