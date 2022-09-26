//react import
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
//component import
import LoadingBar from "../../Components/LoadingBar/LoadingBar";

const UpdateLoading = () => {
  const navigate = useNavigate()
  useEffect(() => {
setTimeout(()=>{
navigate('/mypage')
},[1500])
  }, []);

  return (
    <>
      <LoadingBar />
    </>
  );
};

export default UpdateLoading;
