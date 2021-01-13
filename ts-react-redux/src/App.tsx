import React from "react";
import "./App.css";

import TestTwo from "./pages/TestTwo";

const App: React.FC = () => {
  return (
    <div className="App">
      <TestTwo dataOne="dataOne" dataTwo="dataTwo" />
    </div>
  );
};

export default App;
