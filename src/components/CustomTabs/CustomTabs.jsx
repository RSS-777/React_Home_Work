import { useState, useRef, useEffect } from "react";
import imgBill from "../../assets/BillGates.jpg";
import imgJobs from "../../assets/Jobs.jpg";
import imgMark from "../../assets/Mark.jpg";
import './CustomTabs.css'

const CustomTabs = () => {
    const [activeTab, setActiveTab] = useState('1');
    const btnButton1 = useRef(null)
    const btnButton2 = useRef(null)
    const btnButton3 = useRef(null)
    const lineBorder = useRef(null)

    useEffect(()=>{
        
    },[])
    


    const handleTabClick = (key) => {
        setActiveTab(key);
    };

    useEffect(() => {
        btnButton1.current.classList.remove('btn-color');
        btnButton2.current.classList.remove('btn-color');
        btnButton3.current.classList.remove('btn-color');

        if (activeTab === '1') {
            btnButton1.current.classList.toggle('btn-color')
            lineBorder.current.style.transform = 'translateX(5px)';
            lineBorder.current.style.width = '65px'; //які в тебе є ідеї щоб тут зробити ширину відносно слова?
        }
        if (activeTab === '2') {
            btnButton2.current.classList.toggle('btn-color')
            lineBorder.current.style.transform = 'translateX(110px)';
            lineBorder.current.style.width = '65px'; //які в тебе є ідеї щоб тут зробити ширину відносно слова?
        }
        if (activeTab === '3') {
            btnButton3.current.classList.toggle('btn-color')
            lineBorder.current.style.transform = 'translateX(220px)';
            lineBorder.current.style.width = '100px'; //які в тебе є ідеї щоб тут зробити ширину відносно слова?
        }
    }, [activeTab])


    return (
        <div>
            <div className="box-button">
                <button onClick={() =>  handleTabClick('1') } className="btn-custom-tabs" ref={btnButton1}>
                    Білл Гейтс
                </button>
                <button onClick={() =>  handleTabClick('2') } className="btn-custom-tabs" ref={btnButton2}>
                    Стів Джобс
                </button>
                <button onClick={() =>  handleTabClick('3') } className="btn-custom-tabs" ref={btnButton3}>
                    Марк Цукерберг
                </button>
                <div className="box-line"><div className="line" ref={lineBorder}></div></div>
            </div>
            <div>
                {activeTab === '1' && (
                    <div>
                        <img src={imgBill} alt="image Bill Gates" className="img-customTabs" />
                        <p className="text-custom-tabs">
                            Ві́льям Ге́нрі Гейтс III (англ. William Henry 'Bill' Gates III; нар. 28 жовтня 1955, Сіетл, США) — американський бізнесмен, інвестор, письменник, філантроп, засновник корпорації Майкрософт, співголова Фонду Білла і Мелінди Гейтсів.[8][9] Протягом кар'єри в Microsoft, Гейтс займав позиції голови ради директорів, CEO та головного архітектора[en], одночасно до травня 2014 також будучи найбільшим акціонером.
                            Microsoft був створений Гейтсом і Полом Алленом в 1975 і став найбільшою компанією з розробки програмного забезпечення для ПК.[10][a] Гейтс керував компанією як головний виконавчий директор, поки не залишив цю посаду в січні 2000 року, зостаючись головою ради директорів і створивши для себе посаду головного архітектора.
                        </p>
                    </div>
                )}
                {activeTab === '2' && (
                    <div>
                        <img src={imgJobs} alt="image Steve Jobs" className="img-customTabs" />
                        <p className="text-custom-tabs">
                            Сті́вен Пол Джобс (англ. Steven Paul Jobs, Steve Jobs; 24 лютого 1955, Сан-Франциско, Каліфорнія, США[14] — 5 жовтня 2011, Пало-Альто, Санта-Клара, Каліфорнія, США) — американський підприємець, бізнесмен, промисловий дизайнер і винахідник.
                            Був засновником, членом ради директорів і CEO (генеральним директором) корпорації Apple Inc. Джобс також раніше обіймав посаду CEO компанії Pixar Animation Studios; в 2006 році The Walt Disney Company придбав Pixar і Джобс став членом ради директорів Disney. У 1995 році в мультфільмі «Історія іграшок» він був зазначений як виконавчий продюсер.
                            Наприкінці 1970-х Джобс зі співзасновником компанії Apple Стівом Возняком створили один з перших комерційно успішних персональних комп'ютерів. На початку 1980-х Джобс був одним з перших, хто побачив потенціал керованого мишкою графічного інтерфейсу користувача, що призвело до створення Macintosh.
                        </p>
                    </div>
                )}
                {activeTab === '3' && (
                    <div>
                        <img src={imgMark} alt="image Mark Zuckerberg" className="img-customTabs" />
                        <p className="text-custom-tabs">
                            Цукерберг народився в Вайт-Плейнсі, штат Нью-Йорк, в єврейській сім'ї лікарів[13] (батько Едвард — стоматолог, мати Карен — психіатр). Крім сина Марка, у Цукербергів було ще троє доньок. Його прабабуся — Маня (Мінне) Візенталь (Mania (Minnie) Wiesenthal) — народилася у Скалі-Подільській[14].
                            Пристрасть Марка до програмування активно почала проявлятися в середній школі. До дев'ятого класу він випустив комп'ютерний варіант настільної гри «Ризик», яка була дуже популярною в той час. Але через захоплення програмуванням, на яке йшла велика кількість часу, Марк не міг похвалитися високими оцінками в університеті.
                            Після вступу до Гарварду Марк серйозно захопився хакерством[15]. У Гарварді не було бази даних з фотографіями студентів, яка була звичайним явищем у багатьох інших американських університетах. І Марк Цукерберг запропонував деканам і викладачам університету створити таку базу в Інтернеті, але його пропозиції не схвалили. Тоді він зламав університетську базу даних і почав активно розміщувати фотографії студенток парами на спеціально створеному ним сайті, де пропонував проголосувати за одну з двох фотографій, яка була привабливішою. Протягом кількох годин на сайт завітало 500 відвідувачів. Через скандал, що стався в Гарварді з цього приводу, ресурс вирішили закрити. Багато студентів просили керівництво університету відновити роботу ресурсу, і після активного тиску студентів рішення про закриття сайту скасували. Марк став знову успішно розвивати відроджений студентський сайт, який згодом перетворився на глобальну соціальну мережу Facebook.
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CustomTabs;


