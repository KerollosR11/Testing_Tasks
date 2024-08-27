
const { handleKeyDown } = require('./functionTest');

// Mock global functions
global.alert = jest.fn();
console.log = jest.fn();

describe('handleKeyDown', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should alert ASCII code of character pressed alone', () => {
        const event = {
            key: 'a',
            charCode: 97,
            keyCode: 97,
            ctrlKey: false,
            altKey: false,
            shiftKey: false
        };

        handleKeyDown(event);

        expect(global.alert).toHaveBeenCalledWith('ascii code of character 97 pressed alone');
        expect(console.log).toHaveBeenCalledWith('key pressed alone');
    });

    test('should alert ASCII code of character pressed with Ctrl key', () => {
        const event = {
            key: 'a',
            charCode: 97,
            keyCode: 97,
            ctrlKey: true,
            altKey: false,
            shiftKey: false
        };

        handleKeyDown(event);

        expect(global.alert).toHaveBeenCalledWith('ascii code of character 97 pressed by Ctrl key');
        expect(console.log).toHaveBeenCalledWith('control pressed with the key');
    });

    test('should alert ASCII code of character pressed with Alt key', () => {
        const event = {
            key: 'a',
            charCode: 97,
            keyCode: 97,
            ctrlKey: false,
            altKey: true,
            shiftKey: false
        };

        handleKeyDown(event);

        expect(global.alert).toHaveBeenCalledWith('ascii code of character 97 pressed by alt key');
        expect(console.log).toHaveBeenCalledWith('alt pressed with the key');
    });

    test('should alert ASCII code of character pressed with Shift key', () => {
        const event = {
            key: 'a',
            charCode: 97,
            keyCode: 97,
            ctrlKey: false,
            altKey: false,
            shiftKey: true
        };

        handleKeyDown(event);

        expect(global.alert).toHaveBeenCalledWith('ascii code of character 97 pressed by Shift key');
        expect(console.log).toHaveBeenCalledWith('shift pressed with the key');
    });

    test('should not alert if key length is not 1', () => {
        const event = {
            key: 'Enter',
            charCode: 13,
            keyCode: 13,
            ctrlKey: false,
            altKey: false,
            shiftKey: false
        };

        handleKeyDown(event);

        expect(global.alert).not.toHaveBeenCalled();
    });
});
