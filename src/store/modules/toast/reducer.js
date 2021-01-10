import produce from 'immer';
import Omit from 'object.omit';
import { getUID } from '../../../utils';
import { ToastActions } from './actions';

const initialStatte = [];

export default function toast(state = initialStatte, action) {
  return produce(state, draft => {
    switch (action.type) {
      case ToastActions.ADD: {
        let toast = {
          ...{
            titulo: '',
            texto: '',
            tipo: 'primary',
            duracao: 10000,
          },
          ...action.payload,
        };

        if (toast.time === true) {
          toast.time = new Date();
        }
        return {
          ...state,
          [getUID()]: toast,
        };
      }
      case ToastActions.REMOVE: {
        if (!state[action.payload]) {
          return state;
        }
        return Omit(state, action.payload);
      }
      default:
        return state;
    }
  });
}