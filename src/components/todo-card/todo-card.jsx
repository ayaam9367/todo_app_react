import React from 'react'
import './todo-card.css' 

const TodoCard = ({ title, description }) => {
    return (
        <div className='todoCard'>
            <div>
                <div className='card-title'>{title || 'Title'}</div>
            </div>
            <div className='card-description'>{description || 'Description'}</div>
        </div>

    )
}

export default TodoCard