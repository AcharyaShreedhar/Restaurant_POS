import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchEmployees() {
  const json = yield fetch('http://localhost:4000/api/v1/employees')
        .then(response => response.json(), );   
        console.log('json',json) 
  yield put({ type: "EMPLOYEES_RECEIVED", json: json.data.employees, });
}
function* actionWatcher() {
     yield takeLatest('GET_EMPLOYEES', fetchEmployees)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}