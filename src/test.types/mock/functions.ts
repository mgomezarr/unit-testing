export class CalculatorClass {
    
    public ApplyOperation(a: number, b: number, mathOperationCallback: Function) {
        return mathOperationCallback(a, b);
    }
    
    private Addition(a: number, b: number) {
        return a + b;
    }

    private Subtraction(a: number, b: number) {
        return a - b;
    }

    public Multiplication(a: number, b: number) {
        return a * b;
    }

    private Division(a: number, b: number) {
        return a / b;
    }

}