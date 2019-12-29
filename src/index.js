import React from 'react'; 
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import ItemStatusFilter from './components/item-status-filter';
import './index.css'

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


ReactDOM.render(<App />, document.getElementById('root'));