import React from 'react';
import './todo-list-item.css';


class TodoListItem extends React.Component {
    
    onLabelClik
    
    render() {

    const  { label, important = false } =this.props;

    const style = {
        color: important ? 'steelblue' : 'black',
        fontWeight: important ? 'bold' : 'normal'
    }
    
    return (
        <span className="todo-list-item" style={style}
        onClick ={()=> console.log(`Done: ${label}`)}>
            <span className="todo-list-item-label">
                { label }
            </span>
    
            <button type="button" className="btn btn-outline-success btn-sm">  
                <i className="fa fa-exclamation" />
            </button>
    
            <button type="button" className="btn btn-outline-success btn-sm">  
                <i className="fa fa-trash-o" />
            </button>
        </span>
    );
    }
}

export default TodoListItem;