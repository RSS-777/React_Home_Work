import { useState, useRef, useEffect } from "react";
import './CustomTabs.css'

const CustomTabs = ({ tabs }) => {
   const [activeTab, setActiveTab] = useState(tabs[0]?.key || '')
   
   const handleTabClick = (key) => {
     setActiveTab(key)
   }

    return (
        <div>
            <div className="buttons-tabs">
                {tabs.map((tab) => {
                    return(
                        <button
                          onClick = {() => handleTabClick(tab.key)}
                          className = {activeTab === tab.key ? 'active-tabs' : ''}
                          key = {tab.key}
                        >
                            {tab.title}
                        </button>
                    )
                })}
            </div>
            <div className="buttons-content">
                {tabs.map((tab) => {
                    return(
                       <div
                         key = {tab.key}
                         className={activeTab === tab.key ? 'content-show' : 'content-hiden'}
                       >
                         <hr />
                         <p>{tab.content}</p>
                         <img src={tab.image}/>
                       </div>
                    )
                })}
            </div>
        </div>
    );
};

export default CustomTabs;

