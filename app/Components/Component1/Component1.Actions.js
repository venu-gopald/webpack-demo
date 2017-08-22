import * as types from './Component1.Constants';

export const addData = text => ({ type: types.ADD_DATA, text });
export const deleteData = () => ({ type: types.DELETE_DATA });
export const editData = (id, text) => ({ type: types.EDIT_DATA, id, text });
export const clearStore = () => ({ type: types.CLEAR_STORE });
