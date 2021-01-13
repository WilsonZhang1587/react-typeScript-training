import React from "react";
import { Counter } from "./components/Counter";

const App: React.FC = () => {
  return (
    <div className="App">
      <Counter>
        {({ count, setCount }) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        )}
      </Counter>
    </div>
  );
};

export default App;
