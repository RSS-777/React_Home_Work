import { useDispatch } from "react-redux";
import { useWordsSelector, useLearnedSelector } from "../store/words/selectors";
import { markWord } from "../store/words/actions";

export const Home = () => {
    const allWords = useWordsSelector();
    const learnedWord = useLearnedSelector();
    const dispatch = useDispatch();
    
    const onClick = (work) => {
        const action = markWord(work);
        dispatch(action)
    }

    return (
        <div>
            <h2>Home</h2>
            <p>Words</p>
            <div>
                <ol>
                    {allWords.map((word, index) => (
                        <li key={index} onClick={() => onClick(word)} > {word} </li>
                    ))}
                </ol>
            </div>
            <p>Learn Words</p>
            <ol>
                {learnedWord.map((word) => (
                    <li key={word}>{word}</li>
                ))}
            </ol>
        </div>
    )
}