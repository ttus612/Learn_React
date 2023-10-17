import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

ToDoFeature.propTypes = {
    
};

function ToDoFeature(props) {
    const toDoList = [
        {
            id:1,
            title: 'Eat'
        },
        {
            id:2,
            title: 'Sleep'
        },
        {
            id:3,
            title: 'Code'
        },
    ];
    return (
        <div>
            <h3>To do List</h3>
            <TodoList todoList={toDoList} />
        </div>
    );
}

export default ToDoFeature;