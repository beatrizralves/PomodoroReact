import React, { useState } from "react";
import "./styles.css";
import TabButton, { TabButtonType } from "./components/TabButton";
import ContainerTimer from "./components/ContainerTimer";
import Tasks from "./components/Tasks";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState(TabButtonType.POMODORO);
  const [tabButtonsOrder] = useState([
    TabButtonType.POMODORO,
    TabButtonType.SHORT,
    TabButtonType.LONG,
  ]);

  const renderActiveTab = () => {
    switch (activeTab) {
      case TabButtonType.POMODORO:
        return <ContainerTimer minutes={25} seconds={0} />;
      case TabButtonType.SHORT:
        return <ContainerTimer minutes={5} seconds={0} />;
      case TabButtonType.LONG:
        return <ContainerTimer minutes={15} seconds={0} />;
      default:
        return null;
    }
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabButtonsOrder.map((buttonType, index) => (
          <TabButton
            key={index}
            type={buttonType}
            isActive={activeTab === buttonType}
            onClick={() => setActiveTab(buttonType)}
          />
        ))}
      </div>

      <div className="tab-content">{renderActiveTab()}</div>
      <Tasks  />
    </div>
  );
};

export default App;
