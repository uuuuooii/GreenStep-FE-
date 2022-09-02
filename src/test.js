import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
const Test = () => {
    const url = process.env.REACT_APP_URL;
    const code = new URL(window.location.href).searchParams.get("code");
    console.log(code)
const Get = ()=>{
   axios.get(`http://54.180.30.74/users/kakao/callback`,{params:{code}}).then((res)=>console.log(res))
}

  return (<button onClick={Get}>test</button>);
};

export default Test;