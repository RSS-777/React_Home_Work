import './Button.css'
import { useState } from 'react';

export const Button = () => {
    const [nameClass, setnameClass] = useState('p-show')
    const changeNameClass = () => {
        setnameClass(nameClass === 'p-show' ? 'p-hide' : 'p-show')
    }
    return (
        <div>
            <button onClick={changeNameClass} className='btn-text'>On/off text</button>
            <div className="biogrophy">
                <h2>Steve Jobs biography</h2>
                <p className={nameClass}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/800px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg" alt="Steve Jobs" />
                    Steve Jobs was an American inventor, designer, and entrepreneur who was the cofounder, chief executive, and chairman of Apple Inc. Born in 1955 to two University of Wisconsin graduate students who gave him up for adoption, Jobs was smart but directionless, dropping out of college and experimenting with different pursuits before cofounding Apple with Steve Wozniak in 1976. Jobs left the company in 1985, launching Pixar Animation Studios, then returned to Apple more than a decade later. The tech giant’s revolutionary products, which include the iPhone, iPad, and iPod, have dictated the evolution of modern technology. Jobs died in 2011 following a long battle with pancreatic cancer.
                </p>

            </div>
        </div>
    )
}