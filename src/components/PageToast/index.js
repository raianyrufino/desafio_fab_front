import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import $ from 'jquery';
import { removeToast } from '../../store/modules/toast/actions';
import './style.scss';

export default function PageToast() {
  const dispatch = useDispatch();

  const toasts = useSelector(state => state.toast);
  const removerToast = (uid, duracao) => {
    setTimeout(() => {
      $(`#${uid}`)
        .removeClass('animate__fadeInRight')
        .addClass('animate__fadeOutRight');
      setTimeout(() => {
        dispatch(removeToast(uid));
      }, 500);
    }, duracao);
  };

  const listarErros = dados => {
    return (
      <ul>
        {Object.keys(dados).map((item, index) => {
          return <li key={index.toString()}>{dados[item]}</li>;
        })}
      </ul>
    );
  };

  return (
    <div className="jq-toast-wrap top-right">
      {Object.keys(toasts)
        .reverse()
        .map(uid => {
          const toast = toasts[uid];
          removerToast(uid, toast.duracao);
          return (
            <div
              key={uid}
              id={uid}
              className={`jq-toast-single bg-${toast.tipo} animate__animated animate__fadeInRight mt-10`}
              style={{ textAlign: 'left', width: 'auto' }}
            >
              <span
                className="close-jq-toast-single p-2"
                onClick={() => {
                  dispatch(removeToast(uid));
                }}
              >
                ×
              </span>
              <h2 className="jq-toast-heading m-2 mt-3">{toast.titulo}</h2>
              {toast.texto instanceof Object ? (
                listarErros(toast.texto)
              ) : (
                <p className="m-2 mt-3">{toast.texto}</p>
              )}
            </div>
          );
        })}
    </div>
  );
}