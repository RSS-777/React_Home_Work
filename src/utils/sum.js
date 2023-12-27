export const sum = (a, b) => a + b;

export const texting = (value) => {
    if (!value) return null;
    const words = value.split(" ");
    const newWords = words.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return newWords.join(" ");
};