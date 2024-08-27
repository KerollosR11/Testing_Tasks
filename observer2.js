
class Observable {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
        return () => {
            this.observers = this.observers.filter(obs => obs !== observer);
        };
    }

    notify(data) {
        this.observers.forEach(observer => observer(data));
    }
}

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

module.exports = Observable;
