import { useEffect, useState } from "react";
import "./Mission.css";

function Mission() {
  const [hour, setHour] = useState(23 - new Date().getHours());
  const [minute, setMinute] = useState(59 - new Date().getMinutes());
  const [second, setSecond] = useState(59 - new Date().getSeconds());

  useEffect(() => {
    const id = setInterval(() => {
      setHour(23 - new Date().getHours());
      setMinute(59 - new Date().getMinutes());
      setSecond(59 - new Date().getSeconds());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <>
      <div>
        <div>
          <div className="challengeBox">
            <div>
              {hour < 10 ? "0" + hour : hour}:
              {minute < 10 ? "0" + minute : minute}:
              {second < 10 ? "0" + second : second}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mission;
