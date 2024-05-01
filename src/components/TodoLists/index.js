import {Component} from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TiEdit} from 'react-icons/ti'

import './index.css'

class TodoLists extends Component {
  state = {
    isSubmit: false,
  }

  onClickCheckbox = () => {
    this.setState(prevState => ({
      isSubmit: !prevState.isSubmit,
    }))
  }

  render() {
    const {todoLists, deleteList, editList, emptyInputValue} = this.props
    const {isSubmit} = this.state

    const inputClassName = isSubmit ? 'task-line-through' : 'task'

    const taskStatus = isSubmit ? 'Completed' : 'Started'

    const {inputValue, userName, id} = todoLists

    const onRemoveList = () => {
      deleteList(id)
    }

    const onEditList = () => {
      editList(id, inputValue, userName)
    }

    const inputLen = inputValue.length === 0

    return (
      <>
        {inputLen ? (
          <p className="empty-list-heading">{emptyInputValue}</p>
        ) : (
          <div className="task-list-div">
            <div>
              <p className="task">
                <span className="name-details">Person: </span> {userName}
              </p>
            </div>
            <p className="task">
              {' '}
              <span className="name-details">Task Status: </span>
              {taskStatus}
            </p>

            <li className="todo-li">
              <div className="input-value-container">
                <span className="name-details">Task: </span>
                <p className={inputClassName}>{inputValue}</p>
              </div>
              <div className="buttons-container">
                <input
                  type="checkbox"
                  className="check-box-input"
                  onClick={this.onClickCheckbox}
                />
                <button
                  type="button"
                  className="icon-button"
                  onClick={onEditList}
                >
                  <TiEdit color="#ffffff" size={20} />
                </button>
                <button
                  className="icon-button"
                  type="button"
                  onClick={onRemoveList}
                >
                  <AiFillCloseCircle color="#ffffff" size={20} />
                </button>
              </div>
            </li>
          </div>
        )}
      </>
    )
  }
}

export default TodoLists
