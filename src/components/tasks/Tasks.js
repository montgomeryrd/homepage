import React from 'react';
import TasksForm from '../tasks/TasksForm';

const itemStyle1 = {
    opacity: ".2",
    marginLeft: "10px"
}
const itemStyle2 = {
    opacity: "1"
}
const taskDivHeight1 = {
    height: "55px"
}
const taskDivHeight2 = {
    height: "100%"
}

const Tasks = (props) => {
    const tasks = props.tasks.length ? (
        props.tasks.map((task, index) => {
            return (
                <div className="tasks-container" unselectable="on" key={index}>
                    <div className="line">
                        <span className="task-complete" style={props.completedTasks.includes(index) ? itemStyle1 : itemStyle2} onClick={() => {props.completeTask(index)}}>
                            <span className="item">{task}</span>
                        </span>
                    </div>
                </div>
            )
        })
    ) : ( 
        <div className="empty-list">empty list</div>
    )
        
    return (
        <div className="my-tasks-container" style={props.tasks.length ? taskDivHeight2 : taskDivHeight1}>
            <h1>today's assignment</h1>
            <button className="remove-btn" onClick={props.removeTasks}>+ refresh list</button>
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