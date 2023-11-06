import './Cards.css'

export const BlockCards = () => {
    return (
        <>
            <section className="block-cards">
                <div className="cards-1">
                    <img className="cards-1-img" src="https://cdn.icon-icons.com/icons2/516/PNG/512/read_book_study_icon-icons.com_51077.png" alt="" />
                    <p className="p-cards-1">Learning</p>
                </div>
                <div className="cards-2">
                    <img className="cards-1-img" src='https://cdn.icon-icons.com/icons2/651/PNG/512/Icon_Business_Set_00005_A_icon-icons.com_59846.png' />
                    <p className="p-cards-2">Philosophy</p>
                    <img src="" alt="" />
                </div>
                <div className="cards-3">
                    <img className="cards-1-img" src='https://cdn.icon-icons.com/icons2/1358/PNG/512/if-advantage-teamwork-1034367_88840.png' />
                    <p className="p-cards-3">Practice</p>
                    <img src="" alt="" />
                </div>
                <div className="cards-4">
                    <img className="cards-1-img" src='https://cdn.icon-icons.com/icons2/58/PNG/256/sonyplaystation_game_pillow_11856.png' />
                    <p className="p-cards-4">Games</p>
                    <img src="" alt="" />
                </div>
            </section>
        </>
    )
}