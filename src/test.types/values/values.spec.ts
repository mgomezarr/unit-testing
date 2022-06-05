import { dummyArray, DummyClass, dummyClass, dummyNaN, dummyNull, dummyNumber, dummyQuote, dummyUndefined, dummyWord } from "./values";

describe('Testing values', () => {

    test('Test if equal', () => {
        expect(dummyWord).toEqual('Webhelp');
        expect(dummyWord).toEqual(expect.anything());
        // expect(dummyArray[1].month).toEqual('october');
        // expect(dummyWord == 'Webhelp').toBeTruthy(); // Conditionals, as a "boolean" data type, can be validated this way as well.
    });

    test('Test if equal with .toBe', () => {
        // Use .toBe to compare primitive values, not OOP objects because of the different instances.
        expect(dummyNumber).toBe(57);
    });

    test('Test if matches even with another elements', () => {
        // Check if some element or elements (string, object, etc) is in the array
        expect(dummyArray).toEqual(expect.arrayContaining([31, true]));
        // It fails if some of declared is in the expected
        // expect(dummyArray).not.toEqual(expect.arrayContaining([99]));
    });

    test('Test with regex', () => {
        // Use this, for example, if you want to know if there's a pattern or substring in a whole string.
        expect(dummyQuote).toMatch(/KnowledgeTransfer/);
    });

    test('Test if NaN', () => {
        expect(dummyNaN).toBeNaN();
        // expect(dummyNull).toBeNaN(); // This is gonna crash because of different data types.
        // expect(dummyNaN).not.toBeNaN();
    });

    test('Test if null', () => {
        expect(dummyNull).toBeNull();
        // expect(dummyNull).not.toBeNull();
    });

    test('Test if Undefined', () => {
        expect(dummyUndefined).toBeUndefined();
    });

    test('Test if is an instance of a class', () => {
        expect(dummyClass).toBeInstanceOf(DummyClass);
        // expect(typeof dummyNumber).toBe("number"); // Another way
    });


});