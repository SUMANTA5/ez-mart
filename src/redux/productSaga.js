import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, PRODUCT_SEARCH, SET_PRODUCT_LIST } from "./constant";

function* getProduct() {
  let data = yield fetch("https://fakestoreapi.com/products");
  data = yield data.json();

  yield put({ type: SET_PRODUCT_LIST, data });
}

function* searchProduct(data) {
  let result = yield fetch(`https://fakestoreapi.com/products/category/${data.query}`);
  result = yield result.json();
  console.log('api q', data)
  yield put({ type: SET_PRODUCT_LIST,data:result });
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProduct);
  yield takeEvery(PRODUCT_SEARCH, searchProduct);
}

export default productSaga;
