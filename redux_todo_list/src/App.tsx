import ListTodo from "./component/ListTodo";
import React from "react";
import AddTodo from "./component/AddTodo";

function App() {
  return (
    <div className="container m-5 p-2 rounded mx-auto bg-light shadow">
      <div className="row m-1 p-4">
        <div className="col">
          <div className="p-1 h1 text-primary text-center mx-auto display-inline-block">
            <i className="fa fa-check bg-primary text-white rounded p-2" />
            <u>My Todo-s</u>
          </div>
        </div>
      </div>
      <AddTodo />
      <div className="p-2 mx-4 border-black-25 border-bottom" />
      <ListTodo />
    </div>
  );
}

export default App;
