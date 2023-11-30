import { useState } from "react";
import Table from "./components/Table/Table";
import MyTabs from "./components/MyTabs/MyTabs";
import CustomTabs from "./components/CustomTabs/CustomTabs";
import './App.css'

function App() {
  const [cellTable, setCellTable] = useState(null)

  const handleClick = (e) => {
    setCellTable(e.target.textContent)
  }
  return (
    <div>
      <h1>Lesson 41</h1>
      < Table onClick={handleClick} />
      <div> Cell number:{cellTable}</div>
      <h3 className="paragraf">This Tabs: antd</h3>
      < MyTabs />
      <h3>This Tabs: my custom </h3>
      < CustomTabs />
    </div>
  )
}

export default App
