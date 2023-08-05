
import React from "react";

import { useSelector,useDispatch } from "react-redux";
import TodoDeleteAlert from "./TodoDeleteAlert";
import { TodoEditAlert } from "./TodoEditAlert";
import { ToggleComplete } from "../../redux/state/todo/TodoSlice";
const TodoList = () => {
  const todoItems = useSelector((state) => state.todo.value);
  const dispatch = useDispatch(); 
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">No</th>
                <th scope="col">Task Name</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {todoItems.map((item,i) => {
                return (
                  <tr key={i.toString()}>
                    <td>{i}</td>
                    <td>{item}</td>
                    <td>
                      <input
                        type="checkbox"
                        checked={item.completed}
                        onChange={() => dispatch(ToggleComplete(i))}
                      />
                    </td>
                    <td>
                      <button onClick={()=>{TodoEditAlert(i,item)}}  className="btn  btn-success">Edit</button>
                    </td>
                    <td>
                      <button onClick={()=>{TodoDeleteAlert(i)}} className="btn  btn-danger">Delete</button>
                    </td>
                  </tr>
                );
              })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default TodoList;
