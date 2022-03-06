import { Todo } from "./models";

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const SET_NEWTODO = "SET_NEWTODO";
export const SET_NEWDATE = "SET_NEWDATE";
export const SET_TODOS = "SET_TODOS";
export const GET_TODOS = "GET_TODOS";
export const COMPLETED_TODO = "COMPLETED_TODO";

export type Action =
  | { type: typeof ADD_TODO }
  | { type: typeof DELETE_TODO; payload: number }
  | {
      type: typeof UPDATE_TODO;
      payload: {
        id: number;
        title: string;
      };
    }
  | {
      type: typeof COMPLETED_TODO;
      payload: number;
    }
  | { type: typeof SET_NEWTODO; payload: string }
  | { type: typeof SET_NEWDATE; payload: string }
  | { type: typeof GET_TODOS; payload: Todo[] };
