import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

function* getProduct() {
  let data = yield fetch("https://fakestoreapi.com/products");
  data = yield data.json();

  yield put({ type: SET_PRODUCT_LIST, data });
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProduct);
}

export default productSaga;
