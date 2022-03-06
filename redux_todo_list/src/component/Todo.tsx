import React from "react";

const Todo = ({
  editTitle,
  onEdit,
  title,
  completed,
  date,
  setEditTitle,
  deleteTodo,
  completedTodo,
  onClickEdit,
}: any) => {
  return (
    <div className="col px-1 m-1 d-flex align-items-center sss">
      <input
        className=" ssssss text-primary btn m-0 p-0 d-none"
        type="checkbox"
        checked={completed}
        onChange={completedTodo}
      />

      <input
        className="form-control-lg border-0 edit-todo-input bg-transparent rounded px-3"
        defaultValue={onEdit ? editTitle : title}
        disabled={!onEdit}
        onChange={setEditTitle}
      />

      <div className="col-auto m-1 p-0 todo-actions">
        <div className="row d-flex align-items-center justify-content-end">
          {onEdit ? (
            <i
              onClick={onClickEdit}
              className="fas fa-check text-info btn m-0 p-0 edit"
            ></i>
          ) : (
            <i
              className="fas fa-edit text-info btn m-0 p-0"
              onClick={onClickEdit}
            ></i>
          )}

          <h5 className="m-0 p-0 px-2">
            <button className="btn_delete">
              <i
                onClick={deleteTodo}
                className="fas fa-trash-alt text-danger btn m-0 p-0"
                data-placement="bottom"
                title="Deletetodo"
              />
            </button>
          </h5>
        </div>
        <div className="row todo-created-info">
          <div className="col-auto d-flex align-items-center pr-2">
            <i
              className="fa fa-info-circle my-2 px-2 text-black-50 btn"
              data-placement="bottom"
              title="Deletetodo"
              data-original-title="Created date"
            />
            <label className="date-label my-2 text-black-50">{date} </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
