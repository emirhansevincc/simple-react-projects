import { useState } from "react";
import List from "./components/List";
import { birthdayData } from "./data";

function App() {

  const [birthday, setBirthday] = useState(birthdayData)

  const clearAll = () => {
    setBirthday([])

  }

  return (
    <div className="App">
      <h2 className="today">{birthday.length} birthdays today</h2>
      <List birthday={birthday} />
      <button onClick={clearAll}>Clear All</button>
    </div>
  );
}

export default App;
