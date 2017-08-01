 var React = require('react');
 var uuid = require('node-uuid');
 var moment = require('moment');

 var TodoList = require('TodoList');
 var AddTodo = require('AddTodo');
 var TodoSearch = require('TodoSearch');
 var TodoAPI = require('TodoAPI');

 var TodoApp = React.createClass({
   getInitialState: function() {
     return {
       todos: TodoAPI.getTodos(),
       showCompleted: false,
       searchText: ''
     }
   },
   componentDidUpdate: function() {
     TodoAPI.setTodos(this.state.todos);
   },
   handleSearch: function(showCompleted, searchText) {
     this.setState({
       showCompleted: showCompleted,
       searchText: searchText.toLowerCase()
     });
   },
   handleToggle: function(id) {
     var updatedTodos = this.state.todos.map((todo) => {
       if(todo.id === id) {
         todo.completed = !todo.completed;
         todo.completedAt = todo.completed ? moment().unix() : undefined;
       }
       return todo;
     });
     this.setState({todos: updatedTodos});
   },
   handleAddTodo: function(text) {
     this.setState({
       todos: [
         ...this.state.todos,
         {
           id: uuid(),
           text: text,
           completed: false,
           createdAt: moment().unix(),
           completedAt: undefined
         }
       ]
     });
   },
   render: function() {
     var {todos, showCompleted, searchText} = this.state;
     var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

     return(
       <div className='row'>
         <div className='column medium-6 small-4'>
           <TodoSearch onSearch={this.handleSearch}/>
           <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
           <AddTodo onAddTodo={this.handleAddTodo}/>
         </div>
       </div>
     );
   }
 });

 module.exports = TodoApp;
