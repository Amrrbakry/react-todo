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
           text: 'Walk the dog!'
         },
         {
           id: uuid(),
           text: 'Feed the cat!'
         },
         {
           id: uuid(),
           text: 'learn react'
         },
         {
           id: uuid(),
           text: 'rule the world'
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
   handleAddTodo: function(text) {
     this.setState({
       todos: [
         ...this.state.todos,
         {
           id: uuid(),
           text: text
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
           <TodoList todos={todos}/>
           <AddTodo onAddTodo={this.handleAddTodo}/>
         </div>
       </div>
     );
   }
 });

 module.exports = TodoApp;
