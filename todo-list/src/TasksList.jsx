import React, { Component } from 'react';
import Task from './Task.jsx';
import CreateTaskInput from './CreateTaskInput.jsx';
import {
  createTask,
  fetchTasksList,
  updateTask,
  deleteTask,
} from './tasksGateway.js';

class TasksList extends Component {
  state = {
    tasks: [],
  };
  componentDidMount() {
    this.fetchTasks();
  }
  fetchTasks = () => {
    fetchTasksList().then((taskslist) =>
      this.setState({
        tasks: taskslist,
      })
    );
  };
  onCreate = (text) => {
    const newTask = {
      text,
      done: false,
    };
    createTask(newTask).then(() => this.fetchTasks());
  };
  handleTaskStatusChange = (id) => {
    const { done, text } = this.state.tasks.find((task) => task.id === id);
    const updatedTasks = {
      text,
      done: !done,
    };
    updateTask(id, updatedTasks).then(() => this.fetchTasks());
  };
  handleTaskDelete = (id) => {
    deleteTask(id).then(() => this.fetchTasks());
  };
  render() {
    const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);
    return (
      <div className="todo-list">
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className="list">
          {sortedList.map((task) => (
            <Task
              onChange={this.handleTaskStatusChange}
              onDelete={this.handleTaskDelete}
              key={task.id}
              {...task}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TasksList;
