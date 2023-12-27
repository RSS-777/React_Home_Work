import { sum } from "./utils/sum";
import { texting } from "./utils/sum";

test('chec if 5 > 1',  () => {
    const myVar = 5;
    const mySecondVar = 1;
    const isBigger = myVar > mySecondVar;
    expect(isBigger).toBeTruthy();
});

test('test sum', () => {
    const result = sum( 5, 5)

    expect(result).toBe(10);
});

test('Test text', () => {
    expect(texting('Word word')).toBe('Word Word');
});