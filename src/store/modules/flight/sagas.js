import React from "react";
import { all, call, takeLatest, put, delay } from 'redux-saga/effects';

import api from '~/services/api';
import { AddFlights, FlightTypes } from './actions';
import { addToast } from '../toast/actions';

export function* getFlights({ payload }) {
  yield delay(50);
  
  const response = yield call(
    api,
    'get',
    '/flights',
    {},
    {page: payload.page}
  );

  const { data, status } = response;
  
  switch (status) {
    case 200:
      yield put(
        AddFlights(
          data.original.data,
          data.original.last_page,
          data.original.current_page,
          data.original.per_page,
          data.original.total
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

export function* createFlight({ payload }) {
  const date_array = payload.date_hour.split(' ');
  const date_ymd = date_array[0].split('/');

  const response = yield call(
    api, 
    'post', 
    `/flights`, 
    {
      origin_id: payload.origin_id,
      destiny_id: payload.destiny_id,
      date_hour: `${date_ymd[2]}-${date_ymd[1]}-${date_ymd[0]} ${date_array[1]}`,
    }
  );
  const { data, status } = response;

  switch (status) {
    case 200:
      yield put(
        addToast({
          titulo: 'Voo registrado com sucesso.',
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

export function* updateFlight({ payload }) {
  const response = yield call(
    api,
    'put',
    `/flights/${payload.id}`,
    {},
    {
      origin_id: payload.origin_id,
      destiny_id: payload.destiny_id,
      date_hour: payload.date_hour
    }
  );
  const { data, status } = response;

  switch (status) {
    case 200:
      yield put(
        addToast({
          titulo: 'Voo modificado com sucesso.',
          texto: '',
          tipo: 'success',
        })
      );
      break;
    case 404:
      yield put(
        addToast({
          titulo: 'Voo não encontrado.',
          texto: '',
          tipo: 'warning',
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
  takeLatest(FlightTypes.FLIGHTS_REQUEST, getFlights),
  takeLatest(FlightTypes.CREATE_FLIGHT, createFlight),
  takeLatest(FlightTypes.UPDATE_FLIGHT, updateFlight),
]);
