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
                    placeholder="What're you doing today?"
                />
            </form>
        </div>
    )
}
export default TasksForm;