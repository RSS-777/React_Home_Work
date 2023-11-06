import './Education.css'
export const Education = () => {
    return (
        <section className="block-education">
            <h4 className="education-h4">ABOUT US</h4>
            <h2 className="education-h2">Best Pre School Education!</h2>
            <div className="container-cards-images">
                <img className="image-hero" src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/ca5339361f8853548066bb08/b7040d72be0edade2d96c5faa0198690.jpg" alt="" />
                <div className="block-images-text">
                    <div className="text-teachers">
                        <div className="div-logo"></div>
                        <h4 className="h4">TEACHERRS</h4>
                        <p className="text">
                            Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
                        </p>
                        <a href="#" className="a1">READ MORE</a>
                    </div>
                    <div className="text-mission">
                        <div className="div-logo2"></div>
                        <h4 className="h4">OUR MISSION</h4>
                        <p className="text">
                            Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
                        </p>
                        <a href="#" className="a2">READ MORE</a>
                    </div>
                    <img src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/d3bfc71acd69527589c31f1b/d.jpg" alt="children" className='children-1' />
                    <img src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/bf90812ae3b351c4942c0350/dfv.jpg" alt="children" className='children-2' />
                </div>
            </div>
        </section>
    )
}