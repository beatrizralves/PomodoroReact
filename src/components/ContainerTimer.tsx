import React from "react";
import "./ContainerTimer.css";

interface ContainerTimerProps {
  minutes: number;
  seconds: number;
}

const ContainerTimer: React.FC<ContainerTimerProps> = ({
  minutes,
  seconds,
}) => {
  const [min, setMin] = React.useState(0); //this value is setted in useState
  const [sec, setSec] = React.useState(0); //this value is setted in useState
  const [isActive, setIsActive] = React.useState(false); //this value is also resetted in useState

  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    console.log(
      `ContainerTimer-> isActive=${isActive}, minutes=${min}, seconds=${sec}`
    );
    if (isActive) {
      timer = setInterval(() => {
        if (sec === 0) {
          if (min === 0) {
            setIsActive(false);

            return;
          }
          setMin(min - 1);
          setSec(59);
        } else {
          setSec(sec - 1);
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isActive, min, sec]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setMin(minutes); //reset to inital values
    setSec(seconds); //reset to inital values
    setIsActive(false);
  };

  // Reset timer state when props change (e.g., when switching tabs)
  React.useEffect(() => {
    setMin(minutes);
    setSec(seconds);
    setIsActive(false); // Optionally pause timer on switch
  }, [minutes, seconds]);

  return (
    <>
      <div className="timer">
        {String(min).padStart(2, "0")}:{String(sec).padStart(2, "0")}
      </div>
      <div className="botoes">
        <button className="btn" onClick={toggleTimer}>
          {isActive ? "Pause" : "Start"}
        </button>
        <button
          className="reset-button"
          onClick={() => {
            resetTimer();
            console.log("Timer reset");
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default ContainerTimer;
