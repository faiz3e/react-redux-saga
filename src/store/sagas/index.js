
import getTodos from './todoSaga'
import { takeLatest } from "redux-saga/effects";

function * mySaga() {
    yield takeLatest("GET_TODOS", getTodos);
}
export default mySaga ;
