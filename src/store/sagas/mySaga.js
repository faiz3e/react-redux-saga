
import getTodos from './todoSaga'
import { takeLatest } from "redux-saga/effects";

/**
 * takeLatest(pattern, saga, ...args)
 * Spawns a saga on each action dispatched to the Store that matches pattern.
 *  And automatically cancels any previous saga task started previous if it's still running.
 * Each time an action is dispatched to the store. And if this action matches pattern,
 *  takeLatest starts a new saga task in the background. If a saga task was started previously (on the last action dispatched before the actual action), 
 * and if this task is still running, the task will be cancelled.
 * pattern: String | Array | Function - for more information see docs for take(pattern)
 * saga: Function - a Generator function
 * args: Array<any> - arguments to be passed to the started task. 
 * takeLatest will add the incoming action to the argument list (i.e. the action will be the last argument provided to saga)
 */
function * mySaga() {
    yield takeLatest("GET_TODOS", getTodos);
}
export default mySaga ;
