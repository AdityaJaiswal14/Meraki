import React, { useState, useEffect } from 'react';

const Timer = ({ onUpdateTime, onTimeUp, resetKey }) => {
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    setTimer(10);
  }, [resetKey]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((currentTime) => {
        onUpdateTime(currentTime);
        if (currentTime === 0) {
          clearInterval(interval);
          onTimeUp();
          return 0;
        }
        return currentTime - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [onUpdateTime, onTimeUp]);

  return (
    <div className="flex gap-2 items-center">
      <span>{timer}</span>
    </div>
  );
};

export default Timer;