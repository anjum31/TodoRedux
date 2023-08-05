import React from "react";
import CreateTodo from "../components/todo/CreateTodo";
import TodoList from "../components/todo/TodoList";
const TodoPage = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header pb-3">
              <h3 className="text-center m-3">My Todo App</h3>
            </div>
            <div className="card-body">
              <CreateTodo />
              <TodoList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TodoPage;
