export default Promise;

export var all = Promise.all.bind(Promise);
export var race = Promise.race.bind(Promise);
export var resolve = Promise.resolve.bind(Promise);
export var reject = Promise.reject.bind(Promise);A
