import { Todo } from "./models";
import {
  Action,
  DELETE_TODO,
  SET_NEWTODO,
  SET_NEWDATE,
  UPDATE_TODO,
  GET_TODOS,
  ADD_TODO,
  COMPLETED_TODO,
} from "./acionTypes";

export const addTodo = (): Action => ({ type: ADD_TODO });

export const deleteTodo = (id: number): Action => ({
  type: DELETE_TODO,
  payload: id,
});

export const completedTodo = (id: number): Action => ({
  type: COMPLETED_TODO,
  payload: id,
});

export const updateTodo = (id: number, title: string): Action => ({
  type: UPDATE_TODO,
  payload: {
    id,
    title,
  },
});

export const setNewTodo = (title: string): Action => ({
  type: SET_NEWTODO,
  payload: title,
});

export const setNewDate = (date: string): Action => ({
  type: SET_NEWDATE,
  payload: date,
});

export const getTodos = (todos: Todo[]): Action => ({
  type: GET_TODOS,
  payload: todos,
});
