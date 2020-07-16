import React from 'react';
import TasksForm from '../tasks/TasksForm';

const Tasks = (props) => {
    const tasks = props.tasks.length ? (
        props.tasks.map((task, index) => {
            return (
                <div className="tasks-container" unselectable="on" key={index}>
                    <div className="line">
                        <span className="task-complete" style={{opacity : props.completedTasks.includes(index) ? .2 : 1}} onClick={() => {props.completeTask(index)}}>
                            <span className="item">{task}</span>
                        </span>
                    </div>
                </div>
            )
        })
    ) : ( 
        <div></div>
    )
        
    return (
        <div className="my-tasks-container">
            <h1>today's tasks</h1>
            <button className="remove-btn" onClick={props.removeTasks}>( refresh list )</button>
            <TasksForm
                value = {props.value}
                handleChange = {props.handleChange}
                handleSubmit = {props.handleSubmit}
            />
            {tasks}
        </div>
    )
}
export default Tasks;