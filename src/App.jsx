import { useState } from "react";
import Table from "./components/Table/Table";
import MyTabs from "./components/MyTabs/MyTabs";
import CustomTabs from "./components/CustomTabs/CustomTabs";
import imgBill from  './assets/BillGates.jpg'
import imgJobs from "./assets/Jobs.jpg";
import imgMark from "./assets/Mark.jpg";
import './App.css'

function App() {
  const [cellTable, setCellTable] = useState(null)

  const handleClick = (e) => {
    setCellTable(e.target.textContent)
  }

  const tabs = [
    {
      key: '1',
      title: 'Білл Гейтс',
      image: imgBill,
      content: 'Текст про Білла Гейтса...'
    },
    {
      key: '2',
      title: 'Стів Джобс',
      image: imgJobs,
      content: 'Текст про Стіва Джобса...'
    },
    {
      key: '3',
      title: 'Марк Цукерберг',
      image: imgMark,
      content: 'Текст про Марка Цукерберга...'
    }
  ];

  return (
    <div>
      <h1>Lesson 41</h1>
      <Table onClick={handleClick} />
      <div> Cell number:{cellTable}</div>
      <h3 className="paragraf">This Tabs: antd</h3>
      <MyTabs />
      <h3>This Tabs: my custom </h3>
      <CustomTabs tabs={tabs} />
    </div>
  )
}

export default App
