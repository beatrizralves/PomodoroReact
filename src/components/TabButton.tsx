import React from "react";
import "./TabButton.css";

export enum TabButtonType {
  POMODORO = "pomodoro",
  SHORT = "short",
  LONG = "long",
}

interface TabButtonProps {
  onClick?: () => void;
  isActive?: boolean;
  type?: TabButtonType;
}

const TabButton: React.FC<TabButtonProps> = ({ onClick, isActive, type }) => {
  let classNameType = "";
  let label = "";

  switch (type) {
    case TabButtonType.POMODORO:
      classNameType = "pomodoro-button";
      label = "Pomodoro";
      break;
    case TabButtonType.SHORT:
      classNameType = "short-button";
      label = "Short Break";
      break;
    case TabButtonType.LONG:
      classNameType = "long-button";
      label = "Long Break";
      break;
  }
  return (
    <button
      className={`tab-button ${classNameType} ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default TabButton;
