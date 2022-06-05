import { itReturnsTrue, itReturnsFalse } from "./bool";

describe('Testing Boolean types', () => {
    test('Test that returns true', () => {
        let returnsTrue = itReturnsTrue();
        expect(returnsTrue).toBeTruthy();
    });


    // test('Test that returns false', () => {
    //     let returnsTrue = itReturnsFalse();
    //     expect(returnsTrue).toBeFalsy();
    // });
});