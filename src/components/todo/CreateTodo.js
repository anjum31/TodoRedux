import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { AddTodo } from "../../redux/state/todo/TodoSlice";


const CreateTodo = () => {
    const dispatch = useDispatch();
    const taskInput = useRef();

    const handleAddTodo = () => {
        const taskName = taskInput.current.value;
        dispatch(AddTodo(taskName));
        taskInput.current.value = ''; 
    };

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-10">
                    <input ref={taskInput} placeholder="Task Name" type="text" className="form-control" />
                </div>
                <div className="col-md-2">
                    <button onClick={handleAddTodo} className="btn btn-primary">Add Todo</button>
                </div>
            </div>
        </div>
    );
};

export default CreateTodo;

