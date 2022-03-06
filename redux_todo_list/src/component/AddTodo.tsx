import "../fontawesome-free-5.15.4-web/css/all.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Store } from "../redux/models";
import { addTodo, setNewDate, setNewTodo } from "../redux/actions";

const AddTodo = () => {
  const Todo = useSelector((state: Store) => state.newTodo);
  const Date = useSelector((state: Store) => state.newDate);
  const dispatch = useDispatch();

  return (
    <div className="col col-11 mx-auto">
      <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
        <div className="col ssss">
          <input
            type="text"
            className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded"
            placeholder="Add new ..."
            value={Todo}
            onChange={(e) => dispatch(setNewTodo(e.target.value))}
          />
        </div>

        <div className="col-auto m-0 px-2 d-flex align-items-center">
          <input
            className="  my-2 px-1 text-primary btn due-date-button"
            data-toggle="tooltip"
            data-placement="bottom"
            type="date"
            value={Date}
            onChange={(e) => dispatch(setNewDate(e.target.value))}
          />
        </div>
        <div className="col-auto px-0 mx-0 mr-2">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => dispatch(addTodo())}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
