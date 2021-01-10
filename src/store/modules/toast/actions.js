export const ToastActions = {
    ADD: '@toast/ADD_TOAST',
    REMOVE: '@toast/REMOVE_TOAST',
  };
  
  export function addToast(dados) {
    return {
      type: ToastActions.ADD,
      payload: dados,
    };
  }
  
  export function removeToast(id) {
    return {
      type: ToastActions.REMOVE,
      payload: id,
    };
  }