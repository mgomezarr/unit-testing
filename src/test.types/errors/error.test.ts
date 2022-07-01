import { errorHere } from "./error";

describe('Testing Error types', () => {
    
    test('Test that shows no error', () => {
        expect(() => {
            errorHere();
        }).not.toThrow();
    });
    
    test('Test that shows no specific Syntax Error', () => {
        expect(() => {
            errorHere();
        }).not.toThrow(SyntaxError);
    });
    
    // // ----------------------------------------
    
    // test('Test that check if returns error - any error type', () => {
    //     expect(() => {
    //         errorHere('boom');
    //     }).toThrow();
    // });
    
    // test('Test that check if returns specific SyntaxError', () => {
    //     expect(() => {
    //         errorHere('boom');
    //     }).toThrow(SyntaxError);
    // });
    
    // test('Test that check if not returns another error type', () => {
    //     expect(() => {
    //         errorHere('boom');
    //     }).not.toThrow(ReferenceError);
    // });
    
    
});