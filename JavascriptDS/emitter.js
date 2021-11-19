function Emitter() {
        let events = {};
        function subscribe(name, cb) {
                if(!events[name]) {
                        events[name] = []; 
                }
                events[name].push(cb);
                return { 
                        unsubscribe: function unsubscribe() {
                                const idx = events[name].indexOf(cb);
                                if(idx!==-1) {
                                        events[name].splice(idx, 1);   
                                } else {
                                        throw new Error(`Can't remove a listener. Event "${name}" doesn't exits.`);
                                }
                        }
                }

        }

        function emit(name, ...params) {
                if(events[name]) {
                        events[name].forEach(cb => {
                                cb(...params);
                        })  
                } else {
                        throw new Error(`Can't emit an event. Event "${name}" doesn't exits.`);
                }
        }

        return {
                subscribe,
                emit
        }

}

emitter = new Emitter();

// 1. Support subscribing to events.
sub = emitter.subscribe('event_name', callback);
sub2 = emitter.subscribe('event_name', callback2);

// 2. Support emitting events.
// This particular example should lead to the `callback` above being invoked with `foo` and `bar` as parameters.
emitter.emit('event_name', foo, bar);

// 3. Support unsubscribing existing subscriptions by releasing them.
sub.release(); // `sub` is the reference returned by `subscribe` above