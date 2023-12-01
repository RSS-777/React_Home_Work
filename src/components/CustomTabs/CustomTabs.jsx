import { useState, useRef, useEffect } from "react";
import './CustomTabs.css'

const CustomTabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0]?.key || ''); // Початковий активний таб

    const btnRefs = useRef([]); // Масив з посиланнями на кнопки
    const lineBorder = useRef(null); // Посилання на рядок

    const handleTabClick = (key, index) => {
        setActiveTab(key);
        moveLineBorder(index);
    };

    const moveLineBorder = (index) => {
        const btn = btnRefs.current[index];
        if (btn) {
            const btnRect = btn.getBoundingClientRect();
            lineBorder.current.style.transform = `translateX(${btnRect.x}px)`;
            lineBorder.current.style.width = `${btnRect.width - 10}px`;
        }
    };

    useEffect(() => {
        const index = tabs.findIndex(tab => tab.key === activeTab);
        moveLineBorder(index);
    }, [activeTab, tabs]);

    return (
        <div>
            <div className="box-button">
                {tabs.map((tab, index) => (
                    <button
                        key={tab.key}
                        onClick={() => handleTabClick(tab.key, index)}
                        className={`btn-custom-tabs ${activeTab === tab.key ? 'btn-color' : ''}`}
                        ref={el => btnRefs.current[index] = el}
                    >
                        {tab.title}
                    </button>
                ))}
                <div className="box-line"><div className="line" ref={lineBorder}></div></div>
            </div>
            <div>
                {tabs.map(tab => (
                    <div key={tab.key} style={{ display: activeTab === tab.key ? 'block' : 'none' }}>
                        <img src={tab.image} alt={`image ${tab.title}`} className="img-customTabs" />
                        <p className="text-custom-tabs">
                            {tab.content}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomTabs;


