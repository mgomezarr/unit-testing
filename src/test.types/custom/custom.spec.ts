// TS syntax just for transpilation purposes

export {};

// Creating the interface for our new matcher
interface CustomMatchers<R = unknown> {
    toBeWithinRange(floor: number, ceiling: number): R;
}

// Declaring custom matchers
declare global {
    namespace jest {
        interface Expect extends CustomMatchers {}
        interface Matchers<R> extends CustomMatchers<R> {}
        interface InverseAsymmetricMatchers extends CustomMatchers {}
    }
}

// ---------------- Test ----------------

describe('Custom testing', () => {
    
    // If you want to create your own tests, buld them with expect.extend()
    expect.extend({
        toBeWithinRange(value: number, start: number, end: number) {
            const okay = value >= start && value <= end;
            
            if (okay) {
                return {
                    message: () =>
                    `The value ${value} is okay`,
                    pass: true,
                };
            } else {
                return {
                    message: () =>
                    `The value ${value} is not okay`,
                    pass: false,
                };
            }
        },
    });
    
    test('Testing numeric ranges', () => {
        expect(100).toBeWithinRange(50, 200);
        expect(101).not.toBeWithinRange(0, 100);
        expect({apples: 6, bananas: 3}).toEqual({
            apples: expect.toBeWithinRange(1, 10),
            bananas: expect.not.toBeWithinRange(11, 20),
        });
    });
    
});