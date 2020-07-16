import React from 'react';

const TasksForm = (props) => {
    return (
        <div className="tasksform-content">
            <form className="tasks-form" onSubmit={props.handleSubmit}>
                <input 
                    id="tasks" 
                    name="tasks-list"
                    autoComplete="off"
                    value={props.value}
                    onChange={props.handleChange}
                    required={true}
                    placeholder=""
                />
                <button className="tasks-form-btn" onSubmit={props.handleSubmit}>add</button>
            </form>
        </div>
    )
}
export default TasksForm;