// import { useState, CSSProperties } from "react";
import { Button } from "@arco-design/web-react";

function App() {
  const count = 2;

  return (
    <div className="App">
      <div className="flex">
        <p className="mr-10">测 试样 式</p>

        <p>
          <Button type="primary">count is: {count}</Button>
        </p>
      </div>
    </div>
  );
}

export default App;
