import { useState, useEffect } from "react";
import './Timer.css'
export const Timer = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const timeCount = setTimeout(() => {
            setCount(prevState => prevState + 1)
        }, 1000)
        return () => {
            clearTimeout(timeCount)
        }
    }, [count]);

    return (
        <section>
            <h3>Timer</h3>
            {count < 500 ? <div className="count-info">{`Timer: ${count}`}</div> : null}
        </section>
    )
}