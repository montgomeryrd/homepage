import React from 'react';
import Tasks from './components/tasks/Tasks';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value : "",
      _tasks : [],
      get tasks() {
        return this._tasks;
      },
      set tasks(value){
        this._tasks = value;
      },
      _completedTasks : [],
      get completedTasks() {
        return this._completedTasks;
      },
      set completedTasks(value){
        this._completedTasks = value;
      },
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('landingdata');
      this.setState({...JSON.parse(json)});
    } catch (error) {};
  }
  componentDidUpdate(prevProps, prevState) {  
    const json = JSON.stringify(this.state);
    localStorage.setItem('landingdata', json);
  }

  handleChange = (e) => {
    this.setState({value : e.target.value});
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.addTasks(this.state.value);
    this.setState({value : ""});
  }
  addTasks = (list) => {
    list = list.match(/(.+)/g);
    list = list.filter(task => task !== "");
    this.setState({tasks : this.state.tasks.concat(list)});
  }
  completeTask = (index) => {
    if(this.state.completedTasks.includes(index)) {
      const complete = this.state.completedTasks.filter(element => element !== index);
      this.setState({completedTasks : complete});
    } else {
      const complete = [...this.state.completedTasks, index];
      this.setState({completedTasks : complete});
    }
  }
  removeTasks = () => {
    const tasks = this.state.tasks.filter((task, index) => this.state.completedTasks.indexOf(index) === -1);
    this.setState({tasks : tasks});
    this.setState({completedTasks : []});
  }

  render() {
    return (
      <div className="App">
        <Tasks 
          value = {this.state.value}
          tasks = {this.state.tasks}
          completedTasks = {this.state.completedTasks}
          completeTask = {this.completeTask}
          removeTasks = {this.removeTasks}
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
