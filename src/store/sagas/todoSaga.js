import { call, put } from "redux-saga/effects";

/*
api call which will resolve or reject
 */
const getData = () => {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                if (response.status !== 200) {
                    reject('error');
                }
                return response.json()
            })
            .then((data) => {
                resolve(data);
            }).catch((error) => {
                reject(JSON.stringify(error));
            })
    });
}

/**
 * put(channel, action)
 * Creates an Effect description that instructs the middleware to put an action into the provided channel.
 * channel: Channel - a Channel Object.
 * action: Object - see Redux dispatch documentation for complete info
 * This effect is blocking if the put is not buffered but immediately consumed by takers. 
 * If an error is thrown in any of these takers it will bubble back into the saga.
 */
function* getTodos() {
    try {
        yield put({ type: 'GETTING_TODOS' });
        const data = yield call(getData);
        yield put({ type: 'GETTING_TODOS_SUCCESS', payload: { data: data } });
    } catch (error) {
        yield put({ type: 'GETTING_TODOS_FAILED', error: error });
    }
}

export default getTodos;