import React, {useState}from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
   const [isDarkMode, setisDarkMode] = useState(false)

  const appClass = isDarkMode ? "App dark" : "App light"

  const toggleDarkMode = ()=>{
    setisDarkMode(prevMode => !prevMode)
  };

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>{isDarkMode ? "Light Mode":"Dark Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
