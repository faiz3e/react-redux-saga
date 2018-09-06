import { call, put } from "redux-saga/effects";



const getData = () => {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/todosss')
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

function* getTodos() {
    console.log("sam");
    try {
        yield put({ type: 'GETTING_TODOS' });
        const data = yield call(getData);
        yield put({ type: 'GETTING_TODOS_SUCCESS', payload: { data: data } });
    } catch (error) {
        yield put({ type: 'GETTING_TODOS_FAILED', error: error });
    }
}

export default getTodos;