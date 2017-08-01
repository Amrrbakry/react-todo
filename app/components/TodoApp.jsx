 var React = require('react');
 var TodoList = require('TodoList');
 var AddTodo = require('AddTodo');
 var TodoSearch = require('TodoSearch');
 var uuid = require('node-uuid');

 var TodoApp = React.createClass({
   getInitialState: function() {
     return {
       todos: [
         {
           id: uuid(),
           text: 'Walk the dog!',
           completed: false
         },
         {
           id: uuid(),
           text: 'Feed the cat!',
           completed: true
         },
         {
           id: uuid(),
           text: 'learn react',
           completed: true
         },
         {
           id: uuid(),
           text: 'rule the world',
           completed: true
         }

       ],
       showCompleted: false,
       searchText: ''
     }
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
           completed: false
         }
       ]
     });
   },
   render: function() {
     var {todos} = this.state;
     return(
       <div className='row'>
         <div className='column medium-6 small-4'>
           <TodoSearch onSearch={this.handleSearch}/>
           <TodoList todos={todos} onToggle={this.handleToggle}/>
           <AddTodo onAddTodo={this.handleAddTodo}/>
         </div>
       </div>
     );
   }
 });

 module.exports = TodoApp;
