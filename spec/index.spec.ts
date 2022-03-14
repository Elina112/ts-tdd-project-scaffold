import {add} from '../src'
import { getNextQuality } from '../src/index'

describe("should return sum when add given two number", () => {
    test("should return 3 when add given number 1, 2", () => {
        expect(add(1, 2)).toBe(3);
    });

    // 常规商品
    test("should return 10 when add given number 10, 20", () => {
        expect(getNextQuality(10, 20, 'merchandise')).toBe(19);
    });

    test("should return 3 when add given number 1, 2", () => {
        expect(getNextQuality(3, 6, 'merchandise')).toBe(5);
    });

    test("should return 3 when add given number 1, 2", () => {
        expect(getNextQuality(2, 5, 'merchandise')).toBe(4);
    });

    test("should return 3 when add given number 1, 2", () => {
        expect(getNextQuality(0, 6, 'merchandise')).toBe(4);
    });

    test("should return 3 when add given number 1, 2", () => {
        expect(getNextQuality(-1, 4, 'merchandise')).toBe(2);
    });

    test("should return 3 when add given number 1, 2", () => {
        expect(getNextQuality(-1, 6, 'merchandise')).toBe(3);
    });

    test("should return 3 when add given number 1, 2", () => {
        expect(getNextQuality(-2, 4, 'merchandise')).toBe(0);
    });
});

describe("should return sum when add given two number", () => {
    // 后台门票
    test("should return 10 when add given number 10, 20", () => {
        expect(getNextQuality(15, 20, 'Backstage pass')).toBe(21);
    });

    test("should return 3 when add given number 1, 2", () => {
        expect(getNextQuality(14, 21, 'Backstage pass')).toBe(22);
    });

    test("should return 3 when add given number 1, 2", () => {
        expect(getNextQuality(10, 45, 'Backstage pass')).toBe(45);
    });

    test("should return 3 when add given number 1, 2", () => {
        expect(getNextQuality(9, 47, 'Backstage pass')).toBe(6);
    });
});

describe("should return sum when add given two number", () => {
    // 萨弗拉斯
    test("should return 10 when add given number 10, 20", () => {
        expect(getNextQuality(0, 45, 'Sulfuras')).toBe(45);
    });

    test("should return 3 when add given number 1, 2", () => {
        expect(getNextQuality(-1, 45, 'Sulfuras')).toBe('error');
    });

    test("should return 3 when add given number 1, 2", () => {
        expect(getNextQuality(-1, 50, 'Sulfuras')).toBe('error');
    });

    test("should return 3 when add given number 1, 2", () => {
        expect(getNextQuality(-1, 1, 'Sulfuras')).toBe(6);
    });
});

describe("should return sum when add given two number", () => {
    // 萨弗拉斯
    test("should return 10 when add given number 10, 20", () => {
        expect(getNextQuality(2, 0, 'Aged Brie')).toBe(0);
    });

    test("should return 3 when add given number 1, 2", () => {
        expect(getNextQuality(1, 1, 'Aged Brie')).toBe(1);
    });

    test("should return 3 when add given number 1, 2", () => {
        expect(getNextQuality(2, 49, 'Aged Brie')).toBe(49);
    });

    test("should return 3 when add given number 1, 2", () => {
        expect(getNextQuality(1, 50, 'Aged Brie')).toBe('error');
    });
});