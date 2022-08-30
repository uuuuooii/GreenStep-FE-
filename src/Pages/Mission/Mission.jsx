import { useEffect, useState } from "react";

function Mission() {
  const [hour, setHour] = useState(23 - new Date().getHours());
  // 시간을 가져와 23에서 시간값을 뺀 시간을 정해주는 state
  const [minute, setMinute] = useState(59 - new Date().getMinutes());
  // 분을 가져와 59에서 분값을 뺀 분을 정해주는 state
  const [second, setSecond] = useState(59 - new Date().getSeconds());
  // 초를 가져와 59에서 초값을 뺀 초를 정해주는 state

  useEffect(() => {
    const id = setInterval(() => {
      setHour(23 - new Date().getHours());
      setMinute(59 - new Date().getMinutes());
      setSecond(59 - new Date().getSeconds());
    }, 1000);
    // 1초마다 실행되는 인터벌을 이용해 1초마다 다시 랜더링 시켜줌
    return () => clearInterval(id);
    // 페이지를 벗어나게되면 반복을 종료해줌
  }, []);
  return (
    <>
      {hour < 10 ? "0" + hour : hour}:{minute < 10 ? "0" + minute : minute}:
      {second < 10 ? "0" + second : second}
    </>
  );
}

export default Mission;
