const Observable = require('./observer2');

const toastObservable = new Observable();

function toast(message) {
    toastObservable.notify({
        id: Date.now(),
        message: message,
        variant: 'default'
    });
}

toast.success = function(message) {
    toastObservable.notify({
        id: Date.now(),
        message: message,
        variant: 'success'
    });
};

toast.error = function(message) {
    toastObservable.notify({
        id: Date.now(),
        message: message,
        variant: 'error'
    });
};

// Test cases
describe('Observable', () => {
    test('should add and remove observers correctly', () => {
        const observer1 = jest.fn();
        const observer2 = jest.fn();

        const unsubscribe1 = toastObservable.subscribe(observer1);
        toastObservable.subscribe(observer2);

        toastObservable.notify('test');

        expect(observer1).toHaveBeenCalledWith('test');
        expect(observer2).toHaveBeenCalledWith('test');

        unsubscribe1();
        toastObservable.notify('test after unsubscribe');

        expect(observer1).toHaveBeenCalledTimes(1);
        expect(observer2).toHaveBeenCalledWith('test after unsubscribe');
    });

    test('should notify observers with correct data', () => {
        const observer = jest.fn();
        toastObservable.subscribe(observer);

        toast('Message 1');
        toast.success('Message 2');
        toast.error('Message 3');

        // Check notify
        expect(observer).toHaveBeenCalledWith(expect.objectContaining({
            message: 'Message 1',
            variant: 'default'
        }));
        expect(observer).toHaveBeenCalledWith(expect.objectContaining({
            message: 'Message 2',
            variant: 'success'
        }));
        expect(observer).toHaveBeenCalledWith(expect.objectContaining({
            message: 'Message 3',
            variant: 'error'
        }));
    });
});

describe('Toast function', () => {
    test('should call notify with default variant', () => {
        const notifySpy = jest.spyOn(toastObservable, 'notify');
        toast('Default Message');
        expect(notifySpy).toHaveBeenCalledWith(expect.objectContaining({
            message: 'Default Message',
            variant: 'default'
        }));
    });

    test('should call notify with success variant', () => {
        const notifySpy = jest.spyOn(toastObservable, 'notify');
        toast.success('Success Message');
        expect(notifySpy).toHaveBeenCalledWith(expect.objectContaining({
            message: 'Success Message',
            variant: 'success'
        }));
    });

    test('should call notify with error variant', () => {
        const notifySpy = jest.spyOn(toastObservable, 'notify');
        toast.error('Error Message');
        expect(notifySpy).toHaveBeenCalledWith(expect.objectContaining({
            message: 'Error Message',
            variant: 'error'
        }));
    });
});