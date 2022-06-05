import { CalculatorClass } from "./functions";

describe('Testing with mocks', () => {
    
    let applyOpFunction: Function;
    let dummyOperation: jest.Mock;
    
    applyOpFunction = new CalculatorClass().ApplyOperation;
    dummyOperation = jest.fn();
    
    //? dummyOperation = jest.fn(param => 5 * param);
    
    // beforeAll(() => {
    //     applyOpFunction = new CalculatorClass().ApplyOperation;
    //     dummyOperation = jest.fn();
    // });
    
    beforeEach(() => {
        applyOpFunction = new CalculatorClass().ApplyOperation;
        dummyOperation = jest.fn();
    });
    
    // afterEach(() => {
    //     applyOpFunction = new CalculatorClass().ApplyOperation;
    //     dummyOperation = jest.fn();
    // });
    
    test('Should run callback function', () => {
        applyOpFunction(1, 2, dummyOperation);        
        expect(dummyOperation).toBeCalled();
    });
    
    test('Should run callback function ONE time', () => {
        applyOpFunction(10, 8, dummyOperation);
        expect(dummyOperation).toBeCalledTimes(1);
    });
    
    test('Should receive specific params', () => {
        applyOpFunction(25, 20, dummyOperation);
        expect(dummyOperation).toBeCalledWith(25, 20);
        // expect(dummyOperation).toBeCalledWith(1, 2);
    });
    
    test('Should receive specific result', () => {
        let multiplication = new CalculatorClass().Multiplication;
        let result = applyOpFunction(20, 2, multiplication);
        expect(result).toEqual(40);
    });
});