import React from "react";
import { Provider } from "react-redux";
import store from "./js/store/store";
import List from "./js/components/List";

function App() {
  return (
    <div>
      <List />
    </div>
  );
}

export default App;
