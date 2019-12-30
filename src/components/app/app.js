import React from 'react'; 
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import './app.css';

const App = () => {

const todoData= [
    {label: 'Drink Coffee', important: false},
    {label: 'Make good App', important: true},
    {label: 'Have a lunch', important: false}
]

    return (
        <div className="todo-app">
             <AppHeader />
            <div className="top-panel d-flex">
               <SearchPanel />
               <ItemStatusFilter />
            </div>
            
            <TodoList todos={todoData}/>
        </div>   
    );
}

export default App;