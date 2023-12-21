import { useSelector } from "react-redux";

export const  useWordsSelector = () =>  useSelector((store) => store.words )
export const useLearnedSelector = () => useSelector((store) => store.learnedWords)
    
