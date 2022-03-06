import "../fontawesome-free-5.15.4-web/css/all.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Store } from "../redux/models";
import Todo from "./Todo";
import axios from "axios";
import {
  deleteTodo,
  updateTodo,
  getTodos,
  completedTodo,
} from "../redux/actions";


const ListTodo = () => {
  const todos = useSelector((state: Store) => state.todos);
  const [editTitle, setEditTitle] = useState("");
  const [filter, setFilter] = useState("all");
  const dispatch = useDispatch();

  const onClickEdit = (id: number) => {
    todos.forEach((todo: any) => {
      if (todo.id === id) {
        if (todo.onEdit) {
          todo.title = editTitle;
          todo.onEdit = false;
          dispatch(updateTodo(id, editTitle));
        } else {
          todo.onEdit = true;
          setEditTitle(todo.title);
          dispatch(updateTodo(id, editTitle));
        }
        return;
      } else {
        todo.onEdit = false;
      }
      return;
    });
  };
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      dispatch(getTodos(res.data));
    });
  }, [getTodos]);

  return (
    <>
      <div className="row m-1 p-3 px-5 justify-content-end">
        <div className="col-auto d-flex align-items-center">
          <label className="text-secondary my-2 pr-2 view-opt-label">
            Filter
          </label>
          <select
            className="custom-select custom-select-sm btn my-2"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="active">Active</option>
          </select>
        </div>
        <div className="col-auto d-flex align-items-center px-1 pr-3">
          <label className="text-secondary my-2 pr-2 view-opt-label">
            Sort
          </label>
          <select className="custom-select custom-select-sm btn my-2">
            <option>All</option>
            <option>Sort</option>
          </select>
          <i
            className="fa fa fa-sort-amount-asc text-info btn mx-0 px-0 pl-1"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Ascending"
          />
          <i
            className="fa fa fa-sort-amount-desc text-info btn mx-0 px-0 pl-1 d-none"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Descending"
          />
        </div>
      </div>
      {todos.length > 0 && filter === "all"
        ? todos.map((todo) => {
            return (
              <Todo
                setEditTitle={todo.title}
                onClickEdit={() => onClickEdit(todo.id)}
                onEdit={todo.onEdit}
                editTitle={todo.title}
                getTodos={getTodos}
                key={todo.id}
                id={todo.id}
                title={todo.title}
                completed={todo.completed}
                date={todo.date}
                deleteTodo={() => dispatch(deleteTodo(todo.id))}
                completedTodo={() => dispatch(completedTodo(todo.id))}
              />
            );
          })
        : null}

      {todos.length > 0 && filter === "active"
        ? todos.map((todo) => {
            return (
              todo.completed === false && (
                <Todo
                  setEditTitle={todo.title}
                  onClickEdit={() => onClickEdit(todo.id)}
                  onEdit={todo.onEdit}
                  editTitle={todo.title}
                  getTodos={getTodos}
                  key={todo.id}
                  id={todo.id}
                  title={todo.title}
                  completed={todo.completed}
                  date={todo.date}
                  deleteTodo={() => dispatch(deleteTodo(todo.id))}
                  completedTodo={() => dispatch(completedTodo(todo.id))}
                />
              )
            );
          })
        : null}
      {todos.length > 0 && filter === "completed"
        ? todos.map((todo) => {
            return (
              todo.completed === true && (
                <Todo
                  setEditTitle={todo.title}
                  onClickEdit={() => onClickEdit(todo.id)}
                  onEdit={todo.onEdit}
                  editTitle={todo.title}
                  getTodos={getTodos}
                  key={todo.id}
                  id={todo.id}
                  title={todo.title}
                  completed={todo.completed}
                  date={todo.date}
                  deleteTodo={() => dispatch(deleteTodo(todo.id))}
                  completedTodo={() => dispatch(completedTodo(todo.id))}
                />
              )
            );
          })
        : null}
    </>
  );
};

export default ListTodo;
