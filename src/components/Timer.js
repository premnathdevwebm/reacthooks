import { useState, useCallback, useEffect } from "react";

const Timer = ({ isOpen }) => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  const loggingTimeStart = useCallback(() => `Mounted start at ${currentTime}`, [currentTime]);

  useEffect(() => {
    if (isOpen) {
      loggingTimeStart();
      const interval = setInterval(() => {
        console.log("The time is changing");
        setCurrentTime(new Date().toLocaleString());
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isOpen, loggingTimeStart]);

  return <div>{currentTime}</div>;
};

export default Timer;
