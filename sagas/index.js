import { put, takeEvery, all, call } from 'redux-saga/effects'

const deley = (ms) => new Promise(res => setTimeout(res, ms))

function* helloSaga() {
    console.log('Hello Sagas!')
}

function* incrementAsync() {
    console.log('run2')
    let result = yield call(deley, 1000)
    console.log('result', result)
    yield put({ type: 'INCREMENT' })

}

function* watchIncrementAsync() {
    console.log('run1')
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export default function* rootSaga() {
    yield all([
      helloSaga(),
      watchIncrementAsync()
    ])
  }