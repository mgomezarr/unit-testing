import { dummyObject } from "./objects";

describe('Testing Object types', () => {

    const expected = {
        // accountId: '',
        // chatbotId: '',
        accountId: 'dummy account ID',
        chatbotId: 'dummy chatbot ID'
    }

    test('Test if strict match', () => {
        // Use .toMatch for regex | strings and .toMatchObject for objects
        // Use toMatchObject for strict comparison.
        expect(dummyObject).toMatchObject(expected);
    });

    test('Test if has specific properties', () => {
        // Use toMatchObject for strict comparison.
        expect(dummyObject).toHaveProperty('accountId');
        // expect(dummyObject).toHaveProperty('accountId', 'expectedAccountId');
        // expect(dummyObject).not.toHaveProperty('chatbotId'); // It doesn't even read this because the previous one actually failed.
    });



});