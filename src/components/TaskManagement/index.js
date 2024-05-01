import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import TodoLists from '../TodoLists'
import Header from '../Header'

import './index.css'

class TaskManagement extends Component {
  state = {
    inputValue: '',
    userName: '',
    todoList: [],
    search: '',
    errorMsg: '',
    emptyInput: '',
  }

  onSubmitForm = event => {
    event.preventDefault()

    const {inputValue, userName, checked} = this.state
    const newList = {
      id: uuidv4(),
      inputValue,
      userName,
      checked,
    }
    if (inputValue.length === 0 || userName.length === 0) {
      this.setState({errorMsg: '*Enter valid Details', emptyInput: ''})
    } else {
      this.setState(prevState => ({
        todoList: [...prevState.todoList, newList],
        inputValue: '',
        userName: '',
        errorMsg: '',
        emptyInput: '',
      }))
    }
  }

  onChangeInputValue = e => {
    this.setState({inputValue: e.target.value})
  }

  onChangeUserName = e => {
    this.setState({userName: e.target.value})
  }

  renderInputContainer = () => {
    const {inputValue, userName, errorMsg} = this.state

    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        <label htmlFor="userName" className="tasks">
          Enter User Name
        </label>
        <input
          type="text"
          className="username-input"
          id="userName"
          placeholder="Enter Name"
          onChange={this.onChangeUserName}
          value={userName}
        />
        <label htmlFor="task" className="tasks">
          Enter Task
        </label>
        <input
          type="text"
          className="input"
          id="task"
          placeholder="Enter Task"
          onChange={this.onChangeInputValue}
          value={inputValue}
        />
        <p className="error-msg">{errorMsg}</p>
        <button type="submit" className="button">
          Add Task
        </button>
      </form>
    )
  }

  deleteList = id => {
    const {todoList} = this.state
    const updatedList = todoList.filter(eachData => eachData.id !== id)
    this.setState({
      todoList: updatedList,
    })
    localStorage.removeItem('todoList')
  }

  editList = (id, newValue, newUser) => {
    const {todoList} = this.state
    const updatedList = todoList.filter(eachData => eachData.id !== id)
    this.setState({
      todoList: updatedList,
    })
    this.setState({inputValue: newValue, userName: newUser})
  }

  searchInput = event => {
    this.setState({search: event.target.value})
  }

  renderSearchBar = () => (
    <div className="search-input-container">
      <input
        type="search"
        className="search-input"
        onChange={this.searchInput}
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
        alt="search icon"
        className="search-icon"
      />
    </div>
  )

  onClickSaveButton = () => {
    const {todoList} = this.state
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }

  renderTodoLists = () => {
    const {todoList, search, emptyInput} = this.state
    const searchResults = todoList.filter(eachData =>
      eachData.userName.toLowerCase().includes(search.toLowerCase()),
    )

    return (
      <ul className="todo-ul">
        {searchResults.map(eachData => (
          <TodoLists
            key={eachData.id}
            todoLists={eachData}
            deleteList={this.deleteList}
            editList={this.editList}
            emptyInputValue={emptyInput}
          />
        ))}
      </ul>
    )
  }

  render() {
    return (
      <>
        <Header />
        <div className="task-management-container">
          <h1 className="task-management-h1">Task Management</h1>
          <div className="input-container">
            {this.renderInputContainer()}
            <p className="tasks">My Tasks</p>
            {this.renderSearchBar()}
            {this.renderTodoLists()}
            <button
              type="button"
              className="button"
              onClick={this.onClickSaveButton}
            >
              Save
            </button>
          </div>
        </div>
      </>
    )
  }
}

export default TaskManagement
