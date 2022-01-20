import {add} from '../src'

describe("should return sum when add given two number", () => {
    test("should return 3 when add given number 1, 2", () => {
        expect(add(1, 2)).toBe(3);
    });
});