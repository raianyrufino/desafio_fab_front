import React from "react";
import { all, call, takeLatest, put, delay } from 'redux-saga/effects';

import api from '~/services/api';
import { AddLocations, LocationTypes } from './actions';
import { addToast } from '../toast/actions';

export function* getLocations({ payload }) {
  yield delay(50);

  const response = yield call(
    api,
    'get',
    '/locations',
    {},
    {page: payload.page}
  );
  const { data, status } = response;

  switch (status) {
    case 200:
      yield put(
        AddLocations(
            data.original,
        )
      );
      break;
    default:
      yield put(
        addToast({
          titulo: 'Ocorreu um erro no servidor!',
          texto: 'Tente novamente mais tarde, por favor.',
          tipo: 'danger',
        })
      );
  }
}

export function* createLocation({ payload }) {
  const response = yield call(
    api,
    'post',
    `/locations`,
    {
      zip_code: payload.zip_code,
      country: payload.country,
      city: payload.city,
      state: payload.state
    },
    {}
  );
  const { data, status } = response;

  switch (status) {
    case 200:
      yield put(
        addToast({
          titulo: 'Localização registrada com sucesso',
          texto: '',
          tipo: 'success',
        })
      );
      break;
    case 406:
      yield put(
        addToast({
          titulo: response.data.erro,
          texto: '',
          tipo: 'warning',
        })
      );
      break;
    default:
      yield put(
        addToast({
          titulo: 'Ocorreu um erro no servidor!',
          texto: 'Tente novamente mais tarde, por favor.',
          tipo: 'danger',
        })
      );
  }
}

export default all([
  takeLatest(LocationTypes.LOCATIONS_REQUEST, getLocations),
  takeLatest(LocationTypes.CREATE_LOCATION, createLocation),
]);
