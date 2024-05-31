import {call,put,takeEvery  } from "redux-saga/effects";
import { getCatsSuccess } from "../redux/catState";
function* catSaga(){
    console.log('function catSaga');
    yield takeEvery('cats/getCatsFetch',workGetCatFetch)
}

function* workGetCatFetch(){
    console.log('function workGetCatFetch');
    const cats=yield call(()=>fetch('https://api.thecatapi.com/v1/breeds'))
    console.log(cats,'data')
    const formateCats=yield cats.json();
    yield put (getCatsSuccess(formateCats));
}
export default catSaga