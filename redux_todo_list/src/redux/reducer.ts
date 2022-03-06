import { Store, Todo } from "./models";
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

const updateTodo = (todos: Todo[], id: number, title: string): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    title: todo.id === id ? title : todo.title,
  }));

const completedTodo = (todos: Todo[], id: number): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    completed: todo.id === id ? !todo.completed : todo.completed,
  }));

const removeTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter((todo) => todo.id !== id);

const addTodo = (todos: Todo[], title: string, date: string): Todo[] => [
  {
    id: Date.now(),
    title,
    date,
    status: "ALL",
    completed: false,
  },
  ...todos,
];

function todoReducer(
  state: Store = {
    todos: [],
    newDate: "",
    newTodo: "",
  },
  action: Action
) {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    case SET_NEWTODO:
      return {
        ...state,
        newTodo: action.payload,
      };
    case SET_NEWDATE:
      return {
        ...state,
        newDate: action.payload,
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: updateTodo(state.todos, action.payload.id, action.payload.title),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: removeTodo(state.todos, action.payload),
      };
    case ADD_TODO:
      return {
        ...state,
        newTodo: "",
        newDate: "",
        todos: addTodo(state.todos, state.newTodo, state.newDate),
      };
    case COMPLETED_TODO:
      return {
        ...state,
        todos: completedTodo(state.todos, action.payload),
      };
    default:
      return state;
  }
}

export default todoReducer;
